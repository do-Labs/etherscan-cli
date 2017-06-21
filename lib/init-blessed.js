const blessed = require('blessed');
const contrib = require('blessed-contrib');
module.exports = function() {
  const screen = blessed.screen();
  return { screen, blessed, contrib }
}
