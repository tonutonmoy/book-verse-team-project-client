import { useContext } from "react";

import { AuthContext } from "../provider/AuthProvider";

import { useQuery } from "@tanstack/react-query";

const UseUser = () => {
  const { user } = useContext(AuthContext);
  const { data: userinfo = null, isLoading } = useQuery(
    [user],
    async () => {
      const res = await fetch(
        `https://book-verse-server-phi.vercel.app/userinfo/?email=${user?.email}`
      );
      return res.json();
    }
  );
  return [userinfo, isLoading];
};
export default UseUser;
