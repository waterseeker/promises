var p = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('FULFILLED!');
    }, 300);
});

p.then(console.log);
