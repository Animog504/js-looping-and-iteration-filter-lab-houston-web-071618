// Code your solution in this file
function findMatching(collection, name)
{
  return result = collection.filter(function(PersonName){
    return PersonName.toLowerCase() === name.toLowerCase();
  });
}
function fuzzyMatch(collection, letters)
{
  //so it returns an array where the letters passed match the names the collection contains
  return result = collection.filter(function(personName){
    return personName.slice(0,letters.length) === letters
  });
}
function matchName(collection, name)
{
  return result = collection.filter(function(person){
    return person.name.toLowerCase() === name.toLowerCase()
  });
}
