
module.exports = function(contrib, screen) {

    var table;
    
    var init = function(address) {
        const label = 'Mined Blocks for ' + address;
        table = contrib.table({
            border: {type: "line", fg: "cyan"},
            keys: true,
            fg: 'white',
            selectedFg: 'white',
            selectedBg: 'blue',
            interactive: true,
            columnWidth: [16, 12, 12],
            label: label
        });
        screen.append(table)
    
    };   
    var render = function(res) {
       
        var data = res.result.map(function(item) {
            return [item.blockNumber, item.timeStamp, item.blockReward]
        });
        table.setData(
            { 
            headers: [
                'blockNumber', 
                'timeStamp', 
                'blockReward'
            ], 
            data: data
        });
        screen.render();
    };
    return  { init, render }
}