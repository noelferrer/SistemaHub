import type { Metadata } from 'next'
import LegalLayout from '@/modules/legal/LegalLayout'

export const metadata: Metadata = {
  title: 'Privacy Policy — SistemaHub',
  description: 'Privacy Policy for SistemaHub and its digital products including TaoLink HRIS and Landlord HQ.',
}

export default function PrivacyPage() {
  return (
    <LegalLayout
      badge="Legal"
      title="Privacy Policy"
      lastUpdated="April 13, 2026"
    >

      <p>
        SistemaHub (&ldquo;SistemaHub&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or
        &ldquo;our&rdquo;) is committed to protecting the privacy of our users. This Privacy
        Policy explains how we collect, use, store, and share information when you use our
        website and digital products, including TaoLink HRIS and Landlord HQ
        (collectively, the &ldquo;Services&rdquo;).
      </p>
      <p>
        By using our Services, you agree to the collection and use of information in
        accordance with this policy.
      </p>

      <h2>1. Information We Collect</h2>
      <p>We collect information in the following ways:</p>

      <p><strong>Information you provide directly:</strong></p>
      <ul>
        <li>Account registration details (name, email address, company name).</li>
        <li>Profile information and preferences within our products.</li>
        <li>Data you input into our applications (e.g. employee records in TaoLink HRIS, tenant information in Landlord HQ).</li>
        <li>Communications you send us (support requests, emails).</li>
        <li>Billing and payment information processed through our payment providers.</li>
      </ul>

      <p><strong>Information collected automatically:</strong></p>
      <ul>
        <li>Log data including IP address, browser type, pages visited, and timestamps.</li>
        <li>Device information (operating system, hardware model, unique device identifiers).</li>
        <li>Usage data such as features accessed, actions taken, and session duration.</li>
        <li>Cookies and similar tracking technologies (see Section 6).</li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <p>We use the information we collect to:</p>
      <ul>
        <li>Provide, operate, and maintain our Services.</li>
        <li>Process transactions and manage subscriptions.</li>
        <li>Personalise and improve user experience.</li>
        <li>Send transactional emails (account confirmations, invoices, password resets).</li>
        <li>Send product updates and announcements (you may opt out at any time).</li>
        <li>Respond to support requests and inquiries.</li>
        <li>Monitor and analyse usage patterns to improve our products.</li>
        <li>Detect, investigate, and prevent fraudulent or unauthorised activity.</li>
        <li>Comply with legal obligations.</li>
      </ul>

      <h2>3. Data We Do Not Collect</h2>
      <p>
        We do not collect sensitive personal information such as government-issued
        identification numbers, financial account credentials, or biometric data through
        our marketing website. Any sensitive data processed within our SaaS products
        (e.g. payroll data in TaoLink HRIS) is handled with strict access controls and
        encryption, solely for the purpose of delivering that service to you.
      </p>

      <h2>4. How We Share Your Information</h2>
      <p>
        We do not sell, rent, or trade your personal information to third parties.
        We may share your information only in the following circumstances:
      </p>
      <ul>
        <li><strong>Service providers:</strong> Trusted third-party vendors who assist in operating our services (e.g. hosting providers, payment processors, email delivery services). These parties are contractually obligated to keep your information confidential and use it only to perform services on our behalf.</li>
        <li><strong>Legal requirements:</strong> If required by law, court order, or governmental authority, or to protect the rights, property, or safety of SistemaHub, our users, or the public.</li>
        <li><strong>Business transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred. We will provide notice before your data becomes subject to a different privacy policy.</li>
        <li><strong>With your consent:</strong> We may share your information for other purposes with your explicit consent.</li>
      </ul>

      <h2>5. Data Security</h2>
      <p>
        We implement industry-standard technical and organisational measures to protect
        your information against unauthorised access, alteration, disclosure, or
        destruction. These include:
      </p>
      <ul>
        <li>HTTPS encryption for all data in transit.</li>
        <li>Encrypted storage for sensitive data at rest.</li>
        <li>Access controls limiting data access to authorised personnel only.</li>
        <li>Regular security reviews and monitoring.</li>
      </ul>
      <p>
        No method of transmission over the internet or electronic storage is 100% secure.
        While we strive to protect your information, we cannot guarantee absolute security.
      </p>

      <h2>6. Cookies and Tracking</h2>
      <p>
        We use cookies and similar technologies to operate and improve our Services.
        Types of cookies we use:
      </p>
      <ul>
        <li><strong>Essential cookies:</strong> Required for the Services to function (e.g. authentication sessions). These cannot be disabled.</li>
        <li><strong>Analytics cookies:</strong> Help us understand how users interact with our Services so we can improve them. Data collected is aggregated and anonymised where possible.</li>
        <li><strong>Preference cookies:</strong> Remember your settings and preferences (e.g. theme, language).</li>
      </ul>
      <p>
        You can control cookies through your browser settings. Disabling certain cookies
        may affect the functionality of our Services.
      </p>

      <h2>7. Data Retention</h2>
      <p>
        We retain your personal information for as long as your account is active or as
        needed to provide you our Services. We will also retain information as necessary
        to comply with legal obligations, resolve disputes, and enforce our agreements.
      </p>
      <p>
        When you delete your account, we will delete or anonymise your personal data
        within 30 days, except where retention is required by law.
      </p>

      <h2>8. Your Rights</h2>
      <p>Depending on your location, you may have the following rights regarding your personal data:</p>
      <ul>
        <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
        <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data.</li>
        <li><strong>Deletion:</strong> Request deletion of your personal data (&ldquo;right to be forgotten&rdquo;).</li>
        <li><strong>Portability:</strong> Request your data in a structured, machine-readable format.</li>
        <li><strong>Restriction:</strong> Request that we restrict processing of your data in certain circumstances.</li>
        <li><strong>Objection:</strong> Object to our processing of your data for direct marketing purposes.</li>
      </ul>
      <p>
        To exercise any of these rights, contact us at{' '}
        <a href="mailto:hello@sistemahub.com">hello@sistemahub.com</a>. We will respond
        within 30 days.
      </p>

      <h2>9. Children&rsquo;s Privacy</h2>
      <p>
        Our Services are not directed at children under the age of 13 (or the applicable
        age of digital consent in your jurisdiction). We do not knowingly collect personal
        information from children. If you believe we have inadvertently collected data from
        a child, please contact us immediately and we will delete it promptly.
      </p>

      <h2>10. International Data Transfers</h2>
      <p>
        Your information may be processed and stored on servers located outside your
        country of residence. By using our Services, you consent to the transfer of your
        information to servers which may be subject to different data protection laws than
        your jurisdiction. We take steps to ensure appropriate safeguards are in place for
        such transfers.
      </p>

      <h2>11. Third-Party Links</h2>
      <p>
        Our website and products may contain links to third-party websites or services.
        We are not responsible for the privacy practices of those third parties. We encourage
        you to review the privacy policies of any third-party services you access through
        our platform.
      </p>

      <h2>12. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. We will notify you of material
        changes by posting the updated policy on this page and updating the
        &ldquo;Last updated&rdquo; date at the top. For significant changes, we may also
        send a notification to your registered email address.
      </p>
      <p>
        Your continued use of our Services after any changes constitutes your acceptance
        of the updated Privacy Policy.
      </p>

      <h2>13. Contact Us</h2>
      <p>
        If you have any questions, concerns, or requests regarding this Privacy Policy or
        how we handle your data, please contact us:
      </p>
      <ul>
        <li><strong>Email:</strong> <a href="mailto:hello@sistemahub.com">hello@sistemahub.com</a></li>
        <li><strong>Website:</strong> <a href="https://sistemahub.com">sistemahub.com</a></li>
      </ul>

    </LegalLayout>
  )
}
