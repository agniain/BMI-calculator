import React, { useState, useEffect } from 'react';

function TodayDateTime() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);

  const calculateBMI = () => {
    const weightInKg = parseFloat(weight);
    const heightInCm = parseFloat(height) / 100; // Convert cm to meter
    if (weightInKg > 0 && heightInCm > 0) {
      const bmiValue = weightInKg / (heightInCm * heightInCm);
      setBMI(bmiValue.toFixed(2));
    } else {
      setBMI(null);
    }
  };

  const getBMICategory = () => {
    if (bmi < 18.5) {
      return 'Underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      return 'Normal weight';
    } else if (bmi >= 25 && bmi <= 29.9) {
      return 'Overweight';
    } else {
      return 'Obesity';
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000 * 60); // Update every minute

    return () => {
      clearInterval(interval);
    };
  }, []); 

  const jakartaOptions = { timeZone: 'Asia/Jakarta', weekday: 'long', 
        year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'};
  const formattedDateTime = currentDateTime.toLocaleDateString(undefined, jakartaOptions);

  return (
    <div>
      <p>{formattedDateTime} (Jakarta GMT +7)</p>
      <div className="content"> 
        <h4>BMI Calculator</h4>
        <br />
        <div>
          <label>Weight (kg):</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div>
          <label>Height (cm):</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <br />
        <button onClick={calculateBMI}>Calculate BMI</button> <br />
        {bmi && (
          
          <div>
            <p>Your BMI is: {bmi} ({getBMICategory()}).</p>
            <p>Based on WHO BMI Classification.</p>
          </div>
        )}
      </div>

    </div>
  );
}

export default TodayDateTime;
