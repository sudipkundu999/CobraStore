import { Link } from "react-router-dom";
import { useDocumentTitle } from "../utils";
import "./pages-css/login.css";

export const Login = () => {
  useDocumentTitle("Login");

  return (
    <main className="login-signup-main">
      <div className="login-container">
        <h2>Login</h2>
        <form action="" className="login-form">
          <label>Email address</label>
          <input
            className="email"
            type="email"
            id="login-email"
            placeholder="xyz@neog.camp"
          />
          <label htmlFor="login-password">Password</label>
          <input
            className="password"
            type="password"
            id="login-password"
            placeholder="********"
          />
          <div className="login-password-cta">
            <input type="checkbox" id="login-remember-me" />
            <label htmlFor="login-remember-me">Remember me</label>
            <a href="/" className="forgot-password">
              Forgot your password?
            </a>
          </div>
          <input
            type="submit"
            value="Login"
            className="btn btn-primary m-auto"
          />
        </form>
        <Link to="/signup" className="new-account">
          Create a new account {">"}
        </Link>
      </div>
    </main>
  );
};
