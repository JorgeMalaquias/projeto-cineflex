import Top from "./top";
import Movies from "./movies";
import MovieSchedule from "./movieschedule";
import Session from "./session";
import { BrowserRouter, Routes, Route } from "react-router-dom";



export default function App() {
    return (
        <BrowserRouter>
            <Top />
            <Routes>
                <Route path="/"element={<Movies />}/>
                <Route path="/sessoes/:idMovie"element={<MovieSchedule/>}/>
                <Route path="/assentos/:idSessao"element={<Session/>}/>
            </Routes>
        </BrowserRouter>

    );
}


