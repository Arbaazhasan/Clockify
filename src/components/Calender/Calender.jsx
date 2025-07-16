import React, { useEffect, useState } from 'react';
import './calender.css';


const Calender = () => {

    const [currentYear, setCurrentYear] = useState();
    const [currentMonth, setCurrentMonth] = useState();
    const [currentDate, setCurrentDate] = useState();

    // let currentYear;
    // let currentMonth;
    // let currentDate;


    // Calendar Code with Javascript
    const monthArray = [];
    const daysArray = [];

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // setInterval(() => {
    let year = new Date().getFullYear();
    let month = new Date().getMonth();
    let date = new Date().getDate();
    let noOfDays = new Date(year, month + 1, 0).getDate();
    let day = new Date(year, month, 1).getDay();

    // setCurrentYear(year);
    // setCurrentMonth(month);
    // setCurrentDate(date);


    // currentYear = year;
    // currentMonth = month;
    // currentDate = date;



    for (let i = 1; i < day + 1; i++) {
        daysArray[i] = i;
    }



    for (let i = 1; i <= noOfDays; i++) {
        monthArray[i - 1] = i;
    }

    // console.log(day);
    // console.log(currentYear);
    // }, 1000);


    useEffect(() => {

    }, []);



    return (
        <div>
            <div className="calendarWindow" id='calendarWindow'>
                <div className="calenderBox">
                    <div className="CurrentMonthAndYear">
                        <div>
                            <p>{months[month]}</p>
                        </div>
                        <div>
                            <p>{year}</p>
                        </div>
                    </div>
                    <div className="daysBar">
                        <div>Sun</div>
                        <div>Mon</div>
                        <div>Tue</div>
                        <div>Wed</div>
                        <div>Thu</div>
                        <div>Fri</div>
                        <div>Sat</div>
                    </div>
                    <div className="DateSheet">
                        {
                            daysArray.map((i) => {
                                return <div key={i}></div>;
                            })
                        }

                        {
                            // monthArray.map((i, index) => { return <div key={i}>{i}</div>; })

                            monthArray.map((i, index) => {
                                if (index === date - 1) {
                                    return (
                                        <div key={i} style={{ color: 'black', background: 'white', fontWeight: 'bold' }}>{i}</div>
                                    );
                                } else {
                                    return (
                                        <div key={i}>{i}</div>
                                    );
                                }
                            })


                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calender;
