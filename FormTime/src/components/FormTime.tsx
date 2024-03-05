import { useState, FormEvent, ChangeEvent, FC } from 'react';
import { IFormData, IFormDataFunc } from '../model/interface';
import { formatDate } from '../shared/function';


const FormTime: FC<IFormDataFunc> = ({onSetData}) => {
  
  const [formData, setFormData] = useState<IFormData>({ date: formatDate(new Date()), distance: 0 });
  
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();        
    onSetData(formData);
  };
  
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;    
    const updatedValue = name === 'date' ? formatDate(new Date(value)) : Number(value);
    
    setFormData((prevState: IFormData) => (
    { ...prevState, [name]: updatedValue })); 
    
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Дата (ДД.ММ.ГГ)</label>
          <input type="date" name='date' value={formData.date} onChange={handleChange} />
        </div>
        <div>
          <label>Пройдено км</label>
          <input type="number" name='distance' value={formData.distance} onChange={handleChange} />
        </div>
        <button type="submit">Save</button>
      </form>
    </>
  );
};

export default FormTime;