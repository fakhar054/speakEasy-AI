import React from "react";

export default function page() {
  return (
    <div>
      <div className="bg-white min-h-screen mb-3">
        {/* Header Section */}
        <header className="py-20 bg-gray-50 border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <span className="text-green-color  uppercase tracking-widest text-lg font-bold">
              SpeakEasy AI Security
            </span>
            <h1 className="text-5xl font-extrabold text-gray-900 mt-4 mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg text-black max-w-2xl mx-auto">
              At Understory, we believe every child’s voice is precious. We
              protect SpeakEasy AI data with clinical-grade security and total
              transparency.
            </p>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-3xl mx-auto py-16 px-6">
          <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-12 rounded-r-2xl">
            <h2 className="text-green-800 font-bold mb-2">
              For Our Young Users:
            </h2>
            <p className="text-green-700 italic">
              "Think of SpeakEasy like a secret diary with a magic lock. Only
              your parents and your therapist have the key to help you grow. We
              never show your secrets to anyone else."
            </p>
          </div>

          <section className="space-y-12 flex flex-col gap-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. Data Ownership
              </h2>
              <p className="text-gray-600 leading-relaxed">
                You own your data. Understory does not sell, rent, or trade
                personal information to third parties or advertisers. SpeakEasy
                AI exists purely to support therapeutic breakthroughs, not to
                profit from your child's emotional journey.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. What SpeakEasy AI Processes
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                To create the <strong>AI Mental Health Report Card</strong>, our
                assistant analyzes:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Voice and text sentiment (to understand mood).</li>
                <li>Emotional vocabulary growth.</li>
                <li>Patterns in session frequency and engagement.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. Security Standards
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We utilize <strong>AES-256 encryption</strong> for all data at
                rest. Communication between your device and our servers is
                protected by TLS/SSL protocols. We regularly audit our systems
                to stay compliant with global health data standards (HIPAA and
                GDPR).
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. Parental Controls
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Through the{" "}
                <strong className="text-green-color">Appointment Hub</strong>,
                parents can request a full export of their child's data or ask
                for the immediate and permanent deletion of all SpeakEasy AI
                history.
              </p>
            </div>
          </section>

          {/* Contact Footer */}
          <footer className="mt-20 pt-10 border-t border-gray-100 text-center">
            <p className="text-gray-500 mb-2">
              Have questions about our AI safety?
            </p>
            <a
              href="mailto:privacy@understory.ai"
              className="text-green-color font-bold hover:underline"
            >
              privacy@understory.ai
            </a>
          </footer>
        </main>
      </div>
    </div>
  );
}
