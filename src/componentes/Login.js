import {useState} from "react";
import {useAuth} from "../context/authContext";
import {useNavigate} from 'react-router-dom';

export function Inicio() {
   const [user, setUser] = useState ({
        email:"",
        password:"",
   });
    const {login} = useAuth()
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
}

  return (
    <div>

    {error && <p> {error} </p> }
    <form onSubmit={handleSubmit}>
        <label htmlFor="email" >EMAIL</label>
        <input 
            type="email"
            name="email"
            placeholder="youremail@gmail.com"
            onChange={handleChange}
        />

        <label htmlFor="password">PASSWORD</label>
        <input
            type="password" 
            name="password"
            placeholder="******" 
            id="password"
            onChange={handleChange}
         />

        <button>Login</button>
    </form>
    </div>
  );
}
