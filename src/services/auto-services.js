
import {useHttp} from '../hooks/http.hooks';

const useAutoService = () => {
    const {loading, request,  error, clearError, successfull, errorMessage} = useHttp();

     
    const getStocks = async () => {
      
        const res = await request(`http://f9fd09879062.vps.myjino.ru:49207/api/stock`) 
        return res
      
    }

    const getModels = async () => {
      
        const res = await request(`http://f9fd09879062.vps.myjino.ru:49207/api/brands`) 
        return res
      
    }

    const getModel = async (brandName) => { 
        const res = await request(`http://f9fd09879062.vps.myjino.ru:49207/api/brands/${brandName}`) 
        return res 
    }

    const getBrands = async (brandName, models) => { 
        const res = await request(`http://f9fd09879062.vps.myjino.ru:49207/api/brands/${brandName}/models?models=${models}`) 
        return res 
    }
    

    return {
        getStocks,
        getModels, 
        getModel, 
        getBrands
    }
}

export default useAutoService;