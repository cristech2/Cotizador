import { useForm } from "react-hook-form";


const LoginRegister = () => {
  const pathname = window.location.pathname;
const {register} = useForm()

  return (
    <div className="login-page">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <h3 className="mb-3">
              {pathname == "/Login" ? "Login" : "Registro"}
            </h3>
            <div className="bg-white shadow rounded">
              <div className="row">
                <div className="col-md-7 pe-0">
                  <div className="form-left h-100 py-5 px-5">
                    <form action="" className="row g-4">
                      <div className="col-12">
                        <label>
                          Username<span className="text-danger">*</span>
                        </label>
                        <div className="input-group">
                          <div className="input-group-text">
                            <i className="bi bi-person-fill"></i>
                          </div>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Ingresar Usuario"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <label>
                          Password<span className="text-danger">*</span>
                        </label>
                        <div className="input-group">
                          <div className="input-group-text">
                            <i className="bi bi-lock-fill"></i>
                          </div>
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Ingresar contraseña"
                          />
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Repetir contraseña"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <button
                          type="submit"
                          className="btn btn-primary px-4 float-start mt-4"
                        >
                          login
                        </button>
                        <button className="btn btn-primary px-4 float-end mt-4">
                          login con Google
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-md-5 ps-0 d-none d-md-block">
                  <div className="form-right h-100 bg-primary text-white text-center pt-5">
                    <i className="bi bi-bootstrap"></i>
                    <h2 className="fs-1">Welcome Back!!!</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
