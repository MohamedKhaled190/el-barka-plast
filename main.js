function animation(id,time,item){
    setTimeout(function() {
        new Typed(`#${id}`, {
          strings: [`${item}`],
          typeSpeed: 100,
          backSpeed: 100,
          loop: false,
          loopCount: Infinity,
        });
      }, time);
    }

animation('Plastic', 500, 'Plastic')
animation('Spoons', 1500, 'Spoons')
animation('Forks', 2500, 'Forks')


window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar-example');
    if (window.scrollY > 700) { 
    navbar.style.backgroundColor = '#fff';
    }else{
    navbar.style.backgroundColor = '#ffffffdc';
    }
});

// 


let imageList = Array.from(document.querySelectorAll('.product-image img'))
let buttonList = Array.from(document.querySelectorAll('.porduct-items button'))
let ProductOrder = document.getElementById('ProductOrder')
let orderContent = document.getElementById('orderContent')
let inputProduct = document.getElementById('inputProduct')
let closeIcon = document.querySelector('.closeIcon i')
let ProductOrderImage = document.querySelector('.ProductOrderImage img')

console.log(closeIcon);
// desplay the current image
for (let i = 0; i < buttonList.length; i++) {
    buttonList[i].addEventListener('click', function(e){
        ProductOrder.classList.add('d-flex')
        let imagesrc = imageList[i].getAttribute('src')
        ProductOrderImage.src = `./${imagesrc}`
        inputProduct.value = imageList[i].alt


        
    })
}



// close the box modal

function closemodal(){
    ProductOrder.classList.remove('d-flex')
}
closeIcon.addEventListener('click', closemodal)
document.addEventListener('click',function(e){
e.target== ProductOrder? closemodal():''
})

document.addEventListener('keyup',function(e){
   e.key == 'Escape'?closemodal():''
})
// start Questions 
$('#questions .questionContent').on('click',function(e){
    const slide = document.querySelectorAll('#questions .AnserContent')
    const ele = $( e.target).next()[0]
    if(ele.style.display == 'block'){
        $(e.target).next().slideUp(0)
    }else{ 
        $(slide).slideUp(0)
        $(e.target).next().slideDown(0)
    }
    })