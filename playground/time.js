var moment = require('moment');

// Jan 1st 1970 00:00:10 am

var someTimestamp = moment().valueOf();
console.log(someTimestamp);

var date = moment();
// date.add(100, 'years').subtract(9, 'months');
// console.log(date.format('MMM Do YYYY'));

// 10:35 am

console.log(date.format('hh:mm a'));
