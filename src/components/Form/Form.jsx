import dangerGroup from '../../untils/dangerGroup';
import danger from '../../untils/danger';
import prof from '../../untils/prof';
import dangerEvent from '../../untils/dangerousEvent';
import { useEffect, useState, useCallback } from 'react';
import typeSiz from '../../untils/typeSIZ';
import danget776 from '../../untils/danger775';
import dangerEvent776 from '../../untils/dangerEvent776';
import riskManagement from '../../untils/riskManagement';
import conversion from '../../untils/converct';
import './Form.css';
import SpoilerBox from '../SpoilerBox/SpoilerBox';
import api from '../../untils/api';
import ButtonGoBack from '../ButtonGoBack/ButtonGoBack';
import SelectOne from '../Select/Select';
import axios from 'axios';
import SelectDefault from '../SelectDefault/SelectDefault';

function Form({ loggedIn }) {
  const [isDangerGroup, setDangerGroup] = useState([]);
  const [isDanger, setisDanger] = useState([]);
  const [isDanger776, setDanger776] = useState({});
  const [isDangerEvent776, setDangerEvent776] = useState({});
  const [isDangerEvent, setDangerEvent] = useState([]);
  const [value, setValue] = useState({});
  const [formValue, setFormValue] = useState([]); // массив для записи в таблицу
  const [ipr, setIpr] = useState(0); // ИПР
  const [ipr1, setIpr1] = useState(0); // ИПР1
  const [risk, setRisk] = useState(''); // уровень риска
  const [acceptability, setAcceptability] = useState(''); // приемлемость
  const [riskAttitude, setRiskAttitude] = useState(''); // отношение к риску
  const [risk1, setRisk1] = useState(''); // уровень риска
  const [acceptability1, setAcceptability1] = useState(''); // приемлемость
  const [riskAttitude1, setRiskAttitude1] = useState(''); // отношение к риску
  const [selectedTipeSIZ, setSelectedTipeSIZ] = useState([]);
  const [isProff, setProff] = useState([]);
  const [checkboxSiz, setCheckboxSIZ] = useState(false); // чекбокс доп средства
  const [inputValue, setInputValue] = useState({
    probability: 0, //Вероятность
    heaviness: 0, // Тяжесть
    probability1: 0, // Тяжесть1
    heaviness1: 0, //Вероятность1
    periodicity: '', // Периодичность
    responsiblePerson: '', // Ответственное лицо
    completionMark: '', // Отметка о выполнении
    existingRiskManagement: '', // Существующие меры упр-я рисками
    obj: '', // объект
    source: '', // источник
    job: '', // Должность
    subdivision: '', // Подразделение
    commit: '', // Комментарий
    enterpriseId: '', // id предприятия
    numWorkers: '', // Кол-во работников
    code: '', // Код ОК-016-94
    proff: '',
    laborFunction: '', // Функция
    materials: '', // Материалы
    equipment: '', // Оборудование
  });

  const [requiredSIZ, setRequiredSIZ] = useState(false);
  const ERROR = 'Ошибка';
  const [isRiskManagement, setRiskManagement] = useState([]);
  const [count, setCount] = useState(0);
  // состояние спойлер бокса
  const [isOrder767, setOrder767] = useState(true);
  const [isOrder776, setOrder776] = useState(true);

  const [currentEnterprise, setCurrentEnterprise] = useState({ value: [] });
  const [counter, setCounter] = useState(0);

  const [isDisabled, setDisabled] = useState(false);
  const [newValue, setNewValue] = useState([]);
  const jwt = JSON.parse(localStorage.getItem('key')).key;
  const [isDisabledSubmit, setDisabledSubmit] = useState(true);

  useEffect(() => {
    if (
      (value.proff || value.job) &&
      (value.riskManagement || value.typeSIZ) &&
      value.num &&
      value.numWorkers
    ) {
      setDisabledSubmit(false);
    } else {
      setDisabledSubmit(true);
    }
  }, [value, inputValue]);

  useEffect(() => {
    if (loggedIn) {
      api
        .getValue(
          localStorage.getItem('id'),
          JSON.parse(localStorage.getItem('key')).key
        )
        .then((e) => setCounter(e))
        .catch((e) => console.log(e));
    }
  }, [loggedIn]);

  useEffect(() => {
    if (loggedIn) {
      api
        .getCerrentEnterprise(
          localStorage.getItem('id'),
          JSON.parse(localStorage.getItem('key')).key
        )
        .then((e) => {
          setCurrentEnterprise(e);
        })
        .catch((e) => console.log(e));
    }
  }, [loggedIn]);

  const getTabel = (tableName, fileName) => {
    setDisabled(true);
    axios
      .get(`/tabels/${tableName}/${localStorage.getItem('id')}`, {
        responseType: 'blob',
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      })
      .then((i) => {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(i.data);
        link.download = fileName;
        link.click();
        link.remove();
        setDisabled(false);
      })
      .catch(() => setDisabled(false));
  };

  useEffect(() => {
    setIpr(inputValue.probability * inputValue.heaviness);
    if (ipr === 0) {
      setRisk(ERROR);
      setAcceptability(ERROR);
      setRiskAttitude(ERROR);
    } else if (ipr <= 2) {
      setRisk('Незначительный');
      setAcceptability('Приемлемый');
      setRiskAttitude('Меры не требуются');
    } else if (ipr <= 6) {
      setRisk('Низкий');
      setAcceptability('Приемлемый');
      setRiskAttitude('Необходимо уделить внимание');
    } else if (ipr <= 12) {
      setAcceptability('Допустимый');
      setRisk('Средний');
      setRiskAttitude(
        'Требуются меры по снижению уровня риска в установленные сроки'
      );
    } else if (ipr <= 16) {
      setAcceptability('Неприемлемый');
      setRisk('Высокий');
      setRiskAttitude('Требуются неотложные меры, усовершенствования');
    } else if (ipr > 19) {
      setAcceptability('Неприемлемый');
      setRisk('Критический');
      setRiskAttitude('Немедленное прекращение деятельности');
    }
  }, [ipr, inputValue]);

  // результат ИПР1
  useEffect(() => {
    setIpr1(inputValue.probability1 * inputValue.heaviness1);
    if (ipr1 === 0) {
      setRisk1(ERROR);
      setAcceptability1(ERROR);
      setRiskAttitude1(ERROR);
    } else if (ipr1 <= 2) {
      setRisk1('Незначительный');
      setAcceptability1('Приемлемый');
      setRiskAttitude1('Меры не требуются');
    } else if (ipr1 <= 6) {
      setRisk1('Низкий');
      setAcceptability1('Приемлемый');
      setRiskAttitude1('Необходимо уделить внимание');
    } else if (ipr1 <= 12) {
      setAcceptability1('Допустимый');
      setRisk1('Средний');
      setRiskAttitude1(
        'Требуются меры по снижению уровня риска в установленные сроки'
      );
    } else if (ipr1 <= 16) {
      setAcceptability1('Неприемлемый');
      setRisk1('Высокий');
      setRiskAttitude1('Требуются неотложные меры, усовершенствования');
    } else if (ipr1 > 19) {
      setAcceptability1('Неприемлемый');
      setRisk1('Критический');
      setRiskAttitude1('Немедленное прекращение деятельности');
    }
  }, [ipr1, inputValue]);
  useEffect(() => {
    setValue({
      ...inputValue,
      proff: isProff.label,
      proffId: isProff.profId,
      danger: isDangerGroup.label,
      dangerID: isDangerGroup.ID,
      dangerGroup: isDanger.label,
      dangerGroupId: isDanger.ID,
      dangerEvent: isDangerEvent.label,
      dangerEventID: isDangerEvent.ID,
      ipr: ipr,
      riskAttitude: riskAttitude,
      risk: risk,
      acceptability: acceptability,
      ipr1: ipr1,
      riskAttitude1: riskAttitude1,
      risk1: risk1,
      acceptability1: acceptability1,
      typeSIZ: selectedTipeSIZ.label,
      speciesSIZ: selectedTipeSIZ.speciesSIZ,
      issuanceRate: selectedTipeSIZ.issuanceRate,
      proffSIZ: isProff.SIZ,
      danger776: isDanger776.label,
      danger776Id: isDanger776.ID,
      dangerEvent776: isDangerEvent776.label,
      dangerEvent776Id: isDangerEvent776.ID,
      riskManagement: isRiskManagement.label,
      riskManagementID: isRiskManagement.ID,
      standart: selectedTipeSIZ.standart,
      OperatingLevel: selectedTipeSIZ.OperatingLevel,
    });
  }, [
    acceptability,
    acceptability1,
    checkboxSiz,
    inputValue,
    ipr,
    ipr1,
    isDanger,
    isDanger776,
    isDangerEvent,
    isDangerEvent776,
    isDangerGroup,
    isProff,
    isRiskManagement,
    risk,
    risk1,
    riskAttitude,
    riskAttitude1,
    selectedTipeSIZ,
  ]);

  const resDangerGroup = danger.filter(
    (item) => isDangerGroup.label === item.dependence
  );

  const resDangerEvent = dangerEvent.filter(
    (item) => isDanger.label === item.dependence
  );

  const resTypeSiz = typeSiz.filter(
    (item) => isDangerEvent.ID === item.dependence
  );

  const resDangerEvent776 = dangerEvent776.filter(
    (item) => isDanger776.label === item.dependence
  );

  const resRiskManagemet = riskManagement.filter(
    (item) => isDangerEvent776.label === item.dependence
  );

  const sortedOption = (arr) =>
    arr.sort(function (a, b) {
      const nameA = a.label.toLowerCase();
      const nameB = b.label.toLowerCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });

  const input = JSON.parse(localStorage.getItem('input'));

  const handleCopyData = () => {
    if (localStorage.getItem('input') || localStorage.getItem('proff')) {
      setProff(JSON.parse(localStorage.getItem('proff')));
      setInputValue({
        job: input.job,
        obj: input.obj,
        source: input.source,
        subdivision: input.subdivision,
        numWorkers: input.numWorkers,
        num: input.num,
      });
    }
  };

  const handleCopyOPR = () => {
    if (localStorage.getItem('Danger') || localStorage.getItem('Danger776')) {
      setDangerGroup(JSON.parse(localStorage.getItem('DangerGroup')));
      setisDanger(JSON.parse(localStorage.getItem('Danger')));
      setDangerEvent(JSON.parse(localStorage.getItem('DangerEvent')));
      setDangerEvent776(JSON.parse(localStorage.getItem('DangerEvent776')));
      setDanger776(JSON.parse(localStorage.getItem('Danger776')));
    }
  };

  const handleSubmit = useCallback(
    (evt) => {
      evt.preventDefault();
      setCount(count + 1);
      value['enterpriseId'] = localStorage.getItem('id');
      if (!requiredSIZ) {
        delete value.proffSIZ;
        setFormValue([...formValue, value]);
      } else {
        setFormValue([...formValue, value]);
      }
      if (checkboxSiz) {
        value['additionalMeans'] = selectedTipeSIZ.additionalMeans;
        value['AdditionalIssuanceRate'] =
          selectedTipeSIZ.AdditionalIssuanceRate;
      }
      localStorage.setItem('proff', JSON.stringify(isProff));
      localStorage.setItem('input', JSON.stringify(inputValue));
      localStorage.setItem('Danger776', JSON.stringify(isDanger776));
      localStorage.setItem('DangerEvent776', JSON.stringify(isDangerEvent776));
      localStorage.setItem('Danger', JSON.stringify(isDanger));
      localStorage.setItem('DangerEvent', JSON.stringify(isDangerEvent));
      localStorage.setItem('DangerGroup', JSON.stringify(isDangerGroup));
      api
        .updateCurrentEnterpriseValue(
          localStorage.getItem('id'),
          value,
          JSON.parse(localStorage.getItem('key')).key
        )
        .then((e) => {
          setNewValue([...newValue, e]);
          api
            .getValue(
              localStorage.getItem('id'),
              JSON.parse(localStorage.getItem('key')).key
            )
            .then((e) => setCounter(e))
            .catch((e) => console.log(e));
        })
        .catch((e) => console.log(e));
      clear();
    },
    [
      checkboxSiz,
      count,
      formValue,
      inputValue,
      isDanger,
      isDanger776,
      isDangerEvent,
      isDangerEvent776,
      isDangerGroup,
      isProff,
      newValue,
      requiredSIZ,
      selectedTipeSIZ.AdditionalIssuanceRate,
      selectedTipeSIZ.additionalMeans,
      value,
    ]
  );
  console.log(newValue);
  const [additionalMeans, setAdditionalMeans] = useState(false);
  useEffect(() => {
    if (
      typeof selectedTipeSIZ.additionalMeans === 'undefined' ||
      selectedTipeSIZ.additionalMeans.length < 1
    ) {
      setAdditionalMeans(false);
    } else {
      setAdditionalMeans(true);
    }
  }, [selectedTipeSIZ]);

  const clear = () => {
    setDanger776({});
    setDangerEvent776({});
    setDangerEvent({});
    setDangerGroup({});
    setisDanger({});
    setProff({});
    setRisk(ERROR);
    setAcceptability(ERROR);
    setRiskAttitude(ERROR);
    setRisk1(ERROR);
    setAcceptability1(ERROR);
    setRiskAttitude1(ERROR);
    setSelectedTipeSIZ({});
    setRequiredSIZ(false);
    setIpr(0);
    setIpr1(0);
    setInputValue({
      num: '',
      probability: 0,
      heaviness: 0,
      probability1: 0,
      heaviness1: 0,
      periodicity: '',
      responsiblePerson: '',
      completionMark: '',
      existingRiskManagement: '',
      enterpriseId: '',
      numWorkers: '',
      job: '',
      proff: '',
    });
    setCheckboxSIZ(false);
    setRiskManagement('');
    document.querySelector('.form').reset();
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleChangeNum = (evt) => {
    const { name, value } = evt.target;
    setInputValue({
      ...inputValue,
      [name]: Number(value),
    });
  };

  useEffect(() => {
    if (inputValue.heaviness)
      setInputValue({ ...inputValue, heaviness1: inputValue.heaviness });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue.heaviness]);

  useEffect(() => {
    conversion.forEach((item) => {
      if (
        value.danger776 === item.Danger776 &&
        value.dangerEvent776 === item.dangerEvent776
      ) {
        setisDanger({ ID: item.IdDanger767, label: item.danger767 });
        setDangerEvent({
          ID: item.IdDangerEvent767,
          label: item.dangerEvent767,
        });
      }
    });
  }, [value.danger776, value.dangerEvent776]);
  console.table(value);
  const handleFocus = (e) => e.target.select();
  useEffect(() => {
    document.onkeydown = function (e) {
      if (e.shiftKey && e.key === 'Enter') {
        handleSubmit(e);
      }
      return true;
    };
  }, [handleSubmit]);

  return (
    <form className='form' onSubmit={handleSubmit} required>
      <div className='form__block-left'>
        <div className='form__header left'>
          <h2 className='form__header-title'>Данные о предприятии</h2>
          <span>{currentEnterprise.enterprise}</span>
        </div>
        <section className='section profess'>
          <label className='label'>Профессия (Приказ 767н приложения 1):</label>
          <SelectOne
            value={isProff}
            option={prof}
            setValue={setProff}
          ></SelectOne>
          <div className='form__block_job'>
            <label className='label label__job'>
              Номер Р/М&#42;:
              <input
                className='form__input form__input_small'
                autoComplete='on'
                onChange={handleChange}
                name='num'
                value={inputValue.num}
              ></input>
            </label>
            <label className='label label__job'>
              Кол-во работников&#42;:
              <input
                className='form__input form__input_small'
                autoComplete='on'
                onChange={handleChange}
                name='numWorkers'
                value={inputValue.numWorkers}
              ></input>
            </label>
          </div>
          <label className='label'>
            Объект&#42;:
            <input
              className='form__input'
              autoComplete='on'
              onChange={handleChange}
              list='obj'
              name='obj'
              value={inputValue.obj}
            ></input>
          </label>
          <label className='label'>
            Источник&#42;:
            <input
              className='form__input'
              autoComplete='on'
              onChange={handleChange}
              list='source'
              name='source'
              value={inputValue.source}
            ></input>
          </label>
          <label className='label'>
            Профессия:
            <input
              className='form__input'
              name='job'
              onChange={handleChange}
              value={inputValue.job}
            />
          </label>
          <label className='label'>
            Код ОК-016-94:
            <input
              className='form__input'
              name='code'
              onChange={handleChange}
              value={inputValue.code}
            />
          </label>
          <label className='label'>
            Подразделение:
            <input
              className='form__input'
              name='subdivision'
              onChange={handleChange}
              value={inputValue.subdivision}
            />
          </label>
          <button
            className='button copy'
            type='button'
            onClick={handleCopyData}
          >
            Копия
          </button>
        </section>
        <section className='section buttons'>
          <button
            className='button button__table'
            type='button'
            //onClick={() => baseTable(currentEnterprise.value)}
            onClick={() => getTabel('base', 'Базовая таблица')}
            disabled={isDisabled}
          >
            Базовая таблица
          </button>
          <button
            className='button button__table'
            type='button'
            //onClick={() => ListHazards(counter)}
            onClick={() =>
              getTabel('listHazards', 'Перечень идентифицированных опасностей')
            }
            disabled={isDisabled}
          >
            Перечень идентифицированных опасностей
          </button>
          <button
            className='button button__table'
            type='button'
            //onClick={() => mapOPR(currentEnterprise.value)}
            onClick={() => getTabel('mapOPR', 'Карты опасностей')}
            disabled={isDisabled}
          >
            Карты опасностей
          </button>
          <button
            className='button button__table'
            type='button'
            //onClick={() => listOfMeasures(currentEnterprise.value)}
            onClick={() =>
              getTabel('listOfMeasures', 'Меры управления без СИЗ')
            }
            disabled={isDisabled}
          >
            Меры управления без СИЗ
          </button>
          <button
            className='button button__table'
            type='button'
            //onClick={() => normSiz(currentEnterprise.value)}
            onClick={() => getTabel('norm', 'Нормы выдачи СИЗ')}
            disabled={isDisabled}
          >
            Нормы выдачи СИЗ
          </button>
          <button
            className='button button__table'
            type='button'
            //onClick={() => normSiz(currentEnterprise.value)}
            onClick={() => getTabel('planTimetable', 'План-график мер')}
            disabled={isDisabled}
          >
            План-график мер
          </button>
          <button
            className='button button__table'
            type='button'
            onClick={() =>
              getTabel('registerHazards', 'Реестр оцененных опасностей_ИОУПР')
            }
            disabled={isDisabled}
          >
            Реестр оцененных опасностей_ИОУПР
          </button>
          <p className='total'>
            всего записей:
            {counter}
          </p>
        </section>
      </div>
      <div className='form__block-center'>
        <div className='form__header center'>
          <h2 className='form__header-title'>ОПР</h2>
        </div>
        <section className='section orders opr'>
          <div className='spoiler-wrapper'>
            <SpoilerBox
              title={'Приказ 776'}
              stateSpoileBox={isOrder776}
              toggleSpoileBox={setOrder776}
              newClass='center-block'
            >
              <label className='invisible'></label>
              <label className='label order-input'>
                Опасности:
                {/* <Select
                  className='react-select-container order'
                  classNamePrefix='react-select'
                  options={sortedDanger776}
                  onChange={(evt) => setDanger776(evt)}
                  //onChange={(e)=>handleChangeDanger776(e)}
                  placeholder={'Опасности'}
                  value={isDanger776}
                /> */}
                <SelectDefault
                  option={sortedOption(danget776)}
                  setValue={setDanger776}
                  value={isDanger776}
                />
              </label>
              <label className='label order-input'>
                Опасное событие:
                {/* <Select
                  className='react-select-container order'
                  classNamePrefix='react-select'
                  options={sortedDangerEvent776}
                  onChange={(evt) => setDangerEvent776(evt)}
                  placeholder={'Опасное событие'}
                  value={isDangerEvent776}
                /> */}
                <SelectDefault
                  option={sortedOption(resDangerEvent776)}
                  setValue={setDangerEvent776}
                  value={isDangerEvent776}
                />
              </label>

              <label className='label'>
                Существующие меры управления:
                <input
                  name='existingRiskManagement'
                  className='form__input'
                  onChange={handleChange}
                  value={inputValue.existingRiskManagement}
                ></input>
              </label>
            </SpoilerBox>
            <div className='line'></div>
            <SpoilerBox
              title={'Приказ 767'}
              stateSpoileBox={isOrder767}
              toggleSpoileBox={setOrder767}
              newClass='center-block'
            >
              <label className='label order-input'>
                Группа опасности:
                {/* <Select
                  className='react-select-container order'
                  classNamePrefix='react-select'
                  options={dangerGroup}
                  onChange={(name) => setDangerGroup(name)}
                  placeholder={'Группа опасности'}
                  value={isDangerGroup}
                /> */}
                <SelectDefault
                  option={dangerGroup}
                  setValue={setDangerGroup}
                  value={isDangerGroup}
                />
              </label>
              <label className='label order-input'>
                Опасности:
                {/* <Select
                  className='react-select-container order'
                  classNamePrefix='react-select'
                  options={sortedDangerGroup}
                  onChange={(evt) => setisDanger(evt)}
                  placeholder={'Опасности'}
                  value={isDanger}
                /> */}
                <SelectDefault
                  option={sortedOption(resDangerGroup)}
                  setValue={setisDanger}
                  value={isDanger}
                />
              </label>
              <label className='label order-input'>
                Опасное событие:
                {/* <Select
                  className='react-select-container order'
                  classNamePrefix='react-select'
                  options={sortedDangerEvent}
                  onChange={(evt) => setDangerEvent(evt)}
                  placeholder={'Опасное событие'}
                  value={isDangerEvent}
                /> */}
                <SelectDefault
                  option={sortedOption(resDangerEvent)}
                  setValue={setDangerEvent}
                  value={isDangerEvent}
                />
              </label>
            </SpoilerBox>
          </div>
          <button className='button copy' type='button' onClick={handleCopyOPR}>
            Копия
          </button>
        </section>
        <section className='risk risk-opr'>
          <div className='risk__labels'>
            <div className='label__box'>
              <label className='label box label__opr'>Тяжесть:</label>
              <input
                onFocus={handleFocus}
                name='heaviness'
                type='number'
                className='form__input-opr form__input'
                onChange={handleChangeNum}
                value={inputValue.heaviness}
              ></input>
              <label className='label box label__opr'>Вероятность:</label>
              <input
                onFocus={handleFocus}
                name='probability'
                type='number'
                className='form__input-opr form__input'
                onChange={handleChangeNum}
                value={inputValue.probability}
              ></input>
              <label className='label box label__opr'>ИПР:</label>
              <span>{ipr}</span>
            </div>
            <span className=' label risk__attitude'>
              Отношение к риску: {riskAttitude}
            </span>
          </div>
          <div className='buttons_wrapper'>
            <button
              type='button'
              className='button send'
              onClick={handleSubmit}
              disabled={isDisabledSubmit}
            >
              Отправить
            </button>
            <input
              type='reset'
              className='button reset'
              onClick={clear}
            ></input>
          </div>
          <ButtonGoBack />
          <div className='history'>
            <h2 className='plan__title'>Истроия записей:</h2>
            {newValue.slice(-10).map((i) => {
              return (
                <span>{`№р/м: ${i.num}; Опасность: ${
                  i.dangerGroupId || i.danger776Id
                }; Событие: ${
                  i.dangerEventID || i.dangerEvent776Id
                }; Источник: ${i.source}`}</span>
              );
            })}
          </div>
        </section>
      </div>
      <div className='form__block-right'>
        <div className='form__header right'>
          <h2 className='form__header-title'>Меры управления</h2>
        </div>
        <section className='section orders measures'>
          <div className='spoiler-wrapper'>
            <SpoilerBox
              title={'Приказ 776'}
              stateSpoileBox={isOrder776}
              toggleSpoileBox={setOrder776}
              newClass='right-block-right'
            >
              <label className='label order-input'>
                Меры управления:
                {/* <Select
                  className='react-select-container order'
                  classNamePrefix='react-select'
                  options={sortedRiskManagemet}
                  onChange={(evt) => setRiskManagement(evt)}
                  placeholder={'Меры управления'}
                  value={isRiskManagement}
                /> */}
                <SelectDefault
                  option={sortedOption(resRiskManagemet)}
                  setValue={setRiskManagement}
                  value={isRiskManagement}
                />
              </label>
            </SpoilerBox>
            <div className='line'></div>
            <SpoilerBox
              title={'Приказ 767'}
              stateSpoileBox={isOrder767}
              toggleSpoileBox={setOrder767}
              newClass='right-block-left'
            >
              <label className='label'>
                Тип СИЗ:
                {/* <Select
                  className='react-select-container'
                  classNamePrefix='react-select'
                  options={resTypeSiz}
                  onChange={(evt) => setSelectedTipeSIZ(evt)}
                  placeholder={'Тип СИЗ'}
                  value={selectedTipeSIZ}
                /> */}
                <SelectDefault
                  option={resTypeSiz}
                  setValue={setSelectedTipeSIZ}
                  value={selectedTipeSIZ}
                />
                <label className='checkbox__label'>
                  <input
                    type='checkbox'
                    name='siz'
                    className='form__checkbox visually-hidden'
                    onClick={(evt) => setRequiredSIZ(evt.target.checked)}
                  />
                  <span className='form__pseudo-checkbox'></span>
                  <span className='checkbox__label-text'>Обязательные СИЗ</span>
                </label>
                <label
                  htmlFor='additional-means'
                  className={
                    additionalMeans
                      ? 'checkbox__label'
                      : 'checkbox__label disabled'
                  }
                >
                  <input
                    id='additional-means'
                    type='checkbox'
                    name='additional-means'
                    className='additional-means form__checkbox visually-hidden'
                    onClick={(evt) => setCheckboxSIZ(evt.target.checked)}
                    disabled={!additionalMeans}
                  />
                  <span className='form__pseudo-checkbox'></span>
                  <span className='checkbox__label-text'>
                    Доп. средства защиты
                  </span>
                </label>
              </label>
            </SpoilerBox>
          </div>
        </section>
        <section className='risk risk-measures'>
          <div className='risk__labels'>
            <div className='label__box'>
              <label className='label box label__opr'>Тяжесть1:</label>
              <input
                name='heaviness1'
                type='number'
                className='form__input form__input-opr'
                onChange={handleChangeNum}
                onFocus={handleFocus}
                value={inputValue.heaviness1}
              ></input>
              <label className='label box label__opr'>Вероятность1:</label>
              <input
                name='probability1'
                type='number'
                className='form__input form__input-opr'
                onChange={handleChangeNum}
                onFocus={handleFocus}
                value={inputValue.probability1}
              ></input>
              <label className='label box label__opr'>ИПР1:</label>
              <span>{ipr1}</span>
            </div>
            <span className='risk__attitude-right label risk__attitude'>
              Отношение к риску: {riskAttitude1}
            </span>
          </div>
        </section>
        <section className='plan'>
          <h2 className='plan__title'>План-график</h2>
          <div className='plan__container'>
            <label className='label'>
              Ответственное лицо
              <input
                name='responsiblePerson'
                className='form__input plan-input'
                onChange={handleChange}
                placeholder='Ответственное лицо'
                value={inputValue.responsiblePerson}
              ></input>
            </label>
            <label className='label'>
              Периодичность
              <input
                name='periodicity'
                className='form__input plan-input'
                onChange={handleChange}
                placeholder='Периодичность'
                value={inputValue.periodicity}
              ></input>
            </label>
            <label className='label'>
              Отметка о выполнении
              <input
                name='completionMark'
                className='form__input plan-input'
                onChange={handleChange}
                placeholder='Отметка о выполнении'
                value={inputValue.completionMark}
              ></input>
            </label>
          </div>
        </section>
        {/* <div className='history'>
            <h2 className='plan__title'>Истроия записей:</h2>
            {newValue.slice(-6).map((i) => {
              return (
                <span>{`№р/м: ${i.num}; Опасность: ${
                  i.dangerGroupId || i.danger776Id
                }; Событие: ${
                  i.dangerEventID || i.dangerEvent776Id
                }; Источник: ${i.source}`}</span>
              );
            })}
          </div> */}
        <label className='label box comments'>
          Комментарии:
          <input
            name='commit'
            type='text'
            className='form__input input'
            onChange={handleChange}
            value={inputValue.commit}
          ></input>
        </label>
        <label className='label box comments'>
          Оборудование:
          <input
            name='equipment'
            type='text'
            className='form__input input'
            onChange={handleChange}
            value={inputValue.equipment}
          ></input>
        </label>
        <label className='label box comments'>
          Материалы:
          <input
            name='materials'
            type='text'
            className='form__input input'
            onChange={handleChange}
            value={inputValue.materials}
          ></input>
        </label>
        <label className='label box comments'>
          Функции:
          <input
            name='laborFunction'
            type='text'
            className='form__input input'
            onChange={handleChange}
            value={inputValue.laborFunction}
          ></input>
        </label>
      </div>
    </form>
  );
}

export default Form;
