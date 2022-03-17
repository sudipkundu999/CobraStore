import { Link } from "react-router-dom";
import "./pages-css/login.css";

export const Signup = () => {
  return (
    <main className="login-signup-main">
      <div className="login-container">
        <h2>Signup</h2>
        <form action="" className="login-form">
          <label htmlFor="login-email">Email address</label>
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
            <label htmlFor="login-remember-me">
              I accept all terms & conditions
            </label>
          </div>
          <input
            type="submit"
            value="Create new account"
            className="btn btn-primary m-auto"
          />
        </form>
        <Link to="/login" className="new-account">
          Already have an account {">"}
        </Link>
      </div>
    </main>
  );
};
