import React, { useEffect, useState } from "react";
import GetStart from "./GetStart/GetStart";
// import VerifyIdentity from "./VerifyIdentity/VerifyIdentity";
// import VerifyPapers from "./VerifyPapers/VerifyPapers";

const OnBoarding = () => {
    const [step, setStep] = useState(1);
    const [setUser] = useState(null);
    const handleGetStart = (user) => {
        setUser(user);
        sessionStorage.setItem("user", JSON.stringify(user));
    };
    useEffect(() => {
        const data = JSON.parse(sessionStorage.getItem("user"));
        if (data) {
            setUser(data);
            setStep(2);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <div>
            {step === 1 && (
                <GetStart
                    handleGetStart={handleGetStart}
                    step={step}
                    setStep={setStep}
                ></GetStart>
            )}
            {/* {step === 2 && (
                <VerifyIdentity user={user} setStep={setStep}></VerifyIdentity>
            )}
            {step === 3 && (
                <VerifyPapers user={user} setStep={setStep}></VerifyPapers>
            )} */}
        </div>
    );
};

export default OnBoarding;
