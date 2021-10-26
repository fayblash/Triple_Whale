import React from "react";
import { useSelector } from "react-redux";
import { Page, Card, IndexTable, useIndexResourceState } from "@shopify/polaris";
import store from "../redux/store";
import { deleteOrder } from "../redux/reducer";

//Shopify Polaris table to display order data
export default function OrderTable() {
  const orders = useSelector((state) => state);

  const resourceName = {
    singular: "order",
    plural: "orders"
  };

  const { selectedResources, allResourcesSelected, handleSelectionChange } = useIndexResourceState(orders);

  const promotedBulkActions = [
    {
      content: "Delete customers",
      onAction: () => {
        store.dispatch(deleteOrder(selectedResources));
      }
    }
  ];

  const rowMarkup = orders.map(({ orderId, date, customerName, price }, index) => (
    <IndexTable.Row id={orderId} key={orderId} selected={selectedResources.includes(orderId)} position={index}>
      <IndexTable.Cell>{orderId}</IndexTable.Cell>
      <IndexTable.Cell>{customerName}</IndexTable.Cell>
      <IndexTable.Cell>{date}</IndexTable.Cell>
      <IndexTable.Cell>{price}</IndexTable.Cell>
    </IndexTable.Row>
  ));

  return (
    <Page title="Orders Table">
      <Card>
        <IndexTable
          resourceName={resourceName}
          itemCount={orders.length}
          selectedItemsCount={allResourcesSelected ? "All" : selectedResources.length}
          onSelectionChange={handleSelectionChange}
          promotedBulkActions={promotedBulkActions}
          headings={[{ title: "Order" }, { title: "Date" }, { title: "Customer" }, { title: "Price" }]}
        >
          {rowMarkup}
        </IndexTable>
      </Card>
    </Page>
  );
}
