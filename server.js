const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const cors = require("cors");
const dotEnv = require("dotenv");

const typeDefs = require("./typeDefs");
const resolvers = require('./resolvers')

// set env variables
dotEnv.config();

//apollo server

async function startApolloServer(typeDefs, resolvers) {
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });
  const app = express();
  //cors
  app.use(cors());
  // body parser middlewares
  app.use(express.json());
  await apolloServer.start();
  apolloServer.applyMiddleware({ app, path: "/graphql" });

  app.listen(PORT, () => {
    console.log(`Listening for request on port ${PORT}`);
    console.log(`Graphql Endpoint: ${apolloServer.graphqlPath}`);
  });
}

startApolloServer(typeDefs, resolvers);

const PORT = process.env.PORT || 3000;
