import { Link } from "react-router-dom";

export const Card = ({ title, price, stock, image, id }) => {
  return (
    <div
      style={{
        border: "2px solid black",
        width: "200px",
        padding: "30px",
        minHeight: "200px",
      }}
    >
      <img src={image} alt="" style={{ width: "110px" }} />
      <h2>Titulo:{title}</h2>
      <h3>Precio:{price}</h3>
      <h3>Stock:{stock}</h3>
      <Link to={`/itemDetail/${id}`}>
        <button>Ver detalles</button>
      </Link>
    </div>
  );
};
