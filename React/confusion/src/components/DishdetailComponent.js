import { Component } from "react";
import { Row, Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";

class DishDetail extends Component {

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.renderDish = this.renderDish.bind(this);
        this.renderComments = this.renderComments.bind(this);
    }

    renderDish(dish) {
        if (dish != null)
            return (
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else return <div></div>;
    }

    renderComments(comments) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };

        if (comments != null) {
            return (
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {
                            comments.map(({id, rating, comment, author, date}) => (
                                <li
                                    key={id} 
                                >
                                    <p>{comment}</p>
                                    <p>{`-- ${author}, ${new Date().toDateString(date)}`}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            )
        }
        else return <div></div>
    }

    render() {
        return (
            <div className="row">
                <div className="col-sm-12 col-md-5 m-1">
                    {this.renderDish(this.props.dish)}
                </div>
                <div className="col-sm-12 col-md-5 m-1">
                    {this.renderComments(this.props.dish?.comments)}
                </div>
            </div>
        )
    }
}

export default DishDetail;