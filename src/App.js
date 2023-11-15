import './App.css';
import { createTheme, ThemeProvider} from '@mui/material/styles';
import { Integrante } from './components/Integrante/Integrante';

// temas
const lightTheme = {
  palette: {
    mode: 'light',
    primary: {
      main: '#003686',
    },
    secondary: {
      main: '#E08400',
    },
  },
  shape: {
    borderRadius: 5,
  },
};

// const darkTheme  = {
//   palette: {
//     mode: 'dark',
//     primary: {
//       main: '#003686',
//       background: '#121212'
//     },
//     secondary: {
//       main: '#E08400',
//     },
//   },
//   shape: {
//     borderRadius: 5,
//   },
// };

// Crear temas
const claro = createTheme(lightTheme);
// const oscuro = createTheme(darkTheme)

function App() {
  return (
    <>
     {/* ThemeProvider para el primer conjunto de componentes */}
      <ThemeProvider theme={claro}>
        <Integrante theme={claro} />
      </ThemeProvider>

    {/* ThemeProvider para el segundo conjunto de componentes */}
    {/* <ThemeProvider theme={oscuro}>
      <Integrante theme={oscuro}/>
    </ThemeProvider> */}
   </>
  );
 
}

export default App;
