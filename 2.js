function manipulateString(inputString,logString){
    const manipulatedString=inputString.toUpperCase();
    logString(manipulatedString);
}
function logString(manipulatedString){
    console.log("The manipulated string is: "+manipulatedString);
}

manipulateString("Pritam Roy Choudhury",logString);