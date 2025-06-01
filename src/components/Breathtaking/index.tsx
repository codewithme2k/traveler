"use client";

import { ContentSection } from "./ContentSection";
import { VideoSection } from "./VideoSection";
import { VideoDialog } from "./VideoDialog";
import { useState } from "react";

export function Breathtaking() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [videoId, setVideoId] = useState("dQw4w9WgXcQ"); // Example YouTube video ID

  const handleWatchVideo = () => {
    setIsVideoOpen(true);
  };

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <ContentSection />
          <VideoSection onWatchVideo={handleWatchVideo} />
        </div>
      </div>

      <VideoDialog
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoId={videoId}
      />
    </section>
  );
}
