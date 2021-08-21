const selector = document.querySelector('[data-selector]')
const slider = document.querySelector('[data-slider]')
const pageViews = document.querySelector('[data-page-views]')
const perMonth = document.querySelector('[data-perMonth]')
const selectBtn = document.querySelector('[data-selectBtn]')
const progressBar = document.querySelector('[data-progressBar]')
perMonth.innerHTML = "<span>$16.00</span> / month"
let x = window.matchMedia("(min-width: 1100px)")





function myFunction(x) {
    if (x.matches) { // If media query matches
        slider.oninput = function(){
            selectBtn.style.left = this.value-4 + '%'
            // if (this.value < 95){
            //     selectBtn.style.left = this.value + '%'
            // }else{
            //     selectBtn.style.left = 89 + '%'  
            // } 
            if (this.value <= 20){
                pageViews.innerHTML = "<h2>10K PAGEVIEWS</h2>"
                perMonth.innerHTML = "<span>$8.00</span> / month"
            } else if (this.value <= 40){
                pageViews.innerHTML = "<h2>50K PAGEVIEWS</h2>"
                perMonth.innerHTML = "<span>$12.00</span> / month"
            } else if (this.value <= 60){
                pageViews.innerHTML = "<h2>100K PAGEVIEWS</h2>"
                perMonth.innerHTML = "<span>$16.00</span> / month"
            } else if (this.value <= 80){
                pageViews.innerHTML = "<h2>500K PAGEVIEWS</h2>"
                perMonth.innerHTML = "<span>$24.00</span> / month"
            } else if (this.value <= 100){
                pageViews.innerHTML = "<h2>1M PAGEVIEWS</h2>"
                perMonth.innerHTML = "<span>$36.00</span> / month"
            }

            progressBar.style.width = this.value + '%'

        } 
    } else {
        slider.oninput = function(){
        
            if (this.value < 95){
                selectBtn.style.left = this.value-6 + '%'
            }else{
                selectBtn.style.left = 89 + '%'  
            } 
            if (this.value <= 20){
                pageViews.innerHTML = "<h2>10K PAGEVIEWS</h2>"
                perMonth.innerHTML = "<span>$8.00</span> / month"
            } else if (this.value <= 40){
                pageViews.innerHTML = "<h2>50K PAGEVIEWS</h2>"
                perMonth.innerHTML = "<span>$12.00</span> / month"
            } else if (this.value <= 60){
                pageViews.innerHTML = "<h2>100K PAGEVIEWS</h2>"
                perMonth.innerHTML = "<span>$16.00</span> / month"
            } else if (this.value <= 80){
                pageViews.innerHTML = "<h2>500K PAGEVIEWS</h2>"
                perMonth.innerHTML = "<span>$24.00</span> / month"
            } else if (this.value <= 100){
                pageViews.innerHTML = "<h2>1M PAGEVIEWS</h2>"
                perMonth.innerHTML = "<span>$36.00</span> / month"
            }

            progressBar.style.width = this.value + '%'

        } 
    }
  }
  
  
  myFunction(x) // Call listener function at run time
  x.addEventListener('change', myFunction) // Attach listener function on state changes