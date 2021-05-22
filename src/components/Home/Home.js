import React from 'react';
import DataTable from '../DataTable/DataTable';
import Navbar from '../Navbar/Navbar';
import './Home.css';

const Home = () => {
    return (
        <div className="home-page">
            <Navbar></Navbar>
            <DataTable></DataTable>
            {/* <h1>Home Page</h1> */}
        </div>
    );
};

export default Home;