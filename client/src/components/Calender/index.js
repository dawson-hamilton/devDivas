import React from 'react';
import DatePicker from 'react-date-picker';

function Calendar(props) {
    return (
        <div>
            <DatePicker
                onChange={e => {
                    console.log(e)
                    props.setDate(e)
                }}
                name="date"
            />
        </div>
    );

}

export default Calendar;