"use client"
import { useSelector } from "react-redux"
import React from "react"
import { redirect } from "next/navigation";
import type { RootState } from "@/redux/store";

interface ProtectedProps {
    children: React.ReactNode
}

export default function AdminProtected({ children }: ProtectedProps) {
    const { user } = useSelector((state: RootState) => state.auth);

    if (user) {
        const isAdmin = user?.role === "admin"
        return isAdmin ? children : redirect("/")
    }
}

// "use client"
// import { useSelector } from "react-redux"
// import React from "react"
// import { redirect } from "next/navigation";
// import type { RootState } from "@/redux/store";

// interface ProtectedProps {
//   children: React.ReactNode
// }

// function getRoleFromToken(token: string): string | null {
//   try {
//     const payload = token.split('.')[1];
//     if (!payload) return null;
//     const decodedPayload = JSON.parse(atob(payload));
//     return decodedPayload.role || null;
//   } catch {
//     return null;
//   }
// }

// export default function AdminProtected({ children }: ProtectedProps) {
//   const { user } = useSelector((state: RootState) => state.auth);

//   if (!user) {
//     redirect("/login"); // Assuming redirect to login if not authenticated
//   }

//   const role = getRoleFromToken(user as unknown as string);
//   const isAdmin = role === "admin";
//   return isAdmin ? children : redirect("/");
// }