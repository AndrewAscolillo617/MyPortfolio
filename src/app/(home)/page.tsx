"use client";

import HomeAbout from "components/HomeAbout";
import ContactForm from "components/ContactForm";
import HomeButtons from "components/HomeButtons";

export default function Home() {
  return (
    <div>
      <HomeAbout></HomeAbout>

      <HomeButtons></HomeButtons>

      <ContactForm></ContactForm>
    </div>
  );
}
