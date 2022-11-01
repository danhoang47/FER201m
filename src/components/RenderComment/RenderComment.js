import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";

function RenderComment({ comments, handleClick }) {
    return (
        <>
            <h4>Comments</h4>
            {comments ? (
                comments.map((comm, index) => {
                    return (
                        <div key={index}>
                            <p>{comm.comment}</p>
                            <p>
                                --{comm.author},{" "}
                                {new Intl.DateTimeFormat("en-US", {
                                    year: "numeric",
                                    month: "short",
                                    day: "2-digit",
                                }).format(new Date(Date.parse(comm.date)))}
                            </p>
                        </div>
                    );
                })
            ) : (
                <div></div>
            )}
            <Button
                style={{
                    backgroundColor: "white",
                    color: "gray",
                }}
                onClick={() => {
                    handleClick(true);
                }}
            >
                <FontAwesomeIcon
                    icon={faPencil}
                    style={{
                        marginRight: "0.3em",
                    }}
                />
                Submit Comment
            </Button>
        </>
    );
}
export default RenderComment;
