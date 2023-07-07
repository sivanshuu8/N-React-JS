import RestCard from './RestCard'
import restList from '../utils/mockData';


const Body = () => {
    return(
        <div className='body'>
            <div className="search">Search</div>
            <div className='rest-container'>
               {
                restList.map(restaurant => <RestCard key={restaurant.data.id} restData={restaurant} />)
               }
            </div>
        </div>
    )
}

export default Body;