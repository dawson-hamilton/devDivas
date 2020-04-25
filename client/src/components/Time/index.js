import React, { Component } from 'react';
import TimePicker from 'react-time-picker';

function Time(props) {
  

        return (
            <div>
                <TimePicker
                    onChange={e => props.handleStartTimeChange(e, props.uniqueID)}
                    name="time"
                />
            </div>
        );

}

export default Time;