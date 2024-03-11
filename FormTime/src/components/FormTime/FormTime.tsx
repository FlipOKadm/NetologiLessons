import { useState, FormEvent, ChangeEvent, FC } from 'react';
import { IFormData, IFormDataFunc } from '../../model/interface';
import css from './form.module.css'; 

const FormTime: FC<IFormDataFunc> = ({onSetData, dataForm}) => {  
  const [formData, setFormData] = useState<IFormData>({ date: new Date().toISOString().slice(0,10), distance: 0 });
  
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();        
    onSetData(formData);
  };
  
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;    
    const updatedValue = name === 'date' ? new Date(value).toISOString().slice(0,10) : Number(value);
    console.log(value);
    
    setFormData((prevState: IFormData) => (
    { ...prevState, [name]: updatedValue })); 
    
  };

  return (
    
    <>
      <form onSubmit={handleSubmit}>
        <div className={css.input_form}>
          <label>Дата (ДД.ММ.ГГ)</label>
          <input type="date"  className={css.input_form_items} name='date' value={dataForm && dataForm.date ? dataForm.date : formData.date} onChange={handleChange} />
        </div>
        <div className={css.input_form}>
          <label>Пройдено км</label>
          <input type="number" className={css.input_form_items} name='distance' value={dataForm && dataForm.distance ? dataForm.distance : formData.distance} onChange={handleChange} />
        </div>        
        <div className={css.input_form}>
          <button  className={css.input_form_items} type="submit">Ок</button>
        </div>
      </form>
    </>
  );
};

export default FormTime;