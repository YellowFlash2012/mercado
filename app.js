const minusQty = document.getElementById("minus");

const plusQty = document.getElementById("plus")

const qty = document.querySelector(".qty");

const thumbs = document.querySelectorAll(".thumb");

const imageOne = document.getElementById("image-one");
const imageTwo = document.getElementById("image-two");
const imageThree = document.getElementById("image-three");
const imageFour = document.getElementById("image-four");


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

//***** */ thumb images config******
thumbs.forEach((thumb) => {
    thumb.addEventListener("click", (e) => {
        console.log(e.target.id);
        
        // add opcaity to the thumbnails
        for (el of thumb.parentElement.children) {
            el.classList.remove("active")
        }

        thumb.classList.add("active")
        
        // display product-img whose thumbnail was clicked
        if (e.target.id === "thumb-one") {
            imageOne.style.zIndex = 3;

            // reset other img z-index
            imageTwo.style.zIndex = 0;
            imageThree.style.zIndex = 0;
            imageFour.style.zIndex = 0;
        } else if (e.target.id === "thumb-two") {
            imageTwo.style.zIndex = 3;

            // reset other img z-index
            imageOne.style.zIndex = 0;
            imageThree.style.zIndex = 0;
            imageFour.style.zIndex = 0;
        } else if (e.target.id === "thumb-three") {
            imageThree.style.zIndex = 3;

            // reset other img z-index
            imageOne.style.zIndex = 0;
            imageTwo.style.zIndex = 0;
            imageFour.style.zIndex = 0;
        } else if (e.target.id === "thumb-four") {
            imageFour.style.zIndex = 3;

            // reset other img z-index
            imageOne.style.zIndex = 0;
            imageTwo.style.zIndex = 0;
            imageThree.style.zIndex = 0;
        }
    });
});

// *****toast config******
var toastTrigger = document.getElementById("liveToastBtn");
var toastLiveExample = document.getElementById("liveToast");
if (toastTrigger) {
    toastTrigger.addEventListener("click", function () {
        var toast = new bootstrap.Toast(toastLiveExample);

        toast.show();
    });
}