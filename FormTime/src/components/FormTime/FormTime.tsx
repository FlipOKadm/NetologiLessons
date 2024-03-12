import { useMemo, useState, FormEvent, ChangeEvent, FC } from 'react';
import { IFormData, IFormDataFunc } from '../../model/interface';
import css from './form.module.css'; 

const FormTime: FC<IFormDataFunc> = ({onSetData, dataForm}) => {  


  const [formData, setFormData] = useState<IFormData>({
    date: dataForm?.date ? dataForm.date : new Date().toISOString().slice(0, 10),
    distance: dataForm?.distance ? dataForm.distance : 0 
  });

  useMemo(() => setFormData({
    date: dataForm?.date || '',
    distance: dataForm?.distance || 0
  }), [dataForm]);
  
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();        
    onSetData(formData);
    setFormData({ date: '', distance: 0 });
  };
  
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;    
    const updatedValue = name === 'date' ? new Date(value).toISOString().slice(0,10) : Number(value);
    
    setFormData((prevState: IFormData) => (
    { ...prevState, [name]: updatedValue })); 
    
  };

  return (
    
    <>
      <form onSubmit={handleSubmit}>
        <div className={css.input_form}>
          <label>Дата (ДД.ММ.ГГ)</label>
          <input type="date"  className={css.input_form_items} name='date' value={formData.date} onChange={handleChange} />
        </div>
        <div className={css.input_form}>
          <label>Пройдено км</label>
          <input type="number" className={css.input_form_items} name='distance' value={formData.distance} onChange={handleChange} />
        </div>        
        <div className={css.input_form}>
          <button  className={css.input_form_items} type="submit">Ок</button>
        </div>
      </form>
    </>
  );
};

export default FormTime;