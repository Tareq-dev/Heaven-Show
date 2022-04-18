import React, { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { MyService } from "../../App";
import NavPage from "../NavPage/NavPage";

const ServiceDetail = () => {
  const { id } = useParams();
  const [service] = useContext(MyService);
  const serviceInfo = service.find((s) => s.id == id);
  const navigate = useNavigate();



  const proccedCheckOut = () => {
     navigate('/checkout')

  };

  return (
    <div>
      <NavPage />
      <Card className="text-center m-5">
        <Card.Header></Card.Header>
        <Card.Body>
          <img className="w-50" src={serviceInfo?.img} alt="" />
          <Card.Title>{serviceInfo.name}</Card.Title>
          <Card.Text className="w-75 mx-auto">
            {serviceInfo.description}
          </Card.Text>
          <h4>${serviceInfo.price}</h4>
          <Button onClick={proccedCheckOut} variant="primary">
            Checkout
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ServiceDetail;
