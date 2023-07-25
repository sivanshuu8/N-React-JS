import {restURL} from '../utils/constants';

const RestCard = (props) => {
    const {restData} = props;
    const {name, cloudinaryImageId, cuisines, avgRating, costForTwo, distance, area} = restData?.data;

    return(
        <div className='rest-card m-4 p-4 w-[250px] rounded-lg hover:shadow-lg bg-gray-50 hover:bg-gray-100'>
            <img 
            className='rest-logo rounded-lg h-30 w-50'
            alt="Restaurant Food Image" 
            src={ restURL + cloudinaryImageId} 
            />
            <h2 className='rest-texts font-bold text-xl py-4'>{name}, {area}</h2>
            <h4 className='rest-texts'>{cuisines.join(', ')}</h4>
            <h4 className='rest-texts'>{avgRating} stars</h4>
            <h4 className='rest-texts'>{distance}</h4>
            <h4 className='rest-texts'>₹{costForTwo/100} FOR TWO</h4>
            
        </div>
    )
}

export default RestCard;