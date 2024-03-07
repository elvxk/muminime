"use client";
import { signOut } from "next-auth/react";
import { CgLogOut } from "react-icons/cg";

const LogoutBtn = () => {
  return (
    <button
      className="text-primary gap-1 flex items-center justify-center transition-all hover:scale-95"
      onClick={() => signOut()}
    >
      <CgLogOut /> Logout
    </button>
  );
};
export default LogoutBtn;
