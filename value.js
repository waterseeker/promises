function attachTitle(name) {
    return 'DR. ' + name;
}

var promise1 = Promise.resolve('MANHATTAN');

// p.then(function(lastName) {
//     return attachTitle(lastName);
// }).then(function(nameWithTitle) {
//     console.log(nameWithTitle);
// });

promise1.then(attachTitle).then(console.log);