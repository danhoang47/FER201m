import React from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";

function Menu({ dishes, setSelectDish }) {
  return (
    <>
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Menu</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>Menu</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          {dishes.map((dish, index) => (
            <div className="col-12  col-md-5 m-1 text-left font-weight-bold" key={index}>
              <Card
                key={dish.id}
                onClick={() => {
                  setSelectDish(dish);
                }}
              >
                <Link to={`/menu/${dish.id}`}>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Link>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Menu;
