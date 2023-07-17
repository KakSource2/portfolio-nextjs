import { useState } from "react";
import { auth_as_admin } from "../assets/code/pocketbase";

const Login = () => {
  const [password, setPassword] = useState("");

  return (
    <div>
      <main>
        <form>
          <h3>Password</h3>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          ></input>
          <button onClick={() => auth_as_admin(password)}>Login</button>
        </form>
      </main>
    </div>
  );
};
export default Login;
