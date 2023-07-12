function createTable() {
  const body = document.querySelector('body');
  const table = document.createElement('table');
  body.appendChild(table);
  for (let i = 0; i < 10; i++) {
    const row = table.insertRow(i);

    for (let j = 0; j < 10; j++) {
      const cell = row.insertCell(j);
      const number = i * 10 + j + 1;
      cell.innerHTML = number;
    }
  }
}

const button = document.querySelector('button');
button.addEventListener('click', createTable);
