"use client";
import { useEffect } from "react";

export default function Loader({ size, speed, color }: any) {
  useEffect(() => {
    async function getLoader() {
      const { bouncy } = await import("ldrs");
      bouncy.register();
    }
    getLoader();
  }, []);
  return <l-bouncy size={size} speed={speed} color={color}></l-bouncy>;
}
