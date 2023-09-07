import React, { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Card,
  CardContent,
  CardHeader,
  Container,
  Typography,
} from "@mui/material";
import { rows } from "../data/DummyData";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const Review = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [expanded, setExpanded] = useState(false);

  const handleAccordion = (panelId) => (event, isExpanded) => {
    if (isExpanded) {
      setExpanded(panelId);
      navigate(`${location.pathname}/${panelId}`);
    } else {
      setExpanded(false);
      navigate(-1);
    }
  };

  return (
    <Container>
      <Card>
        <CardHeader title="CCTV Violation Detections" />
        <CardContent>
          {rows.map((row) => (
            <Accordion
              key={row.id}
              expanded={expanded === row.id}
              onChange={handleAccordion(row.id)}
              disabled={
                expanded === false ? false : expanded === row.id ? false : true
              }
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography sx={{ width: "25%" }}>{row.vehicleNo}</Typography>
                <Typography sx={{ width: "25%", color: "text.secondary" }}>
                  {row.location}
                </Typography>
                <Typography sx={{ width: "25%", color: "text.secondary" }}>
                  {row.date}
                </Typography>
                <Typography sx={{ width: "25%", color: "text.secondary" }}>
                  {row.time}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Outlet />
              </AccordionDetails>
            </Accordion>
          ))}
        </CardContent>
      </Card>
    </Container>
  );
};

export default Review;
