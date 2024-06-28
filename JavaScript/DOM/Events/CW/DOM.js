let page = document.getElementById('page')
let btn = document.getElementById('btn')
let emoji = document.getElementById('emoji')
let change = () =>
{
    if (btn.textContent == "Dark Mode") {
        document.body.style.backgroundColor = 'black'
        document.body.style.color = 'white'
        emoji.textContent = '🌙'
        btn.textContent = 'Light Mode'

    } else {
        document.body.style.backgroundColor = 'white'
        document.body.style.color = 'black'
        btn.textContent = 'Dark Mode'
        emoji.textContent = '🌞'
    }
}