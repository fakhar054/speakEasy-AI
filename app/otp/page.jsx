
import React from "react";
import { Suspense } from "react";
import OtpForm from "@/components/otpform/OtpForm";

export default function page() {
  return (
    <main>
      <Suspense fallback={<div>Loading verification form...</div>}>
        <OtpForm />
      </Suspense>
    </main>
  );
}
