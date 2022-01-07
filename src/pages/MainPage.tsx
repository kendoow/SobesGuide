import React, { FC } from 'react'
import {Footer, MainSection, NavBar} from '../components'

const MainPage: FC = () => {
    return (
        <>
            <NavBar url = {"/"} black = {true}/>
            <MainSection/>
            <Footer black={true}/>
        </>
    )
}

export default MainPage;
