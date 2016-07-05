function showData(element, json) {
  var div = document.getElementById(element);
  var array = [];
  var table = document.createElement("table");
  var caption = document.createElement("caption");
  var thead = document.createElement("thead");
  var tbody = document.createElement("tbody");
  for(var title in example) {
    caption.textContent = title;
    array = json[title];
    //console.log(title);
  }
  table.appendChild(caption);

  for(var i = 0; i < array.length; i++) {
    var tr = document.createElement("tr");
    for(var attributes in array[i]) {
      var th = document.createElement("th");
      th.textContent = attributes;
      //console.log(attributes);
      tr.appendChild(th);
    }
    thead.appendChild(tr);
    break;
  }
  table.appendChild(thead);

  for(var i = 0; i < array.length; i++) {
    var tr = document.createElement("tr");
    for(var attributes in array[i]) {
      var td = document.createElement("td");
      td.textContent = array[i][attributes];
      tr.appendChild(td);
      //console.log(array[i][attributes]);
    }
    tbody.appendChild(tr);
  }
  table.appendChild(tbody);
  div.appendChild(table);
}
