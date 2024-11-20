import { Stack } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { CgArrowTopRight } from "react-icons/cg";
import { TfiArrowTopRight } from "react-icons/tfi";
import "./ProjectCard.css";

function ProjectCard(props) {
  let { name, link, image } = props;
  return (
    <Card style={{ border: "0" }}>
      <Card.Img style={{ borderRadius: "20px" }} variant="top" src={image} />
      <Card.Body className="p-0 m-2">
        <Stack direction="horizontal">
          <p className="p-0 m-0 project_name">{name}</p>
          <a href={link} className="ms-auto align-top p-0 m-0 link">
            View Project <TfiArrowTopRight />
          </a>
        </Stack>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
