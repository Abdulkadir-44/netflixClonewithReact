import React, { useState } from 'react'
import netflixBG from '../assets/netflixBg.jpg'
import { Link ,useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux'
import {login} from '../firebase/Firebase'
import toast from 'react-hot-toast'

const Sign  = () => {

  const { value } = useSelector(state => state.language)
  const [clicked, setClicked] = useState(false);

  const navigate=useNavigate();
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  
  const handleSubmit = async e=>{
    e.preventDefault();
    const user = await login(email,password)
    if(user)
    {
        toast.success('Giriş Başarılı...')
        navigate('/',{
          replace:true
        })
    }
  }

  return (
    <>
      <div className="relative w-full min-h-screen font-poppins">
        {/* arkaplan resmi için */}
        <div className='myFilter  w-full min-h-[160vh] bg-no-repeat bg-cover ' style={{ backgroundImage: `url(${netflixBG})` }}></div>
        {/* form ve header kısmı burası */}
        <div className='absolute top-0 left-0 w-full min-h-screen'>
          <header className='text-white pt-6  px-40 w-full font-poppins '>
            <Link to="/" className='font-poppins font-semibold text-netfixColor text-5xl select-none'>
              NETFLIX
            </Link>
          </header>

          {
            value === 'Türkçe' ? (
              <>
                <div className='relative w-[30%] h-[700px] mx-auto mt-10 rounded-md'>
                  <div className='w-full h-full bg-black bg-opacity-60 rounded-md '></div>
                  <div className='absolute top-0 left-0 text-white w-full h-full px-10 py-10  '>
                    <h1 className=' text-3xl font-bold mb-8'>Oturum Aç</h1>
                    <form onSubmit={handleSubmit}>
                      <input onChange={e=>setEmail(e.target.value)} 
                      placeholder='E-posta veya telefon numarası' className='  w-full outline-none rounded-sm bg-transparent border-1 border-gray-400 p-3' type="email" />
                      <input  onChange={e=>setPassword(e.target.value)} 
                      placeholder='Şifre' className=' mt-5 w-full outline-none rounded-sm bg-transparent border-1 border-gray-400 p-3' type="password" />
                      <button type='submit' className='bg-netfixColor mt-5 w-full py-2 rounded-md hover:bg-red-700'>Oturum Aç</button>
                      <p className='text-center my-4'>OR</p>
                      <button className='bg-gray-600 bg-opacity-45 w-full py-2 rounded-md hover:bg-gray-600'>Oturum Açma Kodu Kullan</button>
                      <p className='text-sm text-center mt-2 cursor-pointer hover:text-netfixColor hover:text-opacity-70 hover:underline'>Parolayı mı unuttunuz?</p>
                      <div className='mt-7 flex items-center gap-x-4'>
                        <input className='w-5 h-5' type="checkbox" />
                        <span>Beni hatırla</span>
                      </div>
                      <p className='text-sm mt-3 text-gray-400'>Netflix'e katılmak ister misiniz? <Link className='text-white hover:underline' to="/">Şimdi kaydolun</Link> </p>
                      {
                        clicked === false ? (<p className='text-xs mt-4 text-gray-400'>Bu sayfa robot olmadığınızı kanıtlamak için Google reCAPTCHA tarafından korunuyor.
                          <a onClick={() => setClicked(!clicked)} className='text-blue-500 hover:underline' href="#"> Daha fazla bilgi alın</a></p>)
                          : (
                            <p className='text-xs mt-4 text-gray-400'>Bu sayfa robot olmadığınızı kanıtlamak için Google reCAPTCHA tarafından korunuyor.</p>
                          )
                      }
                      {
                        clicked && (

                          <p className='text-xs mt-5 text-gray-400'>
                            Google reCAPTCHA tarafından toplanan bilgiler Google'ın <a className='text-blue-500' target='_blank' href="https://policies.google.com/privacy">Gizlilik Politikası</a> ve <a target='_blank' className='text-blue-500' href="https://policies.google.com/terms">Hizmet Şartları</a>'na tabidir. Bu bilgiler reCAPTCHA hizmetinin sağlanması, sürdürülmesi, geliştirilmesi ve genel hizmet amaçları için kullanılır (Google tarafından kişiselleştirilmiş reklamlar sunmak için kullanılmaz).
                          </p>

                        )
                      }
                    </form>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className='relative w-[30%] h-[700px] mx-auto mt-10 rounded-md'>
                  <div className='w-full h-full bg-black bg-opacity-60 rounded-md '></div>
                  <div className='absolute top-0 left-0 text-white w-full h-full px-10 py-10'>
                    <h1 className=' text-3xl font-bold mb-8'>Sign In</h1>
                    <form onSubmit={handleSubmit}>
                      <input onChange={e=>setEmail(e.target.value)} 
                      placeholder='Email or phone number' className='  w-full outline-none rounded-sm bg-transparent border-1 border-gray-400 p-3' type="email" />
                      <input onChange={e=>setPassword(e.target.value)}
                       placeholder='Password' className=' mt-5 w-full outline-none rounded-sm bg-transparent border-1 border-gray-400 p-3' type="password" />
                      <button type='submit' className='bg-netfixColor mt-5 w-full py-2 rounded-md hover:bg-red-700'>Sign In</button>
                      <p className='text-center my-4'>OR</p>
                      <button className='bg-gray-600 bg-opacity-45 w-full py-2 rounded-md hover:bg-gray-600'>Use a Sign In Code</button>
                      <p className='text-sm text-center mt-2 cursor-pointer hover:text-netfixColor hover:text-opacity-70 hover:underline'>Forgot password?</p>
                      <div className='mt-7 flex items-center gap-x-4'>
                        <input className='w-5 h-5' type="checkbox" />
                        <span>Remember me</span>
                      </div>
                      <p className='text-sm mt-3 text-gray-400'>New to Netflix? <Link className='text-white hover:underline' to="/">Sign Up now</Link> </p>
                      {
                        clicked === false ? (<p className='text-xs mt-4 text-gray-400'>This page is protected by Google reCAPTCHA to ensure you're not a bot.
                          <a onClick={() => setClicked(!clicked)} className='text-blue-500 hover:underline' href="#"> Learn more.</a></p>)
                          : (
                            <p className='text-xs mt-4 text-gray-400'>This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
                          )
                      }
                      {
                        clicked && (

                          <p className='text-xs mt-5 text-gray-400'>
                            The information collected by Google reCAPTCHA is subject to the Google<a className='text-blue-500 hover:underline' target='_blank' href="https://policies.google.com/privacy">Privacy Policy</a> ve <a target='_blank' className='text-blue-500 hover:underline' href="https://policies.google.com/terms">Terms of Service</a>and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalized advertising by Google).
                          </p>

                        )
                      }
                    </form>
                  </div>
                </div>
              </>
            )
          }

        </div>
      </div>
    </>
  )
}

export default Sign 