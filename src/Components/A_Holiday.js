import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../Css/A_Holiday.css';

const HolidayModal = ({ isOpen, onClose, onEdit }) => {
  const [holidays, setHolidays] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/holidays')
      .then(response => response.json())
      .then(data => setHolidays(data.holidays || []))
      .catch(error => console.error('Error fetching holidays:', error));
  }, []);

  if (!isOpen) return null;

  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      const dateStr = date.toISOString().split('T')[0];
      const holiday = holidays.find(holiday => holiday.date === dateStr);
      return holiday ? 'holiday' : null;
    }
  };

  return (
    <div className="A_Holiday-modal-overlay">
      <div className="A_Holiday-modal-content">
        <div className="A_Holiday-modal-header">
          <h2>Holidays</h2>
          <button onClick={onClose} className="A_Holiday-close-button">×</button>
        </div>
        <div className="A_Holiday-modal-body">
          <Calendar tileClassName={tileClassName} />
          <button onClick={onEdit} className="A_Holiday-edit-button">Edit Holidays</button>
        </div>
      </div>
    </div>
  );
};

export default HolidayModal;
