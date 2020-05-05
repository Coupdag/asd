// import { reduce, find } from "async";

// const myArray = [1,2,3,4]

// myArray.includes()

// map();

// filter();

// reduce();

// find();

// includes();

const myPromise = new Promise ((resolve, reject) => {
    if (false) {
    setTimeout(() => {
        resolve('I have succeeded');
    }, 1000);
    } else {
        reject('I have failed');
    }
});

myPromise
.then(value => console.log(value))
.catch(rejectValue => console.log(rejectValue));