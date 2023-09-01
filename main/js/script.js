window.addEventListener('scroll', () =>  {
    var Navbar = document.querySelector("nav");
    Navbar.classList.toggle("nav-active", window.scrollY>0)
});

document.addEventListener('keydown', function(event){
	if(event.key === "Escape"){
document.getElementById("popup-1").classList.toggle("active");
	}
});


window.addEventListener('scroll', ()=>{
    var reveals = document.querySelectorAll('.reveal');

    for(var i = 0; i<reveals.length; i++){
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if(revealTop < windowHeight - revealPoint){
            reveals[i].classList.add('fadeInactive');
        }
        else{
            reveals[1].classList.remove('fadeInactive')
        }
    }
});

// const img = document.querySelector("img");
//         img.onclick = function(){
//            this.classList.toggle("imgactive");
//         }

// img.addEventListener('click', () => {
//     img.classList.toggle("imgactive");
// });

function search() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('search-box');
    filter = input.value.toUpperCase();
    ul = document.getElementById("main");
    li = ul.getElementsByClassName("student-card");
  
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("h3")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }