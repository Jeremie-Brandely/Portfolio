import React from 'react';
import About from "../Components/About";
import Skills from '../Components/Skills';
import Works from '../Components/Works';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import "../style/Home.css";

const Home = () => {
    return (
        <div className='home'>
            <Header />
            <About />
            <Skills />
            <Works />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;