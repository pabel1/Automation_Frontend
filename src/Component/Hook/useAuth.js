import { useSelector } from "react-redux";

export default function useAuth() {
  const auth = useSelector((state) => state?.auth);
  console.log(auth);
  if (auth?.access_token) {
    return true;
  } else {
    return false;
  }
}
