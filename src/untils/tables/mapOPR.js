import * as Excel from 'exceljs/dist/exceljs.min.js';
var FileSaver = require('file-saver');
const mapOPR = async (arr) => {
  const workbook = new Excel.Workbook();
  const sheet = workbook.addWorksheet('sheet');

  sheet.getColumn(1).width = 2;
  sheet.getColumn(2).width = 4.5;
  sheet.getColumn(3).width = 4.5;
  sheet.getColumn(4).width = 9;
  sheet.getColumn(5).width = 17.5;
  sheet.getColumn(6).width = 8.2;
  sheet.getColumn(7).width = 21.7;
  sheet.getColumn(8).width = 12.8;
  sheet.getColumn(9).width = 6.58;
  sheet.getColumn(10).width = 11;
  sheet.getColumn(11).width = 8.7;
  sheet.getColumn(12).width = 8.7;
  sheet.getColumn(13).width = 8.7;
  sheet.getColumn(14).width = 12.7;
  sheet.getColumn(15).width = 13;
  sheet.getColumn(16).width = 11.7;
  sheet.getColumn(17).width = 12.2;
  sheet.getColumn(18).width = 7.7;
  sheet.getColumn(19).width = 8.4;
  sheet.getColumn(20).width = 9.8;
  sheet.getColumn(21).width = 8.5;

  // мердж ячеек
  sheet.mergeCells('D2', 'S2');
  sheet.mergeCells('D3', 'S3');
  sheet.mergeCells('H5', 'I5');
  sheet.mergeCells('J5', 'K5');
  sheet.mergeCells('M5', 'N5');
  sheet.mergeCells('I6', 'M6');
  sheet.mergeCells('G8', 'N8');
  sheet.mergeCells('R8', 'T8');
  sheet.mergeCells('B27', 'C28');
  sheet.mergeCells('D27', 'D28');
  sheet.mergeCells('E27', 'E28');
  sheet.mergeCells('F27', 'F28');
  sheet.mergeCells('G27', 'G28');
  sheet.mergeCells('H27', 'I27');
  sheet.mergeCells('H28', 'I28');
  sheet.mergeCells('J27', 'K28');
  sheet.mergeCells('L27', 'N27');
  sheet.mergeCells('L28', 'N28');
  sheet.mergeCells('O27', 'O28');
  sheet.mergeCells('P27', 'P28');
  sheet.mergeCells('Q27', 'S27');
  sheet.mergeCells('R28', 'S28');
  sheet.mergeCells('T27', 'U28');
  sheet.mergeCells('B18', 'I18');
  sheet.mergeCells('B19', 'I19');
  sheet.mergeCells('B17', 'I17');
  sheet.mergeCells('J18', 'K19');
  sheet.mergeCells('B29', 'C29');
  sheet.mergeCells('H29', 'I29');
  sheet.mergeCells('J29', 'K29');
  sheet.mergeCells('L29', 'N29');
  sheet.mergeCells('R29', 'S29');
  sheet.mergeCells('T29', 'U29');
  sheet.mergeCells('P8', 'Q8');

  sheet.getCell('D3').value = '(полное наименование организации)';
  sheet.getCell('I5').value = 'Карта      №';
  sheet.getCell('L5').value = 'от';
  sheet.getCell('K6').value = 'оценки профессиональных рисков';
  sheet.getCell('A8').value = 'Наименование профессии (должности) работника:';
  sheet.getCell('P8').value = 'Код ОК-016-94';
  sheet.getCell('A12').value = 'Номер рабочего места:';
  sheet.getCell('A14').value = 'Наименование структурного подразделения:';
  sheet.getCell('B16').value = '1. Количество работающих на рабочем месте:';
  sheet.getCell('B18').value = 'Всего,';
  sheet.getCell('B19').value = 'из них:';
  sheet.getCell('B20').value = 'женщин';
  sheet.getCell('B21').value = 'лиц в возрасте до 18 лет';
  sheet.getCell('B22').value = 'инвалидов, допущенных к выполнению работ';
  sheet.getCell('B25').value =
    '2. Идентифицированные опасности и оцененные риски:';
  sheet.getCell('B27').value = '№ п/п';
  sheet.getCell('D27').value = '№ опасности';
  sheet.getCell('E27').value = 'Опасность';
  sheet.getCell('F27').value = '№ опасногособытия';
  sheet.getCell('G27').value = 'Опасное событие';
  sheet.getCell('H27').value = 'Объект';
  sheet.getCell('J27').value = 'Источник опасности';
  sheet.getCell('L27').value = 'Существующие меры управления рисками';
  sheet.getCell('O27').value = 'Вероятность наступления события (В)';
  sheet.getCell('P27').value = 'Тяжесть последствий наступления события (Т)';
  sheet.getCell('Q27').value = 'Оценка уровня риска';
  sheet.getCell('T27').value = 'Приемлемость риска(отношение к риску)';
  sheet.getCell('B28').value = '№ п/п';
  sheet.getCell('D28').value = '№ опасности';
  sheet.getCell('E28').value = 'Опасность';
  sheet.getCell('F28').value = '№ опасногособытия';
  sheet.getCell('G28').value = 'Опасное событие';
  sheet.getCell('H28').value =
    ' (помещение или зона, выполняемые работы, нештатная ситуация, аварийная ситуация)';

  sheet.getCell('J28').value = 'Источник опасности';
  sheet.getCell('L28').value = '(технические, организационные, СИЗ и пр.)';
  sheet.getCell('O28').value = 'Вероятность наступления события (В)';
  sheet.getCell('P28').value = 'Тяжесть последствий наступления события (Т)';
  sheet.getCell('Q28').value = 'Индекс профессио - нального риска (Р=В×Т)';
  sheet.getCell('R28').value = 'Описание уровня риска';
  sheet.getCell('T28').value = 'Приемлемость риска(отношение к риску)';

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
  };
  const B29 = sheet.getCell('B29');
  const D29 = sheet.getCell('D29');
  const E29 = sheet.getCell('E29');
  const F29 = sheet.getCell('F29');
  const G29 = sheet.getCell('G29');
  const H29 = sheet.getCell('H29');
  const J29 = sheet.getCell('J29');
  const L29 = sheet.getCell('L29');
  const O29 = sheet.getCell('O29');
  const P29 = sheet.getCell('P29');
  const Q29 = sheet.getCell('Q29');
  const R29 = sheet.getCell('R29');
  const T29 = sheet.getCell('T29');

  B29.value = '1';
  D29.value = '2';
  E29.value = '3';
  F29.value = '4';
  G29.value = '5';
  H29.value = '6';
  J29.value = '7';
  L29.value = '8';
  O29.value = '9';
  P29.value = '10';
  Q29.value = '11';
  R29.value = '12';
  T29.value = '13';

  B29.style = border;
  D29.style = border;
  E29.style = border;
  F29.style = border;
  G29.style = border;
  H29.style = border;
  J29.style = border;
  L29.style = border;
  O29.style = border;
  P29.style = border;
  Q29.style = border;
  R29.style = border;
  T29.style = border;

  const cell = (c) => {
    return sheet.getCell(c + i);
  };

  let x = 1
  while (x !== 5) {
    const currentCell = sheet.getColumn(x).letter
    console.log(currentCell)
    x++
  }
  let i = 30;
  arr.forEach((e) => {
    sheet.getCell('B' + i).value = e.number;
    sheet.getCell('D' + i).value = e.danger776Id;
    sheet.getCell('E' + i).value = e.danger776;
    sheet.getCell('F' + i).value = e.dangerEvent776Id;
    sheet.getCell('G' + i).value = e.dangerEvent776;
    sheet.getCell('H' + i).value = e.obj;
    sheet.getCell('J' + i).value = e.source;
    sheet.getCell('L' + i).value = e.existingRiskManagement;
    sheet.getCell('O' + i).value = e.probability;
    sheet.getCell('P' + i).value = e.heaviness;
    sheet.getCell('Q' + i).value = e.ipr;
    sheet.getCell('R' + i).value = e.riskAttitude;
    sheet.getCell('T' + i).value = e.acceptability;
    sheet.mergeCells('B' + i, 'C' + i);
    sheet.mergeCells('H' + i, 'I' + i);
    sheet.mergeCells('J' + i, 'K' + i);
    sheet.mergeCells('L' + i, 'N' + i);
    sheet.mergeCells('R' + i, 'S' + i);
    sheet.mergeCells('T' + i, 'U' + i);
    sheet.getCell('B' + i).style = border;
    sheet.getCell('D' + i).style = border;
    sheet.getCell('E' + i).style = border;
    sheet.getCell('F' + i).style = border;
    sheet.getCell('G' + i).style = border;
    sheet.getCell('H' + i).style = border;
    sheet.getCell('J' + i).style = border;
    sheet.getCell('L' + i).style = border;
    sheet.getCell('O' + i).style = border;
    sheet.getCell('P' + i).style = border;
    sheet.getCell('Q' + i).style = border;
    sheet.getCell('R' + i).style = border;
    sheet.getCell('T' + i).style = border;
    cell('C').style = border;
    cell('I').style = border;
    cell('K').style = border;
    cell('M').style = border;
    cell('N').style = border;
    cell('S').style = border;
    cell('U').style = border;
    i++;
  });

  sheet.getCell('A2').style = {
    font: { size: 8, name: 'Arial' },
    fill: { type: 'pattern', pattern: 'none' },
  };
  sheet.getCell('A3').style = {
    font: { size: 8, name: 'Arial' },
    fill: { type: 'pattern', pattern: 'none' },
  };
  sheet.getCell('A5').style = {
    font: { size: 10 },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('A6').style = {
    font: { size: 10 },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('A8').style = {
    font: { bold: true, size: 12 },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('A12').style = {
    font: { bold: true, size: 12 },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('A14').style = {
    font: { bold: true, size: 12 },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('A16').style = {
    font: { size: 12 },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('B2').style = {
    font: { size: 8, name: 'Arial' },

    fill: { type: 'pattern', pattern: 'none' },
  };
  sheet.getCell('B3').style = {
    font: { size: 8, name: 'Arial' },

    fill: { type: 'pattern', pattern: 'none' },
  };
  sheet.getCell('B5').style = {
    font: { size: 10 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('B6').style = {
    font: { size: 10 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('B8').style = {
    font: { size: 12 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('B12').style = {
    font: { size: 12 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('B14').style = {
    font: { size: 12 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('B16').style = {
    font: { bold: true, size: 12 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('B18').style = {
    font: { bold: true, size: 8 },
    border: {
      left: { style: 'thin' },
      right: { style: 'thin' },
      top: { style: 'thin' },
    },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('B19').style = {
    font: { size: 8 },
    border: {
      left: { style: 'thin' },
      right: { style: 'thin' },
      bottom: { style: 'thin' },
    },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('B20').style = {
    font: { size: 8, name: 'Arial' },
    border: {
      left: { style: 'thin' },
      top: { style: 'thin' },
      bottom: { style: 'thin' },
    },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('B21').style = {
    font: { size: 8, name: 'Arial' },
    border: {
      left: { style: 'thin' },
      top: { style: 'thin' },
      bottom: { style: 'thin' },
    },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('B22').style = {
    font: { size: 8, name: 'Arial' },
    border: {
      left: { style: 'thin' },
      top: { style: 'thin' },
      bottom: { style: 'thin' },
    },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('B25').style = {
    font: { bold: true, size: 12 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('B26').style = {
    font: { size: 8, name: 'Arial' },
    border: { bottom: { style: 'thin' } },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', vertical: 'middle', wrapText: true },
  };
  sheet.getCell('B27').style = {
    font: { bold: true, size: 8 },
    border: {
      left: { style: 'thin' },
      right: { style: 'thin' },
      top: { style: 'thin' },
    },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', vertical: 'middle', wrapText: true },
  };
  sheet.getCell('B28').style = {
    font: { bold: true, size: 8 },
    border: {
      left: { style: 'thin' },
      bottom: { style: 'thin' },
    },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', vertical: 'middle', wrapText: true },
  };
  sheet.getCell('C2').style = {
    font: { size: 8, name: 'Arial' },

    fill: { type: 'pattern', pattern: 'none' },
  };
  sheet.getCell('C3').style = {
    font: { size: 8, name: 'Arial' },

    fill: { type: 'pattern', pattern: 'none' },
  };
  sheet.getCell('C5').style = {
    font: { size: 10 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('C6').style = {
    font: { size: 10 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('C8').style = {
    font: { size: 12 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('C12').style = {
    font: { size: 12 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('C14').style = {
    font: { size: 12 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('C16').style = {
    font: { size: 12 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('C18').style = {
    font: { bold: true, size: 8 },
    border: {
      left: { style: 'thin' },
      right: { style: 'thin' },
      top: { style: 'thin' },
    },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('C19').style = {
    font: { size: 8 },
    border: {
      left: { style: 'thin' },
      right: { style: 'thin' },
      bottom: { style: 'thin' },
    },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('C20').style = {
    font: { size: 8, name: 'Arial' },
    border: {
      top: { style: 'thin' },
      bottom: { style: 'thin' },
    },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('C21').style = {
    font: { size: 8, name: 'Arial' },
    border: {
      top: { style: 'thin' },
      bottom: { style: 'thin' },
    },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('C22').style = {
    font: { size: 8, name: 'Arial' },
    border: {
      top: { style: 'thin' },
      bottom: { style: 'thin' },
    },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('C25').style = {
    font: { bold: true, size: 12 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('C26').style = {
    font: { size: 8, name: 'Arial' },
    border: { bottom: { style: 'thin' } },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', vertical: 'middle', wrapText: true },
  };
  sheet.getCell('C27').style = {
    font: { bold: true, size: 8 },
    border: {
      left: { style: 'thin' },
      right: { style: 'thin' },
      top: { style: 'thin' },
    },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', vertical: 'middle', wrapText: true },
  };
  sheet.getCell('C28').style = {
    font: { bold: true, size: 8 },
    border: {
      right: { style: 'thin' },
      bottom: { style: 'thin' },
    },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', vertical: 'middle', wrapText: true },
  };
  sheet.getCell('D2').style = {
    font: { size: 12 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', vertical: 'top', wrapText: true },
  };
  sheet.getCell('D3').style = {
    font: { size: 8 },
    border: { top: { style: 'thin' } },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center' },
  };
  sheet.getCell('D5').style = {
    font: { size: 10 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('D6').style = {
    font: { size: 10 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('D8').style = {
    font: { size: 12 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('D12').style = {
    font: { size: 12 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('D14').style = {
    font: { size: 12 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('D16').style = {
    font: { size: 12 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('D18').style = {
    font: { bold: true, size: 8 },
    border: {
      left: { style: 'thin' },
      right: { style: 'thin' },
      top: { style: 'thin' },
    },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('D19').style = {
    font: { size: 8 },
    border: {
      left: { style: 'thin' },
      right: { style: 'thin' },
      bottom: { style: 'thin' },
    },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('D20').style = {
    font: { size: 8, name: 'Arial' },
    border: {
      top: { style: 'thin' },
      bottom: { style: 'thin' },
    },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('D21').style = {
    font: { size: 8, name: 'Arial' },
    border: {
      top: { style: 'thin' },
      bottom: { style: 'thin' },
    },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('D22').style = {
    font: { size: 8, name: 'Arial' },
    border: {
      top: { style: 'thin' },
      bottom: { style: 'thin' },
    },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('D25').style = {
    font: { bold: true, size: 12 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('D26').style = {
    font: { size: 8, name: 'Arial' },
    border: { bottom: { style: 'thin' } },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', vertical: 'middle', wrapText: true },
  };
  sheet.getCell('D27').style = {
    font: { bold: true, size: 8 },
    border: {
      left: { style: 'thin' },
      right: { style: 'thin' },
      top: { style: 'thin' },
    },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: {
      horizontal: 'center',
      vertical: 'middle',
      wrapText: true,
      textRotation: 90,
    },
  };
  sheet.getCell('D28').style = {
    font: { bold: true, size: 8 },
    border: {
      left: { style: 'thin' },
      right: { style: 'thin' },
      bottom: { style: 'thin' },
    },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: {
      horizontal: 'center',
      vertical: 'middle',
      wrapText: true,
      textRotation: 90,
    },
  };
  sheet.getCell('E2').style = {
    font: { size: 12 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', vertical: 'top', wrapText: true },
  };
  sheet.getCell('E3').style = {
    font: { size: 8 },
    border: { top: { style: 'thin' } },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center' },
  };
  sheet.getCell('E5').style = {
    font: { size: 10 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('E6').style = {
    font: { size: 10 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('E8').style = {
    font: { size: 12 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('E12').style = {
    font: { size: 12 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('E14').style = {
    font: { size: 12 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('E16').style = {
    font: { size: 12 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('E18').style = {
    font: { bold: true, size: 8 },
    border: {
      left: { style: 'thin' },
      right: { style: 'thin' },
      top: { style: 'thin' },
    },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('E19').style = {
    font: { size: 8 },
    border: {
      left: { style: 'thin' },
      right: { style: 'thin' },
      bottom: { style: 'thin' },
    },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('E20').style = {
    font: { size: 8, name: 'Arial' },
    border: {
      top: { style: 'thin' },
      bottom: { style: 'thin' },
    },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('E21').style = {
    font: { size: 8, name: 'Arial' },
    border: {
      top: { style: 'thin' },
      bottom: { style: 'thin' },
    },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('E22').style = {
    font: { size: 8, name: 'Arial' },
    border: {
      top: { style: 'thin' },
      bottom: { style: 'thin' },
    },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('E25').style = {
    font: { bold: true, size: 12 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('E26').style = {
    font: { size: 8, name: 'Arial' },
    border: { bottom: { style: 'thin' } },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', vertical: 'middle', wrapText: true },
  };
  sheet.getCell('E27').style = {
    font: { bold: true, size: 8 },
    border: {
      left: { style: 'thin' },
      right: { style: 'thin' },
      top: { style: 'thin' },
    },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', vertical: 'middle', wrapText: true },
  };
  sheet.getCell('E28').style = {
    font: { bold: true, size: 8 },
    border: {
      left: { style: 'thin' },
      right: { style: 'thin' },
      bottom: { style: 'thin' },
    },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', vertical: 'middle', wrapText: true },
  };
  sheet.getCell('F2').style = {
    font: { size: 12 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', vertical: 'top', wrapText: true },
  };
  sheet.getCell('F3').style = {
    font: { size: 8 },
    border: { top: { style: 'thin' } },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center' },
  };
  sheet.getCell('F5').style = {
    font: { size: 10 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('F6').style = {
    font: { size: 10 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('F8').style = {
    font: { size: 12 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('F12').style = {
    font: { size: 12 },
    border: { bottom: { style: 'thin' } },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', vertical: 'top', wrapText: true },
  };
  sheet.getCell('F14').style = {
    font: { size: 12 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('F16').style = {
    font: { size: 12 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('F18').style = {
    font: { bold: true, size: 8 },
    border: {
      left: { style: 'thin' },
      right: { style: 'thin' },
      top: { style: 'thin' },
    },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('F19').style = {
    font: { size: 8 },
    border: {
      left: { style: 'thin' },
      right: { style: 'thin' },
      bottom: { style: 'thin' },
    },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('F20').style = {
    font: { size: 8, name: 'Arial' },
    border: {
      top: { style: 'thin' },
      bottom: { style: 'thin' },
    },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('F21').style = {
    font: { size: 8, name: 'Arial' },
    border: {
      top: { style: 'thin' },
      bottom: { style: 'thin' },
    },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('F22').style = {
    font: { size: 8, name: 'Arial' },
    border: {
      top: { style: 'thin' },
      bottom: { style: 'thin' },
    },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('F25').style = {
    font: { bold: true, size: 12 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('F26').style = {
    font: { size: 8, name: 'Arial' },
    border: { bottom: { style: 'thin' } },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', vertical: 'middle', wrapText: true },
  };
  sheet.getCell('F27').style = {
    font: { bold: true, size: 8 },
    border: {
      left: { style: 'thin' },
      right: { style: 'thin' },
      top: { style: 'thin' },
    },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: {
      horizontal: 'center',
      vertical: 'middle',
      wrapText: true,
      textRotation: 90,
    },
  };
  sheet.getCell('F28').style = {
    font: { bold: true, size: 8 },
    border: {
      left: { style: 'thin' },
      right: { style: 'thin' },
      bottom: { style: 'thin' },
    },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: {
      horizontal: 'center',
      vertical: 'middle',
      wrapText: true,
      textRotation: 90,
    },
  };
  sheet.getCell('G2').style = {
    font: { size: 12 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', vertical: 'top', wrapText: true },
  };
  sheet.getCell('G3').style = {
    font: { size: 8 },
    border: { top: { style: 'thin' } },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center' },
  };
  sheet.getCell('G5').style = {
    font: { size: 10 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('G6').style = {
    font: { size: 10 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('G8').style = {
    font: { size: 12 },
    border: { bottom: { style: 'thin' } },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', vertical: 'top', wrapText: true },
  };
  sheet.getCell('G12').style = {
    font: { size: 12 },
    border: { bottom: { style: 'thin' } },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', vertical: 'top', wrapText: true },
  };
  sheet.getCell('G14').style = {
    font: { size: 12 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('G16').style = {
    font: { size: 12 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('G18').style = {
    font: { bold: true, size: 8 },
    border: {
      left: { style: 'thin' },
      right: { style: 'thin' },
      top: { style: 'thin' },
    },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('G19').style = {
    font: { size: 8 },
    border: {
      left: { style: 'thin' },
      right: { style: 'thin' },
      bottom: { style: 'thin' },
    },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('G20').style = {
    font: { size: 8, name: 'Arial' },
    border: {
      top: { style: 'thin' },
      bottom: { style: 'thin' },
    },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('G21').style = {
    font: { size: 8, name: 'Arial' },
    border: {
      top: { style: 'thin' },
      bottom: { style: 'thin' },
    },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('G22').style = {
    font: { size: 8, name: 'Arial' },
    border: {
      top: { style: 'thin' },
      bottom: { style: 'thin' },
    },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('G25').style = {
    font: { bold: true, size: 12 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('G26').style = {
    font: { size: 8, name: 'Arial' },
    border: { bottom: { style: 'thin' } },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', vertical: 'middle', wrapText: true },
  };
  sheet.getCell('G27').style = {
    font: { bold: true, size: 8 },
    border: {
      left: { style: 'thin' },
      right: { style: 'thin' },
      top: { style: 'thin' },
    },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', vertical: 'middle', wrapText: true },
  };
  sheet.getCell('G28').style = {
    font: { bold: true, size: 8 },
    border: {
      left: { style: 'thin' },
      right: { style: 'thin' },
      bottom: { style: 'thin' },
    },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', vertical: 'middle', wrapText: true },
  };
  sheet.getCell('H2').style = {
    font: { size: 12 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', vertical: 'top', wrapText: true },
  };
  sheet.getCell('H3').style = {
    font: { size: 8 },
    border: { top: { style: 'thin' } },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center' },
  };
  sheet.getCell('H5').style = {
    font: { size: 10 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('H6').style = {
    font: { size: 10 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('H8').style = {
    font: { size: 12 },
    border: { bottom: { style: 'thin' } },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', vertical: 'top', wrapText: true },
  };
  sheet.getCell('H12').style = {
    font: { size: 12 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('H14').style = {
    font: { size: 12 },
    border: { bottom: { style: 'thin' } },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', vertical: 'top', wrapText: true },
  };
  sheet.getCell('H16').style = {
    font: { size: 12 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('H18').style = {
    font: { bold: true, size: 8 },
    border: {
      left: { style: 'thin' },
      right: { style: 'thin' },
      top: { style: 'thin' },
    },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('H19').style = {
    font: { size: 8 },
    border: {
      left: { style: 'thin' },
      right: { style: 'thin' },
      bottom: { style: 'thin' },
    },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('H20').style = {
    font: { size: 8, name: 'Arial' },
    border: {
      top: { style: 'thin' },
      bottom: { style: 'thin' },
    },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('H21').style = {
    font: { size: 8, name: 'Arial' },
    border: {
      top: { style: 'thin' },
      bottom: { style: 'thin' },
    },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('H22').style = {
    font: { size: 8, name: 'Arial' },
    border: {
      top: { style: 'thin' },
      bottom: { style: 'thin' },
    },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('H25').style = {
    font: { bold: true, size: 12 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('H26').style = {
    font: { size: 8, name: 'Arial' },
    border: { bottom: { style: 'thin' } },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', vertical: 'middle', wrapText: true },
  };
  sheet.getCell('H27').style = {
    font: { bold: true, size: 8 },
    border: {
      left: { style: 'thin' },
      right: { style: 'thin' },
      top: { style: 'thin' },
    },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', wrapText: true },
  };
  sheet.getCell('H28').style = {
    font: { size: 8 },
    border: {
      left: { style: 'thin' },
      right: { style: 'thin' },
      bottom: { style: 'thin' },
    },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', vertical: 'top', wrapText: true },
  };
  sheet.getCell('I2').style = {
    font: { size: 12 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', vertical: 'top', wrapText: true },
  };
  sheet.getCell('I3').style = {
    font: { size: 8 },
    border: { top: { style: 'thin' } },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center' },
  };
  sheet.getCell('I5').style = {
    font: { bold: true, size: 12 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'right' },
  };
  sheet.getCell('I6').style = {
    font: { size: 10 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('I8').style = {
    font: { size: 12 },
    border: { bottom: { style: 'thin' } },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', vertical: 'top', wrapText: true },
  };
  sheet.getCell('I12').style = {
    font: { size: 12 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('I14').style = {
    font: { size: 12 },
    border: { bottom: { style: 'thin' } },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', vertical: 'top', wrapText: true },
  };
  sheet.getCell('I16').style = {
    font: { size: 12 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('I18').style = {
    font: { bold: true, size: 8 },
    border: {
      left: { style: 'thin' },
      right: { style: 'thin' },
      top: { style: 'thin' },
    },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('I19').style = {
    font: { size: 8 },
    border: {
      left: { style: 'thin' },
      right: { style: 'thin' },
      bottom: { style: 'thin' },
    },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('I20').style = {
    font: { size: 8, name: 'Arial' },
    border: {
      right: { style: 'thin' },
      top: { style: 'thin' },
      bottom: { style: 'thin' },
    },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('I21').style = {
    font: { size: 8, name: 'Arial' },
    border: {
      right: { style: 'thin' },
      top: { style: 'thin' },
      bottom: { style: 'thin' },
    },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('I22').style = {
    font: { size: 8, name: 'Arial' },
    border: {
      right: { style: 'thin' },
      top: { style: 'thin' },
      bottom: { style: 'thin' },
    },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('I25').style = {
    font: { bold: true, size: 12 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('I26').style = {
    font: { size: 8, name: 'Arial' },
    border: { bottom: { style: 'thin' } },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', vertical: 'middle', wrapText: true },
  };
  sheet.getCell('I27').style = {
    font: { bold: true, size: 8 },
    border: {
      left: { style: 'thin' },
      right: { style: 'thin' },
      top: { style: 'thin' },
    },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', wrapText: true },
  };
  sheet.getCell('I28').style = {
    font: { size: 8 },
    border: {
      left: { style: 'thin' },
      right: { style: 'thin' },
      bottom: { style: 'thin' },
    },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', vertical: 'top', wrapText: true },
  };
  sheet.getCell('J2').style = {
    font: { size: 12 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', vertical: 'top', wrapText: true },
  };
  sheet.getCell('J3').style = {
    font: { size: 8 },
    border: { top: { style: 'thin' } },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center' },
  };
  sheet.getCell('J5').style = {
    font: { bold: true, size: 12 },
    border: { bottom: { style: 'thin' } },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', vertical: 'top', wrapText: true },
  };
  sheet.getCell('J6').style = {
    font: { size: 10 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('J8').style = {
    font: { size: 12 },
    border: { bottom: { style: 'thin' } },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', vertical: 'top', wrapText: true },
  };
  sheet.getCell('J12').style = {
    font: { size: 12 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('J14').style = {
    font: { size: 12 },
    border: { bottom: { style: 'thin' } },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', vertical: 'top', wrapText: true },
  };
  sheet.getCell('J16').style = {
    font: { size: 12 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('J18').style = {
    font: { size: 8, name: 'Arial' },
    border: {
      left: { style: 'thin' },
      right: { style: 'thin' },
      top: { style: 'thin' },
    },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', vertical: 'top' },
  };
  sheet.getCell('J19').style = {
    font: { size: 8, name: 'Arial' },
    border: {
      left: { style: 'thin' },
      bottom: { style: 'thin' },
    },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', vertical: 'top' },
  };
  sheet.getCell('J20').style = {
    font: { size: 8, name: 'Arial' },
    border: {
      left: { style: 'thin' },
      right: { style: 'thin' },
      top: { style: 'thin' },
      bottom: { style: 'thin' },
    },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center' },
  };
  sheet.getCell('J21').style = {
    font: { size: 8, name: 'Arial' },
    border: {
      left: { style: 'thin' },
      right: { style: 'thin' },
      top: { style: 'thin' },
      bottom: { style: 'thin' },
    },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center' },
  };
  sheet.getCell('J22').style = {
    font: { size: 8, name: 'Arial' },
    border: {
      left: { style: 'thin' },
      right: { style: 'thin' },
      top: { style: 'thin' },
      bottom: { style: 'thin' },
    },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center' },
  };
  sheet.getCell('J25').style = {
    font: { bold: true, size: 12 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('J26').style = {
    font: { size: 8, name: 'Arial' },
    border: { bottom: { style: 'thin' } },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', vertical: 'middle', wrapText: true },
  };
  sheet.getCell('J27').style = {
    font: { bold: true, size: 8 },
    border: {
      left: { style: 'thin' },
      right: { style: 'thin' },
      top: { style: 'thin' },
    },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', vertical: 'middle', wrapText: true },
  };
  sheet.getCell('J28').style = {
    font: { bold: true, size: 8 },
    border: {
      left: { style: 'thin' },
      bottom: { style: 'thin' },
    },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', vertical: 'middle', wrapText: true },
  };
  sheet.getCell('K2').style = {
    font: { size: 12 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', vertical: 'top', wrapText: true },
  };
  sheet.getCell('K3').style = {
    font: { size: 8 },
    border: { top: { style: 'thin' } },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center' },
  };
  sheet.getCell('K5').style = {
    font: { bold: true, size: 12 },
    border: { bottom: { style: 'thin' } },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', vertical: 'top', wrapText: true },
  };
  sheet.getCell('K6').style = {
    font: { bold: true, size: 12 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center' },
  };
  sheet.getCell('K8').style = {
    font: { size: 12 },
    border: { bottom: { style: 'thin' } },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', vertical: 'top', wrapText: true },
  };
  sheet.getCell('K12').style = {
    font: { size: 12 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('K14').style = {
    font: { size: 12 },
    border: { bottom: { style: 'thin' } },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', vertical: 'top', wrapText: true },
  };
  sheet.getCell('K16').style = {
    font: { size: 12 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('K18').style = {
    font: { size: 8, name: 'Arial' },
    border: {
      left: { style: 'thin' },
      right: { style: 'thin' },
      top: { style: 'thin' },
    },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', vertical: 'top' },
  };
  sheet.getCell('K19').style = {
    font: { size: 8, name: 'Arial' },
    border: {
      right: { style: 'thin' },
      bottom: { style: 'thin' },
    },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', vertical: 'top' },
  };
  sheet.getCell('K20').style = {
    font: { size: 8, name: 'Arial' },
    border: {
      left: { style: 'thin' },
      right: { style: 'thin' },
      top: { style: 'thin' },
      bottom: { style: 'thin' },
    },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center' },
  };
  sheet.getCell('K21').style = {
    font: { size: 8, name: 'Arial' },
    border: {
      left: { style: 'thin' },
      right: { style: 'thin' },
      top: { style: 'thin' },
      bottom: { style: 'thin' },
    },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center' },
  };
  sheet.getCell('K22').style = {
    font: { size: 8, name: 'Arial' },
    border: {
      left: { style: 'thin' },
      right: { style: 'thin' },
      top: { style: 'thin' },
      bottom: { style: 'thin' },
    },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center' },
  };
  sheet.getCell('K25').style = {
    font: { bold: true, size: 12 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('K26').style = {
    font: { size: 8, name: 'Arial' },
    border: { bottom: { style: 'thin' } },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', vertical: 'middle', wrapText: true },
  };
  sheet.getCell('K27').style = {
    font: { bold: true, size: 8 },
    border: {
      left: { style: 'thin' },
      right: { style: 'thin' },
      top: { style: 'thin' },
    },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', vertical: 'middle', wrapText: true },
  };
  sheet.getCell('K28').style = {
    font: { bold: true, size: 8 },
    border: {
      right: { style: 'thin' },
      bottom: { style: 'thin' },
    },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', vertical: 'middle', wrapText: true },
  };
  sheet.getCell('L2').style = {
    font: { size: 12 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', vertical: 'top', wrapText: true },
  };
  sheet.getCell('L3').style = {
    font: { size: 8 },
    border: { top: { style: 'thin' } },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center' },
  };
  sheet.getCell('L5').style = {
    font: { bold: true, size: 12 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center' },
  };
  sheet.getCell('L6').style = {
    font: { size: 10 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('L8').style = {
    font: { size: 12 },
    border: { bottom: { style: 'thin' } },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', vertical: 'top', wrapText: true },
  };
  sheet.getCell('L12').style = {
    font: { size: 12 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('L14').style = {
    font: { size: 12 },
    border: { bottom: { style: 'thin' } },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', vertical: 'top', wrapText: true },
  };
  sheet.getCell('L16').style = {
    font: { size: 12 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('L18').style = {
    font: { size: 8, name: 'Arial' },

    fill: { type: 'pattern', pattern: 'none' },
  };
  sheet.getCell('L19').style = {
    font: { size: 8, name: 'Arial' },

    fill: { type: 'pattern', pattern: 'none' },
  };
  sheet.getCell('L20').style = {
    font: { size: 8, name: 'Arial' },

    fill: { type: 'pattern', pattern: 'none' },
  };
  sheet.getCell('L21').style = {
    font: { size: 8, name: 'Arial' },

    fill: { type: 'pattern', pattern: 'none' },
  };
  sheet.getCell('L22').style = {
    font: { size: 8, name: 'Arial' },

    fill: { type: 'pattern', pattern: 'none' },
  };
  sheet.getCell('L25').style = {
    font: { bold: true, size: 12 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('L26').style = {
    font: { size: 8, name: 'Arial' },
    border: { bottom: { style: 'thin' } },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', vertical: 'middle', wrapText: true },
  };
  sheet.getCell('L27').style = {
    font: { bold: true, size: 8 },
    border: {
      left: { style: 'thin' },
      right: { style: 'thin' },
      top: { style: 'thin' },
    },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', wrapText: true },
  };
  sheet.getCell('L28').style = {
    font: { size: 8 },
    border: {
      left: { style: 'thin' },
      right: { style: 'thin' },
      bottom: { style: 'thin' },
    },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', vertical: 'top', wrapText: true },
  };
  sheet.getCell('M2').style = {
    font: { size: 12 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', vertical: 'top', wrapText: true },
  };
  sheet.getCell('M3').style = {
    font: { size: 8 },
    border: { top: { style: 'thin' } },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center' },
  };
  sheet.getCell('M5').style = {
    font: { bold: true, size: 12 },
    border: { bottom: { style: 'thin' } },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', vertical: 'top', wrapText: true },
  };
  sheet.getCell('M6').style = {
    font: { size: 10 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('M8').style = {
    font: { size: 12 },
    border: { bottom: { style: 'thin' } },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', vertical: 'top', wrapText: true },
  };
  sheet.getCell('M12').style = {
    font: { size: 12 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('M14').style = {
    font: { size: 12 },
    border: { bottom: { style: 'thin' } },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', vertical: 'top', wrapText: true },
  };
  sheet.getCell('M16').style = {
    font: { size: 12 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('M18').style = {
    font: { size: 8, name: 'Arial' },

    fill: { type: 'pattern', pattern: 'none' },
  };
  sheet.getCell('M19').style = {
    font: { size: 8, name: 'Arial' },

    fill: { type: 'pattern', pattern: 'none' },
  };
  sheet.getCell('M20').style = {
    font: { size: 8, name: 'Arial' },

    fill: { type: 'pattern', pattern: 'none' },
  };
  sheet.getCell('M21').style = {
    font: { size: 8, name: 'Arial' },

    fill: { type: 'pattern', pattern: 'none' },
  };
  sheet.getCell('M22').style = {
    font: { size: 8, name: 'Arial' },

    fill: { type: 'pattern', pattern: 'none' },
  };
  sheet.getCell('M25').style = {
    font: { bold: true, size: 12 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('M26').style = {
    font: { size: 8, name: 'Arial' },
    border: { bottom: { style: 'thin' } },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', vertical: 'middle', wrapText: true },
  };
  sheet.getCell('M27').style = {
    font: { bold: true, size: 8 },
    border: {
      left: { style: 'thin' },
      right: { style: 'thin' },
      top: { style: 'thin' },
    },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', wrapText: true },
  };
  sheet.getCell('M28').style = {
    font: { size: 8 },
    border: {
      left: { style: 'thin' },
      right: { style: 'thin' },
      bottom: { style: 'thin' },
    },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', vertical: 'top', wrapText: true },
  };
  sheet.getCell('N2').style = {
    font: { size: 12 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', vertical: 'top', wrapText: true },
  };
  sheet.getCell('N3').style = {
    font: { size: 8 },
    border: { top: { style: 'thin' } },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center' },
  };
  sheet.getCell('N5').style = {
    font: { bold: true, size: 12 },
    border: { bottom: { style: 'thin' } },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', vertical: 'top', wrapText: true },
  };
  sheet.getCell('N6').style = {
    font: { size: 10 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('N8').style = {
    font: { size: 12 },
    border: { bottom: { style: 'thin' } },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', vertical: 'top', wrapText: true },
  };
  sheet.getCell('N12').style = {
    font: { size: 12 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('N14').style = {
    font: { size: 12 },
    border: { bottom: { style: 'thin' } },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', vertical: 'top', wrapText: true },
  };
  sheet.getCell('N16').style = {
    font: { size: 12 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('N18').style = {
    font: { size: 8, name: 'Arial' },

    fill: { type: 'pattern', pattern: 'none' },
  };
  sheet.getCell('N19').style = {
    font: { size: 8, name: 'Arial' },

    fill: { type: 'pattern', pattern: 'none' },
  };
  sheet.getCell('N20').style = {
    font: { size: 8, name: 'Arial' },

    fill: { type: 'pattern', pattern: 'none' },
  };
  sheet.getCell('N21').style = {
    font: { size: 8, name: 'Arial' },

    fill: { type: 'pattern', pattern: 'none' },
  };
  sheet.getCell('N22').style = {
    font: { size: 8, name: 'Arial' },

    fill: { type: 'pattern', pattern: 'none' },
  };
  sheet.getCell('N25').style = {
    font: { size: 12 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('N26').style = {
    font: { size: 8, name: 'Arial' },
    border: { bottom: { style: 'thin' } },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', vertical: 'middle', wrapText: true },
  };
  sheet.getCell('N27').style = {
    font: { bold: true, size: 8 },
    border: {
      left: { style: 'thin' },
      right: { style: 'thin' },
      top: { style: 'thin' },
    },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', wrapText: true },
  };
  sheet.getCell('N28').style = {
    font: { size: 8 },
    border: {
      left: { style: 'thin' },
      right: { style: 'thin' },
      bottom: { style: 'thin' },
    },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', vertical: 'top', wrapText: true },
  };
  sheet.getCell('O2').style = {
    font: { size: 12 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', vertical: 'top', wrapText: true },
  };
  sheet.getCell('O3').style = {
    font: { size: 8 },
    border: { top: { style: 'thin' } },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center' },
  };
  sheet.getCell('O5').style = {
    font: { size: 10 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('O6').style = {
    font: { size: 10 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('O8').style = {
    font: { size: 12 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('O12').style = {
    font: { size: 12 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('O14').style = {
    font: { size: 12 },
    border: { bottom: { style: 'thin' } },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', vertical: 'top', wrapText: true },
  };
  sheet.getCell('O16').style = {
    font: { size: 12 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('O18').style = {
    font: { size: 8, name: 'Arial' },

    fill: { type: 'pattern', pattern: 'none' },
  };
  sheet.getCell('O19').style = {
    font: { size: 8, name: 'Arial' },

    fill: { type: 'pattern', pattern: 'none' },
  };
  sheet.getCell('O20').style = {
    font: { size: 8, name: 'Arial' },

    fill: { type: 'pattern', pattern: 'none' },
  };
  sheet.getCell('O21').style = {
    font: { size: 8, name: 'Arial' },

    fill: { type: 'pattern', pattern: 'none' },
  };
  sheet.getCell('O22').style = {
    font: { size: 8, name: 'Arial' },

    fill: { type: 'pattern', pattern: 'none' },
  };
  sheet.getCell('O25').style = {
    font: { size: 12 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('O26').style = {
    font: { size: 8, name: 'Arial' },
    border: { bottom: { style: 'thin' } },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', vertical: 'middle', wrapText: true },
  };
  sheet.getCell('O27').style = {
    font: { bold: true, size: 8 },
    border: {
      left: { style: 'thin' },
      right: { style: 'thin' },
      top: { style: 'thin' },
    },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', vertical: 'middle', wrapText: true },
  };
  sheet.getCell('O28').style = {
    font: { bold: true, size: 8 },
    border: {
      left: { style: 'thin' },
      right: { style: 'thin' },
      bottom: { style: 'thin' },
    },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', vertical: 'middle', wrapText: true },
  };
  sheet.getCell('P2').style = {
    font: { size: 12 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', vertical: 'top', wrapText: true },
  };
  sheet.getCell('P3').style = {
    font: { size: 8 },
    border: { top: { style: 'thin' } },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center' },
  };
  sheet.getCell('P5').style = {
    font: { size: 10 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('P6').style = {
    font: { size: 10 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('P8').style = {
    font: { bold: true, size: 12 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'right' },
  };
  sheet.getCell('P12').style = {
    font: { size: 12 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('P14').style = {
    font: { size: 12 },
    border: { bottom: { style: 'thin' } },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', vertical: 'top', wrapText: true },
  };
  sheet.getCell('P16').style = {
    font: { size: 12 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('P18').style = {
    font: { size: 8, name: 'Arial' },

    fill: { type: 'pattern', pattern: 'none' },
  };
  sheet.getCell('P19').style = {
    font: { size: 8, name: 'Arial' },

    fill: { type: 'pattern', pattern: 'none' },
  };
  sheet.getCell('P20').style = {
    font: { size: 8, name: 'Arial' },

    fill: { type: 'pattern', pattern: 'none' },
  };
  sheet.getCell('P21').style = {
    font: { size: 8, name: 'Arial' },

    fill: { type: 'pattern', pattern: 'none' },
  };
  sheet.getCell('P22').style = {
    font: { size: 8, name: 'Arial' },

    fill: { type: 'pattern', pattern: 'none' },
  };
  sheet.getCell('P25').style = {
    font: { size: 12 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('P26').style = {
    font: { size: 8, name: 'Arial' },
    border: { bottom: { style: 'thin' } },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', vertical: 'middle', wrapText: true },
  };
  sheet.getCell('P27').style = {
    font: { bold: true, size: 8 },
    border: {
      left: { style: 'thin' },
      right: { style: 'thin' },
      top: { style: 'thin' },
    },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', vertical: 'middle', wrapText: true },
  };
  sheet.getCell('P28').style = {
    font: { bold: true, size: 8 },
    border: {
      left: { style: 'thin' },
      right: { style: 'thin' },
      bottom: { style: 'thin' },
    },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', vertical: 'middle', wrapText: true },
  };
  sheet.getCell('Q2').style = {
    font: { size: 12 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', vertical: 'top', wrapText: true },
  };
  sheet.getCell('Q3').style = {
    font: { size: 8 },
    border: { top: { style: 'thin' } },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center' },
  };
  sheet.getCell('Q5').style = {
    font: { size: 10 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('Q6').style = {
    font: { size: 10 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('Q8').style = {
    font: { bold: true, size: 12 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'right' },
  };
  sheet.getCell('Q12').style = {
    font: { size: 12 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('Q14').style = {
    font: { size: 12 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('Q16').style = {
    font: { size: 12 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('Q18').style = {
    font: { size: 8, name: 'Arial' },

    fill: { type: 'pattern', pattern: 'none' },
  };
  sheet.getCell('Q19').style = {
    font: { size: 8, name: 'Arial' },

    fill: { type: 'pattern', pattern: 'none' },
  };
  sheet.getCell('Q20').style = {
    font: { size: 8, name: 'Arial' },

    fill: { type: 'pattern', pattern: 'none' },
  };
  sheet.getCell('Q21').style = {
    font: { size: 8, name: 'Arial' },

    fill: { type: 'pattern', pattern: 'none' },
  };
  sheet.getCell('Q22').style = {
    font: { size: 8, name: 'Arial' },

    fill: { type: 'pattern', pattern: 'none' },
  };
  sheet.getCell('Q25').style = {
    font: { size: 12 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('Q26').style = {
    font: { size: 8, name: 'Arial' },
    border: { bottom: { style: 'thin' } },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', vertical: 'middle', wrapText: true },
  };
  sheet.getCell('Q27').style = {
    font: { bold: true, size: 8 },
    border: {
      left: { style: 'thin' },
      right: { style: 'thin' },
      top: { style: 'thin' },
      bottom: { style: 'thin' },
    },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', vertical: 'middle', wrapText: true },
  };
  sheet.getCell('Q28').style = {
    font: { bold: true, size: 8 },
    border: {
      left: { style: 'thin' },
      right: { style: 'thin' },
      top: { style: 'thin' },
      bottom: { style: 'thin' },
    },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', vertical: 'middle', wrapText: true },
  };
  sheet.getCell('R2').style = {
    font: { size: 12 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', vertical: 'top', wrapText: true },
  };
  sheet.getCell('R3').style = {
    font: { size: 8 },
    border: { top: { style: 'thin' } },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center' },
  };
  sheet.getCell('R5').style = {
    font: { size: 10 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('R6').style = {
    font: { size: 10 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('R8').style = {
    font: { size: 12 },
    border: { bottom: { style: 'thin' } },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center' },
  };
  sheet.getCell('R12').style = {
    font: { size: 12 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('R14').style = {
    font: { size: 12 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('R16').style = {
    font: { size: 12 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('R18').style = {
    font: { size: 8, name: 'Arial' },

    fill: { type: 'pattern', pattern: 'none' },
  };
  sheet.getCell('R19').style = {
    font: { size: 8, name: 'Arial' },

    fill: { type: 'pattern', pattern: 'none' },
  };
  sheet.getCell('R20').style = {
    font: { size: 8, name: 'Arial' },

    fill: { type: 'pattern', pattern: 'none' },
  };
  sheet.getCell('R21').style = {
    font: { size: 8, name: 'Arial' },

    fill: { type: 'pattern', pattern: 'none' },
  };
  sheet.getCell('R22').style = {
    font: { size: 8, name: 'Arial' },

    fill: { type: 'pattern', pattern: 'none' },
  };
  sheet.getCell('R25').style = {
    font: { size: 12 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('R26').style = {
    font: { size: 8, name: 'Arial' },
    border: { bottom: { style: 'thin' } },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', vertical: 'middle', wrapText: true },
  };
  sheet.getCell('R27').style = {
    font: { bold: true, size: 8 },
    border: {
      left: { style: 'thin' },
      right: { style: 'thin' },
      top: { style: 'thin' },
      bottom: { style: 'thin' },
    },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', vertical: 'middle', wrapText: true },
  };
  sheet.getCell('R28').style = {
    font: { bold: true, size: 8 },
    border: {
      left: { style: 'thin' },
      right: { style: 'thin' },
      top: { style: 'thin' },
      bottom: { style: 'thin' },
    },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', vertical: 'middle', wrapText: true },
  };
  sheet.getCell('S2').style = {
    font: { size: 12 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', vertical: 'top', wrapText: true },
  };
  sheet.getCell('S3').style = {
    font: { size: 8 },
    border: { top: { style: 'thin' } },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center' },
  };
  sheet.getCell('S5').style = {
    font: { size: 10 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('S6').style = {
    font: { size: 10 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('S8').style = {
    font: { size: 12 },
    border: { bottom: { style: 'thin' } },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center' },
  };
  sheet.getCell('S12').style = {
    font: { size: 12 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('S14').style = {
    font: { size: 12 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('S16').style = {
    font: { size: 12 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('S18').style = {
    font: { size: 8, name: 'Arial' },

    fill: { type: 'pattern', pattern: 'none' },
  };
  sheet.getCell('S19').style = {
    font: { size: 8, name: 'Arial' },

    fill: { type: 'pattern', pattern: 'none' },
  };
  sheet.getCell('S20').style = {
    font: { size: 8, name: 'Arial' },

    fill: { type: 'pattern', pattern: 'none' },
  };
  sheet.getCell('S21').style = {
    font: { size: 8, name: 'Arial' },

    fill: { type: 'pattern', pattern: 'none' },
  };
  sheet.getCell('S22').style = {
    font: { size: 8, name: 'Arial' },

    fill: { type: 'pattern', pattern: 'none' },
  };
  sheet.getCell('S25').style = {
    font: { size: 12 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('S26').style = {
    font: { size: 8, name: 'Arial' },
    border: { bottom: { style: 'thin' } },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', vertical: 'middle', wrapText: true },
  };
  sheet.getCell('S27').style = {
    font: { bold: true, size: 8 },
    border: {
      left: { style: 'thin' },
      right: { style: 'thin' },
      top: { style: 'thin' },
      bottom: { style: 'thin' },
    },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', vertical: 'middle', wrapText: true },
  };
  sheet.getCell('S28').style = {
    font: { bold: true, size: 8 },
    border: {
      left: { style: 'thin' },
      right: { style: 'thin' },
      top: { style: 'thin' },
      bottom: { style: 'thin' },
    },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', vertical: 'middle', wrapText: true },
  };
  sheet.getCell('T2').style = {
    font: { size: 8, name: 'Arial' },

    fill: { type: 'pattern', pattern: 'none' },
  };
  sheet.getCell('T3').style = {
    font: { size: 8, name: 'Arial' },

    fill: { type: 'pattern', pattern: 'none' },
  };
  sheet.getCell('T5').style = {
    font: { size: 10 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('T6').style = {
    font: { size: 10 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('T8').style = {
    font: { size: 12 },
    border: { bottom: { style: 'thin' } },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center' },
  };
  sheet.getCell('T12').style = {
    font: { size: 12 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('T14').style = {
    font: { size: 12 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('T16').style = {
    font: { size: 12 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('T18').style = {
    font: { size: 8, name: 'Arial' },

    fill: { type: 'pattern', pattern: 'none' },
  };
  sheet.getCell('T19').style = {
    font: { size: 8, name: 'Arial' },

    fill: { type: 'pattern', pattern: 'none' },
  };
  sheet.getCell('T20').style = {
    font: { size: 8, name: 'Arial' },

    fill: { type: 'pattern', pattern: 'none' },
  };
  sheet.getCell('T21').style = {
    font: { size: 8, name: 'Arial' },

    fill: { type: 'pattern', pattern: 'none' },
  };
  sheet.getCell('T22').style = {
    font: { size: 8, name: 'Arial' },

    fill: { type: 'pattern', pattern: 'none' },
  };
  sheet.getCell('T25').style = {
    font: { size: 12 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('T26').style = {
    font: { size: 8, name: 'Arial' },
    border: { bottom: { style: 'thin' } },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', vertical: 'middle', wrapText: true },
  };
  sheet.getCell('T27').style = {
    font: { bold: true, size: 8 },
    border: {
      left: { style: 'thin' },
      right: { style: 'thin' },
      top: { style: 'thin' },
    },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', vertical: 'middle', wrapText: true },
  };
  sheet.getCell('T28').style = {
    font: { bold: true, size: 8 },
    border: {
      left: { style: 'thin' },
      bottom: { style: 'thin' },
    },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', vertical: 'middle', wrapText: true },
  };
  sheet.getCell('U18').style = {
    font: { size: 8, name: 'Arial' },

    fill: { type: 'pattern', pattern: 'none' },
  };
  sheet.getCell('U19').style = {
    font: { size: 8, name: 'Arial' },

    fill: { type: 'pattern', pattern: 'none' },
  };
  sheet.getCell('U20').style = {
    font: { size: 8, name: 'Arial' },

    fill: { type: 'pattern', pattern: 'none' },
  };
  sheet.getCell('U21').style = {
    font: { size: 8, name: 'Arial' },

    fill: { type: 'pattern', pattern: 'none' },
  };
  sheet.getCell('U22').style = {
    font: { size: 8, name: 'Arial' },

    fill: { type: 'pattern', pattern: 'none' },
  };
  sheet.getCell('U25').style = {
    font: { size: 12 },

    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'left' },
  };
  sheet.getCell('U26').style = {
    font: { size: 8, name: 'Arial' },
    border: { bottom: { style: 'thin' } },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', vertical: 'middle', wrapText: true },
  };
  sheet.getCell('U27').style = {
    font: { bold: true, size: 8 },
    border: {
      left: { style: 'thin' },
      right: { style: 'thin' },
      top: { style: 'thin' },
    },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', vertical: 'middle', wrapText: true },
  };
  sheet.getCell('U28').style = {
    font: { bold: true, size: 8 },
    border: {
      right: { style: 'thin' },
      bottom: { style: 'thin' },
    },
    fill: { type: 'pattern', pattern: 'none' },
    alignment: { horizontal: 'center', vertical: 'middle', wrapText: true },
  };

  const stayleFooterTable = {
    alignment: {
      vertical: 'middle',
      horizontal: 'center',
      wrapText: 'true',
    },
    border: {
      left: { style: 'thin' },
      right: { style: 'thin' },
      top: { style: 'thin' },
      bottom: { style: 'thin' },
    },
  };

  const lastRow = sheet.lastRow;
  const lastCellMerge = lastRow._number + 1;
  const lastB = sheet.getCell('B' + lastCellMerge);
  lastB.style = {
    border: {
      left: { style: 'thin' },
      right: { style: 'thin' },
      top: { style: 'thin' },
      bottom: { style: 'thin' },
    },
  };
  const lastO = sheet.getCell('O' + lastCellMerge);
  const lastP = sheet.getCell('P' + lastCellMerge);
  const lastQ = sheet.getCell('Q' + lastCellMerge);
  const lastR = sheet.getCell('R' + lastCellMerge);
  const lastT = sheet.getCell('T' + lastCellMerge);

  lastO.style = stayleFooterTable;
  lastP.style = stayleFooterTable;
  lastQ.style = stayleFooterTable;
  lastR.style = stayleFooterTable;
  lastT.style = stayleFooterTable;

  sheet.mergeCells('B' + lastCellMerge, 'N' + lastCellMerge);
  sheet.mergeCells('R' + lastCellMerge, 'S' + lastCellMerge);
  sheet.mergeCells('T' + lastCellMerge, 'U' + lastCellMerge);
  lastB.value =
    'Итоговая оценка уровня профессионального риска на рабочем месте';
  return workbook.xlsx
    .writeBuffer()
    .then((buffer) =>
      FileSaver.saveAs(
        new Blob([buffer]),
        `${Date.now()}_Карты опасностей.xlsx`
      )
    )
    .catch((err) => console.log('Error writing excel export', err));
};

export default mapOPR;
