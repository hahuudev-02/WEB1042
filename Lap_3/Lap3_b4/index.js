var a, b;
const items = document.querySelectorAll('.item')
console.log(items)

items.forEach(item => {
    item.onclick = function() {
        var a = item.textContent
        console.log(a)
    }
})
const handleEvent = function() {

} 