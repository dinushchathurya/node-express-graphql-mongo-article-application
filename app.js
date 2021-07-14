const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const graphqlSchema = require('./graphql/schema');
const graphqlResolvers = require('./graphql/resolvers');

const app = express();

require("dotenv").config();
const connection = require("./config/db");

app.use('/graphql', graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolvers,
    graphiql: true
})); 

connection();
app.listen(3000, ()=> 
    console.log("Server is running on localhost:3000")
);