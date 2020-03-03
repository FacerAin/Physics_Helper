import React from "react";
import { Link } from "react-router-dom";
const nav = () => {
  return (
    <div>
      <ul>
        <li>홈</li>
        <li>
          <Link to="/exp01">실험 1</Link>
        </li>
      </ul>
    </div>
  );
};

export default nav;
