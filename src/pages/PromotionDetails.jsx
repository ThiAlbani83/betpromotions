
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { data, images } from '../constants';
import MainBanner from '../components/MainBanner';
import VideoBanner from '../components/VideoBanner';
import { BiArrowBack } from 'react-icons/bi';

const PromotionDetails = () => {
    const { id } = useParams();
    const promotion = data.cassinoCardData.find(item => item.id === parseInt(id)) ||
        data.sportsCardData.find(item => item.id === parseInt(id));

    if (!promotion) {
        return <div>Promoção não encontrada!</div>;
    }

    return (
        <div className='flex flex-col gap-10'>
            <VideoBanner mobile={images.leomourabannermobile} />
            <Link to={"/"} className='w-fit'><span className='flex items-center gap-2 text-gray-100 ml-10'><BiArrowBack className='text-xl' />Voltar</span></Link>
            <div className='w-full px-5 sm:px-10 lg:px-20 flex flex-col items-center lg:flex-row gap-10 lg:items-center justify-center mt-10'>
                <img src={promotion.image} alt="promoImage" className='w-[550px] min-w-[320px] rounded-lg' />
                <div className='flex flex-col gap-6 max-w-[550px] border-r border-r-betpink border-b border-b-betpink px-6 border-t border-t-betpink py-6 border-l border-l-betpink lg:border-l-0'>
                    <h3 className='text-2xl text-betpink font-semibold -tracking-tighter uppercase'>{promotion.termsTitle}</h3>
                    <h3 className='text-base'>{promotion.termsUse}</h3>
                    <ul className='list-disc p-5 max-w-[500px] space-y-4'>{promotion.req.map((item, index) => (
                        <li className='text-sm marker:' key={index}>{item}</li>
                    ))}</ul>
                </div>

            </div>
        </div>
    );
};

export default PromotionDetails;
