import React from "react";
import moment from "moment";

const TransactionsList = ({ transactions }) => {
  console.log(transactions);
  return (
    <ul>
      {transactions.map((num) => (
        <li key={num.id}>
          <span className="transaction__date">
            {moment(num.time).format("MMM Do YY")}
          </span>
          <span className="transaction__time">
            {moment(num.time).format("LT")}
          </span>
          <span
            className="transaction__assets"
            key={num.id}
          >{`${num.from} → ${num.to}`}</span>
          <span className="transaction__rate">{num.rate}</span>
          <span className="transaction__amount">{num.amount}</span>
        </li>
      ))}
    </ul>
  );
};

export default TransactionsList;
