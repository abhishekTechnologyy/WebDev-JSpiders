// let str = 'String';
// console.log(str[0]);
// console.log(str[8]);
// console.log(str[-5]);
// console.log(str[2.8]);
// console.log(str.length);

//String methods:

// ---------------------------------------------1.charAt()-------------------------------------------------------------

// console.log(str.charAt(3));
// let res = str.charAt(9)
// console.log(typeof(res));
// console.log(str.charAt(9));

// -----------------------------------------------2. index of------------------------------------------------------------

// let str = "String"

// let str2 = "java"

// console.log(str.indexOf('r'));

// console.log(str2.indexOf('a')); // first occurence of character 'a' in JAVA

// console.log(str2.lastIndexOf('a')); // last occurence of character 'a' in JAVA

// let str3 = "biriyani";
// console.log(str3.indexOf('i',2)); // here we are searching of 'i' in between so after character 'i' we specifying "start searching index"

// console.log(str3.lastIndexOf('i',6));

// ---------------------------------------------------3. Substring()--------------------------------------------------

// let str = "biriyani"

// let result = str.substring(0,3)
// console.log(result);
// console.log(str.substring(1,3));
// console.log(str.substring(1,4)); //console.log(str.substring(4,2)); then it just reverse the value means substring(2,4) 
                                 //because small value we have to write first then bigger value of index 



//---------------------------------------------------4. Replace()---------------------------------------------------------


// let s = 'biriyani';
// let s1 = s.replace('i','e');
// let s2 = s.replaceAll('i','e');

// let s1 = s.toLowerCase();
// let s2 = s.toUpperCase();

// console.log(s1);
// console.log(s2);


//------------------------------------------------------------questions----------------------------------------------------------


//---------------------------------------------------------1-------------------------------

// let s = 'biriyani';

// for(let i = 0; i<s.length;i++)
// {
//     console.log(s[i]);
// }

//------------------------------------------------2--------------------------------------------

// let s;
// function sameLast(s)
// {
    
//         if(s[0] == s[s.length-2] && s[1] == s[s.length-1])
//         {
            
//              console.log("true");
        
//         }

//         else
//         {
//             console.log("false");
//         }
    
// }
// sameLast("JAWAHAR");
// sameLast("SAMOSA")
// sameLast("NAYANA");
// sameLast("OYE")

//---------------------------------------------3----------------------------------------------------

// function firstHalf(s) {
    
//     if(s.length % 2 == 0)
//     {
        // console.log(s.substring(0,(s.length)/2)); -----------don't use methods---------------
//         for(let i = 0; i<s.length/2; i++)
//         {
//             console.log(s[i]);
//         }
//     }
//     else{
//         console.log("false");
//     }
// }
// firstHalf("abhishek")
// firstHalf('samosa')
// firstHalf("udggagciz")

//------------------------------------------------4--------------------------------------------------------

// function countA(a)
// {
// let count = 0
// for (let i = 0; i < a.length; i++) {
//     if(a[i] == 'a')
//     {
//         count ++
//     }  
 
// }
// console.log(count);
// }

// countA("abhishek")
// countA("Kusum")
// countA("abicahqIbdkawbcbaoahkaka")

//-------------------------------------------------------5----------------------------------------------------------

// function reverseString(s)
// {
//     let s1 = " "

//     for(let i = s.length-1; i>= 0; i--)
//     {
//         s1 += s[i]
//     }
//     console.log(s1);
// }
// reverseString("suno")
// reverseString("samosa")
// reverseString("abhishek")
// reverseString("kusum")
// reverseString("ashutosh")

//------------------------------------------------------------6----------------------------------------------------------

// function palindrome(s)
// {
//     let s1 = ""

//     for(let i = s.length-1; i>= 0; i--)
//      {
//         s1 += s[i]
//      }   

//      if(s == s1)
//      {
//         console.log("plaindrome");
//      }
//      else{
//         console.log('not a plaindrome');
//      }
// }
// palindrome("MALAYALAM")
// palindrome("LALA")
// palindrome('tenet')

//-------------------------------------------------------------------7------------------------------------------------------

function repeat(s)
{
    let s1 = ""
    for(let i = 0; i < s.length;i++)
    {
        s1 += s[i]+s[i] //concatenate twice
    }
    console.log(s1);
}

repeat("java")