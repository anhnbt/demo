// PascalCase
class Person {
    #firstName;
    #lastName;
    #age;

    constructor(firstName, lastName, age) {
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#age = age;
    }

    get fullName() {
        return this.#firstName + " " + this.#lastName
    }

    get firstName() {
        return this.#firstName;
    }

    set firstName(value) {
        this.#firstName = value;
    }

    get lastName() {
        return this.#lastName;
    }

    set lastName(value) {
        this.#lastName = value;
    }

    get age() {
        return this.#age;
    }

    set age(value) {
        this.#age = value;
    }
}

export default Person;


