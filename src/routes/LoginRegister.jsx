import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/userProvider";
import { errorsFirebase } from "../errorsFirebase";

const LoginRegister = () => {
  const pathname = window.location.pathname.slice(1);
  const navigate = useNavigate();
  const validatePassword = (v) => {
    var noValido = /\s/;
    if (noValido.test(v)) {
      return false;
    } else {
      return true;
    }
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    setError,
  } = useForm();

  const { registerUser, setUser } = useContext(UserContext);

  const sendUser = async ({ email, password }) => {
    try {
      await registerUser(email, password);
    } catch (error) {
      const { code, message } = errorsFirebase(error);
      setError(code, { message });
    }
  };

  return (
    <div className="login-page">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <h3 className="mb-3">
              {pathname == "Login" ? "Login" : "Registro"}
            </h3>
            <div className="bg-white shadow rounded">
              <div className="row">
                <div className="col-md-7 pe-0">
                  <div className="form-left h-100 py-5 px-5">
                    <form
                      action=""
                      className="row g-4"
                      onSubmit={handleSubmit(sendUser)}
                    >
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
                            {...register("email", {
                              required: {
                                value: true,
                                message: "campo obligatorio",
                              },
                              pattern: {
                                value:
                                  /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/,
                                message: "ingrese un correo valido",
                              },
                            })}
                          />
                          {errors.email && (
                            <div className="col-12">
                              <label>{errors.email.message}</label>
                            </div>
                          )}
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
                            {...register("password", {
                              minLength: {
                                value: 6,
                                message: "Mínimo 6 carácteres",
                              },
                              validate: {
                                espacios: (v) => {
                                  if (!validatePassword(v)) {
                                    return "no se admiten espacios en blanco";
                                  }
                                  return true;
                                },
                              },
                            })}
                          />
                          {errors.password && (
                            <div className="col-12">
                              <label>{errors.password.message}</label>
                            </div>
                          )}
                          {pathname == "register" && (
                            <input
                              type="password"
                              className="form-control"
                              placeholder="Repetir contraseña"
                              {...register("repeatpassword", {
                                validate: {
                                  equals: (v) =>
                                    v === getValues("password") ||
                                    "las contraseñas no coinciden",
                                },
                              })}
                            />
                          )}
                        </div>
                        {errors.password && (
                          <div className="col-12">
                            <label>{errors.password.message}</label>
                          </div>
                        )}
                        {errors.repeatpassword && (
                          <div className="col-12">
                            <label>{errors.repeatpassword.message}</label>
                          </div>
                        )}
                      </div>
                      <div className="col-12">
                        <button
                          type="submit"
                          className="btn btn-primary px-4 float-start mt-4"
                        >
                          {pathname == "Login" ? "Login" : "Registrar"}
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
