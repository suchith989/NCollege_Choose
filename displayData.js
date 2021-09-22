const renderTable = (collegeList, casteChosen) => {
//table - TABLE TH - TABLE HEAD TR - TABLE ROW
  var table = document.getElementById("mytable");
  table.innerHTML = "";

  var th1 = document.createElement("th");
  var th2 = document.createElement("th");
  var th3 = document.createElement("th");

  var tr = document.createElement("tr");

  var textnode1 = document.createTextNode("College Name");
  var textnode2 = document.createTextNode("Branch");
  var textnode3 = document.createTextNode("Cut-Off");

  th1.appendChild(textnode1);
  th2.appendChild(textnode2);
  th3.appendChild(textnode3);

  tr.appendChild(th1);
  tr.appendChild(th2);
  tr.appendChild(th3);

  table.appendChild(tr);

  for (var i = 1; i < collegeList.length; i++) {
    var tr1 = document.createElement("tr");

    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");

    var text1 = document.createTextNode(collegeList[i]["INSTITUTE NAME"]);
    var text2 = document.createTextNode(collegeList[i]["BRANCH NAME"]);
    var text3 = document.createTextNode(collegeList[i][casteChosen]);

    td1.appendChild(text1);
    td2.appendChild(text2);
    td3.appendChild(text3);

    tr1.appendChild(td1);
    tr1.appendChild(td2);
    tr1.appendChild(td3);

    table.appendChild(tr1);
  }

};

export {renderTable};