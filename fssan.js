#!/usr/bin/env node
/** Guillaume Isabelle FSSAN
 * Vision: Clean file system from bad string
 
 * Current Reality: 
 
 */

//@STCGoal Cleaning CLI tool that make a nice filesystem name

var sanitize = require("gix-sanitize-filename");



var myArgs = process.argv.slice(2);


var sourceDoc = "";
if (myArgs[0] == null) {
    console.log(`HELP
    
    argument 1 is the path of the source file to clean (double quote it)
    
    output is at the clean filename`);

} else {


    // Some string that may be unsafe or invalid as a filename
    var UNSAFE_USER_INPUT = myArgs[0];
    //`Rondeau - 2011 - L’autoethnographie  une quête de sens réflexive e.pdf`;

    // Sanitize the string to be safe for use as a filename.
    var filename = sanitize(UNSAFE_USER_INPUT);
    // -> "~.sshauthorized_keys"
    console.log(filename);

}