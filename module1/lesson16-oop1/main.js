import Person from './person.js';
import Student from "./student.js";

const person1 = new Person('Anh', 'Nguyễn Bá Tuấn', 29);
console.log(person1);
const sv1 = new Student(10.0);
sv1.firstName = 'Dat';
sv1.lastName = 'Le';
// const sv1 = new Student("Dat", "Le", 25, 10.0);
console.log(sv1);
