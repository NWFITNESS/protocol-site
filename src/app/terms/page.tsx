export default function TermsOfService() {
  return (
    <div className="px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-2 text-2xl font-medium text-text-primary">Terms of service</h1>
        <p className="mb-8 text-sm text-text-tertiary">Last updated: 26 May 2026</p>

        <div className="space-y-6 text-sm leading-relaxed text-text-secondary">
          <section>
            <h2 className="mb-2 text-base font-medium text-text-primary">1. Agreement to terms</h2>
            <p>
              By accessing or using Protocol (&ldquo;the Service&rdquo;), you agree to be bound by these Terms of Service. If you do not agree, do not use the Service.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-base font-medium text-text-primary">2. Description of service</h2>
            <p>
              Protocol is a web application that enables coaches to create structured training programs and deliver them to athletes. The Service includes program building, session logging, progress tracking, and athlete management tools.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-base font-medium text-text-primary">3. User accounts</h2>
            <ul className="mt-2 list-inside list-disc space-y-1">
              <li>You must provide accurate and complete information when creating an account</li>
              <li>You are responsible for maintaining the security of your account credentials</li>
              <li>You must be at least 16 years old to use the Service</li>
              <li>Coach accounts are responsible for their athletes&rsquo; data and must have appropriate consent to store personal and health information</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 text-base font-medium text-text-primary">4. User roles</h2>
            <p>The Service has two user roles:</p>
            <ul className="mt-2 list-inside list-disc space-y-1">
              <li><strong className="text-text-primary">Coach:</strong> Creates programs, manages athletes, defines benchmarks, writes sessions</li>
              <li><strong className="text-text-primary">Athlete:</strong> Receives programs, logs workouts, tracks progress, manages personal records</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 text-base font-medium text-text-primary">5. Acceptable use</h2>
            <p>You agree not to:</p>
            <ul className="mt-2 list-inside list-disc space-y-1">
              <li>Use the Service for any unlawful purpose</li>
              <li>Share your account credentials with others</li>
              <li>Attempt to access other users&rsquo; data without authorisation</li>
              <li>Interfere with the proper functioning of the Service</li>
              <li>Use automated systems to access the Service without permission</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 text-base font-medium text-text-primary">6. Data and content</h2>
            <p>
              You retain ownership of all content you create on Protocol (programs, sessions, logs, notes). We do not claim ownership of your data. By using the Service, you grant us a licence to store, process, and display your content as necessary to provide the Service.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-base font-medium text-text-primary">7. Coach responsibilities</h2>
            <p>
              Coaches are responsible for ensuring they have appropriate consent from their athletes before storing personal information, health data, and training records. Coaches must comply with applicable data protection laws in their jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-base font-medium text-text-primary">8. Disclaimer</h2>
            <p>
              Protocol is a programming and tracking tool, not a medical or health service. Training programs created on Protocol are the responsibility of the coach. We do not provide medical, health, or fitness advice. Consult a qualified professional before beginning any training program.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-base font-medium text-text-primary">9. Limitation of liability</h2>
            <p>
              The Service is provided &ldquo;as is&rdquo; without warranties of any kind. We are not liable for any injuries, losses, or damages arising from the use of training programs created or delivered through Protocol.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-base font-medium text-text-primary">10. Termination</h2>
            <p>
              We may suspend or terminate your account if you violate these terms. You may delete your account at any time by contacting us. Upon termination, your data will be deleted within 30 days unless required by law to retain it.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-base font-medium text-text-primary">11. Changes to terms</h2>
            <p>
              We may update these terms from time to time. Continued use of the Service after changes constitutes acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-base font-medium text-text-primary">12. Contact</h2>
            <p>
              If you have questions about these terms, contact us at support@protocolapp.uk.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
