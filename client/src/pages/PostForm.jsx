import { Navbar } from "../Components/Navbar";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_POST } from "../graphql/post";
import { useNavigate } from "react-router-dom";
export function PostForm() {
  const navigate = useNavigate();
  const [post, setPost] = useState({
    title: "",
    body: "",
    img: "",
  });
  const handleInput = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };

  const [createPost, { error }] = useMutation(CREATE_POST, {
    update(_, result) {
      console.log(result);

      return result;
    },
    onError(error) {
      throw new Error(error);
    },
    variables: post,
    context: {
      headers: {
        authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    },
  });

  const handleFile = async (e) => {
    e.preventDefault();
    const file = document.getElementById("img").files[0];
    const formData = new FormData();
    formData.append("file", file);

    fetch("http://localhost:4000/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(typeof data);

        setPost({
          ...post,
          img: data,
        });
        console.log(post);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createPost();
    navigate("/");
  };

  return (
    <>
      <Navbar active={{ Home: "", Post: "active" }}></Navbar>
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
                <input
                  type="file"
                  id="img"
                  name="img"
                  accept="image/png, image/jpeg"
                  onChange={handleFile}
                />
                <div className="row g-0">
                  <div className="card-body p-md-5 mx-md-4">
                    <div className="text-center">
                      <img
                        src="imgs/icon.png"
                        style={{
                          width: "100px",
                        }}
                        alt="logo"
                      />
                      <h2 className="mt-1 mb-3 pb-1">
                        Crea tu evento personalizado!
                      </h2>
                      <p className="textareaSub">
                        Bienvenido a nuestra plataforma de eventos. <br />
                        Completa este formulario y estaras compartiendo tu
                        evento con una amplia audiencia.
                        <br />
                        Sigue estos pasos:
                      </p>
                    </div>

                    <form onSubmit={handleSubmit}>
                      {error && <p>{error.message}</p>}
                      <div data-mdb-input-init className="form-outline mb-4">
                        <input
                          type="string"
                          id="usernameInput"
                          className="form-control  form-control-lg"
                          placeholder="Titulo Del Evento"
                          name="title"
                          onInput={handleInput}
                        />
                      </div>
                      <textarea
                        className="form-control form-control-lg"
                        name="body"
                        placeholder="Descripcion Del Evento"
                        onInput={handleInput}
                      ></textarea>

                      <button
                        className="btn btn-primary btn-block mt-5 fa-lg gradient-custom-2 mb-3 d-block"
                        style={{ width: "100%" }}
                        type="submit"
                        value="Submit"
                      >
                        Publicar
                      </button>
                    </form>
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
