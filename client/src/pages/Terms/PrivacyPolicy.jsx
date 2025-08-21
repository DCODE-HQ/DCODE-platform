import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-white mb-6">Privacy Policy</h1>
      <p className="text-white mb-4">
        <strong>Effective Date:</strong> August 21, 2025
      </p>
      <p className="text-white mb-6">
        At <strong>DCODE</strong>, we’re committed to protecting your privacy.
        This Privacy Policy explains how we collect, use, share, and safeguard
        your information when you use our website, resources, or services
        (collectively, the “Platform”). We’re a student-led initiative, and we
        aim to keep this clear and simple. Please read this carefully.
      </p>

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
        1. What Information We Collect
      </h2>
      <p className="text-white mb-4">
        We may collect the following types of information when you interact with
        the Platform:
      </p>
      <ul className="list-disc pl-6 text-white mb-6">
        <li>
          <strong>Personal Information</strong>: Details you voluntarily
          provide, such as your name, email address, or GitHub username, when
          you sign up for contribution cycles, contact us, or participate in our
          community.
        </li>
        <li>
          <strong>Usage Data</strong>: Information about how you use the
          Platform, like pages visited, time spent, or links clicked, collected
          automatically via cookies or similar tools.
        </li>
        <li>
          <strong>User Contributions</strong>: Content you post or share, such
          as comments, code snippets, or project ideas, which may include
          personal details you choose to include.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
        2. How We Use Your Information
      </h2>
      <p className="text-white mb-4">We use your information to:</p>
      <ul className="list-disc pl-6 text-white mb-6">
        <li>
          Support your participation in DCODE’s open-source contribution cycles
          and mentorship programs.
        </li>
        <li>
          Improve the Platform by analyzing usage trends and user feedback.
        </li>
        <li>
          Communicate with you, such as sending updates, responding to
          inquiries, or sharing community news.
        </li>
        <li>Ensure the Platform’s security and prevent misuse.</li>
      </ul>

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
        3. How We Share Your Information
      </h2>
      <p className="text-white mb-4">
        We don’t sell your information. We may share it in these limited cases:
      </p>
      <ul className="list-disc pl-6 text-white mb-6">
        <li>
          <strong>With the DCODE Community</strong>: Contributions like code
          snippets or comments may be publicly visible to support our
          open-source mission.
        </li>
        <li>
          <strong>With Service Providers</strong>: We may use trusted
          third-party tools (e.g., analytics or email services) to help run the
          Platform, but only if they agree to protect your data.
        </li>
        <li>
          <strong>For Legal Reasons</strong>: If required by law or to protect
          DCODE, its users, or the public, we may share information with
          authorities.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
        4. Cookies and Tracking
      </h2>
      <p className="text-white mb-6">
        We use cookies and similar technologies to improve your experience and
        understand how the Platform is used. You can manage cookie preferences
        through your browser settings, but disabling them may affect how the
        Platform works.
      </p>

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
        5. Your Choices
      </h2>
      <ul className="list-disc pl-6 text-white mb-6">
        <li>
          <strong>Access and Update</strong>: You can request to review or
          update your personal information by contacting us.
        </li>
        <li>
          <strong>Opt-Out</strong>: You can opt out of non-essential
          communications (e.g., newsletters) by following the unsubscribe
          instructions in our emails.
        </li>
        <li>
          <strong>Contributions</strong>: You control what you post. Be mindful
          of sharing personal details in public forums like project discussions.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
        6. Data Security
      </h2>
      <p className="text-white mb-6">
        We take reasonable steps to protect your information from unauthorized
        access or loss, but no system is 100% secure. Please use strong
        passwords and avoid sharing sensitive details unnecessarily.
      </p>

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
        7. Third-Party Links
      </h2>
      <p className="text-white mb-6">
        The Platform may link to external sites (e.g., GitHub repositories).
        We’re not responsible for their privacy practices, so please review
        their policies before sharing information.
      </p>

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
        8. Children’s Privacy
      </h2>
      <p className="text-white mb-6">
        DCODE is designed for college students and is not intended for anyone
        under 13. If we learn we’ve collected data from a child under 13, we’ll
        take steps to delete it.
      </p>

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
        9. International Users
      </h2>
      <p className="text-white mb-6">
        DCODE is based in the United States. If you’re accessing the Platform
        from another country, your information may be transferred to and
        processed in our location, subject to applicable laws.
      </p>

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
        10. Updates to This Policy
      </h2>
      <p className="text-white mb-6">
        We may update this Privacy Policy as our Platform evolves. Changes will
        be posted here with a new “Effective Date.” Continued use of the
        Platform after updates means you accept the revised policy.
      </p>

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
        11. Contact Us
      </h2>
      <p className="text-white mb-6">
        Questions about this Privacy Policy? Reach out to us at:
        <br />
        📧{' '}
        <a
          href="mailto:dcode.codes@gmail.com"
          className="text-blue-600 hover:underline"
        >
          dcode.codes@gmail.com
        </a>
      </p>

      <p className="text-white mt-8">
        Thank you for trusting DCODE with your information. We’re excited to
        have you in our open-source community!
      </p>
    </div>
  );
};

export default PrivacyPolicy;
