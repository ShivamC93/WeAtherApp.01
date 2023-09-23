// http://api.weatherapi.com/v1/current.json?key=6d3ecf20d8f344e6881201100231103&q=Pune&aqi=no

const temperatureField = document.querySelector(".temp");
const locationField = document.querySelector(".time_location p");
const dataField = document.querySelector(".time_location span");
const weatherField = document.querySelector(".comdition p");
const searchField = document.querySelector(".search_area");
const form = document.querySelector('form');

form.addEventListener('submit', searchForLocation);



let target = 'Pune'
const fetchResult = async (targetLocation) => {
    let url = 'http://api.weatherapi.com/v1/current.json?key=6d3ecf20d8f344e6881201100231103&q=${targetLocation}aqi=no'

    const res = await fetch(url)

    const data = await res.json()

    console.log(data)

    let locationName = data.location.locationName;
    let time = data.location.localtime;
    let temp = data.current.temp_c;
    let condition = data.current.condition;
    updateDetails(temp, locationName, time, condition);
};

function updateDetails(temp, locationName, time, condtion) {
    let splitDate = time.split(' ')[0];

    let splitTime = time.split(' ')[1];

    let currentDay = getDayName(new Date(splitDate).getDay())


    temperatureField.innerText = temp;
    locationField.innerText = locationName;
    dateandTimeField.innerText = `${splitDate} ${currentDay} ${splitTime}`;
    conditionField.innerText = condition;
}

function searchForLocation(e) {
    e.preventDefault();

    target = searchField.value;
}

fetchResult(target);

function getDayName(number) {
    switch (number) {
        case 0:
            return 'Sunday';
        case 1:
            return 'Monday';
        case 2:
            return 'Tuesday';
        case 3:
            return 'Wednesday';
        case 4:
            return 'Thursday';
        case 5:
            return 'Friday';
        case 6:
            return 'Saturday';
    }
}