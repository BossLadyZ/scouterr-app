import React from "react";
import { fire } from "./config/fire";
import Header from "./components/Header";
import Records from "./pages/Records";

const logout = () => {
  fire

    .signOut()
    .then((u) => {
      console.log("Sign out succesfully");
    })
    .catch((error) => {
      console.log(error);
    });
};

export default function Home() {
  return (
    <div>
      <Header />
      <Records />
      <h2>You are logged in</h2>
      <button onClick={logout}>Log Out</button>
    </div>
  );
}
