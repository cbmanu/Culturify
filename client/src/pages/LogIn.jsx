import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth";

export function LogIn() {
  const { login } = useAuth();

  const navigate = useNavigate();

  const width = {
    width: "185",
  };
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const handleInput = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async () => {
    await login(form);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };
  const handleTravel = (e) => {
    e.preventDefault();
    navigate("/SignIn");
  };
  return (
    <>
      <section
        className="gradient-form min-vh-100"
        style={{
          backgroundColor: "#ccc",
        }}
      >
        <div className="container  h-100">
          <div className="row d-flex justify-content-center align-items-center  min-vh-100">
            <div className="col-xl-10">
              <div className="card rounded-3 text-black">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="card-body p-md-5 mx-md-4">
                      <div className="text-center">
                        <img src="imgs/icon.png" style={width} alt="logo" />
                        <h4 className="mt-1 mb-5 pb-1">We are Culturify</h4>
                      </div>

                      <form onSubmit={handleSubmit}>
                        <p>Por favor inicia sesion en tu cuenta</p>

                        <div data-mdb-input-init className="form-outline mb-4">
                          <input
                            type="email"
                            id="emailInput"
                            className="form-control"
                            name="email"
                            placeholder="Email"
                            onInput={handleInput}
                          />
                        </div>

                        <div data-mdb-input-init className="form-outline mb-4">
                          <input
                            type="password"
                            id="passswordInput"
                            className="form-control"
                            name="password"
                            placeholder="Contraseña"
                            onInput={handleInput}
                          />
                        </div>

                        <div className="text-center pt-1 mb-5 pb-1">
                          <button
                            className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3 d-block"
                            style={{ width: "100%" }}
                            type="submit"
                            value="Submit"
                            onSubmit={handleSubmit}
                          >
                            Inicia Sesion
                          </button>
                          <a className="text-muted" href="#!"></a>
                          Olvidaste tu contraseña?
                        </div>

                        <div className="d-flex align-items-center justify-content-center pb-4">
                          <p className="mb-0 me-2">No tienes una cuenta?</p>
                          <button
                            type="button"
                            className="btn btn-outline-danger"
                            onClick={handleTravel}
                          >
                            Registrate aca
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                    <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                      <h4 className="mb-4">
                        Descubre Cultura en Tus Manos con Culturify
                      </h4>
                      <p className="mb-0">
                        ¿Eres un apasionado de la cultura? ¿Te encanta descubrir
                        eventos culturales, festivales, y actividades que
                        enriquecen tu vida? ¡Entonces Culturify es para ti!
                        Culturify es tu puerta de entrada a un mundo lleno de
                        experiencias culturales. Nuestra plataforma está
                        diseñada para conectar personas como tú con una vibrante
                        comunidad de amantes de la cultura. Organiza, descubre y
                        participa en eventos que te inspiran y te conectan con
                        tu pasión por la cultura.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
