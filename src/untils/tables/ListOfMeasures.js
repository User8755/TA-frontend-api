import * as Excel from 'exceljs/dist/exceljs.min.js';

const listOfMeasures = (arr) => {
  const workbook = new Excel.Workbook();
  const sheet = workbook.addWorksheet('sheet');
  var FileSaver = require('file-saver');

  const border = {
    border: {
      left: { style: 'thin' },
      right: { style: 'thin' },
      bottom: { style: 'thin' },
      top: { style: 'thin' },
    },
    alignment: {
      horizontal: 'center',
      vertical: 'middle',
      wrapText: 'true',
    },
    font: {
      size: 8,
      bold: true,
    },
  };

  const cellA19 = sheet.getCell('A19');
  const cellB19 = sheet.getCell('B19');
  const cellC19 = sheet.getCell('C19');
  const cellD19 = sheet.getCell('D19');
  const cellE19 = sheet.getCell('E19');
  const cellF19 = sheet.getCell('F19');
  const cellG19 = sheet.getCell('G19');
  const cellH19 = sheet.getCell('H19');
  const cellI19 = sheet.getCell('I19');
  const cellJ19 = sheet.getCell('J19');
  const cellK19 = sheet.getCell('K19');
  const cellL19 = sheet.getCell('L19');
  const cellM19 = sheet.getCell('M19');
  const cellO19 = sheet.getCell('O19');
  const cellQ19 = sheet.getCell('Q19');
  const cellM20 = sheet.getCell('M20');
  const cellN20 = sheet.getCell('N20');
  const cellO20 = sheet.getCell('O20');
  const cellP20 = sheet.getCell('P20');
  const cellQ20 = sheet.getCell('Q20');
  const cellR20 = sheet.getCell('R20');

  const textBefore = 'До';
  const textAfter = 'После';

  cellA19.value = '№ п/п';
  cellB19.value = '№ опасности*';
  cellC19.value = 'Опасности';
  cellD19.value = '№ опасного события*';
  cellE19.value = 'Опасное событие';
  cellF19.value =
    'Объект  (помещение или зона, выполняемые работы, нештатная ситуация, аварийная ситуация)';
  cellG19.value = 'Источник опасности';
  cellH19.value = 'Номер и (или) наименование рабочего места';
  cellI19.value =
    'Меры управления профессиональными рисками (технические, организационные, СИЗ и пр.)';
  cellJ19.value = 'Периодич-  ность';
  cellK19.value = 'Ответственное лицо';
  cellL19.value = 'Отметка о выполнении';
  cellM19.value = 'Вероятность профессионального риска';
  cellO19.value = 'Тяжесть профессионального риска';
  cellQ19.value = 'Индекс профессиональ-ного риска (Р=В*Т)';
  cellM20.value = textBefore;
  cellN20.value = textAfter;
  cellO20.value = textBefore;
  cellP20.value = textAfter;
  cellQ20.value = textBefore;
  cellR20.value = textAfter;

  cellA19.style = border;
  cellB19.style = border;
  cellC19.style = border;
  cellD19.style = border;
  cellE19.style = border;
  cellF19.style = border;
  cellG19.style = border;
  cellH19.style = border;
  cellI19.style = border;
  cellJ19.style = border;
  cellK19.style = border;
  cellL19.style = border;
  cellM19.style = border;
  cellO19.style = border;
  cellQ19.style = border;
  cellM20.style = border;
  cellN20.style = border;
  cellO20.style = border;
  cellP20.style = border;
  cellQ20.style = border;
  cellR20.style = border;

  sheet.getRow(19).height = 48;
  sheet.getRow(20).height = 48;
  sheet.getColumn(1).width = 7;
  sheet.getColumn(2).width = 7;
  sheet.getColumn(3).width = 18.42;
  sheet.getColumn(4).width = 7;
  sheet.getColumn(5).width = 18.14;
  sheet.getColumn(6).width = 17.85;
  sheet.getColumn(7).width = 18;
  sheet.getColumn(8).width = 18;
  sheet.getColumn(9).width = 18;
  sheet.getColumn(10).width = 10.57;
  sheet.getColumn(11).width = 13.85;
  sheet.getColumn(12).width = 14.42;
  sheet.getColumn(13).width = 7;
  sheet.getColumn(14).width = 7;
  sheet.getColumn(15).width = 7;
  sheet.getColumn(16).width = 7;
  sheet.getColumn(17).width = 7;
  sheet.getColumn(18).width = 7;

  sheet.mergeCells('A19', 'A20');
  sheet.mergeCells('B19', 'B20');
  sheet.mergeCells('C19', 'C20');
  sheet.mergeCells('D19', 'D20');
  sheet.mergeCells('E19', 'E20');
  sheet.mergeCells('F19', 'F20');
  sheet.mergeCells('G19', 'G20');
  sheet.mergeCells('H19', 'H20');
  sheet.mergeCells('I19', 'I20');
  sheet.mergeCells('J19', 'J20');
  sheet.mergeCells('K19', 'K20');
  sheet.mergeCells('L19', 'L20');
  sheet.mergeCells('M19', 'N19');
  sheet.mergeCells('O19', 'P19');
  sheet.mergeCells('Q19', 'R19');
  let line = 21;
  const cell = (c) => {
    return sheet.getCell(c + line);
  };

  arr.forEach((i) => {
    cell('A').value = line-20;
    cell('B').value = i.danger776Id;
    cell('C').value = i.danger776;
    cell('D').value = i.dangerEvent776Id;
    cell('E').value = i.dangerEvent776;
    cell('F').value = i.obj;
    cell('G').value = i.source;
    cell('H').value = i.job || i.proff;
    cell('I').value = i.riskManagement;
    cell('J').value = i.periodicity;
    cell('L').value = i.completionMark;
    cell('M').value = i.probability;
    cell('N').value = i.probability1;
    cell('O').value = i.heaviness;
    cell('P').value = i.heaviness1;
    cell('Q').value = i.ipr;
    cell('R').value = i.ipr1;

    cell('A').style = border;
    cell('B').style = border;
    cell('C').style = border;
    cell('D').style = border;
    cell('E').style = border;
    cell('F').style = border;
    cell('G').style = border;
    cell('H').style = border;
    cell('I').style = border;
    cell('J').style = border;
    cell('L').style = border;
    cell('M').style = border;
    cell('N').style = border;
    cell('O').style = border;
    cell('P').style = border;
    cell('Q').style = border;
    cell('R').style = border;
    cell('K').style = border;
    
    line++;
  });
  return workbook.xlsx
    .writeBuffer()
    .then((buffer) =>
      FileSaver.saveAs(
        new Blob([buffer]),
        `${Date.now()}_Меры управления без СИЗ.xlsx`
      )
    )
    .catch((err) => console.log('Error writing excel export', err));
};

export default listOfMeasures;
