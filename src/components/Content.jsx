import React from 'react'
import {useSelector} from 'react-redux'
const Content = () => {
    // Home componentinde gönderilen lang değeri ile burda ilgili kodlar çalıştırılıyor
    const {value}=useSelector(state=>state.language)
    return (
        <>
            {
                value === 'Türkçe' ? (
                    <>
                        <div className='text-center'>
                            <h1 className='text-[44px] font-bold mb-2 '>Herkes burada!</h1>
                            <p className='text-2xl mb-6'>Favori oyuncunuz, en yakın arkadaşınız, karşı komşunuz. Tabii filmin, dizinin ve belgeselin âlâsı da.</p>
                            <p className='text-md w-[75%] mx-auto mb-5'>İzlemeye hazır mısınız? Üye olmak ya da hesabınıza tekrar ulaşmak için tek yapmanız gereken e-posta adresinizi girmek.</p>
                        </div>
                        <div className='flex items-center'>
                            <input type="email" placeholder='youexample@gmail.com' className='p-4 w-[410px] mr-5 rounded-md border-1 outline-none focus:border-netfixColor bg-black opacity-80 text-sm' />
                            <button className=' hover:bg-red-700 duration-200 bg-netfixColor py-3 px-9 text-lg rounded-md relative'>Başlayın <span className='text-4xl absolute ml-1 top-2'>&gt;</span></button>

                        </div>
                    </>
                ) : (
                    <>
                        <div className='text-center'>
                            <h1 className='text-[44px] font-bold mb-2 '>Join the buzz</h1>
                            <p className='text-2xl mb-6'>Your favorite actors, best friends and neighbors are here. And so are the top films, series and more.</p>
                            <p className='text-md w-[75%] mx-auto mb-5'>Ready to watch? Enter your email to create or restart your membership.</p>
                        </div>
                        <div className='flex items-center'>
                            <input type="email" placeholder='youexample@gmail.com' className='p-4 w-[410px] mr-5 rounded-md border-1 outline-none focus:border-netfixColor bg-black opacity-80 text-sm' />
                            <button className=' hover:bg-red-700 duration-200 bg-netfixColor py-3 px-9 text-lg rounded-md relative'>Get Started <span className='text-4xl absolute ml-1 top-2'>&gt;</span></button>
                        </div>
                    </>
                )
            }
        </>
    )
}

export default Content