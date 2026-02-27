import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/authThunks";

const Profile = () => {
  const dispatch = useDispatch();
  const { user, role } = useSelector((state) => state.auth);

  return (
    <div className="h-screen bg-black text-white flex flex-col items-center justify-center gap-4">
      <h2 className="text-xl font-semibold">Profile</h2>
      <p>{role}</p>
      <p>{user?.email}</p>

      <button
        onClick={() => dispatch(logout())}
        className="bg-red-500 px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
};

export default Profile;
