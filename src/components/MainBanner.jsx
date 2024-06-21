import mainBannerDesktop from '../assets/leomourabanner.png'
import mainBannerMobile from '../assets/leomourabannermobile.jpg'

export default function MainBanner({desktop, mobile}) {
    return (
        <section>
            <div className='hidden md:block'>
                <img src={desktop} className='w-full h-auto' />
            </div>
            <div className='md:hidden'>
                <img src={mobile} className='w-full h-auto' />
            </div>

        </section>
    )
}

