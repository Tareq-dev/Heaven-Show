import React, { useContext, useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, useParams } from "react-router-dom";
import { MyService } from "../../App";
import auth from "../firebase.init";
import Loading from "../Loading/Loading";
import NavPage from "../NavPage/NavPage";

const ServiceDetail = () => {
  const { id } = useParams();
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch(process.env.PUBLIC_URL+"/service.json")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [service]);

  const serviceInfo = service.find((s) => s.id == id);
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <Loading />;
  }
  const proccedCheckOut = () => {
    navigate("/checkout");
  };

  return (
    <div>
      <NavPage />
      <Card className="text-center m-5">
        <Card.Header>{serviceInfo?.length}</Card.Header>
        <Card.Body>
          <img className="w-50" src={serviceInfo?.img} alt="" />
          <Card.Title>{serviceInfo?.name}</Card.Title>
          <Card.Text className="w-75 mx-auto">
            {serviceInfo.description}
          </Card.Text>
          <h4>${serviceInfo?.price}</h4>
          <Button onClick={proccedCheckOut} variant="primary">
            Checkout
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ServiceDetail;
