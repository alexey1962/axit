let priceItems = document.querySelectorAll('#pricing__item')
let priceBorder = document.querySelector('.pricing__item-subtitle-price')
let hoverPrice = document.querySelector('.price_hov')
let beforePrice = document.querySelector('.price_hov:before')

for (let priceItem of priceItems) {
    priceItem.addEventListener('mouseover', function (e) {
        priceBorder.classList.add('price_hov')
    })
    priceItem.addEventListener('mouseout', function (e) {
        priceBorder.classList.remove('price_hov')
    })
}

// function hide(e) {
//     e.target.classList.toggle('price_hov')
// }

// priceItems.addEventListener('click', hide());