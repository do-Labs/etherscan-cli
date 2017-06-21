
module.exports = function(contrib) {

    var init = function(address) {
        const label = 'Mined Blocks for ' + address;
        return contrib.table({
            border: {type: "line", fg: "cyan"},
            keys: true,
            fg: 'white',
            selectedFg: 'white',
            selectedBg: 'blue',
            interactive: true,
            columnWidth: [16, 12, 12],
            label: label
        });
    };   
    var render = function(table, res) {
       
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
    };
    return  { init, render }
}