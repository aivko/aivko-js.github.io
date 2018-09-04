import readFile from '../data'

const fileData = readFile().split(/\n/);

const data = fileData.map((item) => {
  return item.trim();
});
const titles = data.shift().split(',');
const [MONTH, DEPARTMENT, EMPLOYEE, AMOUNT] = titles;

const formatData = data.map((row) => row.split(',')
    .reduce((previousValue, currentItem, index) => {
      previousValue[titles[index]] = currentItem.trim();
      return previousValue;
    }, {}),
);

const sum = {
  totalSum: 0,
  departments: [],
  months: [],
};
let department = [];
let months = [];

formatData.forEach(item => {
  if (item[AMOUNT]) {
    sum.totalSum += parseFloat(item[AMOUNT]);
  }

  if (!department.includes(item[DEPARTMENT]) && item[DEPARTMENT]) {
    sum.departments.push({name: item[DEPARTMENT], value: 0, count: 0});
    department.push(item[DEPARTMENT]);
  }

  if (!months.includes(item[MONTH]) && item[MONTH]) {
    sum.months.push({name: item[MONTH], value: 0, count: 0});
    months.push(item[MONTH]);
  }
});

function parseData(block, elem) {
  for (let i = 0; i < block.length; i++) {
    formatData.forEach((item) => {
      if (item[elem] === block[i].name && item[elem]) {
        block[i].value += parseFloat(item[AMOUNT]);
        block[i].count++;
      }
    });
  }
}

export {sum, parseData}
