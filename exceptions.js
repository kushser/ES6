function StringExceptionError(value) {
    this.value = value;
    this.message = "must be a string";
    this.toString = function () {
        return this.value + ": " + this.message;
    }
}

function reverseJsonArray(string) {
    let str;
    let reverseStr;
    try {
        if (typeof string === "string") {
            if (string[0] === "[" && string[string.length - 1] === "]") {
                str = JSON.parse(string);
                str.reverse();
                reverseStr = JSON.stringify(str);
            } else {

                throw  string + " - parameter  is not a JSON-stringified version of an array";


            }
        } else {
            throw new StringExceptionError(string);
        }
    } catch
        (e) {
        if (e instanceof StringExceptionError) {
            console.log("String exception: " + e);
            return false
        } else {
            console.log("String exception: " + e);
            return false


        }

    }
    return reverseStr;
}

console.log(reverseJsonArray());
console.log(reverseJsonArray(true));
console.log(reverseJsonArray([2, 4, 6, "dog"]));
console.log(reverseJsonArray('verygood'));
console.log(reverseJsonArray('[]'));
console.log(reverseJsonArray('["cat"]'));
console.log(reverseJsonArray('["a","b","c","d"]'));
console.log(reverseJsonArray('["add","bbc","ccn","drem",[ 1,2,3]]'));
console.log(reverseJsonArray('[1,{"one":true},{"age": 35, "id":3}]'));