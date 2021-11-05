const { githubApiCall, extractFavLanguage } = require("./utils");

const getLanguagesResolver = {
  Query: {
    getLanguage: async (obj, { userName }) => {
      try {
        const requestedPackage = await githubApiCall(userName);
        const languagesArray = requestedPackage.map((repo) => {
          return repo.language;
        });

        const result = extractFavLanguage(languagesArray);
        return result;
      } catch (error) {
        throw new Error(error);
      }
    },
  },
};

module.exports = getLanguagesResolver;
