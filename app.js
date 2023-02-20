const express = require('express');

const app = express();

// Asynchronous

// console.log(" I ");

// console.log(" eat ");

// setTimeout(() => {console.log(" spoon ");
// }, 4000);

// console.log(" ice cream ");

// console.log(" with a ");


//callBack function - calling a function inside another function

// function one (call_two) {
//     console.log(" step 1 complete. please call step 2 ");
//     call_two()
// }

// function two () {
//     console.log(" step 2 ")
// }

// one(two);

//Ice Cream Production Begins

// create order and production functions for ice cream

const stocks = {
    Fruits : ["Strawberry", "Grapes", "Banana", "Apple"],
Liquid : ["Water", "Ice"],
Holder : ["Cone", "Cup", "Stick"],
Toppings : ["Chocolate", "Peanuts"],
};


// const order = (Fruit_name, call_production) => {

//     setTimeout(() => {
//         console.log(`${stocks.Fruits[Fruit_name]} was selected.`);

//         call_production();

//     }, 2000);
        
       
// };

// const production = () => { 
    
//     setTimeout(() => {
//         console.log("Production has started");

//         setTimeout(() => {
//             console.log("The fruit has been chopped");

//             setTimeout(() => {
//                 console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} were added`);

//                 setTimeout(() => {
//                     console.log('The machine was started successfully');

//                     setTimeout(() => {
//                         console.log(`Ice cream was placed in the ${stocks.Holder[0]}`);

//                         setTimeout(() => {
//                             console.log(`${stocks.Tappings[0]} was added as toppings`);

//                             setTimeout(() => {
//                                 console.log("Serve Ice cream");
//                             }, 2000);
//                         }, 3000);
//                     }, 2000);
//                 }, 1000)
//             }, 1000);
//         }, 2000);
//     }, 0000);

// };

// order(2, production);

// PROMISE - A SOLUTION TO CALLBACK HELL

const is_shop_open = true;

// const order = (time, work) => {

//     return new Promise((resolve, reject) => {
//         if(is_shop_open){

//             setTimeout(() => {
//                 resolve(work())
//             }, time)

            
//         }

//         else{
//             reject(console.log("Our shop is closed"));
//         }
//     });
// };

// order(2000, ()=>console.log(`${stocks.Fruits[0]} was selected`))

// //Promise Chaining - then/ then operator(resolve and return)

// .then(()=>{

//     return order(0000, ()=> console.log("Production has started"));
// })

// .then(()=>{

//     return order(2000, ()=>console.log("The fruit was chopped"))
// })

// .then(()=>{

//     return order(1000, ()=>{
//         console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} were selected`)
//     })
// })

// .then(()=>{

//     return order(1000, ()=>console.log("Start the machine"))
// })

// .then(()=>{

//     return order(2000, ()=>console.log(`Ice cream is placed in ${stocks.Holder[0]}`))
// })

// .then(()=>{

//     return order(3000, ()=>console.log(`${stocks.Toppings[0]} was selected`))
// })


// .then(()=>{

//     return order(2000, ()=> console.log("Ice cream was served"))
// })

// //Let understand the Error Handling part - when our promise is rejected if false/true

// .catch(()=>{
//     console.log("Customer left")
// })

// // .finally - Set to True or False; it will run either ways

// .finally(() =>{
//     console.log("Day ended - Shop is closed!")
// })


// Async / Await - Better way to write promises
//First look at Promises Vs Async/Await

// const order = () => {

//     return new Promise((resolve, reject) => {
//         if(true){
//             resolve()            
//         }
//         else{
//             reject()
//         }
//     })

// }

// order()
// .then()
// .then()
// .then()
// .catch()
// .finally()


// async function order() {
//     try{
//         await abc;
//     }
//     catch(error){
//         console.log("abc doesn't exist, error")
//     }

//     finally{
//         console.log("runs code anyways")
//     }

// }

// order().then(() => {
//     console.log("This is .then handler of Async/Await")

// });

// Let's now look at Await keyword in details by creating error function

// const toppings_choice = () => {

//     return new Promise((resolve, reject) => {

//         setTimeout(() => {
//             resolve(console.log("Which topping would you love?"));
            
//         }, 3000);
//     });
// };


// async function kitchen (){
//     console.log(" A ")
//     console.log(" B ")
//     console.log(" C ")

//     await toppings_choice()

//     console.log(" D ")
//     console.log(" E ")
// }

// kitchen()

// console.log("Doing the dishes")
// console.log("Cleaning the table")
// console.log("Taking peoples orders")

// Let us now open our shop - Time function as we form Relationships btw Time and Work

function time(ms){
    return new Promise((resolve, reject) => {
        if(is_shop_open){
            setTimeout(resolve, ms)
        }
        else{
            reject(console.log("shop is closed"));
        }
    });
}


async function kitchen(){
    try{

        await time(2000)
        console.log(`${stocks.Fruits[0]} was selected`);

        await time(0000)
        console.log("Start the production")

        await time(2000)
        console.log("Cut the fruit")

        await time(1000)
        console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} were added`)

        await time(1000)
        console.log("Start machine")

        await time(2000)
        console.log(`Ice placed in ${stocks.Holder[0]}`)

        await time(3000)
        console.log(`${stocks.Toppings[0]} was selected`)

        await time(2000)
        console.log("Serve ice cream")
    }
    catch(error){
        console.log("Customer left", error)

    }
    finally{
        console.log("Day ended, shop is closed")
    }
}

kitchen();