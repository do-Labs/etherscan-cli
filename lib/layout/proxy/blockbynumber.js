
module.exports = function(contrib, screen, blessed) { 
  var grid, user, sealed, log;
  
  const init = function(address) {
    grid = new contrib.grid({rows: 12, cols: 12, screen: screen})
    user = grid.set(0, 0, 4, 4, blessed.box, {content: 'User'});
    sealed = grid.set(0, 4, 4, 4, blessed.log, { fg: "green", selectedFg: "green", label: 'Sealed'});
    transactions = grid.set(5, 0, 4, 12, blessed.log, { fg: "green", selectedFg: "green", label: 'Log'});
    return  { grid, user, sealed, transactions }
  };

  const render = function(res) {
    var result = res.result;
    result.transactions.map(function(item) {
      transactions.log('from: ' + item.from + ' to: ' + item.to)
    });
    result.sealFields.map(function(field) {
      sealed.log(field)
    });
    screen.render();
  };
  return  { init, render };  
};