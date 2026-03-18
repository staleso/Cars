class Car {
    constructor(make, model, year, price) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.price = price;
    }
}

class CarComparisonApp {
    constructor() {
        this.cars = [];
    }

    addCar(car) {
        this.cars.push(car);
    }

    removeCar(index) {
        if (index > -1 && index < this.cars.length) {
            this.cars.splice(index, 1);
        } else {
            console.log('Invalid index');
        }
    }

    filterCars(predicate) {
        return this.cars.filter(predicate);
    }

    sortCars(compareFunction) {
        return this.cars.sort(compareFunction);
    }

    calculateAveragePrice() {
        if (this.cars.length === 0) return 0;
        const totalPrice = this.cars.reduce((total, car) => total + car.price, 0);
        return totalPrice / this.cars.length;
    }
}

// Example usage:
const app = new CarComparisonApp();
app.addCar(new Car('Toyota', 'Camry', 2021, 24000));
app.addCar(new Car('Honda', 'Accord', 2020, 23000));
console.log('Average Price:', app.calculateAveragePrice());