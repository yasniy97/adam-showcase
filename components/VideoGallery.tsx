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
            src="https://www.youtube.com/embed/XdbyRImcXJE?rel=0"
            title="Asking ADAM on team morale/improvement strategy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <div className="p-4">
            <h3 className="h3">ADAM in Action - Case 1</h3>
            <p className="mt-2 text-white/80 text-sm">
              ADAM can provide reasoning and thoughts.
            </p>
          </div>
        </div>

        <div className="card p-0 overflow-hidden">
          <iframe
            className="w-full aspect-video"
            src="https://www.youtube.com/embed/BbFMYwm1JiU?rel=0"
            title="ADAM - Upload Artifacts and Analysis"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <div className="p-4">
            <h3 className="h3">ADAM in Action - Case 2</h3>
            <p className="mt-2 text-white/80 text-sm">
              ADAM can analyze artifacts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

