/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
	return function(x) {
        let input = x;
        
        for(let i = functions.length - 1; i >= 0; i--) {
            // There will be issue regarding 'this' for function call
            // input = functions[i](input);
            // To resolve this issue we can just bind 'this' to function
            input = functions[i].call(this, input);
        }

        return input;

        // We can improve this using reduceRight
        // return functions.reduceRight((acc, func) => func(acc), x);
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */