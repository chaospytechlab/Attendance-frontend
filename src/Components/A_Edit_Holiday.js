import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../Css/A_Holiday.css';

const EditHolidayModal = ({ isOpen, onClose }) => {
  const [holidays, setHolidays] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [reason, setReason] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/holidays')
      .then(response => response.json())
      .then(data => setHolidays(data.holidays || []))
      .catch(error => console.error('Error fetching holidays:', error));
  }, []);

  if (!isOpen) return null;

  const handleDateClick = (date) => {
    const dateStr = date.toISOString().split('T')[0];
    setSelectedDate(dateStr);
    const holiday = holidays.find(holiday => holiday.date === dateStr);
    setReason(holiday ? holiday.name : '');
  };

  const handleSave = () => {
    let updatedHolidays;
    const existingHoliday = holidays.find(holiday => holiday.date === selectedDate);

    if (existingHoliday) {
      updatedHolidays = holidays.map(holiday =>
        holiday.date === selectedDate ? { ...holiday, name: reason } : holiday
      );
    } else {
      updatedHolidays = [...holidays, { id: (holidays.length + 1).toString(), date: selectedDate, name: reason }];
    }

    fetch('http://localhost:3001/holidays', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ holidays: updatedHolidays }),
    })
      .then(response => response.json())
      .then(data => {
        setHolidays(data.holidays || []);
        onClose();
      })
      .catch(error => console.error('Error saving holiday:', error));
  };

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
          <h2>Edit Holidays</h2>
          <button onClick={onClose} className="A_Holiday-close-button">×</button>
        </div>
        <div className="A_Holiday-modal-body">
          <Calendar onClickDay={handleDateClick} tileClassName={tileClassName} />
          <div className="A_Holiday-edit-container">
            {selectedDate && (
              <>
                <label htmlFor="date">Selected Date</label>
                <input type="text" id="date" value={selectedDate} disabled />
                <label htmlFor="reason">Add Reason</label>
                <input
                  type="text"
                  id="reason"
                  placeholder="Add Reason"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                />
                <button onClick={handleSave} disabled={!selectedDate || !reason}>Save</button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditHolidayModal;
