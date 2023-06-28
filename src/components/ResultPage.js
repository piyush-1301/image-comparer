import React, { useEffect, useRef, useState } from "react";
import "./ResultPage.css";
import SegmentControl from "./SegmentControl";


function ResultPage({ image, percentage, result }) {
  const [selectedValue, setSelectedValue] = useState('Difference')
  return (
    <div className="resultPage">
    <SegmentControl
        name="group"
        callback={(val) => setSelectedValue(val)}
        controlRef={useRef()}
        defaultIndex={1}
        segments={[
          {
            label: "Diff",
            value: "Diff",
            ref: useRef()
          },
          {
            label: "Difference",
            value: "Difference",
            ref: useRef()
          },
          {
            label: "Details",
            value: "Details",
            ref: useRef()
          }
        ]}
    />
       {selectedValue == 'Difference' ?
    <div> 
    <div className="imageSection">
        <img
          src={`data:image/png;base64,${image}`}
          style={{ height: "100%", width: "100%", objectFit: "contain" }}
          alt=""
        />
      </div>
      <div className="resultSection">
        <h3>Difference: {percentage}%</h3>
        {/* <h3>Result: {result}</h3> */}
      </div> 
      </div>
      : selectedValue == 'Details'? 
        <div>
        Details block
        </div> 
      : <div className="imageSection"><img
          src={`data:image/png;base64,${image}`}
          style={{ height: "100%", width: "100%", objectFit: "contain" }}
          alt=""
        /></div> 
    }
      
    </div>
  );
}

export default ResultPage;
