// let h1 = document.querySelector('h1')

// let txt = h1.innerHTML
// h1.innerHTML = ''
// console.log(txt.length);

// function str(x = 0) {

//   h1.innerHTML += txt[x]
//   x++

//   if (x < txt.length) {
//     setTimeout(() => {
//       str(x);
//     }, 150);

//   }
// }
// str()


class Text {

  constructor(obj) {

    this.h1 = document.querySelector(obj.el) /* h1 */
    this.txt = this.h1.innerHTML
    this.h1.innerHTML = ''
    this.str()
  }

  str(x = 0) {
    this.h1.innerHTML += this.txt[x]
    x++

    if (x < this.txt.length) {
      setTimeout(() => {
        this.str(x)
      }, 150);

    }

  }

}

const text = new Text({
  el: 'h1',
})

const text2 = new Text({

  el: '.info__scroll-title',

})


class Nav {
  
  constructor(obj) {
    this.el = document.querySelector(obj.el)
    this.el.style.position = 'fixed'
    this.el.style.top = this.scroll()
    
    window.addEventListener('scroll', () => this.scroll())
    window.addEventListener('resize', () => this.scroll())
    
  }
  
  scroll(){
    
    // console.log(window.innerHeight); /* 969 */
    // console.log(pageOffset); /* 1269 */
    // console.log(winodow.innerHeight - pageOffset);
    
    if (window.innerHeight - pageYOffset - this.el.offsetHeight >= 0) {
      this.el.style.top = window.innerHeight - pageYOffset - this.el.offsetHeight + 'px'
    } else {
      this.el.style.top = 0
    }
    
  }
  
}

const nav = new Nav({
  
  el:'.header__nav'
  
})

class Anim {
  
  constructor(config) {
    
    this.el = document.querySelector(config.el)
    
    window.addEventListener('scroll', () => this.scroll())
    
  }
  
  scroll() {
    // console.log(this.el.offsetTop - this.el.offsetHeight); /* 1304 */
    // console.log(pageYOffset); /* 1269 */
    if (pageYOffset >= (this.el.offsetTop - this.el.offsetHeight * 2)) {
      this.el.style.transform = 'scale(1)'
    }
    
  }
  
}

const anim = new Anim({
  el: '.info'
})




let header__content = document.querySelector('.header__content')

header__content.addEventListener('mousemove', ()=> {
 
  header__content.style= `margin: ${myRandom()}px ${myRandom()}px ${myRandom()}px ${myRandom()}px`
})

function myRandom() {
  
  return Math.floor(Math.random() * (100 - 10 + 1)) + 10
}