"use client";
import { useNetworkContext } from "@/network/NetworkContext";
import { useStateContext } from "@/providers/StateContext";
import API_BASE_URL from "@/network/NetWorkConfig";
import { useEffect, useState } from "react";
import axios from "axios";
import { Spin } from "antd";
import { useMessageFunctions } from "@/support/message_view";
import Image from "next/image";

export default function Body() {
  return <Main />;
}

function Main() {
  const { netWorkProps } = useNetworkContext();
  const { postParams } = useStateContext();
  const [isFetching, setIsFetching] = useState(true);
  const { successMessage, errorMessage, warningMessage, contextHolder } =
    useMessageFunctions();
    //---------------------- return variables ----------------------//
  const [titleBanners, setTitleBanners] = useState([]);
  const [showDate, setShowDate] = useState([]);
  const [showTime, setShowTime] = useState([]);

  const [formattedshowDate, setFormattedshowDate] = useState([]);
  

  useEffect(() => {
    if (netWorkProps && netWorkProps.getMainShowDetailsFE) {
      setIsFetching(true);
      axios
        .get(netWorkProps.getMainShowDetailsFE, {
          headers: {
            showID: postParams.showID,
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          if (response.status === 200) {
            const showData = response.data;
            setTitleBanners(showData.titleBanners);
            setShowDate(showData.showDate);
            setShowTime(showData.showTime);
            setFormattedshowDate(showData.formattedshowDate);
          } else {
            warningMessage("Something went wrong");
          }
        })
        .catch((error) => {
          console.log(error);
        });
      setIsFetching(false);
    }
  });

  return (
    <>
      {contextHolder}
      <div className="flex flex-col">
        <div className="flex flex-row bg-slate-700 justify-center">
          <h1 className="py-4 text-cyan-50 font-inter_medium">
            Latest event on livetickets.lk
          </h1>
        </div>
        {isFetching ? (
          <div className="flex flex-row justify-center mt-24">
            <div className="flex flex-col">
              <Spin size="large" />
              <div className="text-blue-300 font-inter_medium mt-4">
                Please wait
              </div>
            </div>
          </div>
        ) : (
          <>
          {titleBanners.map((banner, index) => (
            <div className="flex flex-row justify-center px-8 py-8">
              <img
                src={
                  netWorkProps.imagePath +
                  "?showId=" +
                  postParams.showID +
                  "&folder=titleBanners&image=" +
                  banner
                }
                alt="title banner"
              />
            </div>
          ))}
          <div className="flex flex-row justify-center">
            <div className="bg-red-400 px-16 py-3 rounded-lg font-inter_medium text-lg">{formattedshowDate}</div>
          </div>
        </>
        
        )}
      </div>
    </>
  );
}
