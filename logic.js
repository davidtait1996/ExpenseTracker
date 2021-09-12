



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
    if(dataTable.rows.length > 0){
        for(var i = dataArray.length; i > 0; i--){
            dataTable.deleteRow(i);
        }
    }
}


function addToList() {
    console.log(dataTable.rows.length);
    deleteTable();
    console.log(dataTable.rows.length);
    dataArray.push({"name": form[0].value, "date": form[1].value, "amount": form[2].value});
    printTable();
    console.log(dataTable.rows.length);
}

function removeFromList(index) {
    console.log(dataTable.rows.length);
    deleteTable();
    console.log(dataTable.rows.length);
    dataArray.splice(index, 1);
    printTable();
    console.log(dataTable.rows.length);
}

