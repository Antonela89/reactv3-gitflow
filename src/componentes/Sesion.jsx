import {Routes, Route} from 'react-router-dom';
import { Home } from './Home';
import { Inicio } from './Login';
import { Register } from './Register';
import { AuthProvider } from '../context/authContext';
import { ProtectedRoute } from './ProtectedRoute';
import { Guest } from './Guest';
import { About } from './About';
import { Version } from './Version';
import { Perfil } from './Perfil';


const Login = () => {
    return (
        <div>
            <div>
               <AuthProvider>
                    <Routes>
                        <Route path="/" element={
                            <ProtectedRoute>
                            <Home/>
                            </ProtectedRoute>
                        } />
                        <Route path='/Home' element={<Home/>} />
                        <Route path='/login' element={<Inicio/>} />
                        <Route path='/register' element={<Register/>} />
                        <Route path='/Guest' element={<Guest/>} />
                        <Route path='/About' element={<About/>} />
                        <Route path='/Version' element={<Version/>} />
                        <Route path='/Perfil' element={<Perfil/>} />
                    </Routes>    
               </AuthProvider>
           
</div>
            
        </div>
    )
}

export default Login
