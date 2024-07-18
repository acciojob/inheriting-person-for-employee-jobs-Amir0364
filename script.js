// complete this js code
class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	greet(){
		console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`);
	}
}

class Employee extends Person {
	constructor(name, age, jobTitle) {
		super(name, age);
		this.jobTitle = jobTitle;
	}
	jobGreet(){
		console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}`);
	}
}

let alice = new Person("Alice", 25);
alice.greet();  // Outputs: Hello, my name is Alice and I am 25 years old
let bob = new Employee("Bob", 30, "Manager");
bob.jobGreet();  // Outputs: Hello, my name is Bob, I am 30 years old, and my job title is Manager
bob.greet();  // Outputs: Hello, my name is Bob and I am 30 years old

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;