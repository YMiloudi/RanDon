import React, {useState} from 'react'
import SideBar from '../components/SideBar'
import NavBar from '../components/NavBar'
import GetACharity from '../components/getACharity'
import Footer from '../components/Footer'

const Home  = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () =>{
        setIsOpen(!isOpen);
    }
    return (
        <>
        <div>
           <SideBar isOpen={isOpen} toggle={toggle}/>
           <NavBar toggle={toggle}/> 

           <GetACharity/>
           <Footer />

        </div>
        </>
    )
}

export default Home;