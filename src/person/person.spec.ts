import request from "supertest";
import { app } from '../index';

describe('person', () => {

    it('GET', async () => {
        const response = await request(app).get('/person');
        expect(response.statusCode).toBe(200);
        expect(response.body).toStrictEqual({ firstName: 'Test', lastName: 'Person', age: 25 });
    });

    it('POST', async () => {
        const response = await request(app).post('/person').send({
            firstName: "Test",
            lastName: "Person",
            age: 25
        });
        expect(response.statusCode).toBe(201);
        expect(response.body).toStrictEqual({ firstName: 'Test', lastName: 'Person', age: 25 });
    });
});
