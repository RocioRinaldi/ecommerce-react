import { CartWidget } from "../../common/cartWidget/CartWidget";
import "./navbar.css";
import { Link } from "react-router-dom";
export const Navbar = ({ darkMode }) => {
  return (
    <>
      <div
        className={
          darkMode ? "container-navbar-dark navbar" : "container-navbar navbar"
        }
      >
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dymx8k9np/image/upload/v1730238207/watch-classic-logo-icon-design-vector_elhhun.jpg"
            alt="logo"
            style={{
              width: "100px",
              height: "100px",
            }}
          />
        </Link>
        <ul style={{ display: "flex", gap: "20px" }}>
          <Link to="/">Todo </Link>

          <Link to={"/category/hombres"}>Hombres</Link>
          <Link to={"/category/mujer"}>Mujer</Link>
        </ul>

        <CartWidget />
      </div>
    </>
  );
};
