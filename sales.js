//stores the min/max hourly customers with the average cookie sales
'use strict';
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var table = document.getElementById('target');
SalesPerLocation.all = [];

//use a method of that object to generate a random number of customers per hour
function SalesPerLocation(location, minCust, maxCust, averageSale){
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.averageSale = averageSale;
  this.sales = [];
  this.total = 0;
  this.calculateSales();
  SalesPerLocation.all.push(this);
  this.renderStoreData();
}
SalesPerLocation.prototype.calculateSales = function(){
  for(var i=0; i<hours.length; i++){
    var math = Math.floor(getRandom(this.minCust, this.maxCust)*this.averageSale);
    this.total +=math;
    this.sales.push(math);
  }
};



function headerRow(){
  var newTR = document.createElement('tr');
  var newTH = document.createElement('th');
  newTH.textContent = '';
  newTR.appendChild(newTH);
  for(var i=0; i < hours.length; i++){
    newTH = document.createElement('th');
    newTH.textContent = `${hours[i]}`;
    newTR.appendChild(newTH);
  }
  newTH = document.createElement('th');
  newTH.textContent = 'Daily Total of Cookies';
  newTR.appendChild(newTH);
  table.appendChild(newTR);
}

function footerRow(){
  var newTR = document.createElement('tr');
  var newTD = document.createElement('td');
  newTD.textContent = 'Totals';
  newTR.appendChild(newTD);
  var totalOfTotals = 0;
  for(var i = 0; i<hours.length; i++){
    var counter = 0;
    newTD = document.createElement('td');
    for(var j = 0; j< SalesPerLocation.all.length; j++){
      var saleCurrentHour = SalesPerLocation.all[j].sales[i];
      counter+=saleCurrentHour;
    }
    newTD.textContent = `${counter}`;
    totalOfTotals+=counter;
    newTR.appendChild(newTD);
  }
  newTD=document.createElement('td');
  newTD.textContent = `${totalOfTotals}`;
  newTR.appendChild(newTD);
  table.appendChild(newTR);
}

SalesPerLocation.prototype.renderStoreData = function(){
  var newTR = document.createElement('tr');
  var newTH = document.createElement('th');
  newTH.textContent = `${this.location}`;
  newTR.appendChild(newTH);
  for(var i = 0; i < hours.length; i++){
    var newTD = document.createElement('td');
    newTD.textContent = this.sales[i];
    newTR.appendChild(newTD);
  }
  newTD = document.createElement('td');
  newTD.textContent = `${this.total}`;
  newTR.appendChild(newTD);
  table.appendChild(newTR);
};
headerRow();

// seattle.renderStoreData();
var seattle = new SalesPerLocation('Seattle', 23, 65, 6.3);

var tokyo = new SalesPerLocation('Tokyo', 3, 24, 1.2);

var dubai = new SalesPerLocation('Dubai', 11, 38, 3.7);

var paris = new SalesPerLocation('Paris', 20, 38, 2.3);

var lima = new SalesPerLocation('Lima', 2, 16, 4.6);
console.log(SalesPerLocation.all);
footerRow();

function getRandom(minCust, maxCust){
  return Math.floor(Math.random()*(maxCust-minCust+1) + minCust);
}

var storeForm= document.getElementById('newStoreForm');
storeForm.addEventListener('submit', handleSubmit);
function handleSubmit (event){
  event.preventDefault();
  var location = event.target.LocationName.value;
  var minCust = event.target.MinCust.value;
  var maxCust = event.target.MaxCust.value;
  var average = event.target.Average.value;
new SalesPerLocation(location, minCust, maxCust, average);
  console.log(event);
}