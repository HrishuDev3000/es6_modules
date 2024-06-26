import Car from  "./car";

class WishList {
    constructor() {
        this.list = [];
        this.nextID = 0;
    }

    add(make, model, year){
        const nextCar = new Car(++this.nextID, make, model, year);
        this.list.push(nextCar);
    }

    remove(carId){
        for(let i = 0; i < this.list.length; i++){
            if( list[i] == carId){
                this.list.splice(i,1);
            }
        }
    }


}


export default WishList;