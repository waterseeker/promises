var p = Promise.resolve(5);
var q = Promise.reject('REJECTED!');

p.then(console.log);
q.catch(console.error);
