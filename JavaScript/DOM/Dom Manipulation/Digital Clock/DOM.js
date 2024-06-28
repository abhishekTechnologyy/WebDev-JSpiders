let hours = document.getElementById('hours')
let minutes = document.getElementById('minutes')
let seconds = document.getElementById('seconds')


setInterval(() => {

    //declare date object
    let date = new Date()

    if (date.getHours() < 10) {
        
        hours.textContent = `0${date.getHours()}`;

    } else {
        hours.textContent = date.getHours();
    }
    if (date.getMinutes() < 10) {
        
        minutes.textContent = `0${date.getMinutes()}`;

    } else {
        minutes.textContent = date.getMinutes();
    }
    if(date.getSeconds() < 10)
    {
        // seconds.textContent = '0'+ date.getSeconds()
             //---------or------------

        seconds.textContent = `0${date.getSeconds()}`;
    }
    else{
        seconds.textContent = date.getSeconds()

    }
}, 1000);
