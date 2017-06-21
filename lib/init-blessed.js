const blessed = require('blessed');
const contrib = require('blessed-contrib');
module.exports = function() {
  const screen = blessed.screen();
  screen.key(['escape', 'q', 'C-c'], function(ch, key) {
    return process.exit(0);
  });
  return { screen, blessed, contrib }
}
