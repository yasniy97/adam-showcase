export default function Investors() {
  return (
    <section>
      <h2>Our Investors</h2>
      <p>Investor details coming soon...</p>
    </section>
  );
}

export default function CTA() {
  return (
    <section id="start" className="section text-center">
      <div className="card inline-block">
        <h2 className="h2">Invest in ADAM</h2>
        <p className="mt-3 muted max-w-2xl">
          Contact us for an investment oppurtunities.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
          <a className="btn btn-primary" href="mailto:admin@aisuperhuman.com?subject=Invest%with%20ADAM">
            Tell me more
          </a>
         
        </div>
      </div>
    </section>
  );
}

