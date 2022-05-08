export const OrderSummary = ({ arrayToShow }) => {
  return (
    <div className="order-summary">
      <ul>
        <li key={"heading"} className="order-summary-list-heading">
          #. Name <span>Qty</span>
        </li>
        {arrayToShow.map((ele, index) => (
          <li key={index}>
            {index + 1}. {ele.name} <span>{ele.qty}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
