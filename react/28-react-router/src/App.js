import {BrowserRouter, Route, Routes} from "react-router-dom";
import NotFound from "./components/NotFound";
import About from "./components/About";
import Contact from "./components/Contact";
import MainLayout from "./layouts/MainLayout";
import Home from "./components/Home";
import Courses from "./components/Courses";
import SingleCourse from "./components/SingleCourse";
import './App.css';
function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path='/' element={<MainLayout/>}>
                        <Route index element={<Home/>}/>
                        <Route path='about' element={<About/>}/>
                        <Route path='contact' element={<Contact/>}/>
                        <Route path='courses' element={<Courses/>}/>
                        <Route path='courses/:slug' element={<SingleCourse/>}/>
                        <Route path='*' element={<NotFound/>}/>
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
