import {restURL} from '../utils/constants';

const RestCard = (props) => {
    const {restData} = props;
    const {name, cloudinaryImageId, cuisines, avgRating, costForTwo, distance, area} = restData?.data;

    return(
        <div className='rest-card'>
            <img 
            className='rest-logo'
            alt="Restaurant Food Image" 
            src={ restURL + cloudinaryImageId} 
            />
            <h2 className='rest-texts'>{name}, {area}</h2>
            <h4 className='rest-texts'>{cuisines.join(', ')}</h4>
            <h4 className='rest-texts'>{avgRating} stars</h4>
            <h4 className='rest-texts'>{distance}</h4>
            <h4 className='rest-texts'>₹{costForTwo/100} FOR TWO</h4>
            
        </div>
    )
}

export default RestCard;