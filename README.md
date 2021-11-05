# GithubFinder Browser

A simple GraphQL API that returns Github user's favourite language. 

## Technologies used

- Axios to make HTTP requests to github api
- Apollo-server-express
- Node js
- Express
- Graphql

## Getting started

To run it locally 

```
cd  into the root folder and run npm i to install dependecies
run npm start to run the server with nodemon
```

```
The server runs on port 3001

```

```
To interact with the API you can use Apollo Studio

visit http://localhost:3001/graphql and run the follwing Apollo query :

query Query($userName: String!) {
  getLanguage(userName: $userName){
    name
    numbOfRepo
  }
}
```
```
In the variables section add a string value to the usernme
{
  "userName": "<YOUR GITHUB USER NAME HERE>"
}
```

```
The Api returns the following object:

{
  "data": {
    "getLanguage": {
      "name": "<Favourite Language>",
      "numbOfRepo": <Number of rpository containing that language>
    }
  }
}

```
