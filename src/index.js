import WishList from "./wishlist";

// HTML selections
const submitForm = document.querySelector("#submitForm");
const makeInput = document.querySelector("#makeInput");
const modelInput = document.querySelector("#modelInput");
const yearInput = document.querySelector("#yearInput");
const carMake = document.querySelector("#car-make");
const carModel = document.querySelector("#car-model");
const carYear = document.querySelector("#car-year");
const removeBtn = document.querySelector(".removeBtn");
const wishListUl = document.querySelector("#wishlistContainer > ul");

// Creates an instance of WishList class
const wishlist = new WishList();

// Event listeners
submitForm.addEventListener("submit", addCar);
removeBtn.addEventListener("click", removeCar);

function showCarDetails(car) {
    carMake.textContent = car.make;
    carModel.textContent = car.model;
    carYear.textContent = car.year;
    removeBtn.disabled = false;
    removeBtn.setAttribute("data-carId", car.id); // Use lowercase 'id'
}

function updateDOMList() {
    // Clear out the contents of the unordered list
    wishListUl.innerHTML = "";

    wishlist.list.forEach((dreamCar) => {
        const newLi = document.createElement("li");
        newLi.textContent = `${dreamCar.make} ${dreamCar.model}`;
        newLi.addEventListener("click", () => {
            showCarDetails(dreamCar);
        });
        wishListUl.append(newLi);
    });
}

function addCar(submitEvent) {
    submitEvent.preventDefault();
    const makeVal = makeInput.value.trim();
    const modelVal = modelInput.value.trim();
    const yearVal = yearInput.value.trim();

    if (makeVal && modelVal && yearVal) {
        wishlist.add(makeVal, modelVal, yearVal);
        updateDOMList();
        makeInput.value = "";
        modelInput.value = "";
        yearInput.value = "";
    } else {
        alert("Please fill in all fields.");
    }
}

function removeCar() {
    const carId = Number(removeBtn.getAttribute("data-carId"));
    wishlist.remove(carId);
    updateDOMList();
    carMake.textContent = "";
    carModel.textContent = "";
    carYear.textContent = "";
    removeBtn.disabled = true;
}