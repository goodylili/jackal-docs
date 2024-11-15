import React from "react";
import Link from "@docusaurus/Link";

import "./style.css";

const GuideCard = (props) => {
    return (
        <a className="guide-card-href" href={props.href}>
            <div className="guide-card-container">
                <div className="guide-card-icon">{props.icon}</div>
                <div className="guide-card-detail">
                    <div className="guide-card-title">{props.title}</div>
                    <div className="guide-card-description">{props.description}</div>
                </div>
            </div>
        </a>
    );
};

export default GuideCard;