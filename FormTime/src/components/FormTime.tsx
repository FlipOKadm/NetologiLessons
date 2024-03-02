import React, { useState } from 'react';
import fs from 'fs'

interface IFormData {
  date: string;
  distance: number;
}

const FormTime: React.FC = () => {
  const [formData, setFormData] = useState<IFormData>({ date: '', distance: 0 });
  let data = fs.readFileSync('../data/data.json', 'utf8');
  let parseData = JSON.parse(data);


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);

    parseData.push(formData);
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, date: event.target.value });
  };

  const handleDistanceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, distance: Number(event.target.value) });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Date:</label>
        <input type="date" value={formData.date} onChange={handleDateChange} />
      </div>
      <div>
        <label>Distance (in kilometers):</label>
        <input type="number" value={formData.distance} onChange={handleDistanceChange} />
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default FormTime;