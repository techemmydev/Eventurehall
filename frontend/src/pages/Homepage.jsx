import React from "react";
import Herosection from "../components/Herosection";

import DiscoverOurStory from "../components/DiscoverOurStory";
import EventServices from "../components/EventServices";
import Clientfeedback from "../components/Clientfeedback";
import FAQAccordion from "../components/FAQAccordion";
import ContactSection from "../components/ContactSection";
import EventGallery from "../components/EventGallery";
import Workflow from "../components/workflow";
import Stats from "../components/Stats";
// import CookieConsent from "../components/CookieConsent";
const Homepage = () => {
  return (
    <main>
      <Herosection />

      <DiscoverOurStory />

      <EventServices />
      <FAQAccordion />

      <Clientfeedback />
      <Workflow />
      <Stats></Stats>
      <EventGallery />
      <ContactSection />
      {/* <CookieConsent /> */}
    </main>
  );
};

export default Homepage;
