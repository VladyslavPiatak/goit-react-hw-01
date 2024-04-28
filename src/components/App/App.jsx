import Profile from "../Profile/Profile";
import FriedList from "../FriendList/FriendList";
import TransactionHistory from "../TransactionHistory/TransactionHistory";
import userData from "../../userData.json";


export default function App() {
  return (
    <>
      <Profile userData={userData} />
      <FriedList />
      <TransactionHistory />
    </>
  );
}