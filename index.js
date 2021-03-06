var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key) {
  var newRecipe = Object.assign({}, recipes);
  delete recipes.key;
  return newRecipe;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete recipes.key;
  return recipes;
}
