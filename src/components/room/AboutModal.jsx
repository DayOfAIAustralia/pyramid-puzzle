import { useState } from "react";
import { createPortal } from "react-dom";
import { IoInformationCircleSharp, IoClose } from "react-icons/io5";

export default function AboutModal() {
  const [isOpen, setIsOpen] = useState(false);

  const modal = (
    <div className="popups" onClick={() => setIsOpen(false)}>
      <div className="popup">
        <div className="popup-data" onClick={(e) => e.stopPropagation()}>
          <button className="about-close-btn" onClick={() => setIsOpen(false)}>
            <IoClose size="1.5em" />
          </button>
          <div
            className="popup-text"
            style={{ fontSize: 24, fontWeight: "bold" }}
          >
            About This Game
          </div>
          <div
            className="popup-text"
            style={{
              textAlign: "center",
              borderBottom: "solid gray 1px",
              paddingBottom: "24px",
            }}
          >
            The Pyramid Puzzle is an educational game inspired by John Searle's
            Chinese Room thought experiment. You play as an intern in the
            Hieroglyph Translation Department, following rules to translate
            Egyptian hieroglyphics (without understanding their meaning).
            Through gameplay, you'll explore the difference between syntax
            (following rules) and semantics (true understanding), and discover
            how this relates to how AI and Large Language Models work.
          </div>
          <div className="about-logos">
            <div className="about-logos-row">
              <img
                className="about-logo-square"
                src="/logos/doai-logo.png"
                alt="Logo 1"
              />
              <img
                className="about-logo-square"
                src="/logos/unsw.png"
                alt="Logo 2"
              />
            </div>
            <div className="about-logos-row">
              <img
                className="about-logo-rect"
                src="/logos/googleorg.png"
                alt="Logo 3"
              />
            </div>
          </div>
          {/* <div
            className="popup-text"
            style={{ textAlign: "center", marginTop: "8px" }}
          >
            With special thanks to Patrick Crown-Milliss
          </div> */}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <button
        className="overlay-btn"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <IoInformationCircleSharp size="3em" />
      </button>
      {isOpen && createPortal(modal, document.body)}
    </>
  );
}
