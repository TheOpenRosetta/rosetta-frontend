import React, { useState } from "react";
// import TextField from "@mui/material/TextField";
import girl from "../../../images/girl-smile.png";
// import { Button } from "@material-ui/core";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
import NewsLetterSubs from "./NewsLetterSubs";

// const schema = yup.object().shape({
//     firstName: yup.string().required(),
//     lastName: yup.string(),
//     instName: yup.string(),
//     email: yup.string().email(),
// });

const GetStart = ({ handleGetStart, step, setStep }) => {
//     const [firstNameData, setFirstNameData] = useState("");
//     const [lastNameData, setLastNameData] = useState("");
//     const [instNameData, setInstNameData] = useState("");
//     const [emailData, setEmailData] = useState("");
    // const {
    //     register,
    //     handleSubmit,
    //     reset,
    //     formState: { errors },
    // } = useForm({
    //     resolver: yupResolver(schema),
    // });

    // const onSubmit = (data) => {
    //     data.authorId = null;
    //     handleGetStart(data);
    //     setStep(2);
    // };
    // useEffect(() => {
    //     const data = JSON.parse(sessionStorage.getItem("user"));
    //     if (data) {
    //         reset();
    //         console.log(data.firstName);
    //         setFirstNameData(data?.firstName);
    //         setLastNameData(data?.lastName);
    //         setInstNameData(data?.instName);
    //         setEmailData(data?.email);
    //     }
    // }, [step]);

    return (
        <div className="onBoarding getStart">
            <div className="onBoarding__left">
                <img src={girl} alt="" />
            </div>
            <div className="onBoarding__right">
                <div>
                    <p>Get started absolutely free.</p>
                    <NewsLetterSubs></NewsLetterSubs>
                </div>
            </div>
        </div>
    );
};

export default GetStart;
