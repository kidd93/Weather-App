const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {
    _id: ID 
    email: String
    savedLocations: [Locations]
}

type Locations {
    id: String
    image: String
}

type Auth {
    token: ID!
    user: User
}

type Query {
    me: User
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(email: String!, password: String!): Auth
    saveLocations(id: String!, image: String): User
    removeLocations(id: String!): User
}
`;

module.exports = typeDefs;