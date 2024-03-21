function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = "released in " + year;
    this.owners = [];
            this.fullName = function() {
            return this.name + " " + this.surname;
        };

        this.addOwner = function(name, surname) {
        this.owners.push(new Person(name, surname));
    };

        this.getOwnersCount = function() {
        return this.owners.length;
    };
    this.removeOwner = function() {
        this.addOwner("removed", "Removed");
    }

    this.getCarInfo = function() {
        return this.make + " " + this.model + " " + this.year;
    };
    this.getOwnerNames = function() {
        return this.owners.map(owner => owner.fullName()).join(", ");
    }
    this.getFullInfo = function() {
        return this.getCarInfo() + " " + this.getOwnersCount() + " " + "person owns this car." + " " + "These are " + this.getOwnerNames();
    }
}
const car1 = new Car('Tesla', 'Model S', '2015');
const car2 = new Car("BMW", "M2", "2019");
car1.addOwner("vako", "Shavadze");
car1.addOwner("Elon", "Mask");
console.log(car1.getCarInfo());
console.log(car1.getOwnerNames());
console.log(car1.getOwnersCount());
console.log(car1.getFullInfo());


    function Person(name, surname, age, gender, cars = []) {
        this.name = name;
        this.surname = surname;
        this.cars = cars;
        this.age = age;
        this.gender = gender;
        this.fullName = function() {
            return this.name + " " + this.surname;
        };
            this.owner = function() {
                return this.name + " " + this.surname + " " + this.age + " " +              this.gender;
           };
        this.countCars = function() {
            return this.cars.length;
        };
        this.buysCar = function () {
            this.addOwner = function(name, surname, age, gender) {
            this.owners = new Person(name, surname, age, gender);
        };
            return this.cars.push("Mercedes");

       }
        this.sellsCar = function() {
            this.addOwner("Removed", "Removed", "Removed", "Removed");
            return this.cars.pop();
        }
        this.getAllCarsInfo = function() {
            return this.name + " owes these cars: " + car1.getCarInfo() + ", " + car2.getCarInfo();
        }

    }
    const Person1 = new Person("leila", "Sharauli", "26", "Female", ["Tesla", "BMW"]);
     console.log(Person1.fullName());
     console.log(Person1.countCars());
     Person1.buysCar();
     Person1.addOwner("Mika", "Gvetadze", "23", "Male");
     console.log(Person1.cars);
     console.log(Person1.owners.owner());
     Person1.sellsCar();
     console.log(Person1.sellsCar());
     console.log(Person1.cars);
     console.log(Person1.owners.owner());
     console.log(Person1.getAllCarsInfo());