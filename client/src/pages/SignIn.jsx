export function SignIn() {
  return (
    <>
      <section
        className="gradient-form min-vh-100"
        style={{
          backgroundColor: "#ccc",
        }}
      >
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
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
                        <h4 className="mt-1 mb-5 pb-1">We are Culturify</h4>
                      </div>

                      <form>
                        <p>Please Sign in</p>
                        <div data-mdb-input-init className="form-outline mb-4">
                          <input
                            type="string"
                            id="form2Example11"
                            className="form-control"
                            placeholder="Name"
                          />
                        </div>
                        <div data-mdb-input-init className="form-outline mb-4">
                          <input
                            type="email"
                            id="form2Example11"
                            className="form-control"
                            placeholder="Email"
                          />
                        </div>
                        <div data-mdb-input-init className="form-outline mb-4">
                          <input
                            type="email"
                            id="form2Example11"
                            className="form-control"
                            placeholder="Age"
                          />
                        </div>

                        <div data-mdb-input-init className="form-outline mb-4">
                          <input
                            type="password"
                            id="form2Example22"
                            className="form-control"
                            placeholder="Password"
                          />
                        </div>

                        <div className="text-center pt-1 mb-5 pb-1">
                          <button
                            className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3 d-block"
                            style={{ width: "100%" }}
                            type="button"
                          >
                            Log in
                          </button>
                          <a className="text-muted" href="#!">
                            Forgot password?
                          </a>
                        </div>

                        <div className="d-flex align-items-center justify-content-center pb-4">
                          <p className="mb-0 me-2">Dont have an account?</p>
                          <button
                            type="button"
                            className="btn btn-outline-danger"
                          >
                            Create new
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex gradient-custom-2">
                    <div className="text-white px-3 py-4 p-md-5 mx-md-4 mt-3">
                      <h4 className="mb-4">Cuentanos mas acerca de ti</h4>
                      <p className=" mb-0">Que te interesa?</p>
                      <div className="row">
                        <div className="col">
                          <div className="border border-secondary mt-5">
                            Musica🎵
                          </div>
                        </div>
                        <div className="col">
                          <div className="border border-secondary mt-5">
                            Musica🎵
                          </div>
                        </div>
                        <div className="col">
                          <div className="border border-secondary mt-5">
                            Musica🎵
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <div className="border border-secondary mt-5">
                            Musica🎵
                          </div>
                        </div>
                        <div className="col">
                          <div className="border border-secondary mt-5">
                            Musica🎵
                          </div>
                        </div>
                        <div className="col">
                          <div className="border border-secondary mt-5">
                            Musica🎵
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <div className="border border-secondary mt-5">
                            Musica🎵
                          </div>
                        </div>
                        <div className="col">
                          <div className="border border-secondary mt-5">
                            Musica🎵
                          </div>
                        </div>
                        <div className="col">
                          <div className="border border-secondary mt-5">
                            Musica🎵
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <div className="border border-secondary mt-5">
                            <p className="">
                              Musica🎵
                              <input
                                className="form-check-input "
                                type="checkbox"
                                value=""
                                id="flexCheckDefault"
                              />
                            </p>
                          </div>
                        </div>
                        <div className="col">
                          <div className="border border-secondary mt-5">
                            Musica🎵
                          </div>
                        </div>
                        <div className="col">
                          <div className="border border-secondary mt-5">
                            Musica🎵
                          </div>
                        </div>
                      </div>
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
