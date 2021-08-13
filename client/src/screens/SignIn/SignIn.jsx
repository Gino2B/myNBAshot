import { useState } from "react";
import { useHistory } from "react-router-dom";
import { login } from "../../services/users";

const SignIn = (props) => {
  const history = useHistory();

  const [form, setForm] = useState({
    email: "",
    password: "",
    isError: false,
    errorMsg: "",
  });

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const onSignIn = async (event) => {
    event.preventDefault();
    const { setUser } = props;
    try {
      const user = await login(form);
      setUser(user);
      history.push("/");
    } catch (error) {
      console.error(error);
      setForm({
        isError: true,
        errorMsg: "Invalid Credentials",
        email: "",
        password: "",
      });
    }
  };

  const renderError = () => {
    const toggleForm = form.isError ? "danger" : "";
    if (form.isError) {
      return (
        <button type="submit" className={toggleForm}>
          {form.errorMsg}
        </button>
      );
    } else {
      return <button type="submit">Sign In</button>;
    }
  };

  const { email, password } = form;

  return (
    <div className="signin-form">
      <form onSubmit={onSignIn}>
        <input
          id="signin-email-input"
          required
          type="text"
          name="email"
          value={email}
          placeholder="Enter Email"
          onChange={handleChange}
        />
        <input
          id="signin-password-input"
          required
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          onChange={handleChange}
        />
        {renderError()}
      </form>
    </div>
  );
};

export default SignIn;
