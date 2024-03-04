import { useState, FormEvent, ChangeEvent, FC } from 'react';
import { IFormData } from '../model/interface';

interface IFormDataFunc{
  onChangeData: (items: IFormData) => void
}

const FormTime: FC<IFormDataFunc> = ({onChangeData}) => {
  const [formData, setFormData] = useState<IFormData>({ date: new Date(), distance: 0 });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();    
    onChangeData(formData);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const updatedValue = name === 'date' ? new Date(value).toISOString().split('T')[0] : Number(value);
    setFormData({ ...formData, [name]: updatedValue });    
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