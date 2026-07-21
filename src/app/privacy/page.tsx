export default function PrivacyPolicy() {
  return (
    <div className="px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-2xl">
        <h1 className="mb-2 text-2xl font-medium text-text-primary">Privacy policy</h1>
        <p className="mb-8 text-sm text-text-tertiary">Last updated: 26 May 2026</p>

        <div className="space-y-6 text-sm leading-relaxed text-text-secondary">
          <section>
            <h2 className="mb-2 text-base font-medium text-text-primary">1. Introduction</h2>
            <p>
              Protocol (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) operates the Protocol web application. This policy explains how we collect, use, and protect your personal information when you use our service.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-base font-medium text-text-primary">2. Information we collect</h2>
            <p>We collect the following information when you use Protocol:</p>
            <ul className="mt-2 list-inside list-disc space-y-1">
              <li>Account information: name, email address, profile photo</li>
              <li>Physical information: height, weight, date of birth, gender (provided voluntarily for training purposes)</li>
              <li>Training data: workout logs, personal records, benchmark results, bodyweight logs</li>
              <li>Contact information: phone number, location, timezone</li>
              <li>Usage data: how you interact with the application</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 text-base font-medium text-text-primary">3. How we use your information</h2>
            <p>We use your information to:</p>
            <ul className="mt-2 list-inside list-disc space-y-1">
              <li>Provide and maintain the Protocol service</li>
              <li>Calculate personalised training loads from your stored maxes</li>
              <li>Enable your coach to write and deliver training programs</li>
              <li>Send service-related communications (session reminders, notifications)</li>
              <li>Improve the application</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 text-base font-medium text-text-primary">4. Data sharing</h2>
            <p>
              Your training data is shared with your assigned coach. We do not sell your personal information to third parties. We may share data with service providers (Supabase for database hosting, Vercel for web hosting) who process data on our behalf under strict confidentiality agreements.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-base font-medium text-text-primary">5. Data storage and security</h2>
            <p>
              Your data is stored securely using Supabase (hosted on AWS). We use row-level security policies to ensure athletes can only access their own data. All data is transmitted over HTTPS. Authentication uses industry-standard methods including magic links, password hashing, and optional two-factor authentication.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-base font-medium text-text-primary">6. Your rights</h2>
            <p>You have the right to:</p>
            <ul className="mt-2 list-inside list-disc space-y-1">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Export your data (CSV export available in the application)</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 text-base font-medium text-text-primary">7. Cookies</h2>
            <p>
              We use essential cookies for authentication and session management. We do not use tracking or advertising cookies.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-base font-medium text-text-primary">8. Changes to this policy</h2>
            <p>
              We may update this policy from time to time. We will notify you of significant changes via email or in-app notification.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-base font-medium text-text-primary">9. Contact</h2>
            <p>
              If you have questions about this privacy policy, contact us at privacy@protocolapp.uk.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
