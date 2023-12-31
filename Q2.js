/* Question : Calculate the time it takes to calculate the time it takes between the a setTimeout call and the inner function actually running.

Basically according to my understanding of js the setTimeout function executes the inner function after the timer delay give inside setTimeout call expires.

example : setTimeout(myFunction,1000);
here control is passed to myFunction after 1000 Miliseconds.

But there's a catch the setTimeout call takes the callback function out of global execution context and puts it into callback queue so that becomes a factor too.

when the global execution context is popped off of the call stack the microtask queue functions execute and finally after that our inner function of setTimeout call is executed.  

Which can be calculated from code below : 

*/


const startTime = Date.now();

// Suppose there are some time consuming actions here 

setTimeout(()=>{
    console.log(`${Date.now() - startTime} milliseconds`);
},1000);

// Suppose there are some time consuming actions here
