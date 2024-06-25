import React from 'react';
import MainBanner from '../components/MainBanner';
import PromotionCard from '../components/PromotionCard';
import { images, video, data } from '../constants'
import VideoBanner from '../components/VideoBanner';

const Home = () => {
    return (
        <main className='flex flex-col gap-10'>         
                <VideoBanner mobile={images.leomourabannermobile} />
            <div className='w-full px-5 sm:px-10 lg:px-20 flex flex-col gap-20'>
                <h4 className='max-w-4xl text-base leading-[40px]'>Fique por dentro das nossas <span className='uppercase leading-[40px] font-bold text-lg bg-gradient-to-r from-betpurple to-betpink rounded-full px-2 py-1'>promoções</span> e saia na frente. Novas <span className='uppercase leading-[40px] font-bold text-lg bg-gradient-to-r from-betpurple to-betpink rounded-full px-2 py-1'>oportunidades</span> toda semana somente para você. Vem com a gente!</h4>
                <h3 className='text-2xl font-medium tracking-widest underline underline-offset-8'>Cassino</h3>
            </div>
            <div className='w-full px-5 sm:px-10 lg:px-20 flex flex-wrap items-center justify-center lg:justify-start gap-5 sm:gap-10 md:gap-14'>
                {data.cassinoCardData.map((item, index) => (
                    <div key={index}>
                        <PromotionCard id={item.id} image={item.image} title={item.title} description={item.description} />
                    </div>
                ))}
            </div>
            <div className='w-full px-5 sm:px-10 lg:px-20 flex flex-col gap-20 mt-10'>
                <h3 className='text-2xl font-medium tracking-widest underline underline-offset-8'>Esportes</h3>
            </div>
            <div className='w-full px-5 sm:px-10 lg:px-20 flex flex-wrap items-center justify-center lg:justify-start gap-5 sm:gap-10 md:gap-14'>
                {data.sportsCardData.map((item, index) => (
                    <div key={index}>
                        <PromotionCard id={item.id} image={item.image} title={item.title} description={item.description} />
                    </div>
                ))}
            </div>

        </main>
    );
};

export default Home;