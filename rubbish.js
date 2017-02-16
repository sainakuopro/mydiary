function up() {
  var t;
  var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
  if(top > 0) {
    window.scrollBy(0,100);
    t = setTimeout('up()',20);
  } else clearTimeout(t);
  return false;
}


function scrollToElement(theElement) {
if (typeof theElement === "string") theElement = document.getElementById(theElement);

    var selectedPosX = 0;
    var selectedPosY = 0;

    while (theElement != null) {
        selectedPosX += theElement.offsetLeft;
        selectedPosY += theElement.offsetTop;
        theElement = theElement.offsetParent;
    }

    window.scrollTo(selectedPosX, selectedPosY);
}


    
window.onscroll = function() {

    var avatarElem = document.getElementById('position1');

    var avatarSourceBottom = avatarElem.getBoundingClientRect().bottom + window.pageYOffset;

      if (avatarElem.classList.contains('fixed') && window.pageYOffset < avatarSourceBottom) {
          avatarElem.classList.remove('fixed');
        } 
        
      else if (window.pageYOffset > avatarSourceBottom) {
        avatarElem.classList.add('fixed');
        } 
};


var linkNav = document.querySelectorAll('[href^="#nav"]'),
    V = 2;  // скорость, может иметь дробное значение через точку
for (var i = 0; i < linkNav.length; i++) {
  linkNav[i].onclick = function(){
    var w = window.pageYOffset,
        hash = this.href.replace(/[^#]*(.*)/, '$1');
        t = document.querySelector(hash).getBoundingClientRect().top,
        start = null;
    requestAnimationFrame(step);
    function step(time) {
      if (start === null) start = time;
      var progress = time - start,
          r = (t < 0 ? Math.max(w - progress/V, w + t) : Math.min(w + progress/V, w + t));
      window.scrollTo(0,r);
      if (r != w + t) {requestAnimationFrame(step)} else {location.hash = hash}
    }
    return false;
  }
}




var $window = $(window),
    lastScrollTop = 0;

function onScroll (e) {
    var top = $window.scrollTop();

  var teg0 = document.getElementById("yak0");
  var teg1 = document.getElementById("yak1");
  var teg2 = document.getElementById("yak2");
  var teg3 = document.getElementById("yak3");

    var hi0 = teg0.getBoundingClientRect().bottom + window.pageYOffset;
    var hi1 = teg1.getBoundingClientRect().bottom + window.pageYOffset;
    var hi2 = teg2.getBoundingClientRect().bottom + window.pageYOffset;
    var hi3 = teg3.getBoundingClientRect().bottom + window.pageYOffset;

  
  if (window.pageYOffset > hi0 && window.pageYOffset < hi1) {
    if (lastScrollTop < top) 
      myscrollTo(teg1,200);
    
    
    else if (lastScrollTop > top) 
    myscrollTo(teg0, 40);
  }

  if (window.pageYOffset > hi1 && window.pageYOffset < hi2 ) {
    if (lastScrollTop < top)
       myscrollTo(teg2, 40);  
    else if (lastScrollTop > top)
      myscrollTo(teg1, 40)


  if (window.pageYOffset > hi2 && window.pageYOffset < hi3 ) {
    if (lastScrollTop < top)
      myscrollTo(teg3, 40);   
    else if (lastScrollTop > top)
      myscrollTo(teg2, 40);
  }

    lastScrollTop = top;

    
}

$window.on('scroll', onScroll);