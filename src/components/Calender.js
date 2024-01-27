import React from 'react';
import Calendar from 'react-calendar';

const CalendarComponent = ({ onSelectDate }) => {
  return (
    <div className="calendar-container">
      <Calendar
        onChange={onSelectDate} 
        showNeighboringMonth={false} 
      />
    </div>
  );
};

export default CalendarComponent;
