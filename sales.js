//stores the min/max hourly customers with the average cookie sales
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var saleInfo = document.getElementById('saleInfo');

//use a method of that object to generate a random number of customers per hour
// function Sales(location, minCust, maxCust, averageSale){
//   this.location = location;
//   this.minCust = minCust;
//   this.maxCust = maxCust;
//   this.averageSale = averageSale;
//   Sales.potatos.push(this);
// }
// Sales.potatos = [];
// Sales.prototype.render = function(){
//   var newTR = document.createElement('tr');
//   for(var i = 0; i < headers.length; i++){
//     var newTD = document.createElement('td');
//     newTD.textContent = this[headers[i]];
//     newTR.appendChild(newTD);
//   }
//   salesInfo.appendChild(newTR);
// }
// var seattle = new Sales('Seattle', 23, 65, 6.3);
var seattle = {
  location: 'Seattle',
  minCust: 23,
  maxCust: 65,
  averageSale: 6.3,
  eachHourTotal: [],
  totalForDay: 0,
  totalCookies: function(){
    for(var i = 0; i < hours.length; i++){
      var hourTotal = Math.floor(getRandom(this.minCust, this.maxCust)*this.averageSale);
      this.eachHourTotal.push (hourTotal);
      this.totalForDay += hourTotal;
    }
  }
};
seattle.totalCookies(); 
console.log(typeof seattle);
// var tokyo = new Sales('Tokyo', 3, 24, 1.2);
var tokyo = {
  location: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  averageSale: 1.2,
  eachHourTotal: [],
  totalForDay: 0,
  totalCookies: function(){
    for(var i = 0; i < hours.length; i++){
      var hourTotal = Math.floor(getRandom(this.minCust, this.maxCust)*this.averageSale);
      this.eachHourTotal.push (hourTotal);
      this.totalForDay += hourTotal;
    }
  }
};
tokyo.totalCookies();
// var dubai = new Sales('Dubai', 11, 38, 3.7);
var dubai = {
  location: 'Dubai',
  minCust: 11,
  maxCust: 38,
  averageSale: 3.7,
  eachHourTotal: [],
  totalForDay: 0,
  totalCookies: function(){
    for(var i = 0; i < hours.length; i++){
      var hourTotal = Math.floor(getRandom(this.minCust, this.maxCust)*this.averageSale);
      this.eachHourTotal.push (hourTotal);
      this.totalForDay += hourTotal;
    }
  }
};
dubai.totalCookies();
// var paris = new Sales('Paris', 20, 38, 2.3);
var paris = {
  location: 'Paris',
  minCust: 20,
  maxCust: 38,
  averageSale: 2.3,
  eachHourTotal: [],
  totalForDay: 0,
  totalCookies: function(){
    for(var i = 0; i < hours.length; i++){
      var hourTotal = Math.floor(getRandom(this.minCust, this.maxCust)*this.averageSale);
      this.eachHourTotal.push (hourTotal);
      this.totalForDay += hourTotal;
    }
  }
};
paris.totalCookies();
// var lima = new Sales('Lima', 2, 16, 4.6);
var lima = {
  location: 'Lima',
  minCust: 2,
  maxCust: 16,
  averageSale: 4.6,
  eachHourTotal: [],
  totalForDay: 0,
  totalCookies: function(){
    for(var i = 0; i < hours.length; i++){
      var hourTotal = Math.floor(getRandom(this.minCust, this.maxCust)*this.averageSale);
      this.eachHourTotal.push (hourTotal);
      this.totalForDay += hourTotal;
    }
  }
};
lima.totalCookies();
// function createHeader(){
//   var createTR = document.createElement('tr');
//   for(var i = 0; i < headers.length; i++){
//     var createTH = document.createElement('th');
//     createTH.textContent = headers{i};
//     createTR.appendChild(createTH);
//   }
//   salesInfo.appendChild(createTR);
// }
// function getData(){
//   createHeader();
//   for(var i = 0; i < Sales.potatos.length; i++) {
//     Sales.potatos[i].render();
//   }
// }
//used https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random for help with the math
function getRandom(minCust, maxCust){
  return Math.floor(Math.random()*(maxCust-minCust+1) + minCust);
}
function render(object){
  var target = document.getElementById('target');
  var location = document.createElement('h1');
  location.textContent = `${object.location}`;
  target.appendChild(location);
  var ulTag = document.createElement('ul');
  for(var i = 0; i < hours.length; i ++){
    var liTag = document.createElement('li');
    liTag.textContent= `${hours[i]}: ${object.eachHourTotal[i]} cookies`;
    ulTag.appendChild(liTag);
  }
  liTag = document.createElement('li');
  liTag.textContent = `Total: ${object.totalForDay} cookies`;
  ulTag.appendChild(liTag);
  target.appendChild(ulTag);

}

render(seattle);
render(tokyo);
render(dubai);
render(paris);
render(lima);


//calculate and store simulated amounts of cookies purchased each hour at each location along
//store the results for each location in its own array
//display the values in the arrays as an ul
//calc the sum of these hourly tottals
