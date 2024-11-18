var typed = new Typed('#typing-effect', {
    strings: ['رواد في جودة التغليف منذ عام 2011'],
    typeSpeed: 120, // Speed of typing
    backSpeed: 90, // Speed of deleting (if needed)
    loop: true,
    showCursor: true, // Show blinking cursor
    cursorChar: '|',
     // Set to true if you want it to repeat
});


// Add this script to monitor the scroll position

function animation(id, time, item) {
    setTimeout(function () {
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


window.addEventListener('scroll', function () {
    var navbar = document.getElementById('navbar-example');
    if (window.scrollY > 700) {
        navbar.style.backgroundColor = '#fff';
    } else {
        navbar.style.backgroundColor = '#ffffffdc';
    }
});




let imageList = Array.from(document.querySelectorAll('.product-image img'))
let buttonList = Array.from(document.querySelectorAll('.porduct-items button'))
let ProductOrder = document.getElementById('ProductOrder')
let orderContent = document.getElementById('orderContent')
let inputProduct = document.getElementById('inputProduct')
let closeIcon = document.querySelector('.closeIcon i')
let ProductOrderImage = document.querySelector('.ProductOrderImage img')

// desplay the current image
for (let i = 0; i < buttonList.length; i++) {
    buttonList[i].addEventListener('click', function (e) {
        ProductOrder.classList.add('d-flex')
        let imagesrc = imageList[i].getAttribute('src')
        ProductOrderImage.src = `./${imagesrc}`
        inputProduct.value = imageList[i].alt

    })
}



// close the box modal
function closemodal() {
    ProductOrder.classList.remove('d-flex')
}
closeIcon.addEventListener('click', closemodal)
document.addEventListener('click', function (e) {
    e.target == ProductOrder ? closemodal() : ''
})

document.addEventListener('keyup', function (e) {
    e.key == 'Escape' ? closemodal() : ''
})
// start Questions 
let questionContent = Array.from(document.querySelectorAll('.questionContent'));
let AnserContent = Array.from(document.querySelectorAll('.AnserContent'));
let faChevronUp = Array.from(document.querySelectorAll('.fa-chevron-up'));
let faChevronDown = Array.from(document.querySelectorAll('.fa-chevron-down'));

for (let i = 0; i < questionContent.length; i++) {
    questionContent[i].addEventListener('click', function (e) {

        AnserContent.forEach((content, index) => {
            if (index !== i) {
                content.classList.add('d-none');
                faChevronUp[index].style.display = 'none';
                faChevronDown[index].style.display = 'inline';
            }
        });
        AnserContent[i].classList.toggle('d-none');
        if (AnserContent[i].classList.contains('d-none')) {
            faChevronUp[i].style.display = 'none';
            faChevronDown[i].style.display = 'inline';
        } else {
            faChevronUp[i].style.display = 'inline';
            faChevronDown[i].style.display = 'none';
        }
    });

}



