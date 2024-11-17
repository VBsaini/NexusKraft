import "./Reviews.css";
import ReviewCard from "../../hooks/ReviewCard/ReviewCard";
import Frame from "../../../assets/Review/ReviewHeading.svg";
import data from "./data";

function Reviews() {
  return (
    <div>
      <img src={Frame} className="ReviewImg" />
      <div className="ReviewContainer">
        <div className="ReviewRow RRowOne">
          <ReviewCard
            NameImage={data.Lightning.NameImage}
            Text={data.Lightning.Text}
            Person={data.Lightning.Person}
          />
          <ReviewCard
            NameImage={data.Profitable.NameImage}
            Text={data.Profitable.Text}
            Person={data.Profitable.Person}
          />
        </div>
        <div className="ReviewRow RRowTwo">
          <ReviewCard
            NameImage={data.Recruit.NameImage}
            Text={data.Recruit.Text}
            Person={data.Recruit.Person}
          />
          <ReviewCard
            NameImage={data.Advisors.NameImage}
            Text={data.Advisors.Text}
            Person={data.Advisors.Person}
          />
        </div>
        <div className="ReviewRow RRowThree">
          <ReviewCard
            NameImage={data.Finverity.NameImage}
            Text={data.Finverity.Text}
            Person={data.Finverity.Person}
          />
          <ReviewCard
            NameImage={data.Firewire.NameImage}
            Text={data.Firewire.Text}
            Person={data.Firewire.Person}
          />
        </div>
      </div>
    </div>
  );
}

export default Reviews;
