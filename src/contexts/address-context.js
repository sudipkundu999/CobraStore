import { createContext, useContext, useEffect, useState } from "react";
import { useAxios } from "../utils";
import { useAuth } from "./auth-context";

const AddressContext = createContext();

const useAddress = () => useContext(AddressContext);

const AddressProvider = ({ children }) => {
  const [addressToShow, setAddressToShow] = useState([]);
  const {
    response: responseAddress,
    loading: loadingAddress,
    operation: operationAddress,
  } = useAxios();

  const fetchAddress = () => {
    operationAddress({
      method: "get",
      url: "/api/user/address",
      headers: {
        accept: "*/*",
        authorization: localStorage.getItem("cobraToken"),
      },
      data: {},
    });
  };

  const { isUserLoggedIn } = useAuth();
  useEffect(() => {
    isUserLoggedIn ? fetchAddress() : setAddressToShow([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUserLoggedIn]);

  const addAddress = (address) => {
    operationAddress({
      method: "POST",
      url: "/api/user/address",
      headers: {
        accept: "*/*",
        authorization: localStorage.getItem("cobraToken"),
      },
      data: { address: address },
    });
  };

  const removeAddress = (address) => {
    operationAddress({
      method: "DELETE",
      url: `/api/user/address/${address._id}`,
      headers: {
        accept: "*/*",
        authorization: localStorage.getItem("cobraToken"),
      },
      data: {},
    });
  };

  const updateAddress = (address) => {
    operationAddress({
      method: "POST",
      url: `/api/user/address/${address._id}`,
      headers: {
        accept: "*/*",
        authorization: localStorage.getItem("cobraToken"),
      },
      data: { address: address },
    });
  };

  useEffect(
    () =>
      responseAddress !== undefined &&
      setAddressToShow(responseAddress.address),
    [responseAddress]
  );

  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState();

  return (
    <AddressContext.Provider
      value={{
        loadingAddress,
        addressToShow,
        addAddress,
        removeAddress,
        updateAddress,
        isPopupVisible,
        setIsPopupVisible,
        selectedAddress,
        setSelectedAddress,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
};

export { useAddress, AddressProvider };
