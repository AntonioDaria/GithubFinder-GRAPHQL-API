const { githubApiCall, extractFavLanguage } = require("./utils");

const getLanguagesResolver = {
  Query: {
    getLanguage: async (obj, {userName}) => {

      const requestedPackage = await githubApiCall(userName);
      const languagesArray = requestedPackage.map((repo) => {
        return repo.language;
      });
     
      const result = extractFavLanguage(languagesArray)
      return  result
      
    },
  },
};

module.exports = getLanguagesResolver;
