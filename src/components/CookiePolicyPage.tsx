import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const CookiePolicyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Cookie Policy</h1>
          <p className="text-xl text-gray-600">
            Last updated: January 1, 2024
          </p>
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">What Are Cookies</h2>
              <p className="text-gray-700 leading-relaxed">
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">How We Use Cookies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                IntervueAI uses cookies for several purposes:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Essential cookies: Required for the website to function properly</li>
                <li>Performance cookies: Help us understand how visitors interact with our website</li>
                <li>Functionality cookies: Remember your preferences and settings</li>
                <li>Analytics cookies: Provide insights into website usage and performance</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Types of Cookies We Use</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Essential Cookies</h3>
                  <p className="text-gray-700">
                    These cookies are necessary for the website to function and cannot be switched off. They are usually set in response to actions made by you such as setting privacy preferences or logging in.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Analytics Cookies</h3>
                  <p className="text-gray-700">
                    These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Functional Cookies</h3>
                  <p className="text-gray-700">
                    These cookies enable enhanced functionality and personalization, such as remembering your login details and preferences.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Managing Cookies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You can control and manage cookies in various ways:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Browser settings: Most browsers allow you to refuse cookies</li>
                <li>Third-party tools: Use privacy tools to manage tracking</li>
                <li>Opt-out links: Use provided opt-out mechanisms for specific services</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                Please note that disabling cookies may affect the functionality of our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Third-Party Cookies</h2>
              <p className="text-gray-700 leading-relaxed">
                We may use third-party services that set cookies on our website. These services include analytics providers and advertising networks. We do not control these cookies and recommend reviewing the privacy policies of these third parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Updates to This Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Cookie Policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated revision date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about our use of cookies, please contact us at privacy@intervueai.com.
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CookiePolicyPage;