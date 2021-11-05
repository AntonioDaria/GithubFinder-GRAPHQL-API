const { gql } = require("apollo-server-express");

//use gql from apollo server to define the Schema
module.exports = gql`
  type Language {
    userName: String!
  }

  type Query {
    getLanguages(userName: String!): [Language]
  }
`;
