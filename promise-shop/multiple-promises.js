const all = (promiseOne, promiseTwo) => {
  return new Promise( (fulfill, reject) => {
    let counter = 0;
    let array = [];

    promiseOne.then( (v) => {
      array[0] = v;
      counter++;

      if (counter >= 2) {
        fulfill(array);
      }
    });

    promiseTwo.then( (v) => {
      array[1] = v;
      counter++;

      if (counter >= 2) {
        fulfill(array);
      }
    });
  });
}

all(getPromise1(), getPromise2()).then(console.log);
