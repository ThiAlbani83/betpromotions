

export default function PromotionCard({ image, title, description }) {
    return (
        <div className='mt-5 border border-white rounded-lg shadow-inner shadow-betpink px-[18px] pt-[18px] pb-[10px] w-fit bg-[url(./assets/cardbg.png)]'>
            <img src={image} alt='promospaceman' className='w-[250px] h-[250px] object-fit' />
            <h4 className='text-lg tracking-wider font-medium text-betpink mt-2'>{title}</h4>
            <p className='text-sm mt-2 max-w-[250px]'>{description}</p>
            <button className='w-full text-center bg-betpink rounded-md py-3 mt-16 active:scale-90 duration-500'>+ Detalhes</button>
        </div>
    )
}