import {restURL} from '../utils/constants';

const RestCard = (props) => {
    const {restData} = props;
    const {name, cloudinaryImageId, cuisines, avgRating, costForTwo, distance} = restData?.data;

    return(
        <div className='rest-card'>
            <img 
            className='rest-logo'
            alt="Meghna Food" 
            src={ restURL + cloudinaryImageId} 
            />
            <h2 className='rest-name'>{name}</h2>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{distance}</h4>
            <h4>₹{costForTwo/100} FOR TWO</h4>
            
        </div>
    )
}

export default RestCard;