import React, {useState} from "react";
import "./css/App.css";
import BurgerPane from "./components/BurgerPane";
import IngredientList from "./components/IngredientList";

function App() {
  const [ingredients, setIngredients] = useState([
    { name: "Kaiser Bun", color: "saddlebrown" },
    { name: "Sesame Bun", color: "sandybrown" },
    { name: "Gluten Free Bun", color: "peru" },
    { name: "Lettuce Wrap", color: "olivedrab" },
    { name: "Beef Patty", color: "#3F250B" },
    { name: "Soy Patty", color: "#3F250B" },
    { name: "Black Bean Patty", color: "#3F250B" },
    { name: "Chicken Patty", color: "burlywood" },
    { name: "Lettuce", color: "lawngreen" },
    { name: "Tomato", color: "tomato" },
    { name: "Bacon", color: "maroon" },
    { name: "Onion", color: "lightyellow" },
  ]);
  const [stackedBurg, setStackedBurg] = useState([]);

  let moveIngredient = (e, ingredients) => {
    e.preventDefault();
    console.log(ingredients);
    setStackedBurg([ingredients, ...stackedBurg]);
  };

  let clearBurger = () => {
    setStackedBurg([]);
  };

  console.log(ingredients);
  // addIngredient = (e, )
  return (
    <div className="burger-body">
      <div className="ingredients">
        <IngredientList
          ingredients={ingredients}
          moveIngredient={moveIngredient}
        />
      </div>

      <div className="burger-stack">
        <BurgerPane
          stackedBurg={stackedBurg}
          clearBurger={clearBurger}
        />
      </div>
    </div>
  );
}

export default App;