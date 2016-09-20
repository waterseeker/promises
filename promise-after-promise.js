first()
    .then(function(someSecretValue) {
        return second(someSecretValue);
    }).then(console.log);
    
// first().then(second).then(console.log);