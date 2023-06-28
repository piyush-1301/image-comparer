import React, {useRef, useState } from "react";
import "./ResultPage.css";
import SegmentControl from "./SegmentControl";
import "bootstrap/dist/css/bootstrap.min.css";

function ResultPage({
  image,
  percentage,
  result,
  image1,
  image2,
  image1Details,
  image2Details,
}) {
  const [selectedValue, setSelectedValue] = useState("Difference");
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
            ref: useRef(),
          },
          {
            label: "Difference",
            value: "Difference",
            ref: useRef(),
          },
          {
            label: "Details",
            value: "Details",
            ref: useRef(),
          },
        ]}
      />
      {selectedValue === "Difference" ? (
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
            <h3>Result: {result}</h3>
          </div>
        </div>
      ) : selectedValue === "Details" ? (
        <div className="detailsContainer">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Property</th>
                <th scope="col">Original Image</th>
                <th scope="col">Modified Image</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" style={{'height':'150px'}}>Thumbnail</th>
                <td>
                  <img
                    src={image1 ? URL.createObjectURL(image1) : ""}
                    height="150px"
                    alt=""
                  />
                </td>
                <td>
                  <img
                    src={image2 ? URL.createObjectURL(image2) : ""}
                    height="150px"
                    alt=""
                  />
                </td>
              </tr>
              {image1Details ? (
                Object.entries(image1Details).map(([key, val]) => (
                  <tr>
                    <th scope="row">{key}</th>
                    <td>{val}</td>
                    <td>{image2Details[key]}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <th scope="row">Image Height</th>
                  <td></td>
                  <td></td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="imageSection">
          <img
            src={`data:image/png;base64,${image}`}
            style={{ height: "100%", width: "100%", objectFit: "contain" }}
            alt=""
          />
        </div>
      )}
    </div>
  );
}

export default ResultPage;
