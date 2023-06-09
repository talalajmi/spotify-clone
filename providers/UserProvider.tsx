"use client";

import { MyUserContextProvider } from "@/hooks/useUser";

interface UserProvidorProps {
  children: React.ReactNode;
}

const UserProvider = ({ children }: UserProvidorProps) => {
  return <MyUserContextProvider>{children}</MyUserContextProvider>;
};

export default UserProvider;
