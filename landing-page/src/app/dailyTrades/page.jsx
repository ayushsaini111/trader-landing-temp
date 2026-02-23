import MainBlogpage from "../../Sections/Logs/Mainlogpage";
import React from "react";

import JsonLd from "../../Components/JsonLd";
import { canonicalize } from "../../utils/canonical";
import { getWebPageSchema, getBreadcrumbSchema } from "../../utils/schema";

/* ================= SEO ================= */

export const metadata = {
  title: "Daily Trades – Divyansh Mishra | Trading Journal",
  description:
    "Explore documented daily trades and performance metrics by Divyansh Mishra, an investor and trader from Kanpur, India, sharing disciplined market execution insights.",
  alternates: {
    canonical: canonicalize("/dailyTrades"),
  },
};

function page() {
  const url = canonicalize("/dailyTrades");

  return (
    <>
      {/* Structured Data */}
      <JsonLd
        data={getWebPageSchema({
          title: "Daily Trades – Divyansh Mishra | Trading Journal",
          description:
            "Documented daily trades and performance insights by Divyansh Mishra.",
          url: url,
        })}
      />

      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Home", url: canonicalize("") },
          { name: "Daily Trades", url: url },
        ])}
      />

      <div className="bg-secondary-main">
        <MainBlogpage />
      </div>
    </>
  );
}

export default page;
