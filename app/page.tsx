"use client";
import { NetworkProvider } from "@/network/NetworkContext";
import { StateProvider } from "@/providers/StateContext";
import API_BASE_URL from "@/network/NetWorkConfig";
import { useEffect, useState } from "react";
import InitPage from "./init";

export default function Home() {
  return (
    <NetworkProvider>
      <StateProvider>
        <InitPage />
      </StateProvider>
    </NetworkProvider>
  );
}
