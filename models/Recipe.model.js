const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const recipeSchema = new Schema({
  title: { 
    type: String, 
    required: true, 
    unique: true 
  },
  level: { 
    type: String, 
    enum: ['Easy Peasy', 'Amateur Chef', 'UltraPro Chef'] 
  },
  ingredients: { 
    type: [String] 
  },
  cuisine: { 
    type: String, 
    required: true 
  },
  dishType: { 
    type: String, 
    enum: ['breakfast', 'main_course', 'soup', 'snack', 'drink', 'dessert', 'other'] 
  },
  image: { 
    type: String, 
    default: 'https://images.media-allrecipes.com/images/75131.jpg' 
  },
  duration: { 
    type: Number, 
    min: 0 
  },
  creator: { 
    type: String 
  },
  created: { 
    type: Date, 
    default: Date.now 
  }
});

// Create the Recipe model
const Recipe = model('Recipe', recipeSchema);

module.exports = Recipe;
