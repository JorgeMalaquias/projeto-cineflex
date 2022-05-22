import Top from "./top";
import Movies from "./movies";
import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from "react-router-dom";



export default function App() {
    return (
        <BrowserRouter>
            <Top />
            <Routes>
                <Route path="/"element={<Movies />}/>
                {/*<Route path="/movieSchedule"element={<MovieSchedule/>}/>*/}
            </Routes>
        </BrowserRouter>

    );
}


