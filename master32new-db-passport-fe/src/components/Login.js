import { useState } from "react";
// import { DataTypes } from "sequelize/dist";

function Login({ user, setUser }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const baseURL = "http://localhost/user/userlogin";

  const handleUserName = (e) => setUserName(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = JSON.stringify({
      name: userName,
      password: password,
    });

    const res = await fetch(baseURL, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: payload,
    });
    const data = await res.json();
    setUser({ username: data.user.name, jwt: data.token });
    // console.log(await res.json());
  };
  return (
    <>
      <div className="container mt-5">
        <div className="row justify-conent-center">
          <div className="col-xsm-4">
            <div class="card text-white bg-black mb-3 shadow-lg text-center">
              <div class="card-header">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                  <label htmlFor="user">User:</label>
                  <input
                    type="text"
                    name="user"
                    value={userName}
                    onChange={handleUserName}
                  />

                  <label htmlFor="Password">Password: </label>
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={handlePassword}
                  />
                  <input type="submit" value="Submit" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
