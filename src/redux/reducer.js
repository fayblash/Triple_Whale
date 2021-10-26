import db from "../firebase";
import { collection, getDocs, doc, setDoc, deleteDoc } from "firebase/firestore";

const initialState = [
  { orderId: "#11112", customerName: "Dummy Data", date: "N/A", price: "00.00" },
  { orderId: "#11111", customerName: "Dummy Data", date: "N/A", price: "00.00" }
];

export default function ordersReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_ORDER": {
      return [...state, action.payload];
    }
    case "FETCH_DATA": {
      return action.payload;
    }
    case "DELETE_ORDER": {
      return action.payload;
    }
    default:
      return state;
  }
}
//function to load data from firestore
export async function fetchData(dispatch) {
  const newData = [];
  const querySnapshot = await getDocs(collection(db, "orders"));
  querySnapshot.forEach((doc) => {
    newData.push(doc.data());
  });
  dispatch({ type: "FETCH_DATA", payload: newData });
}
//function to delete order from table and firestore
export const deleteOrder = (order) => {
  return async function (dispatch, getState) {
    const data = getState();
    const newData = data.filter((x) => !order.includes(x.orderId));
    for (let ord of order) {
      await deleteDoc(doc(db, "orders", `${ord}`));
    }
    dispatch({ type: "DELETE_ORDER", payload: newData });
  };
};
//function to add order to table and firestore
export const addOrderToTable = (order) => {
  return async function (dispatch) {
    await setDoc(doc(db, "orders", `${order.orderId}`), order);
    dispatch({ type: "ADD_ORDER", payload: order });
  };
};
