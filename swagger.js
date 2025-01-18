const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: "API Contacts Erick Orellana",
        description: "API of Contacts",
    },
    host: "localhost:3000",
    schemes: ['http', 'https']
};

const outputFile = './swagger.json';

const routesFile = ['./routes/users.js', './routes/index.js', './routes/swagger.js'];

swaggerAutogen(outputFile, routesFile, doc);