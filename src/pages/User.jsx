import { AddressDetails, OrderSummary, ProfileDetails } from "../components";
import { useOrders } from "../contexts";
import { useDocumentTitle } from "../utils";
import "./pages-css/user.css";

const OrderDetails = ({ ordersToShow }) => {
  return (
    <div className="user-orders-summary-wrapper">
      <div className="orders-heading">Orders</div>
      {ordersToShow.length !== 0 ? (
        ordersToShow.map((order, index) => (
          <div className="user-order" key={index}>
            <div className="wrap">Order ID </div>: {order._id} <br />
            <div className="wrap">Payment ID </div>: {order.paymentId} <br />
            <div className="wrap">Address</div>: {order.address} <br />
            <div className="wrap">Total Amount</div>: ₹{order.amount}
            <OrderSummary arrayToShow={order.items} />
          </div>
        ))
      ) : (
        <div className="no-orders">No orders to show!</div>
      )}
    </div>
  );
};

export const User = () => {
  useDocumentTitle("User Profile");
  const { ordersToShow, selectedTab, setSelectedTab } = useOrders();
  return (
    <main className="user-main">
      <div className="heading">Profile Page</div>
      <div className="profile-nav">
        <div
          className={`tab ${selectedTab === 1 && "tab-selected"}`}
          onClick={() => setSelectedTab(1)}
        >
          Profile Info
        </div>
        <div
          className={`tab ${selectedTab === 2 && "tab-selected"}`}
          onClick={() => setSelectedTab(2)}
        >
          Address
        </div>
        <div
          className={`tab ${selectedTab === 3 && "tab-selected"}`}
          onClick={() => setSelectedTab(3)}
        >
          Orders
        </div>
      </div>
      {selectedTab === 1 && <ProfileDetails />}
      {selectedTab === 2 && <AddressDetails />}
      {selectedTab === 3 && <OrderDetails ordersToShow={ordersToShow} />}
    </main>
  );
};
