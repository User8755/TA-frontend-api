import * as Excel from 'exceljs/dist/exceljs.min.js';
var FileSaver = require('file-saver');
const ListHazards = (arr) => {
  const workbook = new Excel.Workbook();
  const sheet = workbook.addWorksheet('sheet');

  const cellA16 = sheet.getCell('A16');
  const cellB16 = sheet.getCell('B16');
  const cellC16 = sheet.getCell('C16');
  const cellD16 = sheet.getCell('D16');
  const cellE16 = sheet.getCell('E16');

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
      name: 'Arial',
    },
  };

  const textRotation = {
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
      textRotation: 'vertical',
    },
    font: {
      size: 8,
      bold: true,
      name: 'Arial',
    },
  };

  cellA16.style = border;
  cellC16.style = border;
  cellE16.style = border;

  cellB16.style = textRotation;
  cellD16.style = textRotation;

  cellA16.value = '№ п/п';
  cellB16.value = '№ опасности*';
  cellC16.value = 'Наименование опасности';
  cellD16.value = '№ опасного события*';
  cellE16.value = 'Наименование опасного события';

  sheet.getColumn(1).width = 6;
  sheet.getColumn(2).width = 8;
  sheet.getColumn(3).width = 20;
  sheet.getColumn(4).width = 8;
  sheet.getColumn(5).width = 20;
  let i = 17;
  let col = 6;

  const table2 = {};

  let res = arr.reduce((accumulator, currentValue) => {
    if (
      accumulator.every(
        (item) =>
          !(
            item.dangerEvent776Id === currentValue.dangerEvent776Id &&
            item.dangerEventID === currentValue.dangerEventID
          )
      )
    )
      accumulator.push(currentValue);
    return accumulator;
  }, []);
  console.log(res);
  const resProff = arr.filter(
    ({ num }) => !table2[num] && (table2[num] = 1)
  );

  res.forEach((e) => {
    sheet.getCell('A' + i).value = e.number;
    sheet.getCell('B' + i).value = e.danger776Id || e.dangerGroupId;
    sheet.getCell('C' + i).value = e.danger776 || e.dangerGroup;
    sheet.getCell('D' + i).value = e.dangerEvent776Id || e.dangerEventID;
    sheet.getCell('E' + i).value = e.dangerEvent776 || e.dangerEvent;

    sheet.getCell('A' + i).style = border;
    sheet.getCell('B' + i).style = border;
    sheet.getCell('C' + i).style = border;
    sheet.getCell('D' + i).style = border;
    sheet.getCell('E' + i).style = border;
    console.log(i);
    i++;
  });
  const rowAddress = [];

  resProff.forEach((e) => {
    const currentCell = sheet.getColumn(col).letter;
    rowAddress.push(currentCell + 16);

    sheet.getCell(currentCell + 16).value = e.num;
    sheet.getCell(currentCell + 16).style = border;
    sheet.getCell(currentCell + 16).width = 20;
    col++;
  });

  rowAddress.forEach((address) => {
    console.log(sheet.getCell(address)._column.letter);
    const filterJobValue = arr.filter(
      (element) => element.num === sheet.getCell(address).value
    );

    // while (17 <= colStr) {
    filterJobValue.forEach((v) => {
      let colStr = i;
      while (17 <= colStr) {
        if (sheet.getCell('D' + colStr).value === v.dangerEvent776Id) {
          console.log(sheet.getCell('D' + colStr).value);
          sheet.getCell(sheet.getCell(address)._column.letter + colStr).value =
            '+';
        } else if (sheet.getCell('D' + colStr).value === v.dangerEventID) {
          sheet.getCell(sheet.getCell(address)._column.letter + colStr).value =
            '+';
        }
        colStr -= 1;
      }
    });

    // }

    console.log(filterJobValue);
  });

  return workbook.xlsx
    .writeBuffer()
    .then((buffer) =>
      FileSaver.saveAs(
        new Blob([buffer]),
        `${Date.now()}_Реестр опасностей.xlsx`
      )
    )
    .catch((err) => console.log('Error writing excel export', err));
};

export default ListHazards;
