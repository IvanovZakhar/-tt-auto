import { Cascader } from 'antd';
import { useEffect, useState } from 'react';

const DropDownList = ({brands, stocks, originalStocks, setStocks }) => {  
    const [value, setValue] = useState([]) 
 
    const options = brands.map((item, i) => {
        return{
            key: i,
            label: item.model,
            value: item.model
        }
    })

    const onChange = (value) => { 
        setValue(value) 
        // фильтруем по выбранным моделям 
        setStocks(originalStocks.filter(item => {
            const model = item.model;
            return value.some(filter => filter.includes(model));
            })); 
        
    };

    useEffect(()=>{
        // обнуляем value после изменение бренда
        setValue([])
    }, [brands]) 

   
  return( 
    <Cascader
        style={{
        width: '100%',
        }}
        options={options}
        onChange={onChange}
        value={value}
        multiple
        maxTagCount="responsive" 
    /> )
};
export default DropDownList;