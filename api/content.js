const content = require('./_content.js');
module.exports = (req, res) => {
  res.setHeader('Cache-Control', 'no-store');
  res.json(content);
};
