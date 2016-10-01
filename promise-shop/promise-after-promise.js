const firstPromise = first()

const secondPromise = firstPromise.then( (a) => { return second(a) })

secondPromise.then(console.log)
