import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Banner/Banner";
import Row from "../../components/Rows/Row/Row"
import RowList from "../../components/Rows/RowList/RowList";
// import Nav from "../../components/nav/Nav.js";
const Home = () => {
return (
    <>
    <Header />
    {/* <Nav /> */}
    <Banner />
    <Row />
    <RowList />
    <Footer />
    </>
);
};

export default Home;
