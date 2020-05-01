import React from 'react';
import DatePicker from 'react-date-picker';

function Calendar(props) {
    return (
        <div>
            <DatePicker
                onChange={props.handleCalendarChange}
                name="date"
            />
        </div>
    );

}

export default Calendar;