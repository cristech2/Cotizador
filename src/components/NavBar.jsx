import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/userProvider";


const NavBar = () => {
  const { user } = useContext(UserContext);
  console.log(user);

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">
          Cotizador
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {user ? (
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="#">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Cotizador
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Productos Base
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Procesos disponibles
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Historial de Cotizaciones
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Perfil de usuario
                </Link>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  Registrar
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
