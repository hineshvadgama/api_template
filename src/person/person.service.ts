import { Person } from './person';

export class PersonService {

    public get(): Person {

        // When getting data from a database
        // this will be an async function with error handling
        let person: Person = {
            firstName: "Test",
            lastName: "Person",
            age: 25
        }

        return person;
    }

    public post(person: Person) {

        // When posting data to a database
        // this will be an asycn function with error handling
        return person;
    }
}
