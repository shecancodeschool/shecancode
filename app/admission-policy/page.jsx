'use client'

import DefaultPageBanner from '../../components/DefaultPageBanner';
import AdmissionPolicyPageData from '../../utils/admissionPolicyFakes';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ReusableSection from '../../components/ReusableSection';

const page = () => {
  const pathname = usePathname();

  return (
    <>
      <DefaultPageBanner
        backgroundImage={AdmissionPolicyPageData.backgroundImage}
        title={AdmissionPolicyPageData.title}
        description={`Last updated: ${new Date(AdmissionPolicyPageData.updatedAt).toDateString()}`}
      />
      <ReusableSection>
        <div className='flex w-full flex-wrap justify-between'>
          <div className="flex-1 w-full md:w-[65%] mb-12 md:pr-8 text-black">
            {AdmissionPolicyPageData.subTitle &&
              <h2 className={"text-2xl md:text-4xl font-bold text-[#317ACC] text-left"}>
                {AdmissionPolicyPageData.subTitle}
              </h2>
            }
            <section class="section">
              <h3>Introduction</h3>
              <p>SheCanCODE Bootcamp understands that your admission is important to you and that we care about how your personal data is used. We respect and value the admission of all our customers and users and we will only collect and use personal data in ways that are described here and in a way that is consistent with our obligations and your rights under the Data Protection legislation.</p>
              <p>This is SheCanCODE Admission Notice (“Admission Notice”) which may be accessed from <a href="https://www.shecancodeschool.org/">https://www.shecancodeschool.org/</a> where you submit personal data to access the service or may be obtained as a hard copy when you submit personal data at our medical laboratory.</p>
            </section>

            <section class="section">
              <h3>Information about us</h3>
              <div class="contact-info">
                <p>SheCanCODE Bootcamp is a software development training bootcamp under Igire Rwanda Organization which is registered in the Republic of RWANDA.</p>
                <br />
                <p>Address: Kacyiru Gasabo, KG 549 St 36, Kigali RWANDA</p>
                <p>Email: <a href="mailto:education@igirerwanda.org">education@igirerwanda.org</a></p>
                <p>Telephone: 0788473533 (General Enquiries), 0780599859 (Admission & Academics)</p>
                <p>Website: <a href="https://www.shecancodeschool.org/">https://www.shecancodeschool.org/</a></p>
              </div>
            </section>

            <section class="section">
              <h3>What does this Admission Notice Cover?</h3>
              <p>This Admission Notice explains how we use your personal data: how it is collected, how it is held, and how it is processed. It also explains your rights under the law relating to your data.</p>
            </section>

            <section class="section">
              <h3>What Is Personal Data?</h3>
              <p>Personal data refers to any information about you that enables you to be identified as an individual such as your name, contact details, and identification numbers but it also covers less obvious information such as electronic location data and other online identifiers.</p>
            </section>

            <section class="section">
              <h3>How do we collect your personal data?</h3>
              <table>
                <thead>
                  <tr>
                    <th>Data Collected</th>
                    <th>How we collect the Data</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>Personal Information</strong>
                      <span>For individuals – Names, referee details, date of birth, next of kin, gender, dependants, nationality, health information, marital status, criminal record, education, photographs, property details.
                        For companies – company name and company contact person’s name.
                      </span>
                    </td>
                    <td>
                      Relevant Application forms both physical and online (For example, corporate application forms, employee recruitment forms, vendor application forms and any other application forms we may use from time to time)
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Contact Information</strong>
                      <span>For individuals –Email, telephone.
                        For companies –company contact person’s name and email.
                      </span>
                    </td>
                    <td>
                      Relevant Application forms both physical and online (For example, corporate application forms, employee recruitment forms, vendor application forms and any other application forms we may use from time to time)
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Identification details and documents</strong>
                      <span>For individuals – copy of national identification card or passport, driving licence, vehicle registration certificate.
                        For companies –Company CR12, Vehicle registration number

                      </span>
                    </td>
                    <td>
                      Relevant Application forms (For example, corporate application forms, employee recruitment forms, vendor application forms and any other application forms we may use from time to time)
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Financial Information</strong>
                      <span>For individuals – Bank account numbers, RWANDA Revenue Authority PIN numbers, National Health Insurance Fund details, National Social Security Fund details, debit or credit cards.
                        For companies – Vehicle registration number
                      </span>
                    </td>
                    <td>
                      Relevant Application forms (For example, corporate application forms, employee
                      recruitment forms, vendor application forms and any other application forms we may use from time to time)
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Contact Information</strong>
                      <span>For individuals –Email, telephone.
                        For companies –company contact person’s name and email.
                      </span>
                    </td>
                    <td>
                      Relevant Application forms both physical and online (For example, corporate application forms, employee recruitment forms, vendor application forms and any other application forms we may use from time to time)
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>

            <section class="section">
              <h3>How do we use your personal data?</h3>
              <ol>
                <li>We process your personal data for one of the lawful bases of processing (“Lawful Basis”) depending on the specific purpose or purposes for which we are using your data (see table below).</li>
                <table>
                  <thead>
                    <tr>
                      <th>Category of use</th>
                      <th>Purpose of use</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <strong>To provide our product and services:</strong>
                        <span>We may use your personal information and financial information to:</span>
                        <ul>
                          <li>Make our products and services available to you.</li>
                          <li>Onboard you as a student, customer, or applicant.</li>
                          <li>Provide products and services available to you, process your payment.</li>
                          <li>Responding and engaging with your inquiries, delivery and service updates or feedback, including contacting you where necessary.</li>
                        </ul>
                      </td>
                      <td>
                        Performance of our contract with you.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>To identify you:</strong>
                        <span>We may use your personal information, including identification information and contact information, to:</span>
                        <ul>
                          <li>Identity verification, establishing and administering customer care services.</li>
                          <li>Processing payments for services offered.</li>
                        </ul>
                      </td>
                      <td>
                        Performance of our contract with you.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>For Marketing:</strong>
                        <span>We may use your personal information, including contact information, to:</span>
                        <ul>
                          <li>Keeping you informed about our services and any promotions we may be running at the school, including direct marketing.</li>
                        </ul>
                        <span>Note we will not use any information deemed as sensitive personal information for Direct Marketing purposes and you may withdraw your consent at any time.</span>
                      </td>
                      <td>
                        Consent
                        (You can withdraw your consent at any time see more information here)
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Improving Website Experience:</strong>
                        <span>We may use your personal information and financial information to:</span>
                        <ul>
                          <li>Understand you so we can provide you with a great website experience, personalized offers and online advertising.</li>
                          <li>Understanding how you use our website, where and when you browse from, the products and services you view</li>
                        </ul>
                      </td>
                      <td>
                        Legitimate Interest of the Data Controller
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Government Requirements:</strong>
                        <span>We may use your personal information, including financial information personal information, to: Submit the relevant statutorily required information to various institutions of the Government of RWANDA.
                        </span>
                      </td>
                      <td>
                        Legal Obligation
                      </td>
                    </tr>
                  </tbody>
                </table>

                <li>Vital Interests’ can be used as a lawful basis where we need to share our data in emergency circumstances or where it is a matter of life and death.</li>
                <li>We will not use your personal data for any purpose other than the purpose(s) for which it was originally collected, unless we reasonably believe that another purpose is compatible with that or those original purpose(s). If we do use your personal data in this way and you wish us to explain how the new purpose is compatible with the original, please contact us.</li>
                <li>If we need to use your personal data for a purpose that is unrelated to, or incompatible with, the purpose(s) for which it was originally collected, we will inform you and explain the legal basis that allows us to do so or seek your consent.</li>
                <li>In some circumstances, where permitted or required by law, we may disclose your data without your knowledge or consent. This will only be done within the bounds of the Data Protection Legislation and your legal rights.</li>
              </ol>
            </section>

            <section className='section'>
              <h3>What are your rights under the Data Protection Legislation?</h3>
              <p>Under the Data Protection Legislation, you have the following rights, which we will always work to respect and uphold:</p>
              <ol>
                <li>The right to be informed about our collection and use of your personal data.</li>
                <li>The right to access the personal data we hold about you.</li>
                <li>The right to have your personal data
                  corrected if any of your data held by us is false, erroneous or misleading.</li>
                <li>The right to ask us to delete or otherwise dispose of any of your data that we hold.</li>
                <li>The right to restrict (i.e., prevent) the processing of your personal data.</li>
                <li>The right to object to us to our use of your personal data for a particular purpose or purposes.</li>
                <li>The right to withdraw consent.</li>
                <li>The right to data portability.</li>
                <li>Rights relating to automated decision-making and profiling.</li>
              </ol>
              <p>For more information about our use of your data or exercising your rights as outlined above, please contact us by email as set out in Part 13. Note that the above rights are subject to exceptions and conditions set out under the Data Protection Legislation, and your identification as an individual for whom we process personal data.</p>
              <p>Your data must be kept accurate and up-to-date. If any of the personal data we hold about you changes, please keep us informed as long as we have that data. If you have any cause for complaint about our use of your personal data, you have the right to complain to the Office of the Data Protection Commissioner. We would welcome the opportunity to resolve your concerns ourselves, however, so please contact us first.</p>
            </section>

            <section class="section">
              <h3>Do we share your personal data</h3>
              <p>All data sharing will be undertaken in line with the Data Protection Legislation</p>
              <ol>
                <li>
                  <em>Within SheCanCODE</em>
                  <p>For administrative and operational purposes, we share data internally across our departments in SheCanCODE as the departments need to access data. The sharing across our departments is reasonable, is in line with Data Protection Legislation, and respects your rights.</p>
                  <p>We hold your personal data record for you in our service stores to provide and fulfil our obligations to you and have </p>
                </li>
                <li>
                  <em>Outside SheCanCODE</em>
                  <ol>
                    <li>With our partners to deliver our course content;</li>
                    <li>With our professional advisors, such as lawyers and consultants;</li>
                    <li>Security and fraud prevention companies to ensure the safety and security of our customers, employees and business;</li>
                    <li>Companies who provide student support services to our students;</li>
                    <li>With companies that assist in marketing our products to you</li>
                  </ol>
                  <p>We are responsible for your personal data and ensure that appropriate safeguards are in place. Where obliged by law, we will share some personal data with Government, law and enforcement agencies. Where possible, we make this anonymous and only share statistics.</p>
                  <p>Where your consent is needed to transfer the data, we will make this clear to you in simple and clear language so you may make an informed decision. We will never share your information if it’s not legal to do so, and will always consider your rights, and whether there is another way of achieving our aim, before doing so.</p>
                </li>
              </ol>
            </section>

            <section class="section">
              <h3>Keep your personal data safe:</h3>
              <p>We use a high level of protection, both organizational and technical measures, to ensure we process our customers’ data safely. Some of the measures are:</p>
              <li>Servers that meet the highest standards for security using firewalls, secure content delivery, network mechanisms and secure architecture.</li>
              <li>Access to data via secure log-in, which is restricted by our IT teams.</li>
              <li>Buildings and areas that have access only through staff passes, and secure files stored in areas that are further restricted by passes and keys.</li>
              <li>Systems are only available through strictly controlled security processes. We ensure that only the right people have access to systems.</li>
              <li>Encryption of passwords using industry-accepted hashing algorithms such as SHA 256, SSL Encryption and RSA Encryption.</li>
            </section>
            <section class="section">
              <h3>Contact Us</h3>
              <p>If you wish to contact us in respect of part of this Admission Notice, have any questions or would like further information regarding our handling of your data, please contact us by email:</p>
              <div class="contact-info">
                <p>Designation: Data Protection Officer</p>
                <p>Physical Address: KG 549 St 36 (Kacyiru), Kigali RWANDA</p>
                <p>Email: <a href="mailto:jeaneric@igirerwanda.org">jeaneric@igirerwanda.org</a> or <a href="mailto:education@igirerwanda.org">education@igirerwanda.org</a></p>
              </div>
            </section>

            <section class="section">
              <h3>Amendments to this Admission Notice</h3>
              <p>We may change, modify, or adopt a new Admission Notice from time to time. If we do so, we will post it on our website and our social media platforms. You must check the Admission Notice every time you submit your data to us. This version was last updated on Tuesday 1st April 2024.</p>
            </section>
          </div>

          {/* Side bar  */}
          <div className="w-full md:w-[30%] flex flex-col gap-4 justify-start">
            <h3 className={"text-2xl md:text-3xl font-bold text-[#317ACC] text-left px-3 md:px-0"}>Table of content</h3>
            <ul className="list-inside mb-6 font text-base md:text-xl text-black">
              <li className={`mb-2 ${pathname === "/privacy-policy" ? "text-[#317ACC]" : ""}`}>
                <Link href="/privacy-policy">1. Privacy policy</Link>
              </li>
              <li className={`mb-2 ${pathname === "/admission-policy" ? "text-[#317ACC]" : ""}`}>
                <Link href="/admission-policy">2. Admission Policy</Link>
              </li>
              <li className={`mb-2 ${pathname === "/students-expectations" ? "text-[#317ACC]" : ""}`}>
                <Link href="/students-expectations">3. SheCanCode Learners expectations</Link>
              </li>
            </ul>
          </div>
        </div>
      </ReusableSection>
    </>
  )
}

export default page