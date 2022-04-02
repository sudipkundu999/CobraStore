import { Link } from "react-router-dom";
import { useAuth } from "../contexts/auth-context";
import { useDocumentTitle } from "../utils";
import "./pages-css/login.css";

export const Login = () => {
  useDocumentTitle("Login");
  const { formData, setFormData, onSubmitLogin } = useAuth();

  const loginAsGuest = () => {
    setFormData((prev) => ({
      ...prev,
      email: "guest@cobrastore.com",
      password: "cobrastore",
    }));
  };

  return (
    <main className="login-signup-main">
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={(e) => onSubmitLogin(e)} className="login-form">
          <label>
            Email address
            <input
              className="email"
              type="email"
              id="login-email"
              placeholder="user@cobrastore.com"
              value={formData.email}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
            />
          </label>
          <label>
            Password
            <input
              className="password"
              type="password"
              id="login-password"
              placeholder="********"
              value={formData.password}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, password: e.target.value }))
              }
            />
          </label>
          <div className="login-password-cta">
            <label>
              <input type="checkbox" id="login-remember-me" defaultChecked />
              Remember me
            </label>
            <div
              className="btn btn-link admin-login"
              onClick={() => loginAsGuest()}
            >
              Login as Guest
            </div>
          </div>
          <input
            type="submit"
            value="Login"
            className="btn btn-primary m-auto"
          />
        </form>
        <Link to="/signup" className="new-account">
          Create a new account &gt;
        </Link>
      </div>
    </main>
  );
};
