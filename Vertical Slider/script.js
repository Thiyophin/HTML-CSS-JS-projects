const sliderContainer = document.querySelector('.slider-container')
const leftSlider = document.querySelector('.left-slider')
const rightSlider = document.querySelector('.right-slider')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const slidesLength = rightSlider.querySelectorAll('div').length
// returns the length of div present

let currentIndex = 0
// since it should be an array, so -1 
leftSlider.style.top = `-${(slidesLength - 1) * 100}vh`
// add eventListener to up and down buttons
upButton.addEventListener('click',() => changeSlide('up'))
downButton.addEventListener('click',() => changeSlide('down'))

const changeSlide = (direction) => {
  const sliderHeight = sliderContainer.clientHeight
  if(direction==='up'){
    currentIndex++
    if(currentIndex > slidesLength - 1){
      currentIndex = 0
    }
  }else if(direction === 'down'){
   currentIndex--
   if(currentIndex < 0){
    currentIndex = slidesLength -1  
  }
  }

  rightSlider.style.transform = `translateY(-${currentIndex * sliderHeight}px)`
  leftSlider.style.transform = `translateY(${currentIndex * sliderHeight}px)`
}