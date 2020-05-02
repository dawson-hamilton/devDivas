import React from 'react';
import DatePicker from 'react-date-picker';

function Calendar(props) {
    return (
        <div>
            <DatePicker
                onChange={e => props.setDate(e.target.value)}
                name="date"
            />
        </div>
    );

}

export default Calendar;