import React, { Component } from 'react';

class SundaySchedule extends Component {
    render() {
        return (
            <div className="sunday-schedule">
                <div className="sunday-schedule-title-block">
                    <div className="sunday-schedule-title">
                        Sundays
                        <span className="sunday-schedule-title-divider">|</span>
                        <span className="sunday-schedule-title-append">What to Expect</span>
                    </div>
                </div>
                <div className="sunday-schedule-items">
                <div className="sunday-schedule-item">
                    <div className="sunday-schedule-item-time">08:15 - 08:45</div>
                    <div className="sunday-schedule-item-text">Prayer Meeting</div>
                </div>
                <div className="sunday-schedule-item">
                    <div className="sunday-schedule-item-time">09:00 - 09:45</div>
                    <div className="sunday-schedule-item-text">Sunday School</div>
                </div>
                <div className="sunday-schedule-item">
                    <div className="sunday-schedule-item-time">10:00 - 11:00</div>
                    <div className="sunday-schedule-item-text">Worship Service</div>
                </div>
                <div className="sunday-schedule-item">
                    <div className="sunday-schedule-item-time">11:15 - 11:45</div>
                    <div className="sunday-schedule-item-text">Small Groups</div>
                </div>
                <div className="sunday-schedule-item">
                    <div className="sunday-schedule-item-time">12:00</div>
                    <div className="sunday-schedule-item-text">Lunch</div>
                </div>
                </div>
            </div>
        );
    }
}

export default SundaySchedule;
