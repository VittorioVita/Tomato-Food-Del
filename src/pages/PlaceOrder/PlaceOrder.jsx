import React, { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";

const PlaceOrder = () => {

  const {getTotalCartAmount} = useContext(StoreContext);
  return (
    <form action="" className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Info</p>
        <div className="multi-fields">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="text" placeholder="Email Address" />
        <input type="text" placeholder="Indirizzo" />
        <div className="multi-fields">
          <input type="text" placeholder="Citta" />
          <input type="text" placeholder="Comune" />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="CAP" />
          <input type="text" placeholder="Paese" />
        </div>
        <input type="text" placeholder="Telefono" />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart-Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button>
            PROCEDI Al PAGAMENTO
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
