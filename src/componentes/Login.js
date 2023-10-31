import {useState} from "react";
import {useAuth} from "../context/authContext";
import {Link, useNavigate} from 'react-router-dom';
import { Alert } from "./Alert";

export function Inicio() {
   const [user, setUser] = useState ({
        email:"",
        password:"",
   });
    const {login, loginWithGoogle, resetPassword} = useAuth()
    const navigate = useNavigate()
    const [error, setError] = useState();

    const handleChange = ({target: {name, value}}) =>
     setUser({...user, [name]: value})

   const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    try{
        await login(user.email, user.password)
        navigate('/')
    }
    catch (error) {
        console.log(error.code);
        setError(error.message);
        if (error.code === "auth/invalid-login-credentials") {
            setError("Credencial invalida, revise email o contraseña");
        } 
        if (error.code === "auth/user-not-found") {
            setError("El usuario no existe");
        } 
        if (error.code === "auth/wrong-password") {
            setError("Contraseña Incorrecta");
        } 
        }
    };

    const handleGoogleSignin = async () => {
        try {
            await loginWithGoogle();
            navigate('/');
        }
        catch(error) {
            console.log(error);
            setError(error);
        }
    }

    const handleResetPassword = async () => {
        if(!user.email) return setError("Ingresa tu E-mail");
        try {
            await  resetPassword(user.email);
            setError("Te hemos enviado un mail para restaurar tu contraseña")
        }
        catch (error){
            setError(error.message);
        }
    }
    
  return (
    <div className="w-full max-w-xs m-auto" >

    {error && <Alert message={error}/> }
    <form className="bg--white shadow-md rouded px-8 py-6 pb-8 mb-4" onSubmit={handleSubmit}>

        <div className="mb-4">
             <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2" >EMAIL</label>
            <input 
                className="shadow appereance-none border rounded w-full py-2 px-3 text-gray-700 leading-thigh focus:outline-none focus:shadow-outline"
                type="email"
                name="email"
                placeholder="youremail@gmail.com"
                onChange={handleChange}
            />
        </div>

        <div className="mb-4">
            <label htmlFor="password">PASSWORD</label>
            <input
            className="shadow appereance-none border rounded w-full py-2 px-3 text-gray-700 leading-thigh focus:outline-none focus:shadow-outline"
                type="password" 
                name="password"
                placeholder="******" 
                id="password"
                onChange={handleChange}
            />
        </div>
        <div className="items-center justify-between" >
             <div><button className="text-sm bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Login</button></div>
             <div><a href="#!" 
                    className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" 
                    onClick={handleResetPassword}
                    >
                    ¿Olvidaste tu contraseña?
                    </a>
              </div> 
        </div>
       </form>

    <p className="my-4 text-sm flex justify-between px-3" >¿No tienes una cuenta? <Link to='/Register'>Register</Link> </p>
    <button onClick={handleGoogleSignin} className="bg-slate-50 hover:bg-slate-200 text-black shadow-md rounded border-2 border-gray-300 py-2 px-4 w-full " >Iniciar con Google</button>
    </div>
  );
}
