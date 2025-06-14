import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import router from './route/router';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import path from 'path';

const app = express();
const PORT = 3000;

// Load your openapi.yml
const swaggerDocument = YAML.load(path.join(__dirname, '../ressources/openapi.yml'));

// Middleware
app.use(cors());
app.use(bodyParser.json());

app.use('', router);

app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error(err.stack);
    res.status(500).send('Internal Error: ' + err.message);
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
});