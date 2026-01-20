import React from 'react';
import MainLayOut from '../layout/MainLayOut';

const Privacy = () => {
  return (
    <>
      <MainLayOut>
        {/* start */}
        <div className="max-w-5xl m-auto px-4 container py-10 leading-7 text-gray-700">

          <header className="text-center my-6">
            <h1 className="text-3xl font-bold">Privacy Policy</h1>
            <h2 className="text-xl font-semibold mt-2">Overview</h2>
          </header>

          <section className="space-y-6 text-justify">

            <h3 className="text-lg font-semibold">Indian Hair World – Privacy Policy</h3>
            <p><strong>Last updated:</strong> 20/10/2025</p>

            {/* 1. Introduction */}
            <section>
              <h3 className="text-lg font-semibold mt-6">1. Introduction</h3>
              <p>
                Indian Hair World (“we”, “us”, or “our”) respects your privacy.
                This Privacy Policy explains how we collect, use, disclose, and protect
                your personal information when you visit our website, book appointments,
                or avail our non-surgical hair replacement services.
              </p>
            </section>

            {/* 2. Data We Collect */}
            <section>
              <h3 className="text-lg font-semibold mt-6">2. Data We Collect</h3>
              <p>We may collect the following categories of data:</p>
              <ul className="list-disc ml-6">
                <li><strong>Identity Data:</strong> name, age, gender.</li>
                <li><strong>Contact Data:</strong> phone number, email address, city.</li>
                <li><strong>Appointment Data:</strong> booking details, service preferences.</li>
                <li><strong>Payment Data:</strong> transaction reference details (no card or OTP data).</li>
                <li><strong>Technical Data:</strong> IP address, browser type, device information.</li>
                <li><strong>Usage Data:</strong> pages visited, enquiry forms, time spent.</li>
                <li><strong>Cookies & Tracking:</strong> cookies and analytics tools.</li>
              </ul>
            </section>

            {/* 3. Use of Data */}
            <section>
              <h3 className="text-lg font-semibold mt-6">3. Use of Your Data</h3>
              <ul className="list-disc ml-6">
                <li>Booking and managing consultations or appointments.</li>
                <li>Providing hair replacement and related services.</li>
                <li>Customer support and follow-ups.</li>
                <li>Improving website performance and user experience.</li>
                <li>Sending service-related communications (with consent).</li>
                <li>Complying with legal and regulatory obligations.</li>
              </ul>
            </section>

            {/* 4. Legal Basis */}
            <section>
              <h3 className="text-lg font-semibold mt-6">4. Legal Basis for Processing (Indian Law)</h3>
              <ul className="list-disc ml-6">
                <li><strong>Consent:</strong> When you submit forms or book appointments.</li>
                <li><strong>Performance of Service:</strong> To deliver requested services.</li>
                <li><strong>Legal Obligations:</strong> Compliance with applicable laws.</li>
                <li><strong>Legitimate Interests:</strong> Security, analytics, service improvement.</li>
              </ul>
            </section>

            {/* 5. Data Retention */}
            <section>
              <h3 className="text-lg font-semibold mt-6">5. Data Retention</h3>
              <p>
                We retain personal data only for as long as necessary to fulfill service,
                legal, and business requirements. In accordance with the Digital Personal
                Data Protection Act, 2023 (DPDP Act), users may request data deletion
                where legally permissible.
              </p>
            </section>

            {/* 6. Data Sharing */}
            <section>
              <h3 className="text-lg font-semibold mt-6">6. Data Sharing / Disclosure</h3>
              <ul className="list-disc ml-6">
                <li>Payment gateway partners.</li>
                <li>Internal staff and consultants for service delivery.</li>
                <li>Legal or regulatory authorities when required by law.</li>
              </ul>
            </section>

            {/* 7. Cookies */}
            <section>
              <h3 className="text-lg font-semibold mt-6">7. Cookies & Tracking Technologies</h3>
              <p>
                We use cookies to enhance user experience and analyze website usage.
                You can control cookie settings through your browser, though some
                features may not function properly if disabled.
              </p>
            </section>

            {/* 8. Rights */}
            <section>
              <h3 className="text-lg font-semibold mt-6">8. Your Rights</h3>
              <ul className="list-disc ml-6">
                <li>Right to access your personal data.</li>
                <li>Right to update or correct inaccurate information.</li>
                <li>Right to request deletion (subject to legal obligations).</li>
                <li>Right to withdraw consent.</li>
                <li>Right to opt out of promotional communications.</li>
              </ul>
            </section>

            {/* 9. Security */}
            <section>
              <h3 className="text-lg font-semibold mt-6">9. Data Security</h3>
              <p>
                We implement appropriate technical and organizational measures to
                protect your data. However, no digital platform can guarantee
                100% security.
              </p>
            </section>

            {/* 10. Breach */}
            <section>
              <h3 className="text-lg font-semibold mt-6">10. Data Breach</h3>
              <p>
                In the event of a data breach, we will take immediate steps to
                mitigate risks and notify affected users as required by law.
              </p>
            </section>

            {/* 11. Cross-Border */}
            <section>
              <h3 className="text-lg font-semibold mt-6">11. Cross-Border Data Transfer</h3>
              <p>
                If any data is processed outside India, we ensure adequate safeguards
                in compliance with applicable laws.
              </p>
            </section>

            {/* 12. Grievance */}
            <section>
              <h3 className="text-lg font-semibold mt-6">12. Grievance / Complaints</h3>
              <p>
                For privacy-related concerns, contact our Grievance Officer:
              </p>
              <p className="mt-2">
                <strong>Email:</strong> support@indianhairworld.com
              </p>
            </section>

            {/* 13. Children's Privacy */}
            <section>
              <h3 className="text-lg font-semibold mt-6">13. Children’s Privacy</h3>
              <p>
                Our services are intended for individuals aged 18 and above.
                We do not knowingly collect personal data from minors.
              </p>
            </section>

            {/* 14. Changes */}
            <section>
              <h3 className="text-lg font-semibold mt-6">14. Changes to This Policy</h3>
              <p>
                This Privacy Policy may be updated periodically. Continued use of
                our website or services indicates acceptance of the updated policy.
              </p>
            </section>

            {/* 15. Contact */}
            <section>
              <h3 className="text-lg font-semibold mt-6">15. Contact Us</h3>
              <p>
                <strong>Indian Hair World</strong><br />
                Kolkata, West Bengal, India<br />
                Email: support@indianhairworld.com<br />
                Phone: 8910652352
              </p>
            </section>

          </section>

        </div>
        {/* end */}
      </MainLayOut>
    </>
  );
};

export default Privacy;
