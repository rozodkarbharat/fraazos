
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../context/AuthContestProvider";
import style from "../module/Cart.module.css";

const Buttnsty = styled.div`
  display: flex;
  height: 22px;
  margin-left: 50%;
  width: 80px;
`;

function Buttn({ item }) {
  const [pagecount, setPageCount] = useState(1);

  const { handlecart } = useContext(AuthContext);
  return (
    <div style={{ float: "left" }}>
      <div
        style={{
          border: "1px solid red",
          display: "flex",
          width: "400px",
          height: "300px",
          marginLeft: "5px",
          marginTop: "5px"
        }}
      >
        <div style={{ marginTop: "20px" }} key={item.id}>
          <img src={item.image} alt=" " />
        </div>
        <div style={{ marginLeft: "10px" }} key={item.id}>
          <Buttnsty>
            <div key={item.id}>
              <button
                disabled={pagecount === 0}
                onClick={() => setPageCount((prev) => prev - 1)}
              >
                -
              </button>
            </div>
            <div>
              <button>{pagecount}</button>
            </div>
            <div>
              <button
                disabled={pagecount === 8}
                onClick={() => setPageCount((prev) => prev + 1)}
              >
                +
              </button>
            </div>
          </Buttnsty>
          <h3>Name :{item.name}</h3>
          <p>
            <a href>Description:</a> {item.style}
          </p>
          <h5>Price: {item.cost} ₹</h5>

          <button onClick={() => handlecart({ ...item, pagecount })}>
            Add cart
          </button>
        </div>
      </div>
    </div>
  );
}

export { Buttn };