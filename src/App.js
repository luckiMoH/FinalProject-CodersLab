import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import { Landing, Error, Dashboard, Register } from "./pages";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dashboard />}/>
                <Route path="landing" element={<Landing />}/>
                <Route path="register" element={<Register />}/>
                <Route path="*" element={<Error />}/>
            </Routes>
            <ToastContainer position='top-center'/>
        </BrowserRouter>
    );
}

export default App;
