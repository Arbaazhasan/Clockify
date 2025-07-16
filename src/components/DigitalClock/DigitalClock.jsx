import React, { useState } from 'react';
import "./digitalClock.css";

const DigitalClock = () => {

    const [hour, setHour] = useState();
    const [minute, setMinute] = useState();
    const [second, setSecond] = useState();

    setInterval(() => {

        const date = new Date();
        setHour(date.getHours());
        setMinute(date.getMinutes());
        setSecond(date.getSeconds());

    }, 100);

    return (
        <div>
            <div className="clockWindow">
                <div></div>

                <div className="mainClock">


                    <div className="clockbox">
                        <div>
                            <span>{hour ? hour % 12 || 12 : '0'}</span>
                        </div>

                    </div>



                    <div className="clockbox" id='coolen'>
                        <div>
                            :
                        </div>
                    </div>

                    <div className="clockbox">
                        <div>
                            <span>{minute ? minute : '0'}</span>
                        </div>
                    </div>

                    <div className="clockbox" id='coolen'>
                        <div>
                            :
                        </div>
                    </div>


                    <div className="clockbox">
                        <div>
                            <span>{second ? second : '0'}</span>
                        </div>
                    </div>




                </div>

            </div>
        </div>
    );
};

export default DigitalClock;