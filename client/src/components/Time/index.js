import React from 'react';
import TimePicker from 'react-time-picker';

function Time(props) {

    return (
        <div>
            <TimePicker
                onChange={e => props.setStartTime(e)}
                name="time"
            />
        </div>
    );

}

export default Time;