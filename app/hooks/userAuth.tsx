// import { useSelector } from "react-redux";

// export default function UserAuth() {
//   const { user } = useSelector((state: any) => state.auth);

//   if (user) {
//     return true;
//   } else {
//     return false;
//   }
// }


import { useSelector } from "react-redux";
import type { RootState } from "@/redux/store"; // adjust the path if needed

export function useUserAuth(): boolean {
  return useSelector((state: RootState) => Boolean(state.auth.user));
}
