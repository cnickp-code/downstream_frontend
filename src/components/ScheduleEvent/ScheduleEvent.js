import React from 'react';
import DSContext from '../../contexts/DSContext';
import ScheduleButtons from '../ScheduleButtons/ScheduleButtons';


class ScheduleEvent extends React.Component {
    static contextType = DSContext;

    handleSetEventInfo = () => {
        this.context.setEventInfo(this.props.event);
    }

    render() {
        const currentDate = new Date();
        const eventStartDate = new Date(this.props.event.start_date);
        const eventEndDate = new Date(this.props.event.end_date);
        let timeString

        let days = (eventEndDate - currentDate) / 86400000;
        let hours = Number('.' + days.toString().split('.')[1]) * 24;
        let minutes = Number('.' + hours.toString().split('.')[1]) * 60;

        if (currentDate.getTime() > eventEndDate.getTime()) {
            timeString = `Event has passed :(`;
        }
        if (currentDate.getTime() >= eventStartDate.getTime() && currentDate.getTime() <= eventEndDate.getTime()) {
            timeString = `Happening now!!`;
        }
        if (currentDate.getTime() < eventStartDate.getTime()) {
            timeString = `${Math.floor(days)} days, ${Math.floor(hours)} hours, and ${Math.floor(minutes)} minutes away!`;
        }

        let artists = this.props.event.artists;

        if(this.props.event.artists.length > 50) {
            artists = this.props.event.artists.split(', ');

            let length = 0;
            let i = 0;
            while(length < 50) {
                length += artists[i].length;
                i++;
            }

            artists = artists.slice(0, i).join(', ') + '...';
        }


        return (
            <div className="event-container">


                <h3 className="event-head-text">{this.props.event.name}</h3>
                <p className="event-time">{timeString}</p>

                <div className="event-inner-container">
                    <img src={this.props.event.image_url} className="event-image box-shadow" alt="event" onClick={this.handleSetEventInfo}/>   
                    <div className="event-right-container">
                    
                    

                        <div className="info-artists">
                            <h4>Artist(s):</h4>
                            {artists}
                        </div>
                        <hr />

                        <ScheduleButtons event={this.props.event} />
                    </div>
                </div>  
            
            </div>
        )
    }
}

export default ScheduleEvent