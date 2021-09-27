import {
    Controller,
    Route,
    SuccessResponse,
    Get
} from 'tsoa';
import { PersonService } from './person.service';
import { Person } from './person';

@Route('person')
export class PersonController extends Controller {

    @SuccessResponse('200', 'OK')
    @Get()
    public get(): Person {
        const personService = new PersonService;
        const person: Person = personService.get();
        return person;
    }
}
