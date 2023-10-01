function openTab(evt, tabName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

function clearTableStyles(tableId) {
  const table = document.getElementById(tableId);

  if (table) {
    const rows = table.querySelectorAll('tbody tr');
    rows.forEach(row => {
      const cells = row.querySelectorAll('td');
      cells.forEach(cell => {
        cell.style.backgroundColor = '';
        cell.style.fontWeight = '';
      });
    });
  }
}