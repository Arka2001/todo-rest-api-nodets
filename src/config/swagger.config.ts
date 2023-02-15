const swaggerJSDoc = require("swagger-jsdoc");

const swaggerDefinition = {
    openapi: "3.0.0",
    info: {
        title: "Todo Rest API Documentation",
        version: "1.0.0",
        description: 
            "REST API Service for Todo Application. <br/><br/>&copy; 2022 | <b>Sayantan Dasgupta</b>",
    },
    servers: [
        {
            url: `http://localhost:3000`,
            description: 'Development',
        },
        {
            url: 'https://wise-sandbox-377816.el.r.appspot.com',
            description: 'Production'
        }
    ],
    // components: {
    //     securitySchemes: {
    //         httpBearer: {
    //             type: "http",
    //             scheme: "bearer"
    //         }
    //     }
    // }
};

const options = {
    swaggerDefinition,
    apis: ["./src/config/swagger.doc.yml"],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;