# Interactive Pricing Component

- Live website -(https://app.netlify.com/sites/cpwd-interactive-pricing-component/settings/general)

## Table of contents

- [The challenge](#the-challenge)
- [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Use the slider and toggle to see prices for different page view numbers (details provided below)

## My process

### Screenshot

### End Result

![result](https://user-images.githubusercontent.com/85038929/130330785-39a77f42-57ca-4e0e-a499-9c04a05a98c4.JPG)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- CSS FlexBox
- JavaScript
- Media Queries

### What I learned

This challenged taught me some new ways to use the ::before and ::after pseudo classes and how to implement the equivalent of media queries in javascript.

Here is some code that I wrote in order to complete this task:

- In the function below, I am passing through a variable which is the screen width. I did that so that i can adjust the speed of how fast the slider moves depending on the position of the slider. I set the slider length equal to 100 and divided it into 5 sections, each section changes the HTML of the price div

```Javascript
function myFunction(x) {
    if (x.matches) { // If media query matches
        slider.oninput = function(){
            selectBtn.style.left = this.value-4 + '%'
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
```

- Is used the ::after pseudo class to insert text, add decorations and change my slider

```CSS
.yearly::after {
	content: "-25%";
	font-size: 12px;
	color: var(--Light-Red);
	background-color: hsl(15, 100%, 70%, 0.2);
	padding: 2px 10px;
	border-radius: 50px;
	margin-left: 10px;
}

.toggle:before {
	position: absolute;
	content: "";
	height: 16px;
	width: 16px;
	left: 6px;
	bottom: 4px;
	background-color: white;
	-webkit-transition: 0.4s;
	transition: 0.4s;
}
```

### Useful resources

- [Testing media queries programmatically](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Testing_media_queries) - this documentation helped me implememnt the equivalent of media queries in javascript

- [range-slider-tutorial](https://www.youtube.com/watch?v=Ow0QjqmaRtQ&ab_channel=EasyTutorials) - Use HTML, CSS, and JavaScript to make a reactive slider with a label on top. I also learned to to make a popup using ::after or ::before

- [Debugging JavaScript in Visual Studio Code and Google Chrome](https://www.youtube.com/watch?v=AX7uybwukkk&ab_channel=JamesQQuick) - this video taught me how to debug my javascript using the debugger tool in developer tools

## Author

- Website - [Carlos Perez](https://github.com/Carlos-A-P/interactive-pricing-component-main)
- Frontend Mentor - [@Carlos-A-P](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@WDCarlosP](https://www.twitter.com/WDCarlosP)
