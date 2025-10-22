class Person {
  // attributes: name, age
  // methods: eat()

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    console.log(`${this.name} is eating.`);
  }
}

class Student extends Person {
  // attributes: name, age, grade
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  // methods: study(), eat()
  study() {
    console.log(`${this.name} is studying.`);
  }
}

class Teacher extends Person {
  // attributes: name, age, salary
  constructor(name, age, salary) {
    super(name, age);
    this.salary = salary;
  }

  // methods: teach(), eat()
  teach() {
    console.log(`${this.name} is teaching.`);
  }
}

let student = new Student("Harun Bicakci", 42, "University");
console.log(student);
student.study();
student.eat();

let teacher = new Teacher("Lucy Arya", 30, 150_000);
console.log(teacher);
teacher.teach();
teacher.eat();
