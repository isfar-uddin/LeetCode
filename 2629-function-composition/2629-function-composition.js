/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
	return function(x) {
        
        for(let i = functions.length - 1; i >= 0; i--) {
            // There will be issue regarding 'this' for function call
            //x = functions[i](x);
            // To resolve this issue we can just bind 'this' to function
            x = functions[i].call(this, x);
        }
        
        return x;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */