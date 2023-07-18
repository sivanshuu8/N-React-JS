
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { restURL } from "../utils/constants";
import useRestInfo from "../utils/useRestInfo";

const RestInfo = () => {
  

  const { resId } = useParams();

  const restInfo  = useRestInfo(resId);

  if (restInfo === null) return <Shimmer />;

  console.log(restInfo?.cards[0]?.card?.card?.info);
  const {
    name,
    cuisines,
    costForTwoMessage,
    totalRatingsString,
    cloudinaryImageId,
  } = restInfo?.cards[0]?.card?.card?.info;
  const { itemCards } =
    restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card.card;

  return (
    <div className="rest-info-container">
      <img className="rest-img" src={restURL + cloudinaryImageId} alt="img" />
      <h1>{name}</h1>
      <h2>
        {cuisines.join(", ")}, {costForTwoMessage}{" "}
      </h2>
      <h2>{totalRatingsString}</h2>
      <br />
      <h3>Menu</h3>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs {item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestInfo;
