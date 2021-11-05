
const axios = require('axios').default;

const githubApiCall = async (userName) => {
  const url = `https://api.github.com/users/${userName}/repos`;
  const result = await axios.get(url);
  //console.log("AAA", result.data);
  return result.data;
};

const extractFavLanguage = (ArrayOfLanguages) => {

    let languageMap = {};
    let value = '';
    let maxCount = 0;
    let result = {}
    for (let language of ArrayOfLanguages) {

        if (languageMap[language] == null) {
            languageMap[language] = 1;
        } else {
            languageMap[language]++;
        }

        if (languageMap[language] > maxCount) {
            value = language;
            maxCount = languageMap[language];
        }
    }
    return (
        result = {
            name: value,
            numbOfRepo: maxCount,
        }
    );
}



module.exports = { githubApiCall, extractFavLanguage }