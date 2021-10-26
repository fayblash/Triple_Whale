import React from "react";
import { fetchData } from "../redux/reducer";
import store from "../redux/store";
import { Page, Button } from "@shopify/polaris";

//button to fetch all data from firestore to populate table
export default function FetchDataButton() {
  function fetchTable() {
    store.dispatch(fetchData);
  }
  return (
    <>
      <Page>
        <Button onClick={fetchTable}>Fetch All Data</Button>
      </Page>
    </>
  );
}
