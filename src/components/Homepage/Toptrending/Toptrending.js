import React, { useState, useEffect } from "react";

import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

// import store from "../../Store/store";
// import { updateState } from "../../Store/initialState";

import "./Page/Modal.css";
import "./Toptrending.css";

function Toptrending() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  const [modal, setModal] = useState(false);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const toggleModal = (item) => {
    setModal(!modal);
    setData(item);
  };

  const formatter = new Intl.NumberFormat("en-US", {
    thousandSeparator: ",",
    currency: "VND",
  });

  useEffect(() => {
    fetch(
      "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },

        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else if (items !== undefined) {
    console.log({ items });
    return (
      <>
        <>
          {modal && (
            <div
              key={Math.random()}
              className="modal"
              onClick={() => toggleModal()}
            >
              <div key={Math.random()} className="modalimg">
                <img src={data.img1} alt="" />
              </div>

              <div key={Math.random()} className="modaldetail">
                <div key={Math.random()} className="modalname">
                  {data.name}
                </div>
                <div key={Math.random()} className="modalprice">
                  {formatter.format(data.price) + " VND"}
                </div>
                <div key={Math.random()} className="modaldesc">
                  {data.short_desc}
                </div>
                <div>
                  <button key={Math.random()} onClick={() => navigate("/shop")}>
                    View Detail
                  </button>
                </div>
              </div>
            </div>
          )}
          <div className="productCenter">
            <div
              key={Math.random()}
              className="trendingproduct"
              id="trendingPt"
            >
              {items.map((item) => (
                <div key={Math.random()} className="trending">
                  <Button
                    key={Math.random()}
                    variant="primary"
                    onClick={() => toggleModal(item)}
                  >
                    {<img src={item.img1} alt="" key={item.id} />}
                  </Button>
                  <div key={Math.random()} className="trendingname">
                    {item.name}
                  </div>
                  <div key={Math.random()} className="trendingprice">
                    {formatter.format(item.price) + " VND"}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      </>
    );
  }
}
export default Toptrending;
