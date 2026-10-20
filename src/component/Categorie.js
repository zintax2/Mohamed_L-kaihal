import "../style.css";
import { plantList } from "../Product";
export default function Categorie() {
  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    [],
  );
  const ListCategories = categories.map((c) => <li className="li">{c}</li>);
  return (
    <div className="categories">
      {ListCategories}
    </div>
  );
}
