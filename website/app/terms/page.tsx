import type { Metadata } from 'next'
import LegalLayout from '@/modules/legal/LegalLayout'

export const metadata: Metadata = {
  title: 'Terms of Service — SistemaHub',
  description: 'Terms of Service for SistemaHub and its digital products including TaoLink HRIS and Landlord HQ.',
}

export default function TermsPage() {
  return (
    <LegalLayout
      badge="Legal"
      title="Terms of Service"
      lastUpdated="April 13, 2026"
    >

      <p>
        Please read these Terms of Service (&ldquo;Terms&rdquo;) carefully before using any
        services, websites, or software products operated by SistemaHub
        (&ldquo;SistemaHub&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;).
        By accessing or using our services, you agree to be bound by these Terms.
        If you do not agree, do not use our services.
      </p>

      <h2>1. Services</h2>
      <p>
        SistemaHub provides web-based software applications and related services, including
        but not limited to:
      </p>
      <ul>
        <li><strong>TaoLink HRIS</strong> — a human resource information system for employee management, attendance, leave, payroll, and HR reporting.</li>
        <li><strong>Landlord HQ</strong> — a property management application for landlords and property managers to track units, tenants, rent, and maintenance.</li>
        <li>Custom web application development and business workflow automation services.</li>
      </ul>
      <p>
        We reserve the right to modify, suspend, or discontinue any part of our services
        at any time with reasonable notice.
      </p>

      <h2>2. Accounts and Access</h2>
      <p>
        To access certain features of our products, you may be required to register for an
        account. You agree to:
      </p>
      <ul>
        <li>Provide accurate, current, and complete information during registration.</li>
        <li>Maintain the security and confidentiality of your login credentials.</li>
        <li>Notify us immediately at <a href="mailto:sistemahub1@gmail.com">sistemahub1@gmail.com</a> of any unauthorised use of your account.</li>
        <li>Accept responsibility for all activity that occurs under your account.</li>
      </ul>
      <p>
        You must be at least 18 years of age, or the age of legal majority in your
        jurisdiction, to create an account or use our services.
      </p>

      <h2>3. Acceptable Use</h2>
      <p>You agree not to use our services to:</p>
      <ul>
        <li>Violate any applicable laws, regulations, or third-party rights.</li>
        <li>Upload or transmit malicious code, viruses, or harmful software.</li>
        <li>Attempt to gain unauthorised access to our systems, servers, or databases.</li>
        <li>Scrape, copy, or extract data from our services without express written permission.</li>
        <li>Resell, sublicense, or redistribute our software or services without prior written consent.</li>
        <li>Use our services to store or process unlawful, offensive, or fraudulent data.</li>
        <li>Interfere with or disrupt the integrity or performance of our services.</li>
      </ul>
      <p>
        Violation of this section may result in immediate suspension or termination of your
        access without notice.
      </p>

      <h2>4. Subscriptions and Payment</h2>
      <p>
        Certain SistemaHub products are offered on a subscription basis. By subscribing you agree to:
      </p>
      <ul>
        <li>Pay all applicable fees as described at the time of purchase.</li>
        <li>Provide valid payment information and keep it up to date.</li>
        <li>Authorise us to charge your payment method on a recurring basis for the selected plan.</li>
      </ul>
      <p>
        All fees are non-refundable unless otherwise stated or required by applicable law.
        We reserve the right to modify pricing with at least 30 days&rsquo; advance notice.
        Continued use of the service after the effective date constitutes acceptance of the
        new pricing.
      </p>

      <h2>5. Intellectual Property</h2>
      <p>
        All software, content, designs, trademarks, and materials associated with SistemaHub
        and its products are the exclusive property of SistemaHub or its licensors. Nothing
        in these Terms grants you any ownership rights in our services or content.
      </p>
      <p>
        You retain full ownership of any data you upload or input into our services
        (&ldquo;Your Data&rdquo;). By using our services, you grant us a limited licence to
        host, store, and process Your Data solely for the purpose of providing the service
        to you.
      </p>

      <h2>6. Data and Privacy</h2>
      <p>
        Your use of our services is also governed by our{' '}
        <a href="/privacy">Privacy Policy</a>, which is incorporated into these Terms by
        reference. By using our services you consent to the collection and use of your
        information as described in the Privacy Policy.
      </p>

      <h2>7. Third-Party Integrations</h2>
      <p>
        Our products may integrate with or link to third-party services (e.g. payment
        processors, email providers). These integrations are subject to the third party&rsquo;s
        own terms and privacy policies. SistemaHub is not responsible for the content,
        accuracy, or practices of any third-party services.
      </p>

      <h2>8. Disclaimers</h2>
      <p>
        Our services are provided <strong>&ldquo;as is&rdquo;</strong> and{' '}
        <strong>&ldquo;as available&rdquo;</strong> without warranties of any kind, either
        express or implied, including but not limited to implied warranties of
        merchantability, fitness for a particular purpose, or non-infringement. We do not
        warrant that our services will be uninterrupted, error-free, or free of harmful
        components.
      </p>

      <h2>9. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by applicable law, SistemaHub shall not be liable
        for any indirect, incidental, special, consequential, or punitive damages, including
        but not limited to loss of profits, data, business, or goodwill, arising out of or
        in connection with your use of our services, even if we have been advised of the
        possibility of such damages.
      </p>
      <p>
        Our total liability to you for any claim arising from or related to these Terms or
        our services shall not exceed the amount you paid to us in the twelve (12) months
        preceding the claim.
      </p>

      <h2>10. Indemnification</h2>
      <p>
        You agree to indemnify, defend, and hold harmless SistemaHub and its officers,
        directors, employees, and agents from any claims, damages, losses, liabilities,
        costs, and expenses (including reasonable legal fees) arising from: (a) your use of
        our services; (b) your violation of these Terms; or (c) your violation of any
        third-party rights.
      </p>

      <h2>11. Termination</h2>
      <p>
        Either party may terminate these Terms at any time. You may stop using our services
        and delete your account at any time. We may suspend or terminate your access
        immediately if we reasonably believe you have violated these Terms or if required
        by law.
      </p>
      <p>
        Upon termination, your right to use our services ceases immediately. Sections
        regarding Intellectual Property, Disclaimers, Limitation of Liability, and
        Governing Law survive termination.
      </p>

      <h2>12. Governing Law</h2>
      <p>
        These Terms are governed by and construed in accordance with applicable laws.
        Any disputes arising under or in connection with these Terms shall be subject to
        the exclusive jurisdiction of the competent courts, and you consent to personal
        jurisdiction in such courts.
      </p>

      <h2>13. Changes to These Terms</h2>
      <p>
        We may update these Terms from time to time. We will notify you of material changes
        by posting the updated Terms on this page and updating the &ldquo;Last updated&rdquo;
        date. Your continued use of our services after changes become effective constitutes
        your acceptance of the new Terms.
      </p>

      <h2>14. Contact</h2>
      <p>
        If you have any questions about these Terms, please contact us at:
      </p>
      <ul>
        <li><strong>Email:</strong> <a href="mailto:sistemahub1@gmail.com">sistemahub1@gmail.com</a></li>
        <li><strong>Website:</strong> <a href="https://sistemahub.com">sistemahub.com</a></li>
      </ul>

    </LegalLayout>
  )
}
