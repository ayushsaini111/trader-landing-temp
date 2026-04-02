"use client";

import { useEffect, useState } from "react";
import JourneyLogCardUI from "../../Components/ui/JourneyLogCardUI";
import JourneyLogSkeleton from "../../Components/ui/JourneyLogSkeleton";
import Button from "../../Components/ui/Button";
import JourneyLogModal from "../../Components/ui/popup";

export default function LogsListingPage({
  searchQuery = "",
  onClearSearch,
}) {
  const [journeyLogs, setJourneyLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedLog, setSelectedLog] = useState(null)

  console.log(journeyLogs);

  /* ======================
     FETCH LOGS
     ====================== */
  const fetchLogs = async (query = "") => {
    setLoading(true);
    try {
      const res = await fetch(
        query
          ? `http://localhost:3001/api/journeyLogs?q=${encodeURIComponent(query)}`
          : "http://localhost:3001/api/journeyLogs",
        { cache: "no-store" }
      );

      const data = await res.json();
      setJourneyLogs(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Fetch journey logs failed:", err);
      setJourneyLogs([]);
    } finally {
      setLoading(false);
    }
  };

  /* ======================
     INITIAL + SEARCH
     ====================== */
  useEffect(() => {
    fetchLogs(searchQuery);
  }, [searchQuery]);

  /* ======================
     BACK HANDLER
     ====================== */
  const handleBack = () => {
    if (loading) return;
    onClearSearch?.();
    fetchLogs("");
  };

  /* ======================
     RENDER
     ====================== */
  return (
    <div className="space-y-s32">
      {/* 🔙 Back */}
      {searchQuery && (
        <button
          onClick={handleBack}
          disabled={loading}
          className="
            text-primary-main
            hover:underline
            w-fit
            disabled:opacity-50
          "
        >
          ← Back
        </button>
      )}

      {/* Content */}
      <div className="max-w-5xl mx-auto space-y-s32">
        {loading &&
          Array.from({ length: 3 }).map((_, i) => (
            <JourneyLogSkeleton key={i} />
          ))}

        {!loading &&
          journeyLogs.map((log) => (
            <JourneyLogCardUI
              key={log._id}
              log={log}
              onView={setSelectedLog}
            />
          ))}

      </div>

      {/* No results */}
      {!loading && searchQuery && journeyLogs.length === 0 && (
        <div className="flex flex-col items-center text-center my-s48">
          <svg
            className="w-24 h-24 text-gray-300 mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>

          <h3 className="text-xl font-semibold mb-s8">
            No results found for "{searchQuery}"
          </h3>

          <p className="text-secondary mb-s24">
            Try different keywords or explore all logs
          </p>

          <Button onClick={handleBack}>Explore More</Button>
        </div>
      )}
      <JourneyLogModal
        log={selectedLog}
        onClose={() => setSelectedLog(null)}
      />
    </div>
  );
}

