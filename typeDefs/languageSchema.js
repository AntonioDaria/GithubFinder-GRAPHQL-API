const { gql } = require("apollo-server-express");

//use gql from apollo server to define the Schema
module.exports = gql`
  type Language {
    name: String,
    numbOfRepo: Int
  }
  type Query {
    getLanguage(userName: String!): Language
  }
`;
