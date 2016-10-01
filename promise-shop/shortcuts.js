var promise = Promise.resolve('FULFILLED!')
var promise = Promise.reject(new Error('REJECTED!'))

promise.then(console.log)
promise.catch( () => { console.log(error.message) })
