import React from "react";
import Image from "next/image";

export default function page() {
  return (
    <div className="container mx-auto my-3 min-h-screen">
      <div
        className="bg-green-color text-white p-6 
        rounded-2xl flex flex-col gap-4 h-[100vh] md:h-[50vh] items-center justify-center mb-5
       "
      >
        <h1 className="text-4xl font-extrabold text-center">
          Cultivating a Brighter Canopy for Every Child.
        </h1>
        <h3 className="text-2xl font-bold text-center">
          "Inspired by the resilience of nature, we believe that with the right
          environment, every child has the potential to reach the sunlight".
        </h3>
      </div>

      <div className="mt-1 mb-3">
        <h1 className="text-3xl font-extrabold text-center">
          The View from the Canopy
        </h1>
        <p className="text-center text-lg">
          Where every child reaches the light.
        </p>
      </div>
      <div className="div_img_text flex items-center flex-col justify-center md:flex-row">
        <div className="img_div flex-1">
          <Image
            src="/images/hero-pic.png"
            alt="hero-image"
            width={400}
            height={250}
          />
        </div>
        <div className="content_div flex-1 items-center p-4">
          <h1 className="text-3xl font-extrabold text-center ">
            Our North Star
          </h1>
          <h3 className="text-green-color text-xl font-medium text-center mb-3">
            Guiding the next generation toward their peak.
          </h3>
          <p className="text-lg">
            Just as the understory of a forest requires filtered light and rich
            soil to thrive, children require focused care, resources, and a
            supportive community. We don’t just provide a service; we provide
            the "sunlight" that helps those in the shade find their way upward.
          </p>
        </div>
      </div>

      <div>
        <h1 className="text-4xl font-extrabold my-3 text-center">Our Vision</h1>

        <div className="cards-parent-div flex flex-col gap-4 md:flex-row items-center">
          <div className="card px-6 py-4 bg-green-color text-white shadow shadow-gray-300 rounded-2xl">
            <h1 className="text-3xl mb-3">Making Progress Personal</h1>
            <p className="text-lg">
              At SpeakEasy AI, we believe every child deserves a voice that is
              heard and understood. Our AI-driven therapy adapts in real-time to
              your child's unique speech patterns, turning the "understory" of
              communication barriers into a clear, confident path toward
              expression.
            </p>
          </div>

          <div className="card px-6 py-4 bg-green-color text-white  rounded-2xl">
            <h1 className="text-3xl mb-3">Intelligent Empathy</h1>
            <p className="text-lg">
              We’ve combined world-class clinical expertise with advanced AI to
              create a supportive space for growth. SpeakEasy doesn't just
              "process" speech; it understands the nuance of child development,
              providing the gentle, consistent guidance needed to help them
              blossom at their own pace.
            </p>
          </div>
          <div className="card px-6 py-4 bg-green-color text-white  rounded-2xl">
            <h1 className="text-3xl mb-3">A World Without Barriers</h1>
            <p className="text-lg">
              Our vision is a future where no child is left in the shade of a
              communication gap. We are building a world where
              professional-grade therapy is accessible anytime,
              anywhere—ensuring that every "small start" leads to a lifetime of
              bold, easy conversation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
