import ModelsLinks from '../ModelsLinks/ModelsLinks';
import TableAuto from '../Table/Table';
import DropDownList from '../DropDownList/DropDownList';
import useAutoService from '../../services/auto-services';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const {getStocks, getModels, getModel, getBrands} = useAutoService()
  const [stocks, setStocks] = useState([])
  const [originalStocks, setOriginalStocks] = useState([])
  const [models, setModels] = useState([])
  const [brands, setBrands] = useState([]) 
  

  useEffect(() => {
    getStocks().then(res => {
      setStocks(res)
      setOriginalStocks(res)
    })
    getModels().then(setModels)
  }, [])

  return (
    <div className="App">
      <ModelsLinks models={models} setStocks={setStocks} getModel={getModel} setBrands={setBrands}/> 
      <DropDownList brands={brands} stocks={stocks} originalStocks={originalStocks} setStocks={setStocks} getBrands={getBrands}/>
      <TableAuto stocks={stocks} />
    </div>
  );
}

export default App;
