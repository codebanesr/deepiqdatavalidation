

let formatter = {
    convertToArray : function(exampleString) {
        let output = exampleString.split(",");
        return output;
    },

    convertToString : function(arr){
        return arr.join(",");
    }    
} 


module.exports = formatter;

// call this function whenever you are retrieving tests string from the database, before returning to
// in angular services after making the get request apply this method on the data and then
// push it to the component