import { plantList } from "../Product";
import "../style.css";
export default function Card() {
  const ListProduit = plantList.map((p) => {
    return (
      <div key={p.id} className="item">
        <div className="image">
          <img src={p.image} alt={p.name} style={{width:"300px"}} />
        </div>
        <h1>{p.name}</h1>
        <p>{p.category}</p>
        <strong>Prix :{p.prix}</strong>
      </div>
    );
  });
  return <div className="Card">{ListProduit}</div>;
}
