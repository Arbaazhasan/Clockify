import React, { useEffect, useState } from 'react';

const StopWatch = () => {

    const [hour, setHour] = useState(0);
    const [minute, setMinute] = useState(0);
    const [second, setSecond] = useState(0);
    const [intervalId, setIntervalId] = useState();


    const startTimer = () => {

        const id = setInterval(() => {
            setSecond((prevSecond) => {
                if (prevSecond + 1 === 60) {
                    setMinute((prevMinute) => {
                        if (prevMinute + 1 === 60) {
                            setHour((prevHour) => prevHour + 1);
                            return 0;
                        }
                        return prevMinute + 1;
                    });
                    return 0;
                }
                return prevSecond + 1;
            });

        }, 1000);

        setIntervalId(id);

    };

    const stopStopWatch = () => {
        clearInterval(intervalId)
    }

    const restStopWatch = () => {
        setHour(0);
        setMinute(0);
        setSecond(0);

    }

    // useEffect(() => {
    //     console.log(hour + " : " + minute + " : " + second);
    //     console.log(intervalId)
    // }, [second])


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


                <div className="stopController">
                    <button onClick={startTimer}>Start</button>
                    <button onClick={stopStopWatch}>Stop</button>
                    <button onClick={restStopWatch}>Reset</button>
                </div>

            </div>
        </div>
    );
};

export default StopWatch;