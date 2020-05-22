const func = ((timeOutInput) => {
  console.log(`Hello after ${timeOutInput} seconds`);
});

setTimeout(func, 4 * 1000, 4);

setTimeout(func, 8 * 1000, 8);

setInterval(func, 2 * 1000, 2);


// For: func(arg1, arg2, arg3, ...)
// We can use: setTimeout(func, delay, arg1, arg2, arg3, ...)
