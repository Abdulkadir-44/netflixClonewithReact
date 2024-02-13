import React from 'react'
import { useState } from 'react';
import netflixBG from '../assets/netflixBg.jpg'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {register} from '../firebase/Firebase'
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Register = () => {
  // Kullanıcımın kayıt olabilmesi için login fonksiyonu dahil edildi,daha sonra kullanıcı kayıt olduğunda navigate ile home sayfasına yönlendirildi useNavigate() aynı zamanda kullanıcının bilgisi olsun diye toast eklentisi eklendi ve sayfanın başlık çubuğu içeriği değiştirildi ta ki bizim login fonksiyonundan cevap gelene kadar bu sayede kullanıcıya kayıt işleminin yapıldığına dair işlemler gösterildi 
  const navigate=useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const showLoader = ()=>{
    document.title = "Kaydediliyor..." ;
  }
  const hideLoader=()=>{
    document.title = "Netflix" ;
  }

  const handleSubmit = async (e) => {
      e.preventDefault();
      
      const user = await register(email,password)
      
      if(user)
      {
        showLoader();
        
      setTimeout(() => {
        navigate('/',{
          replace:true
        })
        toast.success('Kayıt başarılı...') ;
        hideLoader();
      }, 2700);
      }
      
  }

  const { value } = useSelector(state => state.language);
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <div className="relative w-full min-h-screen font-poppins">
        {/* arkaplan resmi için */}
        <div className='myFilter  w-full min-h-[140vh] bg-no-repeat bg-cover ' style={{ backgroundImage: `url(${netflixBG})` }}></div>
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
                <div className='relative w-[30%] h-[500px] mx-auto mt-10 rounded-md'>
                  <div className='w-full h-full bg-black bg-opacity-60 rounded-md '></div>
                  <div className='absolute top-0 left-0 text-white w-full h-full px-10 py-10  '>
                    <h1 className=' text-3xl font-bold mb-8'>Kayıt Ol</h1>
                    <form onSubmit={handleSubmit}>
                      <input value={email} onChange={e => setEmail(e.target.value)} placeholder='E-posta veya telefon numarası' className='  w-full outline-none rounded-sm bg-transparent border-1 border-gray-400 p-3' type="email" />
                      <input value={password} onChange={e => setPassword(e.target.value)} placeholder='Şifre' className=' mt-5 w-full outline-none rounded-sm bg-transparent border-1 border-gray-400 p-3' type="password" />
                      <button type='submit' className='bg-netfixColor mt-5 w-full py-2 rounded-md hover:bg-red-700'>Kayıt Ol</button>

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
                    <h1 className=' text-3xl font-bold mb-8'>Register</h1>
                    <form>
                      <input placeholder='Email or phone number' className='  w-full outline-none rounded-sm bg-transparent border-1 border-gray-400 p-3' type="email" />
                      <input placeholder='Password' className=' mt-5 w-full outline-none rounded-sm bg-transparent border-1 border-gray-400 p-3' type="email" />
                      <button className='bg-netfixColor mt-5 w-full py-2 rounded-md hover:bg-red-700'>Register</button>

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

export default Register