import React, { useState } from 'react'
import netflixBG from '../assets/netflixBg.jpg'
import { Link } from 'react-router-dom'
import Content from '../components/Content'
import { useSelector, useDispatch } from 'react-redux'
import { changeLanguage } from '../redux/features/languageSlice'
import { logout } from '../firebase/Firebase'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
const Home = () => {
    const navigate = useNavigate();
    const { value } = useSelector(state => state.language)
    const dispatch = useDispatch();

    const handleChange = (e) => {

        dispatch(changeLanguage(e.target.value))
    }

    const handleLogout = async () => {
        await logout();
        toast.success('Çıkış yapıldı...')


    }
    const { isLogin } = useSelector(state => state.user);

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

                            <div className='flex items-center'>
                                <div className='border-1 border-gray-500 rounded-sm px-1 bg-selectItemColor'>
                                    <i className="fa">&#xf1ab;</i>
                                    <select value={value} onChange={handleChange} className=' text-white text-sm py-1 px-2 outline-none bg-selectItemColor'>
                                        <option value="Türkçe">Türkçe</option>
                                        <option value="English">English</option>
                                    </select>
                                </div>
                            </div>
                            {
                                isLogin === true ? (
                                    value === 'Türkçe' ? (
                                        <div className='flex items-center gap-x-3'>
                                            <div onClick={() => setAvatarIsClicked(!avatarIsClicked)} className='bg-netfixColor w-11 h-11 rounded-full inline-flex items-center justify-center cursor-pointer hover:bg-red-700'>A</div>
                                            <button onClick={handleLogout} className='  bg-netfixColor h-8 items-center  text-sm px-2 rounded-md hover:bg-red-700 duration-200'
                                            >Çıkış</button>
                                        </div>
                                    ):(
                                        <div className='flex items-center gap-x-3'>
                                        <div onClick={() => setAvatarIsClicked(!avatarIsClicked)} className='bg-netfixColor w-11 h-11 rounded-full inline-flex items-center justify-center cursor-pointer hover:bg-red-700'>A</div>
                                        <button onClick={handleLogout} className='  bg-netfixColor h-8 items-center  text-sm px-2 rounded-md hover:bg-red-700 duration-200'
                                        >Logout</button>
                                    </div>
                                    )

                                ) : (
                                    value === 'Türkçe' ? <div className='flex gap-x-2'>
                                        <Link to="/login" className='bg-netfixColor py-1 text-sm px-3 rounded-md hover:bg-red-700 duration-200'>Oturum Aç</Link>
                                        <Link to="/register" className='bg-netfixColor py-1 text-sm px-3 rounded-md hover:bg-red-700 duration-200'>Kayıt Ol</Link>
                                    </div> : <div className='flex gap-x-2'>
                                        <Link to="/login" className='bg-netfixColor py-1 text-sm px-6 rounded-md hover:bg-red-700 duration-200'>Sign In</Link>
                                        <Link to="/register" className='bg-netfixColor py-1 text-sm px-6 rounded-md hover:bg-red-700 duration-200'>Register</Link>
                                    </div>
                                )
                            }
                        </div>
                    </header>
                    <div className='mt-9 content text-white w-[85%] mx-auto h-[500px] font-poppins  flex flex-col justify-center items-center'>
                        {/* Çok fazla yer kapladığı için content kısmını başka bir componentte yazdım */}
                        <Content />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home