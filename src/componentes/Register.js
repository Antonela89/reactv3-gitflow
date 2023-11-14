import {useState} from "react";
import {useAuth} from "../context/authContext";
import {useNavigate} from 'react-router-dom';

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
            setError("Correo Invalido");
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

        <button>Registro</button>
    </form>
    </div>
  );
}
