import React, { useEffect } from "react";
import Intercom from "@intercom/messenger-js-sdk";
import Branca from "../assets/Branca.png";

const Home = () => {
  const user = {
    id: "23541",
    name: "teste",
    email: "teste@gmail.com",
    createdAt: "1704067200",
  };

  useEffect(() => {
    // Set the Intercom settings before initializing
    window.intercomSettings = {
      app_id: "km32apcw",
      language_override: navigator.language || navigator.userLanguage, // Set language based on the user's browser language
      user_id: user.id, // Pass user information if needed
      name: user.name,
      email: user.email,
      created_at: user.createdAt, // Unix timestamp for when the user signed up
    };

    // Initialize Intercom with the settings defined in window.intercomSettings
    Intercom("boot", window.intercomSettings);
    
    // Cleanup function to shutdown Intercom when the component unmounts
    return () => {
      Intercom("shutdown");
    };
  }, [user]);

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
