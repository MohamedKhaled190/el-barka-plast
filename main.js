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