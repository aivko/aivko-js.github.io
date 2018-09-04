export default function insertData(id, block) {
  let table = document.getElementById(id);
  for (let i = 0; i < block.length; i++) {
    let row = table.insertRow(i);
    row.insertCell(0).innerHTML = block[i].name;
    row.insertCell(1).innerHTML = (block[i].value / block[i].count).toFixed(2);
  }
}