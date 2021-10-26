import React, { useState } from "react";
import { Page } from "@shopify/polaris";
import store from "../redux/store";
import { addOrderToTable } from "../redux/reducer";

//form to add new order to table/firebase
export default function AddOrder() {
  const initialState = {
    orderId: "",
    customerName: "",
    date: "",
    price: ""
  };
  const [state, setState] = useState(initialState);
  const { orderId, customerName, date, price } = state;

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    store.dispatch(addOrderToTable(state));
    setState({ orderId: "", customerName: "", date: "", price: "" });
  };
  return (
    <>
      <Page>
        <form id="addForm" onSubmit={handleSubmit}>
          <input placeholder="Order ID" value={orderId} name="orderId" type="text" onChange={handleInputChange} />
          <input placeholder="Customer Name" value={customerName} name="customerName" type="text" onChange={handleInputChange} />
          <input placeholder="Date" value={date} name="date" type="text" onChange={handleInputChange} />
          <input placeholder="Price" value={price} name="price" type="number" onChange={handleInputChange} />
          <button type="submit">Add New Order</button>
        </form>
      </Page>
    </>
  );
}
