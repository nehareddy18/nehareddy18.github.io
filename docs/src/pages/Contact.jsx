import React from "react";
import "./Contact.css";
import profileImage from "../assets/image.png"; // Replace with actual image path
import PageTransition from "../components/PageTransition";

export default function Contact() {
  return (
    <PageTransition>
    <div className="contact-page">
      <div className="contact-container">
        {/* Top Message */}
        <div className="sticky-title">Contact</div>
        <div className="contact-message">
          <p>Hey, how can I get in touch with you? Email?</p>
        </div>

        {/* Bottom Message */}
        <div className="contact-reply">
          <img src={profileImage} alt="Profile" className="profile-pic" />
          <div className="reply-box">
            <p>
              <strong>Hey!</strong> You can email me at <br />
              n.damannagari18@gmail.com or
              give me a call at <br />
              +1 857-379-4183
            </p>
          </div>
        </div>
      </div>
    </div>
    </PageTransition>
  );
}
