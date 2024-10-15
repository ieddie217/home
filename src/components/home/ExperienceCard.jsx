import React from "react";
import { Col } from "react-bootstrap"; // Assuming you're using reactstrap or similar

const ExperienceCard = ({ data }) => {
  return (
    <Col
      lg="4"
      className="d-flex align-items-stretch"
      style={{ display: 'flex', alignItems: 'stretch' }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          minHeight: '500px', // Set a consistent height for all cards
          padding: '1.5rem',
          borderRadius: '8px',
          textAlign: 'center'
        }}
      >
      <div 
        style={{
          height: '250px',
          width: '350px',
          display: 'flex'
        }}>

        <img
          style={{
            objectFit: 'scale-down',
            width:'100%',
            height: 'auto',
            margin: '0 auto',
            backgroundColor: 'white',
            marginBottom: '1.5rem'
          }}
          src={data.companylogo}
          alt=""
        />
      </div>

        <p
          className="lead"
          style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
        >
          {data.role}
          <br />
          {data.date}
        </p>
      </div>
    </Col>
  );
};

export default ExperienceCard;