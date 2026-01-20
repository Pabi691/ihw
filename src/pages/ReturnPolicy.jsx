import React from 'react';
import MainLayOut from '../layout/MainLayOut';
import { Link } from 'react-router-dom';

const ReturnPolicy = () => {
  return (
    <>
      <MainLayOut>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-gray-800 leading-7">

          <header className="text-center mb-10">
            <h1 className="text-3xl sm:text-4xl font-semibold">
              Refund & Cancellation Policy – Indian Hair World
            </h1>
            <h2 className="text-xl font-semibold mt-3">
              Appointment, Service & Payment Policy
            </h2>
          </header>

          <section className="space-y-6 text-justify">
            <h3 className="text-lg font-semibold">Last updated: 20/10/2025</h3>

            <p>
              Thank you for choosing <strong>Indian Hair World</strong>. We specialize in
              non-surgical hair replacement services that are customized for each individual.
              Please read the following refund, cancellation, and adjustment policy carefully
              before booking an appointment or making any advance payment.
            </p>

            {/* 1. Service-Based Policy */}
            <section>
              <h3 className="text-lg font-semibold mt-6">1. Nature of Services</h3>
              <ul className="list-disc ml-6">
                <li>All services provided by Indian Hair World are consultation-based and customized.</li>
                <li>Hair patches, wigs, and systems are tailored according to individual requirements.</li>
                <li>Due to the personalized nature of services, returns are not applicable.</li>
              </ul>
            </section>

            {/* 2. Appointment Cancellation */}
            <section>
              <h3 className="text-lg font-semibold mt-6">2. Appointment Cancellation Policy</h3>
              <ul className="list-disc ml-6">
                <li>Appointments may be canceled or rescheduled at least <strong>24 hours</strong> in advance.</li>
                <li>Failure to inform within the stipulated time may result in forfeiture of any advance paid.</li>
                <li>Same-day cancellations or no-shows are not eligible for refunds.</li>
              </ul>
            </section>

            {/* 3. Advance Payments */}
            <section>
              <h3 className="text-lg font-semibold mt-6">3. Advance Payments</h3>
              <ul className="list-disc ml-6">
                <li>Advance payments are taken to confirm appointments or reserve service slots.</li>
                <li>Advance payments are adjustable against future services if informed in time.</li>
                <li>Advances are non-refundable once services have begun.</li>
              </ul>
            </section>

            {/* 4. Refund Eligibility */}
            <section>
              <h3 className="text-lg font-semibold mt-6">4. Refund Eligibility</h3>
              <ul className="list-disc ml-6">
                <li>Refunds are applicable only if a service is canceled by Indian Hair World.</li>
                <li>Approved refunds are processed to the original payment method.</li>
                <li>No refunds will be provided after consultation or service initiation.</li>
              </ul>
            </section>

            {/* 5. Refund Timeline */}
            <section>
              <h3 className="text-lg font-semibold mt-6">5. Refund Processing Time</h3>
              <ul className="list-disc ml-6">
                <li>Approved refunds are processed within <strong>5–7 working days</strong>.</li>
                <li>Processing time may vary depending on banks or payment gateways.</li>
              </ul>
            </section>

            {/* 6. Custom Hair Systems */}
            <section>
              <h3 className="text-lg font-semibold mt-6">6. Customized Hair Systems & Wigs</h3>
              <ul className="list-disc ml-6">
                <li>Custom-made hair patches, wigs, and systems are non-refundable.</li>
                <li>Minor service adjustments may be provided at management discretion.</li>
                <li>Color, density, and size preferences are finalized before service delivery.</li>
              </ul>
            </section>

            {/* 7. Payment Failures */}
            <section>
              <h3 className="text-lg font-semibold mt-6">7. Failed or Duplicate Payments</h3>
              <ul className="list-disc ml-6">
                <li>If an amount is deducted due to a technical error, it will be refunded automatically.</li>
                <li>Refunds for failed transactions are usually processed within 3–5 working days.</li>
              </ul>
            </section>

            {/* 8. Policy Abuse */}
            <section>
              <h3 className="text-lg font-semibold mt-6">8. Policy Misuse</h3>
              <p>
                Indian Hair World reserves the right to deny refunds or service adjustments
                in cases of repeated cancellations, misuse, or violation of policy terms.
              </p>
            </section>

            {/* 9. Contact */}
            <section>
              <h3 className="text-lg font-semibold mt-6">9. Contact Support</h3>
              <p>If you have questions regarding this policy, contact us:</p>

              <p className="mt-2">
                <strong>Indian Hair World</strong> <br />
                Kolkata, West Bengal, India <br />
                <strong>Email:</strong> support@indianhairworld.com <br />
                <strong>Phone:</strong> 8910652352
              </p>
            </section>

          </section>
        </div>
      </MainLayOut>
    </>
  );
};

export default ReturnPolicy;
