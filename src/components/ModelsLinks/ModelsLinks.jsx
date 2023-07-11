 
import './ModelsLinks.scss'

const ModelsLinks = ({models, setStocks, getModel, setBrands}) => {  
    const elems = models.map((item, i) => {
        return(
            <li  onClick={(e) => { 
               // Меняем стили выбранному и убираем остальным
                Array.from(e.target.parentNode.children).forEach(child => {
                    child.className = ''
                  });
                  
                e.target.className = 'active'
                // По выбранному бренду делаем запрос и заменяем Stocks 
                setBrands(item.models)
                getModel(`${item._id}`).then(setStocks)
            }}>{`${item._id}`} <span>{item.totalCount}</span></li>
        )
    })
    return(
        <ul className="models-links"> 
            {elems} 
        </ul>
    )
}

export default ModelsLinks;