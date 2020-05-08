import React from 'react';
import TimePicker from 'react-time-picker';

function Time(props) {

    return (
        <div>
            {(props.start) ? <TimePicker onChange={e => { props.setStartTime(e) }} disableClock={true} /> : <TimePicker onChange={e => { props.setEndTime(e) }} disableClock={true} />}

        </div>
    );

}

export default Time;