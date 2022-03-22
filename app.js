const minusQty = document.getElementById("minus");

const plusQty = document.getElementById("plus")

const qty = document.querySelector(".qty");

minusQty.addEventListener("click", () => {
    console.log("clicked -1");
    if (qty.textContent==1) {
        return qty.textContent = 1;
    } else {
        qty.textContent -= 1;
    }
})

plusQty.addEventListener("click", () => {
    console.log("clicked +1");
    return qty.textContent ++;
})