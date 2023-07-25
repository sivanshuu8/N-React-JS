import { Link } from 'react-router-dom';
import RestCard from './RestCard'
import Shimmer from './Shimmer';
// import restList from '../utils/mockData';
import { useState, useEffect } from 'react';
import useOnlineStatus from '../utils/useOnlineStatus';



const Body = () => {

  

  const [listOfRest, setListOfRest] = useState([]);
  const [filteredRest, setFilteredRest] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.1756772&lng=91.7417143&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    setListOfRest(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRest(json?.data?.cards[2]?.data?.data?.cards);

  };



    // condition rendering
    // if(listOfRest.length === 0){
    //   // return <h1>Loading....</h1>
    //   return(<Shimmer />)
    // }
  
    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false){
      return(
        <div className='new-container'>
          <h2 className='new-content'>Seems like you are offline, please check your internet connection</h2>
        </div>
      )
    }
  

    return listOfRest.length === 0 ? <Shimmer /> : (
        <div className='body'>
            <div className="filter flex items-center">
              <div className='search p-4 m-4 flex items-center'>
                <input type='text' className='p-2 search-bar border border-solid border-black' placeholder='Search restaraunts...' value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
                <button className='search-btn bg-purple-800 px-4 h-10 m-4 border border-purple-900 rounded-md' onClick={() => {
                    const filteredSearch = listOfRest.filter((res) => res.data.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))
                    setFilteredRest(filteredSearch);
                }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg">
<path d="M15.5 14H14.71L14.43 13.73C15.63 12.33 16.25 10.42 15.91 8.39C15.44 5.61 13.12 3.39 10.32 3.05C6.09001 2.53 2.53002 6.09 3.05002 10.32C3.39002 13.12 5.61002 15.44 8.39002 15.91C10.42 16.25 12.33 15.63 13.73 14.43L14 14.71V15.5L18.25 19.75C18.66 20.16 19.33 20.16 19.74 19.75C20.15 19.34 20.15 18.67 19.74 18.26L15.5 14ZM9.50002 14C7.01002 14 5.00002 11.99 5.00002 9.5C5.00002 7.01 7.01002 5 9.50002 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.50002 14Z" />
</svg>

                </button>
              </div>
              <button className='filter-btn bg-purple-800 border border-bg-purple-900 px-4 h-10 m-4 text-white rounded-md' onClick={() => {
                setFilteredRest(listOfRest);
               const filteredList = listOfRest.filter((res) => res.data.avgRating >= 4);
               setFilteredRest(filteredList);
              }}
              >Top Rated Restaurants</button>
              <button className='price-filter  bg-purple-800 border border-bg-purple-900 px-4 m-4 h-10 text-white rounded-md' onClick={(res) => {
                setFilteredRest(listOfRest);
                const priceFilter = listOfRest.filter((res) => (res.data.costForTwo/100) <= 300);
                setFilteredRest(priceFilter);
              }}>Budget Restaurants</button>
            </div>
            <div className='rest-container flex flex-wrap justify-between'>
               {
                filteredRest.map(restaurant => <Link className='rest-cards' key={restaurant.data.id} to={'/restaurants/'+ restaurant.data.id}><RestCard  restData={restaurant} /></Link>)
               }
            </div>
        </div>
    )
}

export default Body;