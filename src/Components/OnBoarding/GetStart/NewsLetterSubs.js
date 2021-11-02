import { useState, useEffect } from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
const url =
    "https://gmail.us5.list-manage.com/subscribe/post?u=ba5299ed33a9017ff5fbb7a93&id=be121d50a9";

const NewsLetterSubs = () => (
    <MailchimpSubscribe
        url={url}
        render={({ subscribe, status, message }) => (
            <div className="mailChimp__Form__Container">
                <SimpleForm
                    status={status}
                    message={message}
                    onValidated={(formData) => subscribe(formData)}
                />

                {status === "sending" && (
                    <div className="info-msg">sending...</div>
                )}
                {status === "error" && (
                    <div
                        className="error-msg"
                        dangerouslySetInnerHTML={{
                            __html: `<i class="fa fa-warning"></i>${message}`,
                        }}
                    />
                )}
                {status === "success" && (
                    <div className="success-msg">
                        <i class="fa fa-check"></i>Subscribed !
                    </div>
                )}
            </div>
        )}
    />
);

export default NewsLetterSubs;

const SimpleForm = ({ status, message, onValidated }) => {
    useEffect(() => {
        if (status === "success") clearFields();
    }, [status]);

    const clearFields = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setInstName("");
    };
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [instName, setInstName] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        email &&
            firstName &&
            lastName &&
            email.indexOf("@") > -1 &&
            onValidated({
                EMAIL: email,
                FNAME: firstName,
                LNAME: lastName,
                MMERGE3: instName,
            });
    };
    return (
        <form onSubmit={(e) => handleSubmit(e)} className="mailChimp__Form">
            <div id="mc_embed_signup_scroll">
                {/* <div class="indicates-required">
                    <span class="asterisk">*</span> indicates required
                </div> */}
                <div class="mc-field-group">
                    {/* <label for="mce-FNAME">First Name </label> */}
                    <input
                        onChange={(e) => setFirstName(e.target.value)}
                        type="text"
                        name="FNAME"
                        class=""
                        id="mce-FNAME"
                        value={firstName}
                        placeholder="First Name"
                    />
                </div>
                <div class="mc-field-group">
                    {/* <label for="mce-LNAME">Last Name </label> */}
                    <input
                        onChange={(e) => setLastName(e.target.value)}
                        type="text"
                        name="LNAME"
                        class=""
                        id="mce-LNAME"
                        value={lastName}
                        placeholder="Last Name"
                    />
                </div>
                <div class="mc-field-group">
                    {/* <label for="mce-MMERGE3">Institution </label> */}
                    <input
                        type="text"
                        name="MMERGE3"
                        class=""
                        id="mce-MMERGE3"
                        placeholder="Institution Name"
                        onChange={(e) => setInstName(e.target.value)}
                    />
                </div>
                <div class="mc-field-group">
                    {/* <label for="mce-EMAIL">
                        Email Address <span class="asterisk">*</span>
                    </label> */}
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        name="EMAIL"
                        class="required email"
                        id="mce-EMAIL"
                        value={email}
                        placeholder="youremail@example.com"
                    />
                </div>
                <div id="mce-responses" class="clear">
                    <div
                        class="response"
                        id="mce-error-response"
                        style={{ display: "none" }}
                    ></div>
                    <div
                        class="response"
                        id="mce-success-response"
                        style={{ display: "none" }}
                    ></div>
                </div>

                <div
                    style={{
                        position: "absolute",
                        left: "-5000px",
                    }}
                    aria-hidden="true"
                >
                    <input
                        type="text"
                        name="b_ba5299ed33a9017ff5fbb7a93_be121d50a9"
                        tabindex="-1"
                        value=""
                    />
                </div>
                <div className="clear">
                    <button
                        type="submit"
                        name="subscribe"
                        id="mc-embedded-subscribe"
                        className="button"
                        disabled={!firstName || !email || !lastName}
                    >
                        Get early access
                    </button>
                </div>
            </div>
        </form>
    );
};
