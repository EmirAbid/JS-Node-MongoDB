const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 
const blogSchema = new Schema({
    title : {
        type : String,
        required : true,
    },
    snippet : {
        type : String, 
        required : true , 
    }, 
    body : {
        type : String , 
        required : true
    }, 
}, {timestamps : true}); 
// tells Mongoose to automatically add createdAt and updatedAt fields to your schema. These fields will track when a document is added and when it is last updated.




// This line creates a model from the defined schema. A model is a constructor compiled from the Schema definitions. 
// An instance of a model is called a document. The model represents the collection in the database.
const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog; 