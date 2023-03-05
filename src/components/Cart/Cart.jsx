//import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../Store/cartSlice";

import Navbar from "../Homepage/Nav/Navbar";

//import Footer from "../Homepage/Footer/Footer";

import "./Cart.css";

const Cart = () => {
  const getData = localStorage.getItem("products") ?? "[]";
  const productArray = JSON.parse(getData);

  const formatter = new Intl.NumberFormat("en-US", {
    thousandSeparator: ".",
    currency: "VND",
  });
  console.log({ productArray });

  const carts = useSelector((state) => state.cart.cart);
  const count = useSelector((state) => state.cart.count);
  const dispatch = useDispatch();

  console.log({ carts });
  console.log({ count });

  return (
    <>
      <Navbar />
      <div className="bannerImg">
        <div className="cartShopping">CART SHOPPING</div>
      </div>
      <div className="shoppingCart">
        <h2>SHOPPING CART</h2>
      </div>
      <div className="cartDetail">
        <div className="tableContent">
          <table>
            <thead>
              <tr>
                <th>IMAGE</th>
                <th>PRODUCT</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
                <th>TOTAL</th>
                <th>REMOVE</th>
              </tr>
            </thead>
            <tbody>
              {carts?.map((cart) => {
                if (cart !== undefined) {
                  return (
                    <>
                      <tr>
                        <th className="cartImg">
                          <img src={cart[0].img1} alt="" />
                        </th>
                        <th className="cartName">{cart[0].name}</th>
                        <th className="cartPrice">
                          {formatter.format(cart[0].price) + " VND"}
                        </th>
                        <th className="cartQuantity">
                          <div className="plusMinus">
                            <div className="minusAmount">
                              <button
                                onClick={() =>
                                  dispatch(counterActions.decrement())
                                }
                                // onClick={decrementHandler}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  className="bi bi-caret-left-fill"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                                </svg>
                              </button>
                            </div>

                            <div className="countCart">{cart[1] + count}</div>

                            <div className="plusAmount">
                              <button
                                onClick={() =>
                                  dispatch(counterActions.increment())
                                }
                                // onClick={incrementHandler}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  className="bi bi-caret-right-fill"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                                </svg>
                              </button>
                            </div>
                          </div>
                        </th>
                        <th className="cartAmount">4</th>
                        <th className="cartRemove">5</th>
                      </tr>
                    </>
                  );
                } else return "";
              })}
            </tbody>
          </table>
          <div className="continueProcceed">
            <div className="continueShopping">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-left"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                  />
                </svg>
                Continue Shopping
              </button>
            </div>
            <div className="procceedCheckout">
              <button>
                Procceed to Checkout{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="cartTotal">
          <h2>CART TOTAL</h2>
          <div className="subtotal">
            <h3>SUBTOTAL</h3>
            <div className="subtotalContent">{}</div>
          </div>
          <div className="total">
            <h3>TOTAL</h3>
            <div className="totalContent">{}</div>
          </div>
          <div className="coupon">
            <div className="couponInput">
              <input placeholder="Enter your coupon" />
            </div>
            <div className="couponButton">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-gift"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A2.968 2.968 0 0 1 3 2.506V2.5zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43a.522.522 0 0 0 .023.07zM9 3h2.932a.56.56 0 0 0 .023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0V3zM1 4v2h6V4H1zm8 0v2h6V4H9zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5V7zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5H7z" />
                </svg>{" "}
                Apply coupon
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};
export default Cart;
