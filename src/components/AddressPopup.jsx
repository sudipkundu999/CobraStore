import { useEffect, useState } from "react";
import { useAddress } from "../contexts";
import "./component-css/address-popup.css";

export const AddressPopup = () => {
  const initialAddressState = {
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    phone: "",
  };
  const [addressFormData, setAddressFormData] = useState(initialAddressState);

  const {
    addAddress,
    updateAddress,
    isPopupVisible,
    setIsPopupVisible,
    selectedAddress,
    setSelectedAddress,
  } = useAddress();

  useEffect(
    () => selectedAddress !== undefined && setAddressFormData(selectedAddress),
    [selectedAddress]
  );

  const addressFormHandler = (e) => {
    e.preventDefault();
    if (selectedAddress !== undefined) {
      updateAddress(addressFormData);
      setSelectedAddress(undefined);
    } else {
      addAddress(addressFormData);
    }
    setAddressFormData(initialAddressState);
    setIsPopupVisible(false);
  };

  const fillDummyAddress = (e) => {
    e.preventDefault();
    setAddressFormData((prev) => ({
      firstName: "Neog",
      lastName: "Camp",
      address: "D7,Elite Park",
      city: "Bangalore",
      state: "Karnataka",
      pincode: "713492",
      phone: "+917256349835",
    }));
  };

  return (
    <div
      className={`address-popup-container ${
        isPopupVisible ? "popup-visible" : ""
      }`}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="address-popup" onClick={(e) => e.stopPropagation()}>
        <div className="heading">New Address</div>
        <i
          className="fas fa-times close-address-popup"
          onClick={() => {
            setIsPopupVisible(false);
            setSelectedAddress(undefined);
            setAddressFormData(initialAddressState);
          }}
        />
        <form onSubmit={(e) => addressFormHandler(e)} className="address-form">
          <input
            placeholder="First Name"
            type="text"
            value={addressFormData.firstName}
            onChange={(e) =>
              setAddressFormData((prev) => ({
                ...prev,
                firstName: e.target.value,
              }))
            }
            required
          />
          <input
            placeholder="Last Name"
            type="text"
            value={addressFormData.lastName}
            onChange={(e) =>
              setAddressFormData((prev) => ({
                ...prev,
                lastName: e.target.value,
              }))
            }
            required
          />
          <input
            placeholder="Address"
            type="text"
            value={addressFormData.address}
            onChange={(e) =>
              setAddressFormData((prev) => ({
                ...prev,
                address: e.target.value,
              }))
            }
            required
          />
          <input
            placeholder="City"
            type="text"
            value={addressFormData.city}
            onChange={(e) =>
              setAddressFormData((prev) => ({
                ...prev,
                city: e.target.value,
              }))
            }
            required
          />
          <input
            placeholder="State"
            type="text"
            value={addressFormData.state}
            onChange={(e) =>
              setAddressFormData((prev) => ({
                ...prev,
                state: e.target.value,
              }))
            }
            required
          />
          <input
            placeholder="PIN Code"
            type="number"
            value={addressFormData.pincode}
            onChange={(e) =>
              setAddressFormData((prev) => ({
                ...prev,
                pincode: e.target.value,
              }))
            }
            required
          />
          <input
            placeholder="Phone"
            type="tel"
            value={addressFormData.phone}
            onChange={(e) =>
              setAddressFormData((prev) => ({
                ...prev,
                phone: e.target.value,
              }))
            }
            required
          />
          <input
            type="submit"
            value={
              selectedAddress !== undefined ? "Update Address" : "Add Address"
            }
            className="btn btn-primary m-auto"
          />
          <button
            className="btn dummy-address"
            onClick={(e) => fillDummyAddress(e)}
          >
            Fill Dummy Address Details
          </button>
        </form>
      </div>
    </div>
  );
};
