const style = document.createElement('style');
style.innerHTML = `
  select {
    width: 70px;
    overflow: hidden;
    width: 100%;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  border: none;
  text-align: center;
  font-family:'amiri', serif;
  font-size: 14px;
  }
    `;
document.head.appendChild(style);

const tables = document.querySelectorAll('table:has(+ div.pagebreak)')
for (const table of tables) {
  var cells = table.getElementsByTagName('td')
  for (var i=0, len=cells.length; i<len; i++){
    if (cells[i].innerHTML === "" && cells[i].classList.contains('test') && (i%2===0)) {
      cells[i].innerHTML = `<select name="decision" id="decision">
      <option value="مرفوض">مرفوض</option>
      <option value="مقبول">مقبول</option>
      </select>`;
    }
  }
}
