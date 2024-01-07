import * as Excel from 'exceljs/dist/exceljs.min.js';
var FileSaver = require('file-saver');
const normSiz = (el) => {
  const workbook = new Excel.Workbook();
  const sheet = workbook.addWorksheet('sheet');
  const border = {
    top: { style: 'thin' },
    left: { style: 'thin' },
    bottom: { style: 'thin' },
    right: { style: 'thin' },
  };
  // sheet.columns = [
  //   {
  //     header: '1',
  //     key: 'number',
  //   },
  //   { header: '2', key: 'reportProff' },
  //   { header: '3', key: 'typeSIZ' },
  //   { header: '4', key: 'nameSIZ' },
  //   { header: '5', key: 'issuanceRate' },
  //   { header: '6', key: 'repotEvt' },
  //   { header: '7', key: 'dangerGroupId' },
  //   { header: '8', key: 'dangerGroup' },
  //   { header: '9', key: 'dangerEventID' },
  //   { header: '10', key: 'dangerEvent' },
  // ];
  // el.forEach((item) => {
  //   item['reportProff'] = item.proff || item.job || item.subdivision;
  //   item['nameSIZ'] =
  //     item.typeSIZ + ' ' + item.standart + ' ' + item.OperatingLevel;
  //   item['repotEvt'] = item.dangerEventID + ', Приложения 2 Приказа 767н';
  //   console.log(item);
  //   sheet.addRow(item);
  // });

  // let i = 0;
  // while (i < 10) {
  //   sheet.insertRow(1);
  //   i++;
  // }

  const font = { bold: true, name: 'Times New Roman', size: 11 };
  const alignment = { horizontal: 'right' };
  const color = {
    type: 'pattern',
    pattern: 'solid',
    fgColor: { argb: 'FFF2CD' },
  };

  const cell1 = sheet.getCell('J1');
  const cell2 = sheet.getCell('J2');
  const cell3 = sheet.getCell('J3');
  const cell5 = sheet.getCell('A5');
  const cell7 = sheet.getCell('A7');
  const cellA10 = sheet.getCell('A10');
  const cellB10 = sheet.getCell('B10');
  const cellC10 = sheet.getCell('C10');
  const cellD10 = sheet.getCell('D10');
  const cellE10 = sheet.getCell('E10');
  const cellF10 = sheet.getCell('F10');
  const cellG10 = sheet.getCell('G10');
  const cellH10 = sheet.getCell('H10');
  const cellI10 = sheet.getCell('I10');
  const cellJ10 = sheet.getCell('J10');

  sheet.mergeCells('F2', 'J2');
  sheet.mergeCells('H1', 'J1');
  sheet.mergeCells('H3', 'J3');
  sheet.mergeCells('A5', 'J5');

  cell1.font = font;
  cell2.font = font;
  cell3.font = font;
  cell5.font = font;
  cell7.font = {
    bold: true,
    name: 'Times New Roman',
    size: 12,
    underline: true,
  };
  sheet.getRow(10).font = { name: 'Times New Roman', size: 9, bold: true };

  cell1.alignment = alignment;
  cell2.alignment = alignment;
  cell3.alignment = alignment;
  cell5.alignment = {
    vertical: 'middle',
    horizontal: 'center',
    wrapText: 'true',
  };
  sheet.getRow(10).alignment = {
    vertical: 'middle',
    horizontal: 'center',
    wrapText: 'true',
  };
  // заливка фона ячеек
  cellA10.fill = color;
  cellB10.fill = color;
  cellC10.fill = color;
  cellD10.fill = color;
  cellE10.fill = color;
  cellF10.fill = color;
  cellG10.fill = color;
  cellH10.fill = color;
  cellI10.fill = color;
  cellJ10.fill = color;
  // рамка таблици
  cellA10.border = border;
  cellB10.border = border;
  cellC10.border = border;
  cellD10.border = border;
  cellE10.border = border;
  cellF10.border = border;
  cellG10.border = border;
  cellH10.border = border;
  cellI10.border = border;
  cellJ10.border = border;

  sheet.getRow(11).alignment = {
    horizontal: 'center',
  };

  sheet.getRow(5).height = 84;
  sheet.getRow(10).height = 208;
  sheet.getColumn(1).width = 4.85;
  sheet.getColumn(2).width = 13;
  sheet.getColumn(3).width = 11.57;
  sheet.getColumn(4).width = 31.14;
  sheet.getColumn(5).width = 11.57;
  sheet.getColumn(6).width = 13.49;
  sheet.getColumn(7).width = 7;
  sheet.getColumn(8).width = 17.14;
  sheet.getColumn(9).width = 7;
  sheet.getColumn(10).width = 19.14;

  const cell = (c, i) => {
    return sheet.getCell(c + i);
  };

  cell1.value = 'УТВЕРЖДАЮ:';
  cell2.value = 'Руководитель ___________ (подпись, инициалы, фамилия)';
  cell3.value = '«____» _____________ 20___г';
  cell5.value =
    '"Нормы выдачи средств индивидуальной защиты (далее — СИЗ) в __________________ (наименование подразделения, организации) в соответствии с требованиями приказов Минтруда от 29 октября 2021 г. №767н «Об утверждении единых типовых норм (далее – ЕТН) выдачи СИЗ и смывающих средств», №766н «Об утверждении правил обеспечения работников средствами индивидуальной защиты и смывающими средствами» (далее - приказ №766н)"';
  cell7.value = 'Раздел 1. НОРМЫ ВЫДАЧИ СРЕДСТВ ИНДИВИДУАЛЬНОЙ ЗАЩИТЫ';
  cellA10.value = '№ пп';
  cellB10.value = 'Наименование профессии/ должности, подразделения';
  cellC10.value = 'Тип СИЗ';
  cellD10.value =
    'Наименование СИЗ (с указанием конкретных данных о конструкции, о классе защиты, категориях эффективности и/или  эксплуатационных уровнях)';
  cellE10.value =
    'Нормы выдачи СИЗ с указанием периодичности выдачи, количества выдачи на период (штуки, пары, комплекты, мл)';
  cellF10.value = 'Основание выдачи СИЗ (пункты ЕТН, ПОТ и иных документов)';
  cellG10.value = '№ опасности из Приложения №2 к ЕТН';
  cellH10.value =
    'Опасности, представляющие угрозу жизни и здоровью работников, а также факторы окружающей среды или трудового процесса, способные привести к травме или профессиональному заболеванию';
  cellI10.value = '№ опасного события из Приложения №2 к ЕТН';
  cellJ10.value =
    'Опасные события, представляющие угрозу жизни и здоровью работников';

  cell('A', 11).value = 1;
  cell('B', 11).value = 2;
  cell('C', 11).value = 3;
  cell('D', 11).value = 4;
  cell('E', 11).value = 5;
  cell('F', 11).value = 6;
  cell('G', 11).value = 7;
  cell('H', 11).value = 8;
  cell('I', 11).value = 9;
  cell('J', 11).value = 10;

  let startRow = 12;

  el.forEach((item) => {
    cell('A', startRow).value = item.proffId;
    cell('B', startRow).value = item.proff || item.job || item.subdivision;
    cell('C', startRow).value = item.typeSIZ;
    cell('D', startRow).value =
      item.typeSIZ + ' ' + item.standart + ' ' + item.OperatingLevel;
    cell('E', startRow).value = item.issuanceRate;
    cell('F', startRow).value =
      item.dangerEventID + ', Приложения 2 Приказа 767н';
    cell('G', startRow).value = item.dangerGroupId;
    cell('H', startRow).value = item.dangerGroup;
    cell('I', startRow).value = item.dangerEventID;
    cell('J', startRow).value = item.dangerEvent;
    startRow++;
    if (item.proffSIZ) {
      item.proffSIZ.forEach((SIZ) => {
        cell('A', startRow).value = item.proffId;
        cell('D', startRow).value = SIZ.vid;
        cell('E', startRow).value = SIZ.norm;
        cell('F', startRow).value = 'Пункт 1 Приложения 1 Приказа 767н';
        cell('G', startRow).value = item.dangerGroupId;
        cell('H', startRow).value = item.dangerGroup;
        cell('I', startRow).value = item.dangerEventID;
        cell('J', startRow).value = item.dangerEvent;
        startRow++;
      });
    }
  });

  const row = sheet.lastRow;
  const lastRow = row._number + 3;
  const lastCell = sheet.getCell('A' + lastRow);
  lastCell.value =
    'Ответственное лицо __________________ (подпись, фамилия, инициалы)';
  let l = 11;
  while (l < lastRow - 2) {
    sheet.getCell('A' + l).border = border;
    sheet.getCell('B' + l).border = border;
    sheet.getCell('C' + l).border = border;
    sheet.getCell('D' + l).border = border;
    sheet.getCell('E' + l).border = border;
    sheet.getCell('F' + l).border = border;
    sheet.getCell('G' + l).border = border;
    sheet.getCell('H' + l).border = border;
    sheet.getCell('I' + l).border = border;
    sheet.getCell('J' + l).border = border;
    sheet.getCell('A' + l).alignment = {
      vertical: 'middle',
      horizontal: 'center',
      wrapText: 'true',
    };
    sheet.getCell('B' + l).alignment = {
      vertical: 'middle',
      horizontal: 'center',
      wrapText: 'true',
    };
    sheet.getCell('C' + l).alignment = {
      vertical: 'middle',
      horizontal: 'center',
      wrapText: 'true',
    };
    sheet.getCell('D' + l).alignment = {
      vertical: 'middle',
      horizontal: 'center',
      wrapText: 'true',
    };
    sheet.getCell('E' + l).alignment = {
      vertical: 'middle',
      horizontal: 'center',
      wrapText: 'true',
    };
    sheet.getCell('F' + l).alignment = {
      vertical: 'middle',
      horizontal: 'center',
      wrapText: 'true',
    };
    sheet.getCell('G' + l).alignment = {
      vertical: 'middle',
      horizontal: 'center',
      wrapText: 'true',
    };
    sheet.getCell('H' + l).alignment = {
      vertical: 'middle',
      horizontal: 'center',
      wrapText: 'true',
    };
    sheet.getCell('I' + l).alignment = {
      vertical: 'middle',
      horizontal: 'center',
      wrapText: 'true',
    };
    sheet.getCell('J' + l).alignment = {
      vertical: 'middle',
      horizontal: 'center',
      wrapText: 'true',
    };
    l++;
  }
  return workbook.xlsx
    .writeBuffer()
    .then((buffer) =>
      FileSaver.saveAs(
        new Blob([buffer]),
        `${Date.now()}_Нормы выдачи СИЗ.xlsx`
      )
    )
    .catch((err) => console.log('Error writing excel export', err));
};

export default normSiz;
