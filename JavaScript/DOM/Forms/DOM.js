// let email = document.getElementById('email')
// let password = document.getElementById('password')
// let image = document.getElementById('image')

// let login = () =>
// {
//     if(email.value == 'abhi@gmail.com' && password.value == 12345)
//     {
//         alert('login successful')

            // let user = {
            //     email : email.value,
            //     password : password.value
            // }
            // console.log(user);
//     } 
//     else
//     {
//         // alert('invalid credentials')
//         image.src = //Error image link de do naya wala ka purani image ko htane k lie 
//         email.style.border = '1px solid red'
//         password.style.border = '1px solid red'
//     }

// }
let k= document.getElementsByClassName('k')
let d = document.getElementsByClassName('d')
// let image = document.getElementById('image')

let login = () =>
{
    if(d.value == 'abhi@gmail.com' && k.value == 12345)
    {
        // alert('login successful')

        let user = {
            k : k.value,
            d : d.value
        }
        console.log(user);
    } 
    else
    {
        alert('invalid credentials')
        // image.src = //Error image link de do naya wala ka purani image ko htane k lie 
        // email.style.border = '1px solid red'
        // password.style.border = '1px solid red'
    }

}
