// let a = [1,'js',true]
// console.log(a);
// console.log(a[0]);
// console.log(a[5]);
// console.log(a.length);
// console.log(a[a.length-1]);

//----------------------------------------------------------------------------------------------------------

// let a =[1,2,3,4,5]
// console.log(a[(a.length-1)/2]); //here odd length so length-1/2 but if even length/2

// function Arraysum(a)
// {
//     if((a.length)%2 == 1)
//     {
//         console.log(a[a.length-1/2]);
//     }
//     else{
//         console.log(a[a.length/2] + a[(a.length/2)-1]);
//     }
// }
// Arraysum([1,3,4,5,6,7,8,56]);

//--------------------------------------------------------------------------------------------------------

// let a = [1,2,3,4,5];

//arrayName.method()
//push() add elements in last

// a.push(100,200);
//console.log(a);
// a.pop(); //removes last element
//console.log(a);

// a.pop()

// a.unshift(0); // adds elements at first index
//console.log(a);

// a.shift()
// console.log(a);//removes 1st element from array

// a.splice(2,2);
// console.log(a);

// a.splice(2,3)
// console.log(a);

// a.splice(3,1,100,200)
// console.log(a);

// a.splice(3,3,100,200)
// console.log(a);

// a.splice(0,a.length); //remove all the elements from array
// console.log(a);

//-----------------------------------------------------------------------------------------------


/// for(let i = 0; i<a.length;i++)
// {
//     console.log(a[i]);
// }

// for (let i = 0; i < a.length; i++) // for type krenge to pura syntax bn k aa jaega vs code me
// { 
//     if(a[i] % 2 == 0)
//     {
//         a.splice(i,1);
//         i--;
//     }    
// }
// console.log(a);

//----------------------------------------------------------------------------------------------------------

// let a = [1,2,3,4,5]
// let b =[];

// for (let i = a.length-1; i >= 0; i--) {
//         b.push(a[i]);
// }
// console.log(b);

//Another logic

// for (let i = 0; i < a.length; i++) {
//     b.unshift(a[i]);
// }
// console.log(b);

//----------------------------------------------------------------------------------------------------------------------

// let a = [1,2,3,4,5,7,7,7]
// let result = false;

// for (let i = 0; i < a.length; i++) {
//     if(a[i] == 7)
//     {
//         result = true;
//     }      
// }
// console.log(result);

//-----------------------------------------------------------------------------------------------------------------------------

//reverse() method ---->>  reverse the array
//includes() method --->> if your array contains that element then it returns true.

// let a = [2,3,6,7,8]
// let b = a.reverse()
// console.log(b);

//--------------------------

// let a = [2,3,6,7,8]
// let b = a.reverse()
// let result = a.includes(7)
// console.log(result);

//concat() 

// let a = [2,4,6,8]
// let b = [1,3,5,7,9]
// let x = [100,200]
// let y = [33]
// let c = a.concat(b,x,y)
// console.log(c);

//-----------------------------Find the sum of all the lements in the array---------------------------

// let a = [1,2,3,4,5]
// let sum = 0
// for (let i = 0; i < a.length; i++) {
//     sum += a[i]    
// }
// console.log(sum);

//----------------------------------count of even no.s-----------------------------------------

// let a = [2,3,4,5,6,7,8]
// let count = 0
// for (let i = 0; i < a.length; i++) {
//     if(a[i]%2 == 0)
//     {
//         count ++
//     }  
 
// }
// console.log(count);

//---------------------------------------------------------------------------------------------------------

