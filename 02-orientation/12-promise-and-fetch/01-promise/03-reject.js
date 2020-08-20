'use strict';

var promise = new Promise(function (fulfill, reject) {
    setTimeout(reject, 300, new Error('REJECTED!'))
  });
  
function onReject (error) {
    console.log(error.message);
}

promise.then(null, onReject);
