import WishList from "./wishlist";

//Html selections
const submitForm = document.querySelector("#submitForm");
const makeInput = document.querySelector("#makeInput");
const modelInput = document.querySelector("#modelInput");
const yearInput = document.querySelector("#yearInput");
const carMake = document.querySelector("#car-make");
const carModel = document.querySelector("#car-model");
const carYear = document.querySelector("#car-year");
const removeBtn = document.querySelector(".removeBtn");
const yearMake = document.querySelector("#year-make");
const wishListUl = document.querySelector("#wishlistContainer > ul");
//Creates instance of WishList class
const wishlist = new WishList();
submitForm.addEventListener("submit", addCar);
removeBtn.addEventListener("submit", removeCar);


function showCarDetails(car) {
    carMake.textContent = car.make;
    carModel.textContent = car.model;
    carYear.textContent = car.year;
    //Enables Remove Button to work
    removeBtn.disabled = false;
    //This Creates a custom attribute on HTML DOM Element, and gives it a value.
    removeBtn.setAttribute("data-carId", car.Id)
}

function updateDOMList() {
    //Clear out the contents of the unordered list
    wishListUl.innerHTML = "";

    wishlist.list.forEach((dreamCar) => {
        const newLi = document.createElement("li");
        newLi.textContent = dreamCar.make + " " + dreamCar.model;
        newLi.addEventListener("click", () => {
            showCarDetails(dreamCar);
        });
        wishListUl.append(newLi);
    });
}

function addCar(submitEvent){
    submitEvent.preventDefault();
    wishlist.add(makeInput.ariaValueMax, modelInput.ariaValueMax, yearInput.value);
    if(makeVal && modelVal && yearVal){
        updateDOMList();
        makeInput.value = "";
        modelInput.value = "";
        yearInput.value = "";

    }
    
}

function removeCar() {
    const carId = Number(removeBtn.getAttribute("data-carId"));
    wishlist.remove(carId);
    updateDOMList();
    carMake.textContent = "";
    carModel.textContent = "";
    carYear.textContent = "";
    removeBtn.disabled = true

}