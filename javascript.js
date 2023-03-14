let cart =Array.from(document.getElementsByClassName('cart'))
let names =Array.from(document.getElementsByClassName('names'))
let prices =Array.from(document.getElementsByClassName('prices'))
let increase =Array.from(document.getElementsByClassName('increase'))
let addCart =Array.from(document.getElementsByClassName('addCart'))
let decrease =Array.from(document.getElementsByClassName('decrease'))
let images=Array.from(document.getElementsByClassName('images'))
let numberOfPiece=Array.from(document.getElementsByClassName('numberOfPiece'))
let total=document.querySelector('.total')
let iconImage=document.querySelector('.iconImage')
let footer=document.querySelector('.footer')
let CheckOut=document.querySelector('.CheckOut')

let Card=[]

for(let i=0;i<cart.length;i++){
    let z=numberOfPiece[i].innerHTML
    let numOfPiece=parseInt(z)
    addCart[i].onclick=function(){
        let newCart={
            Images:images[i].src,
            names:names[i].innerHTML,
            Price:prices[i].innerHTML,
            num:numOfPiece
        }
        Card.push(newCart)
        console.log(Card)
        showCard()
        getTotal()

    }
}

function showCard(){
    
    let newCard=''
    for(let i=0;i<Card.length;i++){
        newCard+=`
            <h3 class="names">${Card[i].names}</h3>
            <h4 class="prices">${Card[i].Price}</h4>
            <p class="p">${Card[i].num}<p/>
            <img src="${Card[i].Images}" class="images">
            <button onclick="increaseOne(${i})" class="increase">+</button>
            <button onclick=" decreaseOne(${i})" class="decrease">-</button>
            <button onclick="Delete(${i})" class="delete">X</button>
            <hr>
        `
    }
    document.querySelector('.shopCard').innerHTML=newCard
}

let Total=+total.innerHTML

function getTotal(){
    Total+=+(Card[Card.length-1].Price)
    total.innerHTML=Total
}

function increaseOne(i){
    Total+=+(Card[i].Price)
    Card[i].num+=1
    total.innerHTML=Total
    showCard()
}
function decreaseOne(i){
    Card[i].num-=1
    if(Card[i].num<1){
        Card[i].num=1
    }
    else{
        Total-=+(Card[i].Price)
        total.innerHTML=Total
    }
    showCard()
}

function Delete (i){
    Total-=+(Card[i].Price)*Card[i].num
    total.innerHTML=Total
    Card.splice(i,1)
    showCard()
}

iconImage.onclick=function(){
    footer.style.display='flex'
}

CheckOut.onclick=function(){
    if(total.innerHTML==0){
        alert(`your cart is empty`)
    }
    else{
        alert(`your bill is ${total.innerHTML}`)
    }
}
