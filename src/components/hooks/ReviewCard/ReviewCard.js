import { Stack } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { CgArrowTopRight } from "react-icons/cg";
import { TfiArrowTopRight } from "react-icons/tfi";
import "./ReviewCard.css";

function ReviewCard(props) {
  let { NameImage, Text, Person, video } = props;
  return (
    <div className="RCard">
      <img src={NameImage} className="RCardImg" />
      {video && <video src={video} className="RCardVideo" controls />}

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
