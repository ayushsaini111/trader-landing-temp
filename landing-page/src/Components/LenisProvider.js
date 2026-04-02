"use client";

import useLenis from "../Hooks/useLenisScroll";
export default function LenisProvider({ children }) {
  useLenis(); // 🔥 initialize once

  return <>{children}</>;
}
