import React from "react";
import Intercom from "@intercom/messenger-js-sdk";
import Branca from "../assets/Branca.png";

const Home = () => {
  const user = {
    id: "23541",
    name: "teste",
    email: "teste@gmail.com",
    createdAt: "1704067200",
  };

  Intercom({
    app_id: "km32apcw",
    user_id: user.id, // IMPORTANT: Replace "user.id" with the variable you use to capture the user's ID
    name: user.name, // IMPORTANT: Replace "user.name" with the variable you use to capture the user's name
    email: user.email, // IMPORTANT: Replace "user.email" with the variable you use to capture the user's email
    created_at: user.createdAt,
    language_override: navigator.language || navigator.userLanguage, // IMPORTANT: Replace "user.createdAt" with the variable you use to capture the user's sign-up date in a Unix timestamp (in seconds) e.g. 1704067200
  });

  

  return (
    <main className="flex flex-col gap-40">
      <div className="flex justify-center mt-60">
        <img src={Branca} alt="Logo" className="w-[50%]" />
      </div>
      <div>
        <h1 className="text-5xl text-center text-white">Página de Testes</h1>
      </div>
    </main>
  );
};

export default Home;
