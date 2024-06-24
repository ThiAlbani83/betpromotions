import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function PromotionCard({ id, image, title, description }) {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/promotion/${id}`);
    };

    return (
        <div className='mt-5 border border-white rounded-lg shadow-inner shadow-betpink px-[18px] pt-[18px] pb-[10px] w-fit bg-[url(./assets/cardbg.png)]'>
            <img src={image} alt='promospaceman' className='w-[250px] h-[250px] object-fit' />
            <h4 className='text-lg tracking-wider font-medium text-betpink mt-2'>{title}</h4>
            <p className='text-sm mt-2 max-w-[250px]'>{description}</p>
            <button onClick={handleClick} className='w-full text-center bg-gradient-to-r from-betpurple to-betpink rounded-md py-3 mt-16 active:scale-90 duration-500'>+ Detalhes</button>
        </div>
    )
}