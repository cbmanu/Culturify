import { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../graphql/users";
import { useNavigate } from "react-router-dom";

export function SignIn() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    password: "",
    email: "",
    age: "",
    interest: [],
  });
  const handleInput = ({ target: { name, password, email, age, value } }) => {
    setUser({
      ...user,
      [name]: value,
      [password]: value,
      [email]: value,
      [age]: value,
    });
  };
  // const handleClick = (e) => {
  //   if (e.target.checked) {
  //     console.log(user.interest);

  //     setUser({
  //       ...user,
  //       [e.target.name]: user.interest.push(e.target.value),
  //     });
  //   } else {
  //     console.log(user.interest);
  //     const interestValues = user.interest.filter(
  //       (interest) => interest != e.target.value
  //     );
  //     setUser({
  //       ...user,
  //       [e.target.name]: interestValues,
  //     });
  //   }
  // };
  const [createUser, { error }] = useMutation(CREATE_USER, {
    update(_, result) {
      sessionStorage.setItem("token", result?.data?.createUser?.token);
    },
    onError(error) {
      throw new Error(error);
    },
    variables: user,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser();
    navigate("/");
  };
  const handleTravel = (e) => {
    e.preventDefault();
    navigate("/LogIn");
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
                        <img
                          src="imgs/icon.png"
                          style={{
                            width: "100px",
                          }}
                          alt="logo"
                        />
                        <h4 className="mt-1 mb-5 pb-1">
                          Nosotros somos Culturify
                        </h4>
                      </div>

                      <form onSubmit={handleSubmit}>
                        {error && <p>{error.message}</p>}
                        <p>Por favor Registrate</p>
                        <div data-mdb-input-init className="form-outline mb-4">
                          <input
                            type="string"
                            id="usernameInput"
                            className="form-control"
                            placeholder="Usuario"
                            name="username"
                            onInput={handleInput}
                          />
                        </div>
                        <div data-mdb-input-init className="form-outline mb-4">
                          <input
                            type="email"
                            id="emailInput"
                            className="form-control"
                            placeholder="Email"
                            name="email"
                            onInput={handleInput}
                          />
                        </div>
                        <div data-mdb-input-init className="form-outline mb-4">
                          <input
                            type="number"
                            id="AgeInput"
                            className="form-control"
                            placeholder="Edad"
                            name="age"
                            onInput={handleInput}
                          />
                        </div>

                        <div data-mdb-input-init className="form-outline mb-4">
                          <input
                            type="password"
                            id="passwordInput"
                            className="form-control"
                            name="password"
                            placeholder="Contraseña"
                            onInput={handleInput}
                          />
                        </div>
                        <div className={`text-black `}>
                          <h4 className="mb-2">Cuentanos mas acerca de ti</h4>
                          <p>Que te interesa?</p>
                          <div className="row">
                            <div className="col">
                              <div>
                                Musica🎵
                                <input
                                  className="form-check-input "
                                  type="checkbox"
                                  id="musicaCheckbox"
                                  value="musica"
                                  name="interest"
                                  // onClick={handleClick}
                                />
                              </div>
                            </div>
                            <div className="col">
                              <div>
                                Libros📚
                                <input
                                  className="form-check-input "
                                  type="checkbox"
                                  value="libros"
                                  id="librosCheckbox"
                                  name="interest"
                                  // onClick={handleClick}
                                />
                              </div>
                            </div>
                            <div className="col">
                              <div>
                                Fitness🏋️‍♂️
                                <input
                                  className="form-check-input "
                                  type="checkbox"
                                  value="senderismo"
                                  id="senderismoCheckbox"
                                  name="interest"
                                  // onClick={handleClick}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <button
                          className="btn btn-primary btn-block fa-lg gradient-custom-2 mt-3 mb-3 d-block"
                          style={{ width: "100%" }}
                          type="submit"
                          value="Submit"
                        >
                          Registrar
                        </button>
                        <div className="text-center pt-1  pb-1">
                          <a
                            className="text-muted"
                            href="#!"
                            onClick={handleTravel}
                          >
                            Ya tienes cuenta? Click aca!
                          </a>
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
