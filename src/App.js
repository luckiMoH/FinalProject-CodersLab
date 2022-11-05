import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import {Routes, Route, Link} from "react-router-dom";
import Landing from "./pages/Landing";
import styled from 'styled-components';


function App() {
    return (
        <>
            <Landing/>
        </>
    );
}

export default App;
