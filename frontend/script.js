const monthComponent = function (nth, name, days) {
    let daysHtml = "";

    for (let i = 1; i <= days; i++) {
        daysHtml += dayComponent(i)
    }

    return `
    <div id="${nth}" class="${name}">
        <h2>${name}</h2>
        ${daysHtml}
    </div>
    `
};

const dayComponent = function (dayCount) {
    return `
        <div class="day">${dayCount}</div>
    `
}


console.log("Hello")

const rootElement = document.querySelector("#root")

// rootElement.insertAdjacentHTML("beforeend", "<button>Show Calendar</button>")
// const buttonElement = rootElement.querySelector("button")
// buttonElement.addEventListener("click", function() {
//     rootElement.insertAdjacentHTML("beforeend", monthComponent(1, "january", 31))
//     rootElement.insertAdjacentHTML("beforeend", monthComponent(1, "february", 28))
// })

rootElement.insertAdjacentHTML("beforeend", monthComponent(1, "january", 31))
rootElement.insertAdjacentHTML("beforeend", monthComponent(1, "february", 28))

// rootElement.style.color = "blue"  STYLE CSAK CSS-BEN!!!