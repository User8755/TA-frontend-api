import dangerGroup from '../../untils/dangerGroup';
import danger from '../../untils/danger';
import prof from '../../untils/prof';
import dangerEvent from '../../untils/dangerousEvent';
import Select from 'react-select';
import * as Excel from 'exceljs/dist/exceljs.min.js';
import { useEffect, useState } from 'react';
import typeSiz from '../../untils/typeSIZ';
import danget776 from '../../untils/danger775';
import dangerEvent776 from '../../untils/dangerEvent776';
import riskManagement from '../../untils/riskManagement';
import conversion from '../../untils/converct';
import './Form.css';
import api from '../../untils/api';
function Form({ setModal, setModalChild, job, setJob, listJob }) {
  const [isDangerGroup, setDangerGroup] = useState([]);
  const [isDanger, setisDanger] = useState([]);
  const [isDanger776, setDanger776] = useState([]);
  const [isDangerEvent776, setDangerEvent776] = useState({});
  const [isDangerEvent, setDangerEvent] = useState([]);
  const [value, setValue] = useState({});
  const [formValue, setFormValue] = useState([]); // массив для записи в таблицу
  const [ipr, setIpr] = useState(0); // ИПР
  const [risk, setRisk] = useState(''); // уровень риска
  const [acceptability, setAcceptability] = useState(''); // приемлемость
  const [riskAttitude, setRiskAttitude] = useState(''); // отношение к риску
  const [obj, setObj] = useState(''); //объект
  const [source, setSource] = useState(''); // источник
  const [selectedTipeSIZ, setSelectedTipeSIZ] = useState([]);
  const [isProff, setProff] = useState([]);
  const [checkboxSiz, setCheckboxSIZ] = useState(false); // чекбокс доп средства
  const [commit, setCommit] = useState('');
  const [inputValue, setInputValue] = useState({
    probability: '',
    heaviness: '',
  });
  const [requiredSIZ, setRequiredSIZ] = useState(false);
  const ERROR = 'Ошибка';
  const [isRiskManagement, setRiskManagement] = useState([]);
  const [count, setCount] = useState(0);
  const [subdivision, setSubdivision] = useState(false);

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

  //console.log(value);
  useEffect(() => {
    if (checkboxSiz) {
      setValue({
        proff: isProff.label,
        proffId: isProff.profId,
        danger: isDangerGroup.label,
        dangerID: isDangerGroup.dangerID,
        dangerGroup: isDanger.label,
        dangerGroupId: isDanger.groupId,
        dangerEvent: isDangerEvent.label,
        dangerEventID: isDangerEvent.groupId,
        probability: inputValue.probability,
        heaviness: inputValue.heaviness,
        ipr: ipr,
        riskAttitude: riskAttitude,
        risk: risk,
        acceptability: acceptability,
        obj: obj,
        source: source,
        typeSIZ: selectedTipeSIZ.label,
        speciesSIZ: selectedTipeSIZ.speciesSIZ,
        issuanceRate: selectedTipeSIZ.issuanceRate,
        additionalMeans: selectedTipeSIZ.additionalMeans,
        AdditionalIssuanceRate: selectedTipeSIZ.AdditionalIssuanceRate,
        standart: selectedTipeSIZ.standart,
        OperatingLevel: selectedTipeSIZ.OperatingLevel,
        job: job.job,
        commit: commit,
        proffSIZ: isProff.SIZ,
        danger776: isDanger776.label,
        danger776Id: isDanger776.ID,
        dangerEvent776: isDangerEvent776.label,
        dangerEvent776Id: isDangerEvent776.ID,
        riskManagement: isRiskManagement.label,
        riskManagementID: isRiskManagement.ID,
        subdivision: job.subdivision,
      });
    } else {
      setValue({
        proff: isProff.label,
        proffId: isProff.profId,
        danger: isDangerGroup.label,
        dangerID: isDangerGroup.dangerID,
        dangerGroup: isDanger.label,
        dangerGroupId: isDanger.groupId,
        dangerEvent: isDangerEvent.label,
        dangerEventID: isDangerEvent.groupId,
        probability: inputValue.probability,
        heaviness: inputValue.heaviness,
        ipr: ipr,
        riskAttitude: riskAttitude,
        risk: risk,
        acceptability: acceptability,
        obj: obj,
        source: source,
        typeSIZ: selectedTipeSIZ.label,
        speciesSIZ: selectedTipeSIZ.speciesSIZ,
        issuanceRate: selectedTipeSIZ.issuanceRate,
        job: job.job,
        commit: commit,
        proffSIZ: isProff.SIZ,
        danger776: isDanger776.label,
        danger776Id: isDanger776.ID,
        dangerEvent776: isDangerEvent776.label,
        dangerEvent776Id: isDangerEvent776.ID,
        riskManagement: isRiskManagement.label,
        riskManagementID: isRiskManagement.ID,
        subdivision: job.subdivision,
        standart: selectedTipeSIZ.standart,
        OperatingLevel: selectedTipeSIZ.OperatingLevel,
      });
    }
  }, [
    isDangerEvent776,
    isDanger776,
    commit,
    acceptability,
    checkboxSiz,
    ipr,
    isDanger,
    isDangerEvent,
    isDangerGroup,
    isProff,
    job,
    obj,
    risk,
    riskAttitude,
    selectedTipeSIZ,
    source,
    inputValue,
    isRiskManagement,
  ]);

  const resDangerGroup = danger.filter(
    (item) => isDangerGroup.label === item.dependence
  );

  const resDangerEvent = dangerEvent.filter(
    (item) => isDanger.label === item.dependence
  );

  const resTypeSiz = typeSiz.filter(
    (item) => isDangerEvent.groupId === item.dependence
  );

  const resDangerEvent776 = dangerEvent776.filter(
    (item) => isDanger776.label === item.dependence
  );

  const resRiskManagemet = riskManagement.filter(
    (item) => isDangerEvent776.label === item.dependence
  );

  // сортировка значений по алфавиту
  const sortedDanger776 = danget776.sort(function (a, b) {
    var nameA = a.label.toLowerCase(),
      nameB = b.label.toLowerCase();
    if (nameA < nameB)
      //сортируем строки по возрастанию
      return -1;
    if (nameA > nameB) return 1;
    return 0; // Никакой сортировки
  });

  const sortedDangerEvent776 = resDangerEvent776.sort(function (a, b) {
    var nameA = a.label.toLowerCase(),
      nameB = b.label.toLowerCase();
    if (nameA < nameB)
      //сортируем строки по возрастанию
      return -1;
    if (nameA > nameB) return 1;
    return 0; // Никакой сортировки
  });

  const sortedRiskManagemet = resRiskManagemet.sort(function (a, b) {
    var nameA = a.label.toLowerCase(),
      nameB = b.label.toLowerCase();
    if (nameA < nameB)
      //сортируем строки по возрастанию
      return -1;
    if (nameA > nameB) return 1;
    return 0; // Никакой сортировки
  });

  const sortedDangerGroup = resDangerGroup.sort(function (a, b) {
    var nameA = a.label.toLowerCase(),
      nameB = b.label.toLowerCase();
    if (nameA < nameB)
      //сортируем строки по возрастанию
      return -1;
    if (nameA > nameB) return 1;
    return 0; // Никакой сортировки
  });

  const sortedDangerEvent = resDangerEvent.sort(function (a, b) {
    var nameA = a.label.toLowerCase(),
      nameB = b.label.toLowerCase();
    if (nameA < nameB)
      //сортируем строки по возрастанию
      return -1;
    if (nameA > nameB) return 1;
    return 0; // Никакой сортировки
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setCount(count + 1);
    if (!requiredSIZ) {
      delete value.proffSIZ;
      setFormValue([...formValue, value]);
    } else {
      setFormValue([...formValue, value]);
    }
    clear();
  };
  const [additionalMeans, setAdditionalMeans] = useState(false);
  console.table(selectedTipeSIZ.additionalMeans);
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

  var FileSaver = require('file-saver');
  const table = () => {
    const workbook = new Excel.Workbook();
    const sheet = workbook.addWorksheet('sheet');

    sheet.columns = [
      { header: '№ п/п', key: 'number', width: 9 },
      { header: 'Код профессии (при наличии)', key: 'proffId', width: 20 },
      { header: 'Профессия', key: 'proff', width: 20 },
      { header: 'Должность', key: 'job', width: 20 },
      { header: 'Подразделение', key: 'subdivision', width: 20 },
      { header: 'Тип средства защиты', key: 'type', width: 20 },
      {
        header:
          'Наименование специальной одежды, специальной обуви и других средств индивидуальной защиты',
        key: 'vid',
        width: 20,
      },
      {
        header: 'Нормы выдачи на год (период) (штуки, пары, комплекты, мл)',
        key: 'norm',
        width: 20,
      },
      { header: 'ОБЪЕКТ', key: 'obj', width: 20 },
      { header: 'Источник', key: 'source', width: 20 },
      { header: 'ID группы опасностей', key: 'dangerID', width: 20 },
      { header: 'Группа опасности', key: 'danger', width: 25 },
      { header: 'Опасность, ID 767', key: 'dangerGroupId', width: 17 },
      { header: 'Опасности', key: 'dangerGroup', width: 25 },
      { header: 'Опасное событие, текст 767', key: 'dangerEventID', width: 25 },
      { header: 'Опасное событие', key: 'dangerEvent', width: 25 },
      { header: 'Тяжесть', key: 'heaviness', width: 8 },
      { header: 'Вероятность', key: 'probability', width: 12 },
      { header: 'ИПР', key: 'ipr', width: 5 },
      { header: 'Уровень риска', key: 'risk', width: 20 },
      { header: 'Приемлемость', key: 'acceptability', width: 20 },
      { header: 'Отношение к риску', key: 'riskAttitude', width: 20 },
      { header: 'Тип СИЗ', key: 'typeSIZ', width: 20 },
      { header: 'Вид СИЗ', key: 'speciesSIZ', width: 40 },
      {
        header:
          'Нормы выдачи средств индивидуальной защиты на год (штуки, пары, комплекты, мл)',
        key: 'issuanceRate',
        width: 20,
      },
      { header: 'ДОП средства', key: 'additionalMeans', width: 20 },
      {
        header:
          'Нормы выдачи средств индивидуальной защиты, выдаваемых дополнительно, на год (штуки, пары, комплекты, мл)',
        key: 'AdditionalIssuanceRate',
        width: 20,
      },
      { header: 'Стандарты (ГОСТ, EN)', key: 'standart', width: 20 },
      { header: 'Экспл.уровень', key: 'OperatingLevel', width: 20 },
      { header: 'Комментарий', key: 'commit', width: 20 },
      { header: 'ID опасности 776н', key: 'danger776Id', width: 20 },
      { header: 'Опасности 776н', key: 'danger776', width: 20 },
      {
        header: 'ID опасного события 776н',
        key: 'dangerEvent776Id',
        width: 20,
      },
      { header: 'Опасное событие 776н', key: 'dangerEvent776', width: 20 },
      { header: 'ID мер управления', key: 'riskManagementID', width: 20 },
      {
        header: 'Меры управления/контроля профессиональных рисков',
        key: 'riskManagement',
        width: 20,
      },
    ];

    let i = 0;
    formValue.forEach((item) => {
      item['number'] = i += 1;
      sheet.addRow(item);

      if (item.proffSIZ) {
        item.proffSIZ.forEach((SIZ) => sheet.addRow(SIZ));
      }
    });

    return workbook.xlsx
      .writeBuffer()
      .then((buffer) =>
        FileSaver.saveAs(new Blob([buffer]), `${Date.now()}_feedback.xlsx`)
      )
      .catch((err) => console.log('Error writing excel export', err));
  };

  const clear = () => {
    setDanger776({});
    setDangerEvent776({});
    setDangerEvent('');
    setDangerGroup('');
    setisDanger('');
    setProff('');
    setRisk(ERROR);
    setAcceptability(ERROR);
    setRiskAttitude(ERROR);
    setSelectedTipeSIZ('');
    setObj('');
    setSource('');
    setJob('');
    setCommit('');
    setRequiredSIZ(false);
    setIpr(0);
    setInputValue({ probability: '', heaviness: '' });
    setCheckboxSIZ(false);
    setRiskManagement('');
    document.querySelector('.form').reset();
    setSubdivision(false);
  };

  function hendleOpenModal() {
    setModal(true);
    setModalChild('Профессия');
  }

  // useEffect(() => {
  //   api.getDangers().then(t=>console.log(t))
  //   console.log(danger)
  //   //danger.map(item=>api.createDangers(item).then(i=>console.log(i)).catch(err=>console.log(err)))
  // }, []);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  useEffect(() => {
    conversion.forEach((item) => {
      if (
        value.danger776 === item.Danger776 &&
        value.dangerEvent776 === item.dangerEvent776
      ) {
        setisDanger({ groupId: item.IdDanger767, label: item.danger767 });
        setDangerEvent({
          groupId: item.IdDangerEvent767,
          label: item.dangerEvent767,
        });
      }
    });

    // const table = {};
    // const res = dangerEvent776.filter(({ label }) => !table[label] && (table[label] = 1));
    // console.log(res);
  }, [value.danger776, value.dangerEvent776]);

  useEffect(() => {
    // danger.forEach(item=>item.label = item.label + ` id: ${item.groupId}`)
    // console.log(danger)
  }, []);

  useEffect(() => {
    if (subdivision) {
      setModal(true);
      setModalChild('подразделение');
    }
  }, [setModal, setModalChild, subdivision]);

  const [isOpenOrder776, setIsOpenOrder776] = useState(false);
  const [isOpenOrder767, setIsOpenOrder767] = useState(false);
  return (
    <>
      <form className='form' onSubmit={handleSubmit} required>
        <span>Кол-во записей: {count}</span>
        <div className='label-wrapper'>
          <label className='label'>
            Профессии:
            <Select
              className='react-select-container'
              classNamePrefix='react-select'
              options={prof}
              onChange={(evt) => setProff(evt)}
              placeholder={'Профессии'}
              noOptionsMessage={() => 'Значение не найдено'}
              value={isProff}
            />
          </label>
          <div className='label__checkbox'>
            <label className='checkbox__label'>
              <input
                type='checkbox'
                name='profession'
                className='form__checkbox visually-hidden'
                onClick={hendleOpenModal}
              />
              <span className='form__pseudo-checkbox'></span>
              <span className='checkbox__label-text'>
                Должность отсутствует
              </span>
            </label>
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
            <label className='checkbox__label'>
              <input
                type='checkbox'
                name='siz'
                className='form__checkbox visually-hidden'
                onChange={(evt) => setSubdivision(evt.target.checked)}
                checked={subdivision}
              />
              <span className='form__pseudo-checkbox'></span>
              <span className='checkbox__label-text'>Подразделение</span>
            </label>
          </div>
          <div className='input-order__wrapper'>
            <button
              className='input-order__title'
              onClick={() => setIsOpenOrder776(!isOpenOrder776)}
            >
              Приказ №776
            </button>
            <div
              className={
                isOpenOrder776 ? 'dropdown-child_open' : 'dropdown-child_close'
              }
            >
              <label className='label'>
                Опасности:
                <Select
                  className='react-select-container order'
                  classNamePrefix='react-select'
                  options={sortedDanger776}
                  onChange={(evt) => setDanger776(evt)}
                  placeholder={'Опасности'}
                  value={isDanger776}
                />
              </label>
              <label className='label'>
                Опасное событие:
                <Select
                  className='react-select-container order'
                  classNamePrefix='react-select'
                  options={sortedDangerEvent776}
                  onChange={(evt) => setDangerEvent776(evt)}
                  placeholder={'Опасное событие'}
                  value={isDangerEvent776}
                />
              </label>
              {/*не забыть настроить инпутб сейчас он работает как "Опасные события"*/}
              <label className='label'>
                Меры упр-я/контроля проф. рисков
                <Select
                  className='react-select-container order'
                  classNamePrefix='react-select'
                  options={sortedRiskManagemet}
                  onChange={(evt) => setRiskManagement(evt)}
                  placeholder={'Меры управления/контроля'}
                  value={isRiskManagement}
                />
              </label>
            </div>
          </div>
          <div className='input-order__wrapper'>
            <button
              className='input-order__title'
              onClick={() => setIsOpenOrder767(!isOpenOrder767)}
            >
              Приказ №767
            </button>
            <div
              className={
                isOpenOrder767 ? 'dropdown-child_open' : 'dropdown-child_close'
              }
            >
              <label className='label'>
                Группа опасности:
                <Select
                  className='react-select-container order'
                  classNamePrefix='react-select'
                  options={dangerGroup}
                  onChange={(name) => setDangerGroup(name)}
                  placeholder={'Группа опасности'}
                  value={isDangerGroup}
                />
              </label>
              <label className='label'>
                Опасности:
                <Select
                  className='react-select-container order'
                  classNamePrefix='react-select'
                  options={sortedDangerGroup}
                  onChange={(evt) => setisDanger(evt)}
                  placeholder={'Опасности'}
                  value={isDanger}
                />
              </label>
              <label className='label'>
                Опасное событие:
                <Select
                  className='react-select-container order'
                  classNamePrefix='react-select'
                  options={sortedDangerEvent}
                  onChange={(evt) => setDangerEvent(evt)}
                  placeholder={'Опасное событие'}
                  value={isDangerEvent}
                />
              </label>
            </div>
          </div>
          <label className='label'>
            Тип СИЗ:
            <Select
              className='react-select-container'
              classNamePrefix='react-select'
              options={resTypeSiz}
              onChange={(evt) => setSelectedTipeSIZ(evt)}
              placeholder={'Тип СИЗ'}
              value={selectedTipeSIZ}
            />
            <label
              htmlFor='additional-means'
              className={
                additionalMeans
                  ? 'checkbox__label'
                  : 'checkbox__label disabled '
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
              <span className='checkbox__label-text'>ДОП средства</span>
            </label>
          </label>
          <label className='label'>
            Комментарий:
            <input
              className='form__input standart'
              onChange={(evt) => setCommit(evt.target.value)}
            ></input>
          </label>
          <div className='label-wrapper'>
            <label className='label box'>
              Тяжесть:
              <input
                name='heaviness'
                type='number'
                className='form__input input'
                onChange={handleChange}
                value={inputValue.heaviness}
              ></input>
            </label>
            <label className='label box'>
              Вероятность:
              <input
                name='probability'
                type='number'
                className='form__input input'
                onChange={handleChange}
                value={inputValue.probability}
              ></input>
            </label>
          </div>
        </div>
        <div className='form__container'>
          <div className='wrapper'>
            <span className='wrapper_text'>ИПР: {ipr}</span>
            <span className='wrapper_text'>Уровень риска: {risk}</span>
            <span className='wrapper_text'>Приемлемость: {acceptability}</span>
            <span className='wrapper_text'>
              Отношение к риску: {riskAttitude}
            </span>
          </div>
        </div>
        <div className='label-wrapper'>
          <label className='label'>
            Объект
            <input
              className='form__input standart'
              autoComplete='on'
              onChange={(evt) => setObj(evt.target.value)}
            ></input>
          </label>
          <label className='label'>
            Источник
            <input
              className='form__input standart'
              autoComplete='on'
              onChange={(evt) => setSource(evt.target.value)}
            ></input>
          </label>
        </div>
        <div className='buttons_wrapper'>
          <input type='submit' className='button send'></input>
          <input type='reset' className='button reset' onClick={clear}></input>
          <datalist id='number'>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </datalist>
        </div>
      </form>
      <button onClick={table} className='button button__table'>
        Выгрузить в таблицу
      </button>
    </>
  );
}

export default Form;
