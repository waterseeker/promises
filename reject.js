var p = new Promise(function(resolve, reject) {
    setTimeout(function() {
        var e = new Error('REJECTED!');
        reject(e);
    }, 300);
});


function onReject(error) {
    console.log(error.message);
}

p.then(null, function(error) {
    console.log(error.message);
});
