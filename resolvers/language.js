const { githubApiCall } = require("./utils");

const getLanguagesResolver = {
  Query: {
    getLanguages: async (userName) => {
      console.log("CCC", userName);

      const requestedPackage = await githubApiCall(userName);
      console.log("SSS", requestedPackage);
      const languagesArray = requestedPackage.map((repo) => {
        return repo.language;
      });
      // create a util function that get the fav languages
      // use the util function with the languages array
      // return / send a json object with the 200 and the result
    },
  },
};

module.exports = getLanguagesResolver;
