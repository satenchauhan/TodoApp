export function* generatorFunc() {
  yield {name: 'saten', city: 'kanpur'},
    yield {mobile: '9939923232', country: 'India'};
  yield {job: 'developer', type: 'Mobile'};
  return 10 + 30;
}

/* var promise1 = Promise.resolve(8);
var promise2 = Math.random() > 0.1 ? 12 : Promise.reject(0);
var promise3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Saten Promise'));
});

Promise.all([promise1, promise2, promise3])
  .then(val => {
    console.log('val:', val);
  })
  .catch(val => {
    console.log('error:', val);
  }); */
