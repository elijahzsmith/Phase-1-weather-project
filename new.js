// Weather App, created using openweathermap API
// Elijah Smith and Daniel Conroy
// Phase-1 Vanilla JS project

// Wait for page to fully load
document.addEventListener("DOMContentLoaded", () => {

    // all global variables and element selecting
    const inputCity = document.querySelector('.input_location')
    console.log("city input", inputCity)
    const inputReview = document.querySelector('.input_review')
    console.log("review input", inputReview)
    const main = document.querySelector('#name')
    console.log("main name",main)
    const temp = document.querySelector('.temp')
    console.log("temperature",temp)
    const desc = document.querySelector('.desc')
    console.log("description", desc)
    const windSpeed = document.querySelector('p.wind-speed')
    console.log("Wind speed",windSpeed)
    const review = document.querySelector('.review')
    console.log(review)
    const searchButton= document.querySelector('.submit')
    console.log("Search button", searchButton)
    const reviewButton=document.querySelector('.submit2')
    console.log("review button", reviewButton)
    const feelLike=document.querySelector('.feelLike')
    console.log("Feels like",feelLike)
    const locationForm = document.querySelector('location-form')
    console.log("Location form", locationForm)
    const weatherIcon = document.querySelector("#icon-insert")
    console.log("weather icon", weatherIcon)
    const reviewDiv = document.querySelector('.review-input')
    console.log("Review div", reviewDiv)
    const reviewForm = document.querySelector('#review-form')
    console.log("review form", reviewForm)

    // Free API so we didn't feel too worried about doing this but we will after project continue learning how to properly hid key. I installed Node.js in an attempt but got lost running commands and installing the npms
    const API_KEY = "50a7aa80fa492fa92e874d23ad061374"
    
    // URL for current weather
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity.value}&units=imperial&appid=${API_KEY}`

    // handles populating the card with weather information
    const populateWeather = (weatherData) => {
        // setting variables
        let tempValue = weatherData.main.temp
        let nameValue = weatherData.name;
        let descValue = weatherData.weather[0].description
        let feelValue = weatherData.main.feels_like
        let windValue = weatherData.wind.speed
        // adding values
        weatherIcon.src = `http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png` 
        main.innerHTML = nameValue;
        desc.innerHTML = `Summary  : ${descValue}`
        temp.innerHTML = `Temperature  : ${tempValue} °F`
        feelLike.innerHTML = `Feels Like  : ${feelValue} °F`
        windSpeed.innerHTML = `Wind Speed : ${windValue} mph`
        inputCity.value = ""
        console.log("Summary", desc.innerHTML)
    }
    
    // handles GET request for the weather data
    const fetchWeather = () => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputCity.value}&units=imperial&appid=${API_KEY}`)
        .then(res => res.json())
        .then(weatherData => {
            console.log(weatherData)
            populateWeather(weatherData) // sends data to the populateWeather function
        })
        .catch(()=> alert("City Not Found. Check Spelling and Try Again!"))
    }

    // handles reviews ++ would like to come back and add a POST request to add these to either the API itself of a local database that will allow us to persist the reviews to the page on refresh
    const handleReviews = () => {
        let reviewValue = inputReview.value
        console.log(reviewValue)
        const newLI = document.createElement('li')
        newLI.textContent = `- ${reviewValue}`
        review.append(newLI)    
        inputReview.value = ""
        console.log("new list item", newLI)
    }

    // Event listeners for our seach and review buttons. Would like to come back and make this a form so you can also submit by clicking enter. However this gets the job done.
    searchButton.addEventListener("click", fetchWeather)
    reviewButton.addEventListener('click', handleReviews) 
})