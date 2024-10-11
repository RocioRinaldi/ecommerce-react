import { CartWidget } from "../../common/cartWidget/CartWidget";
import "./navbar.css";

export const Navbar = () => {
  return (
    <>
      <div className="container-navbar">
        <img
          src="https://res.cloudinary.com/dymx8k9np/image/upload/v1728595841/Dise%C3%B1o_sin_t%C3%ADtulo-removebg-preview_xpxa3k.png"
          alt="logo"
          style={{
            width: "100px",
            height: "100px",
          }}
        />
        <ul
          style={{
            display: "flex",
            gap: "10px",
          }}
        >
          <li>Todos los productos</li>
          <li>Placard</li>
          <li>Mesas</li>
        </ul>

        <CartWidget />
      </div>
    </>
  );
};
