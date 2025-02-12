"use client";

import { useSession } from "next-auth/react";

export function ShowOnLogin({ children }) {
  const { data: session } = useSession();
  if (session) {
    return children;
  }
  return null;
}

export function ShowOnLogout({ children }) {
  const { data: session } = useSession();
  if (!session) {
    return children;
  }
  return null;
}
