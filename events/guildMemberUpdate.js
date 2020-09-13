const tahadiff = require('return-deep-diff');
module.exports = (oMember, nMember) => {
  console.log(tahadiff(oMember, nMember));
};
