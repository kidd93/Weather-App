const { gql } = require('apollo-server-express');

const typeDefs = gql`

type User {
    _id: ID 
    email: String
    savedLocations: [locations]
}

type Location {
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
    login(email: Sting!, password: String!): Auth
    addUser(email: String!, password: String!): Auth
    savedLocation(id: String!, image: String): User
    removeLocation(id: String!)
}
`;

module.exports = typeDefs;