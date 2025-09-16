export default function ScrumEnhancements() {
  return (
    <section id="scrum" className="section">
      <h2 className="h2 text-center">Enhancing Scrum with ADAM</h2>
      <p className="mt-3 text-center muted max-w-3xl mx-auto">
        ADAM supports each ceremony & artifact with templates, prompts, and on-the-spot guidance.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-10">
        <div className="card">
          <h3 className="h3">Ceremonies</h3>
          <ul className="mt-3 list-disc list-inside text-white/90">
            <li><strong>Sprint Planning:</strong> capacity hints, prioritization cues</li>
            <li><strong>Daily Scrum:</strong> concise stand-up summaries</li>
            <li><strong>Review:</strong> demo outlines, stakeholder feedback scripts</li>
            <li><strong>Retro:</strong> actionable insights & experiments</li>
          </ul>
        </div>

        <div className="card">
          <h3 className="h3">Artifacts</h3>
          <ul className="mt-3 list-disc list-inside text-white/90">
            <li>Product & Sprint Backlogs with INVEST guidance</li>
            <li>Definition of Ready / Done templates</li>
            <li>Burndown prompts & velocity tracking tips</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

