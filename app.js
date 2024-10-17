

const rowSelect = document.getElementById('row-select');
const columnSelect = document.getElementById('column-select');
const table = document.getElementById('myTable');
const resultDiv = document.getElementById('result');

// funkcja wyświetlająca wartość komórki o wybranych współrzędnych
function searchTable() {
  const row = parseInt(rowSelect.value);
  const col = parseInt(columnSelect.value);
  
  const cell = table.rows[row].cells[col];
  const value = cell.innerHTML;
  
  resultDiv.innerHTML = `Żuraw min: ${value}`;
  resultDiv.style.display = ''; // wyświetl wynik
}

// reakcja na zmianę wyboru wiersza lub kolumny
rowSelect.addEventListener('change', searchTable);
columnSelect.addEventListener('change', searchTable);



