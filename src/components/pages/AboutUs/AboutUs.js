import { Container } from "react-bootstrap";
import "./AboutUs.css";
import lWing from "../../../assets/leftWing.svg";
import rWing from "../../../assets/rightWing.svg";
import WDUicon from "../../../assets/whatDrivesUs.svg";
import ContactUs from "../../pages/ContactUs/ScheduleCall";

function Home() {
  return (
    <div>
      <Container>
        <h1 className="heading aboutUsHeading">
          Transforming Brands, Igniting Growth
          <br /> & Crafting <span className="BlueT">Success Stories!</span>
        </h1>
        <div className="whoWeAreContainer">
          <div className="whoWeAreHeadingContainer">
            <img className="WWALwing WWAicon" src={lWing} />
            <p>Who We Are</p>
            <img className="WWARwing WWAicon" src={rWing} />
          </div>
          <div className="whoWeAreTextContainer">
            <p>
              Nexus Kraft, born from the collective vision of a group of college
              friends, is a digital marketing agency fueled by passion and
              innovation. With a shared commitment to excellence and a drive to
              make a difference in the digital landscape, we embarked on this
              journey to revolutionize the way brands connect with their
              audiences. What started as a friendship has blossomed into a
              powerhouse of creativity and expertise, dedicated to helping
              businesses thrive in the ever-evolving digital world.
            </p>
          </div>
        </div>
        <div className="whatDrivesUsContainer">
          <div className="whatDrivesUsHeadingContainer">
            <img className="WDUicon" src={WDUicon} />
            <p>Who We Are</p>
          </div>
          <div className="whatDrivesUsTextContainer">
            <p>
              At Nexus Kraft, our primary goal is simple yet profound: to
              empower businesses to succeed in the digital age. What drives us
              is the desire to create a meaningful impact for our clients, and
              to be the catalyst for their growth and success. We are fueled by
              the challenge of crafting innovative solutions that not only meet
              but exceed expectations. Every project we undertake is infused
              with creativity, dedication, and a relentless pursuit of
              excellence. Our ultimate satisfaction comes from seeing our
              clients' businesses flourish, knowing that we played a part in
              their journey to success.
            </p>
          </div>
        </div>
        <div style={{ paddingBottom: "150px" }}>
          <ContactUs page={"abt"} />
        </div>
      </Container>
    </div>
  );
}

export default Home;
