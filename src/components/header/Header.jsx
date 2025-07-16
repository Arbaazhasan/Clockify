import React, { useContext } from 'react';
import "./header.css"
import { Context } from '../Context/UseContext';

const Header = () => {


    const { currentTab, setCurrentTab } = useContext(Context);


    const tabHandler = (tab) => {
        const newArray = currentTab.map((value, index) => tab === index ? true : false)
        setCurrentTab(newArray);
    }
    return (
        <header>
            <div id='optionMenu'>
                <div id='tab' onClick={() => tabHandler(0)}>Clock</div>
                <div id='tab' onClick={() => tabHandler(1)}>Stop Watch</div>
                <div id='tab' onClick={() => tabHandler(2)}>Calender</div>

            </div>
        </header>
    );
}

export default Header;
