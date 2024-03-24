class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
}

class Car extends Vehicle {
  constructor(make, model, year) {
    super(make, model);
    this.year = year;
    this.owners = [];
  }

  fullName() {
    return this.name + " " + this.surname;
  }

  getCarInfo() {
    return `${this.make} ${this.model} released in ${this.year}`;
  }

  addOwner(Person) {
    this.owners.push(Person);
  }

  removeOwner(Person) {
    this.owners = this.owners.filter(owners => owners != Person);
  }

  getOwnersCount() {
    return this.owners.length;
  }

  getOwnerNames() {
    return this.owners.map(owner => owner.fullName());
  }

  getFullInfo() {
    return `${this.make} ${this.model} from ${this.year}.` + " " + this.getOwnersCount() + " " + "person owns this car." + " " + "These are - " + this.owners.map(owner => owner.fullName()).join(", ") + ".";
  }
}


 
 
 function Person(name, surname, age, gender, cars = []) {
     this.name = name;
     this.surname = surname;
     this.age = age;
     this.gender = gender;
     this.cars = cars;
     this.fullName = function() {
       return `${this.name} ${this.surname}`;
     }
     this.countCars = function() {
        return this.cars.length;
      }
     this.buysCar = function(Car){
        this.cars.push(Car);
        Car.addOwner(this);
     }
     this.sellsCar = function(Car) {
        this.cars = this.cars.filter(cars => cars != Car);
        Car.removeOwner(this);
     }
     this.getAllCarsInfo = function() {
        return this.name + " owns these cars: " + this.cars.map(x => x.getCarInfo()).join(", ") + ".";
    }
  }
  module.exports = {Person, Car}