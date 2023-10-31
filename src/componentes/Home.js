import {useAuth} from '../context/authContext';
import { useNavigate } from "react-router-dom";


export function Home() {

    const {user, logout, loading} = useAuth();
    const navigate = useNavigate();
   
    const handleLogout = async () => {
        try {
            await (logout);
            navigate("/login");
        }
        catch(error) {
            console.log(error);
        }
         
        };

    console.log(user);

    if(loading) return <h1>Cargando</h1>;

    return (
        <div>
        
        Home
        <h1>Bienvenido {user.displayName || user.email} </h1>

        <button onClick={handleLogout}>logout</button>
        </div>
        )
}
