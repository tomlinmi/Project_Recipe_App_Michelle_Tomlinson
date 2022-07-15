import React, { useState } from "react";
import "./App.css";
function RecipeCreate({recipes, setRecipes, createRecipe}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  const initialFormState = {
   name: "Name",
   cuisine:"Cuisine",
   photo: "URL",
   ingredients:"Ingredients",
   preparation:"Preparation"
 };
 
  const [content, setContent] = useState({...initialFormState}); 
  const handleChange = ({target}) => { const value = target.value; setContent({ ...content, [target.name]: value, }); }; 
    
  const handleSubmit = (event) => { 
    event.preventDefault(); console.log("Submitted:", content); 
    createRecipe(content); 
    setContent({...initialFormState}); 
  };
      
  return (
    <form name="create" onSubmit={handleSubmit}>
         <table>
        <tbody>
          <tr>
            <td> 
            <input
              id="name"
              type = "text"
              name = "name"
              onChange= {handleChange}
              value = {content.name}
              />
            </td>
             <td> 
            <input
              id="cuisine"
              type = "text"
              name = "cuisine"
              onChange= {handleChange}
              value = {content.cuisine}
              />
            </td>
             <td> 
            <input
              id="photo"
              name = "photo"
              type = "text"
              placeholder="URL"
              onChange= {handleChange}
              value = {content.photo}
              />
            </td>
            
             <td> 
            <textarea
              id="ingredients"
              name = "ingredients"
              type = "text"
              placeholder="Ingredients"
              onChange= {handleChange}
              value = {content.ingredients}
              />
            </td>
            
             <td> 
            <textarea
              id="preparation"
              name = "preparation"
              type = "text"
              placeholder="Preparation"
              onChange= {handleChange}
              value = {content.preparation}
              />
            </td>          
            
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
   