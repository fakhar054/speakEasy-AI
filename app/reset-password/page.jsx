

import React from "react";
import { Suspense } from "react";
import ResetPassword from "@/components/resetpassword/ResetPassword";

export default function page() {
  return (
    <main>
      <Suspense fallback={<div>Loading password reset form...</div>}>
        <ResetPassword />
      </Suspense>
    </main>
  );
}
