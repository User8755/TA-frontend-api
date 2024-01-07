import * as Excel from 'exceljs/dist/exceljs.min.js';

const baseTable = (el) => {
  const workbook = new Excel.Workbook();
  const sheet = workbook.addWorksheet('sheet');
  var FileSaver = require('file-saver');
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
    { header: 'Тяжесть', key: 'heaviness1', width: 8 },
    { header: 'Вероятность', key: 'probability1', width: 12 },
    { header: 'ИПР', key: 'ipr1', width: 5 },
    { header: 'Уровень риска1', key: 'risk1', width: 20 },
    { header: 'Приемлемость1', key: 'acceptability1', width: 20 },
    { header: 'Отношение к риску1', key: 'riskAttitude1', width: 20 },
    {
      header: 'Существующие меры упр-я рисками',
      key: 'existingRiskManagement',
      width: 20,
    },
    { header: 'Периодичность', key: 'periodicity', width: 20 },
    { header: 'Ответственное лицо', key: 'responsiblePerson', width: 20 },
    { header: 'Отметка о выполнении', key: 'completionMark', width: 20 },
  ];

  let i = 0;
  el.forEach((item) => {
    item['number'] = i += 1;
    sheet.addRow(item);

    if (item.proffSIZ) {
      item.proffSIZ.forEach((SIZ) => sheet.addRow(SIZ));
    }
  });

  return workbook.xlsx
    .writeBuffer()
    .then((buffer) =>
      FileSaver.saveAs(new Blob([buffer]), `${Date.now()}_Базовая таблица.xlsx`)
    )
    .catch((err) => console.log('Error writing excel export', err));
};
export default baseTable;
