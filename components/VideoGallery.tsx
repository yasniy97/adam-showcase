export default function VideoGallery() {
  return (
    <section id="videos" className="section">
      <h2 className="h2 text-center">See ADAM in Action</h2>
      <p className="mt-3 text-center muted max-w-3xl mx-auto">
        Short demos of ADAM embedded in a typical project environment.
      </p>

      {/* Replace the src URLs with your real YouTube/Vimeo links */}
      <div className="grid md:grid-cols-2 gap-6 mt-10">
        <div className="card p-0 overflow-hidden">
          <iframe
            className="w-full aspect-video"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Daily Standup Assistant"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <div className="p-4">
            <h3 className="h3">Daily Standup Assistant</h3>
            <p className="mt-2 text-white/80 text-sm">
              ADAM summarizes progress, risks, and next steps.
            </p>
          </div>
        </div>

        <div className="card p-0 overflow-hidden">
          <iframe
            className="w-full aspect-video"
            src="https://www.youtube.com/embed/oHg5SJYRHA0"
            title="Sprint Planning Helper"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <div className="p-4">
            <h3 className="h3">Sprint Planning Helper</h3>
            <p className="mt-2 text-white/80 text-sm">
              From backlog refinement to capacity-based forecasting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

