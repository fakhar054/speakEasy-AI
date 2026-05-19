// "use client";
// import React from "react";
// import { usePathname } from "next/navigation";
// import Header from "./header/Header";
// import Footer from "./footer/Footer";

// export default function LayoutWrapper({ children }) {
//   const pathname = usePathname();
//   const hideHeader = pathname.startsWith("/dashboard");
//   const isDashboard = pathname.startsWith("/dashboard");

//   return (
//     <div>
//       {!hideHeader && <Header />}
//       <div className="h-24 md:h-24 block w-full" />

//       {children}

//       {!isDashboard && <Footer />}
//     </div>
//   );
// }

"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Header from "./header/Header";
import Footer from "./footer/Footer";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();

  const isDashboard = pathname.startsWith("/dashboard");

  return (
    <div>
      {!isDashboard && <Header />}

      {!isDashboard && <div className="h-24 md:h-24 block w-full" />}

      {children}

      {!isDashboard && <Footer />}
    </div>
  );
}
