const express = require('express');
const path = require('path');
const { ApolloServer } = require('apollo-server-express');
const { authMiddleware } = require('./utils/auth');
const { typeDefs, resolvers } = require('./schemas');

const db = require('./config/connection');
const PORT = process.env.PORT || 3001;

const server = new ApolloServer({
    resolvers,
    typeDefs,
    context: authMiddleware
});

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if( process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build/index.html')));
}

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

const runApolloServer = async (typeDefs, resolvers) => {
    await server.start();
    server.applyMiddleware({ app }); 

    db.once('open', () => {
        app.listen(PORT, () => {
            console.log(`GraphQL server running at http://localhost:${PORT}${server.graphqlPath}`);
        })
    })
}

runApolloServer(typeDefs, resolvers);