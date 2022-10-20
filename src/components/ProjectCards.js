import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <a className="proj-hrefs" target="_blank" href={link}>
            <h4>{title}</h4>
            <span>{description}</span>
          </a>
        </div>
      </div>
    </Col>
  );
};
