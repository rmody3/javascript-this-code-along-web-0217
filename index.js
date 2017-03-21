

function Sandwich(bread, ingredients, cut) {
  this.bread = bread;
  this.ingredients = ingredients;
  this.cut = cut;
  this.serve = function() {
    console.log("here's your " + this.bread + ", enjoy!");
  }
}

var blt = new Sandwich("white", ["bacon", "lettuce", "tomato", "mayo"], "rectangle")
var reuben = new Sandwich("rye", ["corned beef", "sauerkraut", "swiss"], "diagonal"])
