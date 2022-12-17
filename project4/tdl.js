let items = document.querySelector(".items");
let form = document.querySelector("form");
let input = document.querySelector("input");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    let newcontent = input.value;
    let allcontent = document.createElement("li");
    allcontent.textContent = newcontent;
    allcontent.addEventListener("click", () => {
        if (allcontent.style.textDecoration === "line-through") {
            allcontent.style.textDecoration = "none";
        } else {
            allcontent.style.textDecoration = "line-through"
        }
    })
    items.append(allcontent);
    input.value = "";
})