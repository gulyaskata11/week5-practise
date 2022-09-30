const year = [
    {
        "month": "January",
        "id": "jan",
        "nth": 1,
        "days": 31,
    },
    {
        "month": "February",
        "id": "febr",
        "nth": 2,
        "days": 28,
    },
    {
        "month": "March",
        "id": "marc",
        "nth": 3,
        "days": 31,
    },
    {
        "month": "April",
        "id": "apr",
        "nth": 4,
        "days": 30,
    },
    {
        "month": "May",
        "id": "may",
        "nth": 5,
        "days": 31,
    },
    {
        "month": "June",
        "id": "june",
        "nth": 6,
        "days": 30,
    },
    {
        "month": "July",
        "id": "july",
        "nth": 7,
        "days": 31,
    },
    {
        "month": "August",
        "id": "aug",
        "nth": 8,
        "days": 31,
    },
    {
        "month": "September",
        "id": "sept",
        "nth": 9,
        "days": 30,
    },
    {
        "month": "October",
        "id": "oct",
        "nth": 10,
        "days": 31,
    },
    {
        "month": "November",
        "id": "nov",
        "nth": 11,
        "days": 30,
    },
    {
        "month": "December",
        "id": "dec",
        "nth": 12,
        "days": 31,
    }
];


const monthComponent = function (nth, name, days) {
    let daysHtml = "";

    for (let i = 1; i <= days; i++) {
        daysHtml += dayComponent(i)
    }

    return `
    <section id="${nth}" class="${name}">
        <h2>${name}</h2>
       <div class="days"> ${daysHtml}</div>
       <div class="selected-day"></div>
    </section>
    `
};

const dayComponent = function (dayCount) {
    return `
        <div class="day">${dayCount}</div>
    `
}


console.log("Hello")

console.log(year[0].days)

const rootElement = document.querySelector("#root")

rootElement.insertAdjacentHTML("beforeend", "<button>Show Calendar</button>")
const buttonElement = rootElement.querySelector("button")

//let monthIndex = 0;

buttonElement.addEventListener("click", function() {
    // if (monthIndex < 12) {
    //     rootElement.insertAdjacentHTML("beforeend", monthComponent(year[monthIndex].nth, year[monthIndex].month, year[monthIndex].days));
    //     monthIndex++
    // } else {
    //     buttonElement.setAttribute("disabled", "")
    // }

    for (let monthIndex = 0; monthIndex < 12; monthIndex++) {
        rootElement.insertAdjacentHTML("beforeend", monthComponent(year[monthIndex].nth, year[monthIndex].month, year[monthIndex].days));
    }

   // initJanuaryEvents()

   const dayElements = document.querySelectorAll(".day")
//     dayElements.forEach(function (element) {
//         element.addEventListener("click", function (event) {
//             console.log(event)
//             event.target.classList.toggle("clicked")
//             element.classList.toggle("clicked")
//         })
//    });

        for (let i = 0; i < dayElements.length; i++) {
            dayElements[i].addEventListener("click", function() {
                dayElements[i].classList.toggle("clicked") 
            })
        }

 })

// rootElement.insertAdjacentHTML("beforeend", monthComponent(1, "january", 31))
// rootElement.insertAdjacentHTML("beforeend", monthComponent(1, "february", 28))

// rootElement.style.color = "blue"  STYLE CSAK CSS-BEN!!!

const hideDays = function (days) {
    for (let day of days) {
        day.classList.add("hidden")

    }
}

const showDayInfo = function (dayIndex) {
    let selectedDay = document.querySelector(".January .selected-day")
    selectedDay.textContent = `January ${dayIndex}`
}

// const initJanuaryEvents = function () {
//     let days = document.querySelectorAll(".January .days .day")
//     for (let day of days) {
//         day.addEventListener("click", function () {
//             hideDays(days)
//             showDayInfo(day.textContent)
//         })
//     }

// }



