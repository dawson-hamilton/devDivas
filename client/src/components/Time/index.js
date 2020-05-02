import React from 'react';
import TimePicker from 'react-time-picker';

function Time(props) {

    return (
        <div>
            {(props.start) ? <TimePicker onChange={e => props.setStartTime(e)} /> : <TimePicker onChange={e => { props.setEndTime(e) }} />}

        </div>
    );

}

export default Time;