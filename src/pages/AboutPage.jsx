import React from "react";
import Card from "../components/shared/Card";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About This Project</h1>
        <p>This is a React app to leave feedback for a product or service </p>
        <p>Versiyon 1.0.0</p>
        <p>
          Made with <FaHeart size="12px" /> by &nbsp;
          <a href="https://ezgikaraca.com" target="_blank">
            ezgikaraca.com
          </a>
        </p>
        <p>
          <Link to="/">Back To Home</Link>
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;
