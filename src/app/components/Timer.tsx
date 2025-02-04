"use client";
import { useEffect, useState } from "react";

const calculateTimeLeft = () => {
  const targetDate = new Date("2025-02-21T13:30:00");
  const difference = +targetDate - +new Date();
  let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isClient) {
    return null; 
  }

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4 mt-5">投票まであと</h2>
      <div className="text-3xl font-semibold">
        {timeLeft.days}日 {timeLeft.hours}時間 {timeLeft.minutes}分 {timeLeft.seconds}秒
      </div>
    </div>
  );
};

export default Timer;
