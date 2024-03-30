import React from "react";
import Table from 'react-bootstrap/Table';
import { Row } from "./Row";

export const ComparisonTable = ({ sourceCurrency, targetCurrency, amount, sortedProvidersByReceievedAmount }) => {
  return (
    <div className="table-responsive table-hover">
      <Table className="table">
        <thead className="bg-warning p-0">
          <tr>
            <th scope="col-3">Provider</th>
            <th scope="col-3">
              <span >Exchange rate</span>
              <br />
              <span>1 {sourceCurrency}{"-->"}{targetCurrency}</span>
            </th>
            <th scope="col-3">Transfer fee</th>
            <th scope="col-3" className="recipient-gets-header">Recipient gets
              <br />
              <span>{amount} {sourceCurrency}</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedProvidersByReceievedAmount.map(provider => {
            return (
              <Row
                key={provider.id}
                id={provider.id}
                logo={provider.logo}
                providerName={provider.name}
                rate={provider.quotes[0].rate}
                transferFee={provider.quotes[0].fee}
                receivedAmount={provider.quotes[0].receivedAmount}
              />
            )
          })
          }
        </tbody>
      </Table>
    </div>
  );
};






