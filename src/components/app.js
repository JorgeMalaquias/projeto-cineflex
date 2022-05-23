import Top from "./top";
import Movies from "./movies";
import MovieSchedule from "./movieschedule";
import Session from "./session";
import Success from "./success";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";



export default function App() {
    const[orderDetails, setOrderDetails]=useState({});
    return (
        <BrowserRouter>
            <Top />
            <Routes>
                <Route path="/"element={<Movies setOrderDetails={setOrderDetails}/>}/>
                <Route path="/sessoes/:idMovie"element={<MovieSchedule/>}/>
                <Route path="/assentos/:idSessao"element={<Session setOrderDetails={setOrderDetails} />} />
                <Route path="/sucesso"element={<Success orderDetails={orderDetails}/>}/>
            </Routes>
        </BrowserRouter>

    );
}


