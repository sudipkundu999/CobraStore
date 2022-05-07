import { AddressDetails, OrderSummary, ProfileDetails } from "../components";
import { useOrders } from "../contexts";
import { useDocumentTitle } from "../utils";
import "./pages-css/user.css";

export const User = () => {
  useDocumentTitle("User Profile");
  const { ordersToShow } = useOrders();

  return (
    <main className="user-main">
      <div className="heading">User Profile</div>
      <ProfileDetails />
      <div className="user-orders-summary-wrapper">
        <div className="orders-heading">Orders</div>
        {ordersToShow.length !== 0 ? (
          ordersToShow.map((order, index) => (
            <div className="user-order" key={index}>
              Order ID : {order._id} <br />
              Address : {order.address} <br />
              Total Amount : ₹{order.amount}
              <OrderSummary arrayToShow={order.items} />
            </div>
          ))
        ) : (
          <div className="no-orders">No orders to show!</div>
        )}
      </div>
      <AddressDetails />
    </main>
  );
};
