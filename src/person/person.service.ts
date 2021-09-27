import { Person } from './person';

export class PersonService {

    public get(): Person {

        // When getting and posting data from a database
        // this will be an async function with error handling
        let person: Person = {
            firstName: "Test",
            lastName: "Person",
            age: 25
        }

        return person;
    }
}
