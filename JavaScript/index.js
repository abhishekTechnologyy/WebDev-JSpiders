// // console.log("hello world");
// // var a = 10;
// // a = 1000 // re-ini
// // var a = 100 //re-dec and re-ini
// // console.log(a);

// // let x = "abc";
// // x = "xyz";
// // console.log(x);

// // const pi = 33.14;
// // console.log(pi);

// // let a = 10.87 //number
// // let str = "a" //string
// // let bool = true //boolean

// // let x //undefined
// // console.log(x); //printing undefined variable (data type)
// ----------------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------
// let a = 90;
// let b = 30;
// let c = 30;
// // let res = a+b;
// // console.log("the sum is :",res);


// if(a>=b || a>=c || b>=a || b>=c||c>=a || c>=b)
// {
//     if(a==b && b==c && c==a)
//     {
//         console.log("all are equal");
//     }
//     else if(a==b && a>c && b>c)
//     {
//         console.log("a is greater");
//     }
//     else if(a==b && a<c && b<c)
//     {
//         console.log("c is greater");
//     }
//     else if(a==c && a>b && c>b)
//     {
//         console.log("a is greater");
//     }
//     else if(a==c && a<b && c<b)
//     {
//         console.log("b is greater");
//     }
//     else if(b==c && b>a && c>a)
//     {
//         console.log("b is graeter");
//     }
//     else if(b==c && b<a && c<a)
//     {
//         console.log("a is greater");
//     }
//     else{

    
//         if(a>b && a>c)
 
//         {
    
//             console.log("a is grater");

//         }

//         else if(b>c)

//         {

//             console.log("b is greater");

//         }

//         else{

//             console.log("c is greater");

//         }
//     }
// }
// ------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------
// check which no. is greater by switch case 
//let a = 30;
// let b = 40;

// switch(a>b)//true  
// {
//     case true:console.log("a is greater");
//     break;
//     default:console.log("b is greater");
// }

// -----------------------------------------------------------------------------------------------------------

// function greatest(a,b)
// {
//     switch(a>b)//true  
//  {
//      case true:console.log("a is greater");
//      break;
//      default:console.log("b is greater");
//  }

// }

//invoke the function

// greatest(10,40);
// greatest(9000,2000);
// greatest(398,765);

// -------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------

// function CheckThirteen(a,b)
// {
//     if(a==13 || b == 13 || a+b ==13 || a-b == 13)
//     {
//         console.log("true");
//     }
//     else
//     {
//         console.log("false");
//     }
// }

// CheckThirteen(13,15);
// CheckThirteen(9,4);
// CheckThirteen(20,7);
// CheckThirteen(15,13);
// CheckThirteen(4,5);

function check(a,b)
{
    if(a%10 == b%10)
    {
        a = a/10;
        b = b/10;

        if(a%10 == b%10)
        {
            console.log("last two digit is same");
        }
        else{
            console.log("only last digit is same");
        }
    }
    else{
        console.log("number is different");
    }
}
check(435,535);
check(515,215);
check(421,456);