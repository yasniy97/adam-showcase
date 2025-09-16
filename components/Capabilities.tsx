export default function Capabilities() {
  return (
    <section id="capabilities" className="section">
      <h2 className="h2 text-center">What ADAM Can Do</h2>
      <p className="mt-3 text-center muted max-w-3xl mx-auto">
        Ask ADAM anything—from Agile ceremonies to traditional PM documents. It gives practical, structured answers you can use immediately.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        <div className="card">
          <h3 className="h3">Agile Queries</h3>
          <ul className="mt-3 list-disc list-inside text-white/90">
            <li>Explain Scrum, Kanban, XP</li>
            <li>Refine user stories & acceptance criteria</li>
            <li>Create DoR / DoD checklists</li>
          </ul>
        </div>

        <div className="card">
          <h3 className="h3">Traditional PM</h3>
          <ul className="mt-3 list-disc list-inside text-white/90">
            <li>Project charter, business case</li>
            <li>WBS, schedule outlines, RAID logs</li>
            <li>Stakeholder & comms plans</li>
          </ul>
        </div>

        <div className="card">
          <h3 className="h3">Hybrid Delivery</h3>
          <ul className="mt-3 list-disc list-inside text-white/90">
            <li>Blend sprints with stage gates</li>
            <li>Map OKRs to backlog & roadmap</li>
            <li>Metrics: velocity + CPI/SPI</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

