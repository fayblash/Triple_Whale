import React from "react";
import "./App.css";
import OrderTable from "./components/OrderTable";
import FetchDataButton from "./components/FetchDataButton";
import AddOrder from "./components/AddOrder";

export default function App() {
  return (
    <div className="App">
      <OrderTable />
      <AddOrder />
      <FetchDataButton />
    </div>
  );
}
