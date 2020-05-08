import React from 'react';
import TimePicker from 'react-time-picker';

function Time(props) {

    return (
        <div>
            {(props.start) ? <TimePicker onChange={e => { props.setStartTime(e) }} disableClock={true} /> : <TimePicker onChange={e => { props.setEndTime(e) }} disableClock={true} />}

        </div>
    );

}

// class MyApp extends Component {
//     state = {
//       time: '10:00',
//     }

//     onChange = time => this.setState({ time })

//     render() {
//       return (
//         <div>
//           <TimePicker
//             onChange={this.onChange}
//             value={this.state.time}
//           />
//         </div>
//       );
//     }
//   }

export default Time;