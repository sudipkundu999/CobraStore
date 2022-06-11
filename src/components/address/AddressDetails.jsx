import { useAddress } from "../../contexts";
import "./address-details.css";

export const AddressDetails = () => {
  const {
    addressToShow,
    setIsPopupVisible,
    removeAddress,
    setSelectedAddress,
    defaultAddress,
    setDefaultAddress,
  } = useAddress();

  return (
    <div className="address-details-wrapper">
      <h2 className="address-heading">Address Details</h2>
      <i
        className="fas fa-plus-circle add-address"
        title="Add address"
        onClick={() => setIsPopupVisible(true)}
      />
      {addressToShow.map((address, index) => (
        <div className="address" key={index}>
          {address.firstName} {address.lastName} <br />
          {address.address} <br />
          {address.city} <br />
          {address.state} <br />
          {address.pincode} <br />
          {address.phone} <br />
          <div className="address-cta">
            <i
              className="fas fa-highlighter edit-address"
              title="Edit Address"
              onClick={() => {
                setSelectedAddress(address);
                setIsPopupVisible(true);
              }}
            />
            {defaultAddress?._id === address._id ? (
              <i className="fas fa-check-circle default-address default-address-selected" />
            ) : (
              <i
                className="far fa-check-circle default-address"
                onClick={() => setDefaultAddress(address)}
              />
            )}
            <i
              className="fas fa-trash delete-address"
              title="Delete Address"
              onClick={() => removeAddress(address)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
