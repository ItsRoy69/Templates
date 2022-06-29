import React, { useState } from "react";
import "./RightSide.css";

import TrendCard from "../trendCard/TrendCard";
import ShareModal from "../shareModal/ShareModal";
import NavIcons from "../NavIcons/NavIcons";
const RightSide = () => {
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <div className="RightSide">
      {/* Side Navbar */}

      <NavIcons />
      {/* TrendCard */}
      <TrendCard />

      {/* Share buttong */}
      <button className="button r-button" onClick={() => setModalOpened(true)}>
        Share
      </button>
      <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
    </div>
  );
};

export default RightSide;
