import { Stack } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { CgArrowTopRight } from "react-icons/cg";
import { TfiArrowTopRight } from "react-icons/tfi";
import "./ReviewCard.css";

function ReviewCard(props) {
  let { NameImage, Text, Person } = props;
  return (
    <div className="RCard">
      <img src={NameImage} className="RCardImg" />
      {Text}
      <div className="RCardPerson">
        <img src={Person?.img} className="RCardPersonImg" alt="clientImage" />
        <div className="RCardPersonText">
          <h4>{Person?.name}</h4>
          <p>{Person?.desig}</p>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
