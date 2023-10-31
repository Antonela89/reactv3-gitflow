import {Routes, Route} from 'react-router-dom';
import { Home } from './Home';
import { Inicio } from './Login';
import { Register } from './Register';
import { AuthProvider } from '../context/authContext';
import { ProtectedRoute } from './ProtectedRoute';


const Login = () => {
    return (
        <div>
            <h1>Login</h1>
            <h1 className="text-3xl font-bold underline">reacTV</h1>
           <div className='bg-slate-300 h-screen text-black flex'>
               <AuthProvider>
                    <Routes>
                        <Route path="/" element={
                            <ProtectedRoute>
                            <Home/>
                            </ProtectedRoute>
                        } />
                        <Route path='/login' element={<Inicio/>} />
                        <Route path='/register' element={<Register/>} />
                    </Routes>    
               </AuthProvider>
           
</div>
            
        </div>
    )
}

export default Login
