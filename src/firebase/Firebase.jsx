import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged ,signOut } from 'firebase/auth'
import { initializeApp } from "firebase/app";
import { toast } from 'react-hot-toast'
import { store } from '../redux/app/store'
import { userIsLogin ,userIsLogout} from '../redux/features/userSlice'

const firebaseConfig = {
    apiKey: import.meta.env.VITE_REACT_APP_API_KEY,
    authDomain: import.meta.env.VITE_REACT_APP_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_REACT_APP_PROJECT_ID,
    storageBucket: import.meta.env.VITE_REACT_APP_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_REACT_APP_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_REACT_APP_ID
};


const app = initializeApp(firebaseConfig);

const auth = getAuth();


export const register = async (email, password) => {
    try {
        const { user } = await createUserWithEmailAndPassword(auth, email, password)
        return user;

    } catch (err) {
        toast.error(err.message)
    }
}

export const login = async (email, password) => {
    try {
        const { user } = await signInWithEmailAndPassword(auth, email, password)
        return user
    } catch (err) {
        toast.error(err.message);
    }
}

export const logout = async ()=>{
    try{
        await signOut(auth)
        store.dispatch(userIsLogout())
        return true
    }catch(err)
    {
        toast.error(err.message)
    }
}

onAuthStateChanged(auth, (user) => {
    
        if (user) {
            store.dispatch(userIsLogin(true))
        }
    
})

export default app