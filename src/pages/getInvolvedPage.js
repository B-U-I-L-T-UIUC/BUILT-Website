import React from "react";
import StickyNavBar from "../components/stickyNavBar";
import "../styles/getInvolvedPage.css";
import CommitteeCard from "../components/committeeCard";

function GetInvolvedPage() {
  return (
    <div className="Get-Involved-Page">
      <StickyNavBar />
      <h1 className="get-involved-header">Get Involved</h1>
      <p className="get-involved-text">
        B[U]ILT is a growing RSO, always looking for new members at UIUC who are
        part of or believe in our mission!
      </p>
      <p className="get-involved-text">
        As part of our mission, we host social and corporate events, build
        technical projects, and provide study hour spaces in order to provide a
        strong support system for minorities in computing-related fields.
      </p>

      <p className="join-email-list">
        <a
          href="https://forms.gle/WQuwvfkdqJGcMkbW9"
          target="_blank"
          rel="noopener noreferrer"
        >
          JOIN OUR EMAIL LIST!
        </a>
      </p>

      <p className="join-committees">
        Interested in helping B[U]ILT organize such events? Join our committees!
      </p>

      <h2 className="committee-header">Committees</h2>

      <div className="light-orange-card">
        <CommitteeCard
          name="Tech"
          lead="Bolden Jones"
          netid="boldenj2"
          description="Build technical projects supporting B[U]ILT’s mission!"
          meeting="Meets 5:00-6:00 PM every Monday at Siebel CS 0222"
          channel="tech-committee"
        ></CommitteeCard>
        <CommitteeCard
          name="External"
          lead="Alejandro Chavez"
          netid="achav8"
          description="Build and maintain partnership opportunities between B[U]ILT and sponsors!"
          meeting="Meets every other Wednesday 5:45 at Siebel CS 0212"
          channel="external-committee"
        ></CommitteeCard>
        <CommitteeCard
          name="Social"
          lead="Adela Bautista"
          netid="adelab2"
          description="Plan and organize social events to build B[U]ILT’s community!"
          meeting="Meeting times vary"
          channel="social-committee"
        ></CommitteeCard>
        <CommitteeCard
          name="Outreach"
          lead="Alexis Serrano"
          netid="aserr3"
          description="Help B[U]ILT obtain and maintain partnership opportunities with sponsors!"
          meeting="Meeting times TBA"
          channel="outreach-committee coming soon"
        ></CommitteeCard>
      </div>
    </div>
  );
}

export default GetInvolvedPage;
