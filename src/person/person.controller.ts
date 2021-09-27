import {
    Controller,
    Route,
    SuccessResponse,
    Get,
    Post,
    Body
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

    @SuccessResponse('201', 'Created')
    @Post()
    public post(
        @Body() requestBody: Person
    ): Person {
        const personService = new PersonService;
        const newPerson: Person = personService.post(requestBody);
        return newPerson;
    }
}
