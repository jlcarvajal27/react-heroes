import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const loginNavigate = useNavigate();

  const onLogin = () => {
    login("Jorge Carvajal");

    loginNavigate("/", {
      replace: true,
    });
  };

  return (
    <section className="vh-100 ">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card bg-dark text-white">
              <div className="card-body p-5 text-center">
                <div className="mb-md-5 mt-md-4 pb-5">
                  <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                  <p className="text-white-50 mb-5">Please enter Login!</p>

                  <button
                    className="btn btn-outline-light btn-lg px-5"
                    onClick={onLogin}
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
