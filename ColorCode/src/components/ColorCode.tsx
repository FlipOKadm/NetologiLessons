import {ChangeEvent, useState } from 'react';

const ColorCode = () => {
  const [rgbColor, setRgbColor] = useState('rgb(255, 255, 255)');
  const [error, setError] = useState(false);

  const handleHexInputChange = (event: ChangeEvent<HTMLInputElement>) => {    
    convertHexToRgb(event.target.value); 
  };

  const convertHexToRgb = (hexColor:string) => {
  const hexRegex = /^#[0-9A-F]{6}$/i;
  
  if (hexColor.length === 7){
    if (!hexRegex.test(hexColor)) {
      setRgbColor('rgb(183, 28, 28)');
      setError(true);
    } else {
      const r = parseInt(hexColor.substring(1, 3), 16);
      const g = parseInt(hexColor.substring(3, 5), 16);
      const b = parseInt(hexColor.substring(5, 7), 16);

      if (isNaN(r) || isNaN(g) || isNaN(b)) {
        setRgbColor('rgb(183, 28, 28)');
        setError(true);
      } else {
        setRgbColor(`rgb(${r}, ${g}, ${b})`);
        setError(false);
      }
    }
  }  
};
    
  

  return (
    <div className='color' style={{backgroundColor: rgbColor}} >
      <input type="text" onChange={handleHexInputChange} defaultValue={'#ffffff'}/>
      <div className='rgbColor'>{error ? 'Ошибка!' : rgbColor}</div>
    </div>
  );
};

export default ColorCode;