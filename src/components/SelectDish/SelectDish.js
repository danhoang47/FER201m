import DishDetail from "../DishDetail";
import { useParams } from "react-router-dom";
const SelectDish = ({ data }) => {
  const { dishId } = useParams();
  console.log(dishId);
  return (
    <DishDetail
      selectDish={data.dishes.filter((dish) => dish.id == dishId)[0]}
      comments={data.comments.filter((comment) => comment.dishId == dishId)}
    />
  );
};
export default SelectDish;
