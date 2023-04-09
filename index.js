const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const TypeDefs = require('./schema');
const Resolvers = require('./resolvers')

const { ApolloServer } = require('apollo-server-express');

const dotenv = require('dotenv');
dotenv.config();

const mongodb_url = process.env.MONGODB_URL;

mongoose.connect(mongodb_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(success => {
    console.log('Success Mongodb connection')
}).catch(err => {
    console.log('Failed to connect')
});

const server  = new ApolloServer({
    typeDefs: TypeDefs.typeDefs,
    resolvers: Resolvers.resolvers
  })

// await server.start();
  
//Define Express Server
const app = express();
app.use(cors());
app.use(bodyParser.json());


server.start().then(() => {
    server.applyMiddleware({
        app,
        cors: true,
    
    })
})

  

app.listen({port: process.env.PORT }, () => console.log(`Server listening on port ${process.env.PORT}`));