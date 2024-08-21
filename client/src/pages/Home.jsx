import { useQuery } from "@apollo/client";
import { GET_POST } from "../graphql/post";
import { GET_USER } from "../graphql/users";
import { PostCard } from "../Components/PostCard";
import { Navbar } from "../Components/Navbar";
// import { userContext } from "../context/auth";
// import { useContext } from "react";
export function Home() {
  let num = 0;
  // const user = useContext(userContext);
  const post = useQuery(GET_POST);

  const user = useQuery(GET_USER, {
    update(_, result) {
      console.log(result);

      return result;
    },
    onError(error) {
      throw new Error(error);
    },
    variables: {
      token: sessionStorage.getItem("token"),
    },
  });
  console.log(user.data);

  return (
    <>
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
      />

      <Navbar active={{ Home: "active", Post: "" }}></Navbar>
      <div id="main-content mt-5" className="blog-page">
        <div className="container">
          <div className="row clearfix">
            <div className="col-lg-8 col-md-12 left-box">
              <div>
                {post.loading ? (
                  <h1>Loading posts...</h1>
                ) : (
                  post.data.getPosts &&
                  post.data.getPosts.map((post) => {
                    num = num + 1;
                    return (
                      <PostCard
                        key={post._id}
                        post={{ num: num.toString(), post: post }}
                      ></PostCard>
                    );
                  })
                )}
              </div>
            </div>
            <div className="col-lg-4 col-md-12 right-box">
              <div className="card">
                <div className="header">
                  <h2>Busca segun tus intereses</h2>
                </div>
                <div className="body widget">
                  <ul className="list-unstyled categories-clouds m-b-0">
                    <li>
                      <a href="">Libros</a>
                    </li>
                    <li>
                      <a href="">Senderismo</a>
                    </li>
                    <li>
                      <a href="">Musica</a>
                    </li>
                    <li>
                      <a href="">Peliculas</a>
                    </li>
                    <li>
                      <a href="">Naturaleza</a>
                    </li>
                    <li>
                      <a href="">Bailar</a>
                    </li>
                    <li>
                      <a href="">Videojuegos</a>
                    </li>
                    <li>
                      <a href="">Estudio</a>
                    </li>
                    <li>
                      <a href="">Informartica</a>
                    </li>
                    <li>
                      <a href="">Anime</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card">
                <div className="header">
                  <h2>Noticias!</h2>
                </div>
                <div className="body widget popular-post">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="single_post">
                        <p className="m-b-0">
                          Viene Lasso a San Cristobal el 30 de Noviembre!
                        </p>
                        <div className="img-post">
                          <img src="imgs/lasso.jpg" alt="lasso concierto" />
                        </div>
                      </div>
                      <div className="single_post">
                        <p className="m-b-0">
                          Viene una proxima caminata de la Unet!
                        </p>
                        <div className="img-post">
                          <img src="imgs/unet.jpg" alt="Caminata unet" />
                        </div>
                      </div>
                      <div className="single_post">
                        <p className="m-b-0">
                          Proyecciones infantiles gratis en el teatro de la
                          unet!
                        </p>
                        <div className="img-post">
                          <img src="imgs/cine.png" alt="Cine unet" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="header">
                  <h2>
                    Inscribite con tu Email{" "}
                    <small>
                      para que te lleguen nuestras notificaciones de los eventos
                    </small>
                  </h2>
                </div>
                <div className="body widget newsletter">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Email"
                    />
                    <div className="input-group-append">
                      <span className="input-group-text">
                        <i className="icon-paper-plane"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
