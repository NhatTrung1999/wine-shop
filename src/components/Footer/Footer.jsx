import React from "react";
// import { Link } from "react-router-dom";
import "./Footer.css";
import { FaArrowUp } from "react-icons/fa";

export default function Footer() {
    const handelToTop = () => {
        window.scrollTo(0, 0);
    };
    return (
        <footer className="footer">
            <span onClick={handelToTop} className="go_top">
                <FaArrowUp />
            </span>
            <div className="footer_first">
                <div className="footer_btn_title_box">
                    <p
                        style={{
                            textTransform: "uppercase",
                            fontWeight: "bold",
                            fontSize: "20px",
                        }}
                    >
                        Wine Shops
                    </p>
                    <p
                        style={{
                            textTransform: "capitalize",
                            fontWeight: "bold",
                            fontSize: "15px",
                        }}
                    >
                        Shop Offical: Doan Bich Ngan
                    </p>
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <div style={{ marginRight: "25px" }}>
                    <a
                        target={"_blank"}
                        href="https://www.facebook.com/bxofyun"
                        className="btn_link_to_social"
                        rel="noreferrer"
                    >
                        <img
                            src={require("../../assets/img/facebook.png")}
                            width={48}
                            height={48}
                        />
                    </a>
                </div>
                <div>
                    <a
                        target={"_blank"}
                        href="https://zalo.me/0389917907"
                        className="btn_link_to_social"
                        rel="noreferrer"
                    >
                        <img
                            src={require("../../assets/img/zalo.png")}
                            width={48}
                            height={48}
                        />
                    </a>
                </div>
            </div>
            <div className="footer_last">
                <span>Liên hệ</span>
                <div className="footer_link_box">
                    <a
                        target={"_blank"}
                        href="tel: 0389917907"
                        rel="noreferrer"
                    >
                        0389917907
                    </a>
                </div>
            </div>
        </footer>
    );
}
