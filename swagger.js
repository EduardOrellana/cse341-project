const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: "API Contacts Erick Orellana",
        description: "API of Contacts",
    },
    host: "cse341-project-ycuu.onrender.com/users",
    schemes: ['https']
};

const outputFile = './swagger.json';

const routesFile = ['./routes/users.js'];

swaggerAutogen(outputFile, routesFile, doc);