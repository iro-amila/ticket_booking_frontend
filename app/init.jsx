"use client";
import { useNetworkContext } from "@/network/NetworkContext";
import { useStateContext } from "@/providers/StateContext";
import API_BASE_URL from "@/network/NetWorkConfig";
import { useEffect, useState } from "react";
import HomePage from "./home/page";

export default function Body() {
  //------------------------ set network props------------------------//
  const { setNetWorkProps } = useNetworkContext();
  const { setPostParams } = useStateContext();
  useEffect(() => {
    const netWorkProps = {
      getMainShowDetailsFE: API_BASE_URL + "getMainShowDetailsFE",
      imagePath: API_BASE_URL + "view_images",
    };
    setNetWorkProps(netWorkProps);
    //------------------------ set state props------------------------//
    const postParams = {
      showID: "kamal_obayi_mamayi_2",
    };
    setPostParams(postParams);
  }, []);

  return <HomePage />;
}
