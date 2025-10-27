/*
    Attributes:
        employeeName
        salary

    Methods:
        work()
        ...
*/

class Employee {
  constructor(employeeName, employeeSalary) {
    this.employeeName = employeeName;
    this.employeeSalary = employeeSalary;
  }

  work() {
    console.log(
      `${this.employeeName} is working and ${this.employeeName}'s salary is $${this.employeeSalary}`
    );
  }
}

let employee1 = new Employee("Lucy", 150_000);
console.log(employee1);
employee1.work();

let employee2 = new Employee("Isabella", 120_000);
console.log(employee2);
employee2.work();

console.log("------------------------------------------------------------");

/*
Create a class named Item with the following requirements:

    Attributes:
        name, price, quantity

    Methods:
        constructor: define and initialize the attributes.
        calcPrice: calculate the total price of item
*/

class Item {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  calcPrice() {
    return this.price * this.quantity;
  }
}

// Create an obejct for this and use the method
let item1 = new Item("Apple", 2, 10);
console.log(item1.calcPrice()); // Output: 20

console.log("------------------------------------------------------------");
