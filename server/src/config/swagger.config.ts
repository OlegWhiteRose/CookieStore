import swaggerJsdoc from 'swagger-jsdoc';

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Cookie Store API',
      version: '1.0.0',
      description: 'API documentation for Cookie Store',
      contact: {
        name: 'API Support',
      },
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT || 8080}`,
        description: 'Development server',
      },
    ],
    tags: [
      {
        name: 'Cookies',
        description: 'Cookie operations',
      },
      {
        name: 'Contacts',
        description: 'Contact information',
      },
      {
        name: 'Stats',
        description: 'Statistics',
      },
      {
        name: 'Feedback',
        description: 'Feedback submissions',
      },
      {
        name: 'Orders',
        description: 'Order management',
      },
    ],
  },
  apis: ['./src/routes/*.ts', './src/swagger/*.ts'],
};

export const swaggerSpec = swaggerJsdoc(options);
