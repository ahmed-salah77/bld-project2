import {React} from 'react'
import MainContainer from './mainContainer';
import NavBar from '../general/navBar';
import BillboardBanner from "./billboardBanner";
import TopCategories from "./topCategories";
import Footer from "../general/footer";

const Home = (props) => {
    return (
        <div className='content'>
            <NavBar/>
            <BillboardBanner />
            <MainContainer/>
            <TopCategories/>
            <Footer/>
        </div>
    );
}

export default Home;
