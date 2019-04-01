// Code your solution in this file.
function lowerCaseDrivers(drivers){
  return drivers.map(function(name) {
    return name.toLowerCase();
  });
}

function nameToAttributes(drivers){
  return drivers.map(function(name){
    const fullN = name.split(' ')
    const firstN= fullN[0];
    const lastN= fullN[fullN.length -1];
    return {firstName: firstN, lastName: lastN }
  });
}

function attributesToPhrase(drivers){
  return drivers.map(function(name){
    return `${name.name} is from ${name.hometown}`;
  });
}
