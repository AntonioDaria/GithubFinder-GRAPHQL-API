
const axios = require('axios').default;

const githubApiCall = async (userName) => {
  const url = `https://api.github.com/users/${userName}/repos`;
  const result = await axios.get(url);
  console.log("AAA", result.data);
  return result.data;
};


module.exports = { githubApiCall }