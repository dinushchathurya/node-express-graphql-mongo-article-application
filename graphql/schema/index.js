const { buildSchema } = require('graphql');

module.exports = buildSchema (`
    type Article {
        _id : ID!
        title: String!
        body: String!
        createdAt: String!
    }
`)