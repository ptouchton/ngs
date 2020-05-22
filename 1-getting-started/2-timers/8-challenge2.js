// Print "Hello World"
// Every second
// And stop after 5 times

// After 5 times. Print "Done" and let Node exit.
const func = (count) => {
    console.log(`Hello World #${count}`);
}

let tmr = 0;
for (let index = 1; index < 6; index++) {
    tmr = setTimeout(func, 1*1000, index)
}

let counter = 0;
const intId = setInterval(() => {
    console.log('Hello World');
    counter += 1;

    if (counter === 5){
        console.log('Done');
        clearInterval(intId);
    }
}, 1000);


