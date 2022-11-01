import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  Media,
} from "reactstrap";
function RenderLeader({ leaders }) {
  return (
    <>
      {leaders.map((leader) => (
        <Media className="pt-4">
          <div className="row">
            <div className="col-12 col-md-2 ">
              <CardImg width="70%" src={leader.image} alt={leader.name} />
            </div>
            <div className="col-12 col-md-10">
              <h4>{leader.name}</h4>
              <p>{leader.designation}</p>
              <p>{leader.description}</p>
            </div>
          </div>
        </Media>
      ))}
    </>
  );
}
export default RenderLeader;
