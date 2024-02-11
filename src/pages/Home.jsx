import React, { useState } from 'react'
import netflixBG from '../assets/netflixBg.jpg'
import { Link } from 'react-router-dom'
import Content from '../components/Content' 
import {useSelector,useDispatch} from 'react-redux'
import {changeLanguage} from '../redux/features/languageSlice'

const Home = () => {

    const {value} = useSelector(state=>state.language)
    const dispatch=useDispatch();

    const handleChange = (e) => {
        dispatch(changeLanguage(e.target.value))
       
    }

    console.log(value);

    return (
        <>
            <div className="relative w-full" >
                {/* //arkaplan karatması diğer elementlere uygulanmasın diye böyle bir çözüm yolu buldum */}
                <div className='myFilter  w-full min-h-screen  bg-center' style={{ backgroundImage: `url(${netflixBG})` }}></div>
                {/* //Bu kısım içerik olcak */}
                <div className='z-20 absolute top-0 left-0 w-full min-h-screen'>
                    <header className='text-white pt-6 flex justify-between px-40  items-center font-poppins '>
                        <div className='font-poppins font-semibold text-netfixColor text-5xl select-none'>
                            NETFLIX
                        </div>
                        <div className='list-ıtems flex gap-x-6'>

                            <div className='border-1 px-2 border-gray-500 rounded-sm'>
                                <i className="fa">&#xf1ab;</i>
                                <select value={value} onChange={handleChange} className='text-white text-sm py-1 px-2 outline-none bg-selectItemColor'>
                                    <option value="Türkçe">Türkçe</option>
                                    <option value="English">English</option>
                                </select>
                            </div>
                            {
                                value === 'Türkçe' ? <Link to="/register" className='bg-netfixColor py-1 text-sm px-6 rounded-md hover:bg-red-700 duration-200'>Kayıt Ol</Link> : <Link to="/register" className='bg-netfixColor py-1 text-sm px-6 rounded-md hover:bg-red-700 duration-200'>Sign In</Link>
                            }
                        </div>
                    </header>
                    <div className='mt-9 content text-white w-[85%] mx-auto h-[500px] font-poppins  flex flex-col justify-center items-center'>
                        {/* Çok fazla yer kapladığı için content kısmını başka bir componentte yazdım */}
                        <Content/>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home