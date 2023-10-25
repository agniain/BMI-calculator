import React, { useState, useEffect } from 'react';

function TodayDateTime() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000 * 60); // Update tiap menit

    return () => {
      clearInterval(interval);
    };
  }, []); 

  const jakartaOptions = { timeZone: 'Asia/Jakarta', weekday: 'long', 
        year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'};
  const formattedDateTime = currentDateTime.toLocaleDateString(undefined, jakartaOptions);

  return (
    <div>
      <h2>Today's Date and Time</h2>
      <p>{formattedDateTime} (Jakarta GMT +7)</p>
    </div>
  );
}

export default TodayDateTime;
