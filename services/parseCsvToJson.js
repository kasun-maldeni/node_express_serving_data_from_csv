const fs = require('fs');

const readFile = fileName => fs.readFileSync(fileName, 'utf8');

const getLines = csvData => {
  return csvData
    .split('\n')
    .map(line => line.split(','));
}

const recordToObj = (columns, record) => {
  return columns
    .reduce((recordAsObj, col, i) => {
      recordAsObj[col] = record[i]
      return recordAsObj
    }, {});
}

module.exports = function parseCSVToJSON(fileName) {
  const csvData = readFile(fileName);
  let [columns, ...records] = getLines(csvData);
  return records.map(record => recordToObj(columns, record));
};
