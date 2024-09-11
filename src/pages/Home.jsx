import React from "react";
import MainBanner from "../components/MainBanner";
import PromotionCard from "../components/PromotionCard";
import { images, video, data } from "../constants";
import VideoBanner from "../components/VideoBanner";
import Intercom from "@intercom/messenger-js-sdk";

const Home = () => {

  const user = {
    id: "23541",
    name: "teste",
    email: "teste@gmail.com",
    createdAt: "1704067200"
  } 

  Intercom({
    app_id: "km32apcw",
    user_id: user.id, // IMPORTANT: Replace "user.id" with the variable you use to capture the user's ID
    name: user.name, // IMPORTANT: Replace "user.name" with the variable you use to capture the user's name
    email: user.email, // IMPORTANT: Replace "user.email" with the variable you use to capture the user's email
    created_at: user.createdAt, // IMPORTANT: Replace "user.createdAt" with the variable you use to capture the user's sign-up date in a Unix timestamp (in seconds) e.g. 1704067200
  });

  return (
    <main className="flex flex-col gap-10">
      <VideoBanner mobile={images.leomourabannermobile} />
      <div className="flex flex-col w-full gap-20 px-5 sm:px-10 lg:px-20">
        <h4 className="max-w-4xl text-base leading-[40px]">
          Fique por dentro das nossas{" "}
          <span className="uppercase leading-[40px] font-bold text-lg bg-gradient-to-r from-betpurple to-betpink rounded-full px-2 py-1">
            promoções
          </span>{" "}
          e saia na frente. Novas{" "}
          <span className="uppercase leading-[40px] font-bold text-lg bg-gradient-to-r from-betpurple to-betpink rounded-full px-2 py-1">
            oportunidades
          </span>{" "}
          toda semana somente para você. Vem com a gente!
        </h4>
        <h3 className="text-2xl font-medium tracking-widest underline underline-offset-8">
          Cassino
        </h3>
      </div>
      <div className="flex flex-wrap items-center justify-center w-full gap-5 px-5 sm:px-10 lg:px-20 lg:justify-start sm:gap-10 md:gap-14">
        {data.cassinoCardData.map((item, index) => (
          <div key={index}>
            <PromotionCard
              id={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          </div>
        ))}
      </div>
      <div className="flex flex-col w-full gap-20 px-5 mt-10 sm:px-10 lg:px-20">
        <h3 className="text-2xl font-medium tracking-widest underline underline-offset-8">
          Esportes
        </h3>
      </div>
      <div className="flex flex-wrap items-center justify-center w-full gap-5 px-5 sm:px-10 lg:px-20 lg:justify-start sm:gap-10 md:gap-14">
        {data.sportsCardData.map((item, index) => (
          <div key={index}>
            <PromotionCard
              id={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Home;
