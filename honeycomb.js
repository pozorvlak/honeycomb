function update_output() {
    var distance = document.getElementById('distance').value
    var width = document.getElementById('width').value
    var length = document.getElementById('length').value
    if (isNumber(distance) && isNumber(width) && isNumber(length)) {
        var results = fit_hexagons(distance, width, length);
        var total = 0;
        for (var i = 0; i < results.length; i++) {
            var result = results[i];
            total += result.num_cols * result.col_height;
        }
        var output = 'You can fit ' + total + ' plants in total: <ul>';
        for (var i = 0; i < results.length; i++) {
            var result = results[i];
            output += "<li>" + result.num_cols + " columns of ";
            output += result.col_height + " plants</li>";
        }
        output += "</ul>";
        document.getElementById('output').innerHTML = output;
    }
}

/* from http://stackoverflow.com/questions/18082/validate-numbers-in-javascript-isnumeric */
function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function fit_hexagons(distance, width, length) {
    var y = distance / 2; // radius of inscribed circle
    var x = y / Math.sqrt(3);
    var num_rows = Math.floor(length / y - 1);
    var num_cols = Math.floor((width / x - 1) / 3);
    if (num_rows % 2 == 0) {
        // all columns have equal length
        return [{ num_cols: num_cols, col_height: num_rows }];
    } else {
        var num_odds = Math.ceil(num_cols / 2);
        var num_evens = num_cols - num_odds;
        return [
            { num_cols: num_odds, col_height: num_rows },
            { num_cols: num_evens, col_height: num_rows - 1 }
        ];
    }
}

// Required for test suite
exports.fit_hexagons = fit_hexagons;
exports.isNumber = isNumber;
