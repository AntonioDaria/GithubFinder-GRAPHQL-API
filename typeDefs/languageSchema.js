const { gql } = require("apollo-server-express");

//use gql from apollo server to define the Schema 
module.exports = gql`
  extend type Query { 
    getFalanguages(userName: String!): [Language]
  }
  
  type Language {
    name: String!
    count: Int!
  }
`;