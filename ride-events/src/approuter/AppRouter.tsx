import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { Events } from "../pages/events/Events";
import { About } from "../pages/about/About";
import { Faqs } from "../pages/faqs/Faqs";
import { Login } from "../pages/login/Login";
import { SignUp } from "../pages/signup/SignUp";

export const AppRouter = () => {
    return <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/events' element={<Events />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/faqs' element={<Faqs />}/>
        <Route path='/log-in' element={<Login />}/>
        <Route path='/sign-up' element={<SignUp />}/>
    </Routes>;
};