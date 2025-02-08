import React, { useEffect, useState } from "react";

const CountdownTimer = ({ deadline, specificHour }) => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const leading0 = (num) => {
        return num < 10 ? "0" + num : num;
    };

    const getTimeUntil = (deadline, specificHour) => {
        let deadlineDate = new Date(deadline);
        deadlineDate.setHours(specificHour, 0, 0, 0); // Set deadline to specific hour

        const time = deadlineDate.getTime() - Date.now();
        if (time < 0) {
            setDays(0);
            setHours(0);
            setMinutes(0);
            setSeconds(0);
        } else {
            setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
            setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
            setMinutes(Math.floor((time / 1000 / 60) % 60));
            setSeconds(Math.floor((time / 1000) % 60));
        }
    };

    useEffect(() => {
        getTimeUntil(deadline, specificHour);

        const interval = setInterval(() => {
            getTimeUntil(deadline, specificHour);
        }, 1000);

        return () => clearInterval(interval);
    }, [deadline, specificHour]);

    return (
        <div className="mt-5 flex gap-3 text-optional">
            <div className="flex justify-between text-center w-full text-3xl italic font-thin">
            <div>
              <p className="text-4xl font-bold">{leading0(days)}</p>
              <p>Hari</p>
            </div>
            <div>
              <p className="text-4xl font-bold">{leading0(hours)}</p>
              <p>Jam</p>
            </div>
            <div>
              <p className="text-4xl font-bold">{leading0(minutes)}</p>
              <p>Menit</p>
            </div>
            <div>
              <p className="text-4xl font-bold">{leading0(seconds)}</p>
              <p>Detik</p>
            </div>
          </div>
        </div>
    );
};

export default CountdownTimer;