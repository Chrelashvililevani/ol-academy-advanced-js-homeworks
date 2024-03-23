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
    return `${this.make} ${this.model} Released In ${this.year}`;
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
    return this.owners.map(owner => owner.fullName()).join(", ");
  }

  getFullInfo() {
    return this.getCarInfo() + " " + this.getOwnersCount() + " " + "person owns this car." + " " + "These are " + this.getOwnerNames();
  }
}

const Car1 = new Car("Tesla", "S", "2019");
const Car2 = new Car("BMW", "M", "2015");
console.log(Car1.getCarInfo());

 
 
 
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
        return this.name + "owns these cars:" + this.cars.map(x => x.getCarInfo()).join(", ");
    }
  }
  
  const Person1 = new Person("Giorgi", "Sharabidze", 25, "Male", []);
  const Person2 = new Person("Aleko", "Sharabidze", 25, "Male", []);
  
  Car1.addOwner(Person1);
  Car1.addOwner(Person2);
  console.log(Car1.owners);
  Car1.removeOwner(Person1);
  Car1.removeOwner(Person2);
  console.log(Car1.owners);
  Person1.buysCar(Car1);
  Person1.buysCar(Car2);
  Person2.buysCar(Car1);
  console.log(Car1.owners);
  console.log(Person1.cars);
  console.log(Car1.getOwnerNames());
  console.log(Person1.getAllCarsInfo());

   