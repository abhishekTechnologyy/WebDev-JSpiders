let yob = document.getElementById("color");

let submit = () => {

    let date = new Date();

    let age = date.getFullYear() - yob.value;
    // console.log(age);
    alert ("Age = "+age);
};