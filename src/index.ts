import express, { Express, Request, Response } from 'express';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { RegisterRoutes } from '../tsoa/routes';
import swaggerUi from 'swagger-ui-express';

function run() {

    dotenv.config();

    const PORT = process.env.PORT || 3000;
    const app: Express = express();

    app.use(helmet());
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    app.use("/docs", swaggerUi.serve, async (_req: Request, res: Response) => {
        return res.send(
            swaggerUi.generateHTML(await import("../tsoa/swagger.json"))
        );
    });

    RegisterRoutes(app);

    app.get('/', (req: Request, res: Response) => {
        res.send('<h1>API Template</h1>');
    });

    app.listen(PORT, () => console.log(`Running on port ${PORT}`));
}

run();
