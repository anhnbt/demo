import Person from "./person.js";

class Student extends Person {
    #grade;

    // constructor(firstName, lastName, age, grade) {
    //     super(firstName, lastName, age);
    //     this.#grade = grade;
    // }

    constructor(grade) {
        super('', '', '');
        this.#grade = grade;
    }

    get grade() {
        return this.#grade;
    }

    set grade(value) {
        this.#grade = value;
    }
}

export default Student;
