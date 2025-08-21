import React from 'react';

const TermsOfUse = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-white mb-6">Terms of Use</h1>
      <p className="text-white mb-4">
        <strong>Effective Date:</strong> August 21, 2025
      </p>
      <p className="text-white mb-6">
        Welcome to <strong>DCODE</strong>, a vibrant, student-led community
        dedicated to empowering college students to dive into open-source
        development through mentorship, collaboration, and real-world projects.
        By accessing or using our website, resources, or services (collectively,
        the “Platform”), you agree to these Terms of Use (“Terms”). Please read
        them carefully to understand your rights and responsibilities.
      </p>

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
        1. About DCODE
      </h2>
      <p className="text-white mb-6">
        DCODE is a student-driven initiative designed to make open-source
        contribution accessible to college students. We provide structured
        contribution cycles, mentorship, and hands-on project opportunities to
        help you grow as a developer and collaborator.
      </p>

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
        2. Using Our Platform
      </h2>
      <ul className="list-disc pl-6 text-white mb-6">
        <li>
          <strong>Permitted Use</strong>: You may use the Platform for personal,
          educational, and non-commercial purposes related to learning and
          contributing to open-source projects.
        </li>
        <li>
          <strong>Prohibited Actions</strong>: You agree not to:
          <ul className="list-circle pl-6 mt-2">
            <li>
              Use the Platform for illegal activities or to harm DCODE, its
              users, or its community.
            </li>
            <li>
              Attempt to hack, disrupt, or misuse the Platform’s systems or
              content.
            </li>
            <li>
              Post or share content that is offensive, defamatory, or infringes
              on others’ rights.
            </li>
          </ul>
        </li>
        <li>
          <strong>Content Changes</strong>: We may modify, suspend, or remove
          any content or features on the Platform at any time without notice.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
        3. Your Contributions
      </h2>
      <ul className="list-disc pl-6 text-white mb-6">
        <li>
          <strong>Content You Share</strong>: By posting, uploading, or
          submitting content (e.g., comments, code snippets, or project ideas),
          you grant DCODE a worldwide, non-exclusive, royalty-free license to
          use, display, reproduce, and distribute that content solely to support
          our mission of fostering open-source education.
        </li>
        <li>
          <strong>Your Responsibility</strong>: You are responsible for ensuring
          your contributions are lawful, original, and do not violate
          intellectual property or privacy rights. DCODE reserves the right to
          remove any content that violates these Terms.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
        4. Intellectual Property
      </h2>
      <ul className="list-disc pl-6 text-white mb-6">
        <li>
          <strong>DCODE’s Content</strong>: All original content on the Platform
          (e.g., text, graphics, logos, and designs) is owned by DCODE or its
          licensors and protected by copyright and other laws, unless otherwise
          stated.
        </li>
        <li>
          <strong>Open-Source Projects</strong>: Projects linked or hosted on
          the Platform are subject to their respective open-source licenses.
          Always review the applicable license before using or contributing to
          these projects.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
        5. No Warranties
      </h2>
      <p className="text-white mb-6">
        The Platform is provided “as is” without warranties of any kind, express
        or implied. While we strive to ensure the Platform is accurate,
        reliable, and available, we cannot guarantee its completeness,
        functionality, or uninterrupted access.
      </p>

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
        6. Limitation of Liability
      </h2>
      <p className="text-white mb-6">
        To the fullest extent permitted by law, DCODE and its affiliates,
        officers, or volunteers will not be liable for any damages (direct,
        indirect, incidental, or consequential) arising from your use of the
        Platform or reliance on its content.
      </p>

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
        7. Third-Party Links
      </h2>
      <p className="text-white mb-6">
        The Platform may include links to third-party websites or resources.
        DCODE is not responsible for the content, availability, or practices of
        these external sites, and accessing them is at your own risk.
      </p>

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
        8. Privacy
      </h2>
      <p className="text-white mb-6">
        We value your privacy. Please review our{' '}
        <a href="/privacy" className="text-blue-600 hover:underline">
          Privacy Policy
        </a>{' '}
        to understand how we collect, use, and protect your personal
        information.
      </p>

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
        9. Termination
      </h2>
      <p className="text-white mb-6">
        We reserve the right to suspend or terminate your access to the Platform
        if you violate these Terms or engage in activities that harm DCODE or
        its community.
      </p>

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
        10. Updates to These Terms
      </h2>
      <p className="text-white mb-6">
        We may update these Terms periodically to reflect changes in our
        Platform or legal requirements. The updated Terms will be posted on this
        page with a new “Effective Date.” Continued use of the Platform after
        changes constitutes your acceptance of the revised Terms.
      </p>

      <h2 className="text-2xl font-semibold text-white mt-8 mb-4">
        11. Contact Us
      </h2>
      <p className="text-white mb-6">
        Have questions or concerns about these Terms? Reach out to us at:
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
        Thank you for being part of the DCODE community! Let’s build, learn, and
        grow together in the world of open source.
      </p>
    </div>
  );
};

export default TermsOfUse;
