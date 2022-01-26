import { useEffect, useState } from "react";

function Profile({ user, setUser }) {
  const [passwordHash, setPasswordHash] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost/user/${user.id}`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await (await res).json();

      setPasswordHash(data.msg.passwordHash);
      console.log("Works!!!!!!");
      console.log(data);
    };
    try {
    } catch (error) {
      console.log(error);
    }
  }, [user]);

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-conent-center">
          <div className="col-xsm-4">
            <div class="card text-white bg-black mb-3 shadow-lg text-center">
              <div class="card-header">
                <p>Profile</p>
                <h1>{user ? user.username : ""}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
