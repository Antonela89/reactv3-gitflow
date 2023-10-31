import {useState} from "react";
import {useAuth} from "../context/authContext";
import {useNavigate} from 'react-router-dom';
import { Alert } from "./Alert";

export function Register() {
   const [user, setUser] = useState ({
        email:"",
        password:"",
   });
    const {signup} = useAuth()
    const navigate = useNavigate()
    const [error, setError] = useState();

    const handleChange = ({target: {name, value}}) =>
     setUser({...user, [name]: value})

   const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    try{
        await signup(user.email, user.password)
        navigate('/')
    }
    catch (error) {
        console.log(error.code);
        if (error.code === "auth/invalid-email") {
            setError("El correo es invalido");
        }
        if (error.code === "auth/email-already-in-use") {
            setError("El correo ya esta registrado");
        }
        if (error.code === "auth/weak-password") {
            setError("La contraseña es debil, debe contener al menos 6 caracteres");
        }
        
    }
}

  return (
    <div>

    {error && <Alert message={error}/> }
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

        <button>Registro</button>
    </form>
    </div>
  );
}
