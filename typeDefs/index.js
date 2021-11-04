const { gql } = require("apollo-server-express");
const languageTypeDefs = require('./languageSchema');

const typeDefs = gql`
  type Query {
    _:String
  }  
`

module.exports = [
    typeDefs,
    languageTypeDefs
]