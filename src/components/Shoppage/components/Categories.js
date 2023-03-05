import { useState } from "react";

import { useGetAllProductsQuery } from "../../Store/apiSlice";

import { Link } from "react-router-dom";

import "./Categories.css";

const Categories = () => {
  const formatter = new Intl.NumberFormat("en-US", {
    thousandSeparator: ",",
    currency: "VND",
  });

  const { data: datas } = useGetAllProductsQuery();
  const [items, setData] = useState(datas);

  const [start, setStart] = useState(true);
  const [filter, setFilter] = useState(false);

  console.log({ items });
  console.log({ datas });

  console.log({ start });
  console.log({ filter });

  return (
    <>
      <div className="shopcontent">
        <div className="cate">
          <div className="categories">CATEGORIES</div>
          <div className="catedetail">
            <button className="apple">APPLE</button>
            <button
              onClick={() => {
                if (start === false) {
                  setStart(true);
                  setFilter(false);
                }
              }}
              className="all"
            >
              All
            </button>
            <button className="iphonemac">IPHONE & MAC</button>
            <button
              onClick={() => {
                if (start === true) {
                  setStart(false);
                }
                setFilter(true);
                setData("iphone");
              }}
              className="iphone"
            >
              Iphone
            </button>
            <button
              onClick={() => {
                if (start === true) {
                  setStart(false);
                }
                setFilter(true);
                setData("ipod");
              }}
              className="ipod"
            >
              Ipod
            </button>
            <button
              onClick={() => {
                if (start === true) {
                  setStart(false);
                }
                setFilter(true);
                setData("ipad");
              }}
              className="mac"
            >
              Macbook
            </button>
            <button className="wireless">WIRELESS</button>
            <button
              onClick={() => {
                if (start === true) {
                  setStart(false);
                }
                setFilter(true);
                setData("airpod");
              }}
              className="airpod"
            >
              Airpod
            </button>
            <button
              onClick={() => {
                if (start === true) {
                  setStart(false);
                }
                setFilter(true);
                setData("watch");
              }}
              className="watch"
            >
              Watch
            </button>
            <button className="other">OTHER</button>
            <button
              onClick={() => {
                if (start === true) {
                  setStart(false);
                }
                setFilter(true);
                setData("mouse");
              }}
              className="mouse"
            >
              Mouse
            </button>
            <button
              onClick={() => {
                if (start === true) {
                  setStart(false);
                }
                setFilter(true);
                setData("keyboard");
              }}
              className="keyboard"
            >
              Keyboard
            </button>
            <button className="other">Other</button>
          </div>
        </div>
        <div>
          <div className="shopdetail">
            <div className="shopsearch">
              <div className="search">
                <input placeholder="Enter Search Here!" />
              </div>
              <div className="select">
                <select>
                  <option>Default Sorting</option>
                </select>
              </div>
            </div>
          </div>
          <div>
            <div className="trendingproduct" key={Math.random()}>
              {start &&
                datas?.map((item) => {
                  const { img1, name, price, _id } = item;
                  return (
                    <Link to={`/shop/${_id.$oid}`}>
                      <div key={Math.random()} className="trending">
                        {<img src={img1} alt="" />}

                        <div key={Math.random()} className="trendingname">
                          {name}
                        </div>
                        <div key={Math.random()} className="trendingprice">
                          {formatter.format(price) + " VND"}
                        </div>
                      </div>
                    </Link>
                  );
                })}
            </div>

            <div className="trendingproduct" key={Math.random()}>
              {filter &&
                datas
                  ?.filter((item) => item.category === items)
                  ?.map((item) => {
                    const { img1, name, price, _id } = item;
                    return (
                      <Link to={`/shop/${_id.$oid}`}>
                        <div key={Math.random()} className="trending">
                          {<img src={img1} alt="" />}

                          <div key={Math.random()} className="trendingname">
                            {name}
                          </div>
                          <div key={Math.random()} className="trendingprice">
                            {formatter.format(price) + " VND"}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
