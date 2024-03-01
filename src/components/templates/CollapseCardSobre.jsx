import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

export default function CollapseCardSobre({ titulo, link, children }) {
  return (
    <div className="font-inter w-full">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <div>
            <h2 className="font-inter text-corterciaria text-3xl">{titulo}</h2>{" "}
            <p className="font-inter font-semibold border-b-2 border-corprimaria text-corprimaria inline-block mr-4">Ver licença</p>
            <a className="inline-block font-semibold border-b-2 border-corprimaria text-corprimaria" target="_blank" href={link}>Página na web</a>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          {children}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
