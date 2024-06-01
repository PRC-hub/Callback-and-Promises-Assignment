const info={
    firstName: "Pritam",
    lastName: "Roy Choudhury",
    age:22
};
function ageInDays(object,callback){
    const fullName=object.firstName+" "+object.lastName;
    const ageInDays=object.age*365;
    callback(fullName,ageInDays);
}

function logResult(fullName,ageInDays){
    console.log("The person's full name is "+fullName+" and their age in days is "+ageInDays);
}

ageInDays(info,logResult);