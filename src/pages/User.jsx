import { AddressDetails, ProfileDetails } from "../components";
import { useDocumentTitle } from "../utils";
import "./pages-css/user.css";

export const User = () => {
  useDocumentTitle("User Profile");

  return (
    <main className="user-main">
      <div className="heading">User Profile</div>
      <ProfileDetails />
      <AddressDetails />
    </main>
  );
};
