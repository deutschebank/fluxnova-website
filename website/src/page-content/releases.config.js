import ReleasesIcon from "/img/icons/releases.svg";
import React from "react";

export const releasesConfig = {
  sectionOne: {
    className: "bg-primary color-white",
    image: {
      content: <ReleasesIcon fill="#fff" />,
      side: "right",
    },
    elements: [
      <h1>Fluxnova Releases</h1>,
      <h2 className="lightWeight">
        Release notes include details of new product features, important
        changes, and enhancements.
      </h2>,
    ],
  },
  sectionTwo: {
    className: "bg-white color-charcoal display-block",
    elements: [
      <div className="grid">
        <div className="grid-header">
          <div>Version</div>
          <div>Release Date</div>
          <div>Release Notes</div>
        </div>
        <div className="grid-row">
          <div>2.0</div>
          <div>April 6th, 2026</div>
          <a href="/docs/releases/v2.0.0">Notes</a>
        </div>
      </div>,
    ],
  },
  sectionThree: {
    className: "display-block",
    elements: [
      <h1>About Fluxnova Releases</h1>,
      <p>
        Fluxnova Releases provide a complete overview of improvements, updates,
        and changes across the Fluxnova platform. Each release documents new
        features, enhancements, bug fixes, performance optimizations, and
        important notices that help understand how the platform is evolving.
        Release notes are published and are designed to give clear visibility
        into what’s new, what’s changed, and what actions if any are required.
        Whether you are adopting new capabilities, planning upgrades, or
        tracking platform stability, these releases serve as the primary source
        of truth for Fluxnova updates. For long term reference, all releases are
        accessible by version and date. Links to detailed documentation,
        migration guidance, and known issues are included where relevant to
        ensure a smooth and predictable experience for users and contributors.
      </p>,
    ],
  },
};
