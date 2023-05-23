import "./App.css";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import { students } from "./helper/data.ts";

function renderImage(image) {
  return (
    <img
      src={image}
      alt="logo"
      style={{ width: 100, borderRadius: 100, marginRight: 30 }}
    />
  );
}

function App() {
  return (
    <Accordion defaultActiveKey="0">
      {students.data.map((student) => (
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            {renderImage(student.image)}{" "}
            <Card.Title>
              {student.name}: RM {student.rm}
            </Card.Title>
          </Accordion.Header>
          <Accordion.Body>
            <Card.Title>Trabalho:</Card.Title>{" "}
            <Card.Text>{student.job}</Card.Text>
            <Card.Title>Sobre mim:</Card.Title>{" "}
            <Card.Text>{student.about}</Card.Text>
          </Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}

export default App;
