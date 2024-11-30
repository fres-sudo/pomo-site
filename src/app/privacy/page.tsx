
import React from "react";
import DottedBackgroundWithContent from "@/components/DottedBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


const PrivacyPolicy: React.FC = () => {
  return (
    <div className=' min-h-screen'>
      <DottedBackgroundWithContent>
        <div className="text-white flex flex-col flex-grow justify-between items-center relative overflow-hidden py-24 lg:py-32"> {/* Gradients */}
          <div
            aria-hidden="true"
            className="flex absolute -top-96 start-1/2 transform -translate-x-1/2"
          >
            <div className="bg-gradient-to-tl blur-3xl w-[90rem] h-[50rem] rounded-full origin-top-left -rotate-12 -translate-x-[15rem] from-indigo-500 via-indigo-800 to-background" />
          </div>
          {/* End Gradients */}
          <div className="relative glassmorphism max-w-5xl mx-4">
            <div className="container py-10 lg:py-16">
              <div className="max-w-4xl mx-auto">
                <div className="p-6 font-sans text-white">
                  <h1 className="text-2xl font-bold">Privacy Policy</h1>
                  <p className="mt-4">
                    This privacy policy applies to the Pomo app (hereby referred to as "Application") for mobile devices that was created by Francesco Calicchio (hereby referred to as "Service Provider") as an Open Source service. This service is intended for use "AS IS".
                  </p>

                  <section className="mt-6">
                    <h2 className="text-xl font-semibold">Information Collection and Use</h2>
                    <p className="mt-2">
                      The Application collects information when you download and use it. This information may include information such as:
                    </p>
                    <ul className="list-disc list-inside ml-4 mt-2">
                      <li>Your device's Internet Protocol address (e.g. IP address)</li>
                      <li>The pages of the Application that you visit, the time and date of your visit, the time spent on those pages</li>
                      <li>The time spent on the Application</li>
                      <li>The operating system you use on your mobile device</li>
                    </ul>
                    <p className="mt-4">
                      The Application does not gather precise information about the location of your mobile device.
                    </p>
                  </section>

                  {/* Hidden Location Data Section */}
                  <section className="hidden">
                    <p>
                      The Application collects your device's location, which helps the Service Provider determine your approximate geographical location and make use of in the following ways:
                    </p>
                    <ul className="list-disc list-inside ml-4 mt-2">
                      <li>Geolocation Services: Personalized content, relevant recommendations, and location-based services.</li>
                      <li>Analytics and Improvements: Aggregated location data to improve the Application.</li>
                      <li>Third-Party Services: Anonymized location data sent to third parties to enhance the Application.</li>
                    </ul>
                  </section>

                  <p className="mt-6">
                    The Service Provider may use the information you provided to contact you from time to time to provide you with important information, required notices, and marketing promotions.
                  </p>

                  <p className="mt-4">
                    For a better experience, while using the Application, the Service Provider may require you to provide personally identifiable information, including but not limited to francescocalicchio@hotmail.com.
                  </p>

                  <section className="mt-6">
                    <h2 className="text-xl font-semibold">Third Party Access</h2>
                    <p className="mt-2">
                      Only aggregated, anonymized data is periodically transmitted to external services to aid the Service Provider in improving the Application. Below are the links to the Privacy Policy of the third-party service providers used by the Application:
                    </p>
                    <ul className="list-disc list-inside ml-4 mt-2">
                      <li>
                        <a
                          href="https://www.google.com/policies/privacy/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline"
                        >
                          Google Play Services
                        </a>
                      </li>
                    </ul>
                  </section>

                  <section className="mt-6">
                    <h2 className="text-xl font-semibold">Opt-Out Rights</h2>
                    <p className="mt-2">
                      You can stop all collection of information by the Application by uninstalling it via the standard uninstall processes available on your mobile device.
                    </p>
                  </section>

                  <section className="mt-6">
                    <h2 className="text-xl font-semibold">Data Retention Policy</h2>
                    <p className="mt-2">
                      The Service Provider will retain user-provided data for as long as you use the Application and for a reasonable time thereafter. You may request data deletion by contacting them at info.pomoapp@gmail.com.
                    </p>
                  </section>

                  <section className="mt-6">
                    <h2 className="text-xl font-semibold">Children</h2>
                    <p className="mt-2">
                      The Service Provider does not knowingly collect personal data from children under 13. If a parent or guardian becomes aware of any such information, they should contact the Service Provider to have the data removed.
                    </p>
                  </section>

                  <section className="mt-6">
                    <h2 className="text-xl font-semibold">Security</h2>
                    <p className="mt-2">
                      The Service Provider is concerned about safeguarding the confidentiality of your information and provides physical, electronic, and procedural safeguards to protect information.
                    </p>
                  </section>

                  <section className="mt-6">
                    <h2 className="text-xl font-semibold">Changes</h2>
                    <p className="mt-2">
                      This Privacy Policy may be updated from time to time. Continued use of the Application is deemed as approval of the updated policy.
                    </p>
                  </section>

                  <section className="mt-6">
                    <h2 className="text-xl font-semibold">Your Consent</h2>
                    <p className="mt-2">
                      By using the Application, you consent to the processing of your information as described in this Privacy Policy.
                    </p>
                  </section>

                  <section className="mt-6">
                    <h2 className="text-xl font-semibold">Contact Us</h2>
                    <p className="mt-2">
                      If you have any questions regarding privacy while using the Application, please contact the Service Provider via email at info.pomoapp@gmail.com.
                    </p>
                  </section>

                  <hr className="my-6" />
                  <footer>
                    <p className="text-sm">
                      This privacy policy page was generated by{" "}
                      <a
                        href="https://app-privacy-policy-generator.nisrulz.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        App Privacy Policy Generator
                      </a>
                    </p>
                  </footer>
                </div>

              </div>
            </div>
          </div>
        </div>

      </DottedBackgroundWithContent>
    </div>


  );
};

export default PrivacyPolicy;

