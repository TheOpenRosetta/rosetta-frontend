import React from "react";
import icon1 from '../../../images/followers -icon.svg';
import icon2 from '../../../images/identification-icon.svg';
import icon3 from '../../../images/bookmark-icon.svg';
import Sponsor from "./Sponsors/Sponsor";
const SideBar = () => {
    return (
        <div className="side__bar">
            <div className="upper__grid">
                <div className="profile__img"/>
            </div>
            <div className="profile__info">
                <h3>Anthony Rayan</h3>
                <p>Academic Fraud Committed: <span>No</span></p>
                <div className="amount">
                    <p>$50,000 Rosetta</p>
                    <p className="claim-btn">Claim now</p>
                </div>
                <p>
                    Angel investor, Formerly CTO of coinbase and GP at Andreessen horowitz,
                    Cofounder of earn counsyl teleport and coin center.
                </p>
                <div className="btn-group">
                    <p>Follow</p>
                    <p>Fund</p>
                </div>
                <div className="icon__group">
                    <div className="icon">
                        <img src={icon1} alt="icon"/>
                    </div>
                    <p>639</p>
                    <div className="icon">
                        <img src={icon2} alt="icon"/>
                    </div>
                    <p>4707</p>
                    <div className="icon">
                        <img src={icon3} alt="icon"/>
                    </div>
                    <p>3950</p>
                </div>
                <Sponsor name="SPONSORS"/>
                <Sponsor name="FOLLOWERS"/>
                <Sponsor name="FOLLOWING"/>
                <Sponsor name="COMMUNITIES"/>

                
            {/* achievement section . just for demo */}
                <div className="achievement">
                    <h5>ACHIEVEMENT</h5>
                    <div className="content__wrapper">
                        <div className="content__body">
                            <div>
                                <div>
                                    <div className="content"/>
                                </div>
                                <p>Dragon</p>
                            </div> 
                        </div>
                        <div className="content__body">
                            <div>
                                <div>
                                    <div className="content"/>
                                </div>
                                <p>Dragon</p>
                            </div> 
                        </div>
                        <div className="content__body">
                            <div>
                                <div>
                                    <div className="content"/>
                                </div>
                                <p>Dragon</p>
                            </div> 
                        </div>
                        <div className="content__body">
                            <div>
                                <div>
                                    <div className="content"/>
                                </div>
                                <p>Dragon</p>
                            </div> 
                        </div>
                        <div className="content__body">
                            <div>
                                <div>
                                    <div className="content"/>
                                </div>
                                <p>Dragon</p>
                            </div> 
                        </div>
                        <div className="content__body">
                            <div>
                                <div>
                                    <div className="content"/>
                                </div>
                                <p>Dragon</p>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
};

export default SideBar;
