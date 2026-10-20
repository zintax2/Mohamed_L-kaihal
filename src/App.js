import Categorie from "../component/Categorie";
import Card from "./component/Card";
import "./style.css"
function App() {
  return (
    <div>
      <ul>
        <Categorie/>
      </ul>
      {/* <ul>
        {plantList.map((plant) => (
          <li key={plant.id}>
            {plant.name}
            {plant.isBestSale ? <span>🔥</span> : <span>{null}</span>}
          </li>
        ))}
      </ul> */}
      <div className="contiener"><Card/></div>
    </div>
  );
}
export default App
