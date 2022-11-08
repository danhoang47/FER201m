import React from "react";
import Menu from "./Menu";
import SelectDish from "./SelectDish";
import { DISHES } from "../shared/dishes";
import { COMMENTS } from "../shared/comments";
import { PROMOTIONS } from "../shared/promotions";
import { LEADERS } from "../shared/leaders";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Contact from "./Contact";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
});

function Main() {
    const [data, setData] = useState({
        dishes: DISHES,
        comments: COMMENTS,
        promotions: PROMOTIONS,
        leaders: LEADERS,
    });
    const [selectedDish, setSelectedDish] = useState(null);

    return (
        <>
            <div className="">
                <Header />
            </div>
            <Routes>
                <Route
                    path="/home"
                    element={
                        <Home
                            dish={
                                data.dishes.filter((dish) => dish.featured)[0]
                            }
                            promotion={
                                data.promotions.filter(
                                    (promo) => promo.featured
                                )[0]
                            }
                            leader={
                                data.leaders.filter(
                                    (leader) => leader.featured
                                )[0]
                            }
                        />
                    }
                />

                <Route
                    exact
                    path="/menu"
                    element={
                        <Menu
                            dishes={data.dishes}
                            setSelectDish={setSelectedDish}
                        />
                    }
                />

                <Route
                    path="/menu/:dishId"
                    element={<SelectDish data={data} />}
                />
                <Route
                    path="/aboutus"
                    element={<About leaders={data.leaders} />}
                />
                <Route path="/contactus" element={<Contact />} />
            </Routes>
            <Footer />
        </>
    );
}

export default connect(mapStateToProps)(Main);
