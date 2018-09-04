import {parseData, sum} from './formatData';
import insertData from './generateDataTable';

parseData(sum.departments, 'DEPARTMENT');
parseData(sum.months, 'MONTH');

insertData('departments', sum.departments);
insertData('months', sum.months);

document.getElementById('total').innerHTML = sum.totalSum.toFixed(2);