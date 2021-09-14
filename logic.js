const form = [  document.getElementById('name'), 
                document.getElementById('date'), 
                document.getElementById('amount')
             ]

var dataArray = [];

var dataTable = document.getElementById('dataTable');



function printTable(){
    var newRow;
    for (var i = 0; i < (dataArray.length); i++){
        newRow = dataTable.insertRow(i+1);
        newRow.insertCell(0).innerHTML = dataArray[i].name;
        newRow.insertCell(1).innerHTML = dataArray[i].date;
        newRow.insertCell(2).innerHTML = "$" + dataArray[i].amount;
        newRow.insertCell(3).innerHTML =  "<button type='button' onClick='removeFromList(" + (i) + ")'>❌</button>";
    }
}

function deleteTable(){
    for(var i = dataTable.rows.length-1; i > 0; i--){
        dataTable.deleteRow(i);
    }
}

function addToList() {
    if(form[0].value != "" && form[1].value != "" && form[2].value != "" && !isNaN(form[2].value)){
        deleteTable();
        dataArray.push({"name": form[0].value, "date": form[1].value, "amount": form[2].value});
        printTable();
    }
}

function removeFromList(index) {
    deleteTable();
    dataArray.splice(index, 1);
    printTable();
}

