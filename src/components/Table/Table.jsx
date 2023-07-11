import { Button, Table } from 'antd';
import { useState } from 'react';
const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
  },
  {
    title: 'Марка/модель',
    dataIndex: 'name',
  },
  {
    title: 'Модификация',
    dataIndex: 'modify',
  },
  {
    title: 'Комплектация',
    dataIndex: 'compl',
  },
  {
    title: 'Стоимость',
    dataIndex: 'price',
  },
  {
    title: 'Дата создания',
    dataIndex: 'date',
  },
];
 
const TableAuto = ({stocks}) => {
  const data = stocks.map(item => {
    const {_id, mark, model, equipmentName, engine, drive, price, createdAt} = item  
    const date = new Date(createdAt); 
    // Форматирование даты
    const formattedDate = date.toISOString().slice(8, 10) + '.' + date.toISOString().slice(5, 7) + '.' + date.toISOString().slice(0, 4); 
    // Форматирование времени
    const formattedTime = date.toISOString().slice(11, 16); 
    return {
      key: _id,
      id: _id,
      name: `${mark} ${model}`,
      modify: `${engine.transmission} (${engine.power} л.с.) ${drive}`,
      compl: equipmentName,
      price: `${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ₽`,
      date: `${formattedDate} ${formattedTime}`
    }
  })
  
  return ( 
       
      <Table   columns={columns} dataSource={data} />
     
  );
};
export default TableAuto;