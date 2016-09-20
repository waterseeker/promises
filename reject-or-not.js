var p = new Promise(function(resolve, reject) {
    resolve('I FIRED');
    reject(new Error('I DID NOT FIRE'));
});

function onRejected(error) {
    // console.log(error.message);
    console.log(error.getMonth());
}

p.then(console.log, onRejected);

// p.then(function(success) {
//     console.log(success);
// }, function(error) {
//     console.log(error.message);
// });