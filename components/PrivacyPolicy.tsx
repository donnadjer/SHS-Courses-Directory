import React from 'react';
import { Shield, Lock, Eye, Cookie } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="bg-gh-black p-8 sm:p-12 text-center">
          <Shield className="w-16 h-16 text-gh-yellow mx-auto mb-4" />
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">Privacy Policy</h1>
          <p className="text-gray-400">Last Updated: October 2023</p>
        </div>

        <div className="p-8 sm:p-12 space-y-10">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Eye className="text-gh-green" /> 1. Information We Collect
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              At Ghana SHS Directory, we collect minimal personal information. The types of information we may collect include:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Information you voluntarily provide when adding a school (e.g., your name if submitted).</li>
              <li>Usage data and analytics to understand how visitors interact with our website.</li>
              <li>Device information such as browser type and operating system.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Lock className="text-gh-red" /> 2. How We Use Your Information
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We use the collected information for the following purposes:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>To provide and maintain our Service.</li>
              <li>To verify the authenticity of new school entries.</li>
              <li>To monitor the usage of the Service to detect, prevent and address technical issues.</li>
              <li>To improve user experience and content quality.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Cookie className="text-blue-500" /> 3. Cookies and Tracking
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We use cookies and similar tracking technologies to track the activity on our Service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Third-Party Services</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We may employ third-party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used. These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
            </p>
          </section>

          <section className="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <h2 className="text-xl font-bold text-gray-900 mb-2">Contact Us</h2>
            <p className="text-gray-600">
              If you have any questions about this Privacy Policy, please contact us at: <br />
              <a href="mailto:privacy@ghanashsdirectory.com" className="text-gh-blue font-medium hover:underline text-blue-600">privacy@ghanashsdirectory.com</a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;