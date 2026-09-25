/**
 * PRAVNE STRANICE — doslovno s klijentovog weba, 24. rujna 2026.
 *
 * ODLUKA K1, Petar 2026-09-24: prenosi se DOSLOVNO, na goloj stranici.
 * Pravni tekst nije nas da ga skracujemo, preformuliramo ili "poboljsavamo".
 * Jedino sto je maknuto je namjestaj koji kod njih visi na svakoj stranici:
 * ladica kosarice, widget za bodove i podnozje s ponovljenom navigacijom.
 *
 * Adrese su ISTE kao kod njih (/terms-conditions, /privacy-policy i tako
 * dalje), namjerno: kad v2 zamijeni njihov web, ovih sest URL-ova ne puca.
 *
 * Ukupno 9 773 rijeci na sest stranica.
 */

export type Block = { tag: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'li'; t: string }
export type LegalPage = { slug: string; title: string; blocks: Block[] }

export const LEGAL: LegalPage[] = [
 {
  slug: "terms-conditions",
  title: "Terms & Conditions",
  blocks: [
   {
    tag: "p",
    t: "This Agreement was last revised on [June 05 th , 2021]."
   },
   {
    tag: "h1",
    t: "Contents"
   },
   {
    tag: "p",
    t: "TERMS AND CONDITIONS"
   },
   {
    tag: "li",
    t: "INTRODUCTION"
   },
   {
    tag: "li",
    t: "DEFINITIONS"
   },
   {
    tag: "li",
    t: "INTERPRETATION"
   },
   {
    tag: "li",
    t: "INTRODUCTION AND SCOPE"
   },
   {
    tag: "li",
    t: "SERVICES"
   },
   {
    tag: "li",
    t: "MODIFICATIONS TO THE SERVICE"
   },
   {
    tag: "li",
    t: "ACCOUNT"
   },
   {
    tag: "li",
    t: "ORDERING"
   },
   {
    tag: "li",
    t: "GENERAL CONDITIONS"
   },
   {
    tag: "li",
    t: "GEOGRAPHIC RESTRICTION"
   },
   {
    tag: "li",
    t: "USER RESPONSIBILITIES"
   },
   {
    tag: "li",
    t: "ALCOHOLIC PRODUCTS"
   },
   {
    tag: "li",
    t: "EXCLUSION OF LIABILITY"
   },
   {
    tag: "li",
    t: "NO RESPONSIBILITY"
   },
   {
    tag: "li",
    t: "THIRD-PARTY LINKS"
   },
   {
    tag: "li",
    t: "PERSONAL INFORMATION AND PRIVACY POLICY"
   },
   {
    tag: "li",
    t: "ERRORS, INACCURACIES, AND OMISSIONS"
   },
   {
    tag: "li",
    t: "DISCLAIMER OF WARRANTIES; LIMITATION OF LIABILITY"
   },
   {
    tag: "li",
    t: "COPYRIGHT AND TRADEMARK"
   },
   {
    tag: "li",
    t: "INDEMNIFICATION"
   },
   {
    tag: "li",
    t: "MISCELLANEOUS"
   },
   {
    tag: "h2",
    t: "1. INTRODUCTION"
   },
   {
    tag: "p",
    t: "www.edivovina.hr (“Website”) owned and managed by EDIVO D.O.O. (“ we, ” “ us, ” or “ our ”) welcomes you."
   },
   {
    tag: "p",
    t: "We offer you access to our product through our “website” (defined below) subject to the following Terms of this Agreement, which may be updated by us from time to time with or without notice to you. We strongly recommend you kindly go through these Terms and Conditions. By accessing and using this Website, you acknowledge that you have read, understood, and agree to be lawfully bound by these Terms and Conditions and our Privacy Policy, which are hereby incorporated by reference (collectively, this “Agreement”). In case you do not agree with any of these Terms, then please do not use the Website."
   },
   {
    tag: "h2",
    t: "2. DEFINITIONS"
   },
   {
    tag: "li",
    t: "“ Agreement ” refers to this Terms and Conditions and the Privacy Policy and other documents provided to you by the Website;"
   },
   {
    tag: "li",
    t: "“ Product ” or “ Item ” refers to the product or goods available for sale on the website."
   },
   {
    tag: "li",
    t: "“Service” or “Services” refers to the services available on the website (e.g. placing an order or writing a customer review)"
   },
   {
    tag: "li",
    t: "“ User ”, “ You ” and “ your ” refers to the person who is accessing or taking any service from us."
   },
   {
    tag: "li",
    t: "“ Customer ” refers to the user who accesses the website and makes the payment for purchasing products available on the Website;"
   },
   {
    tag: "li",
    t: "“ We ”, “ us ”, “ our ” are references to EDIVO D.O.O. ;"
   },
   {
    tag: "li",
    t: "” Website ” shall mean and include \" edivovina.hr , and any successor Website or any of our affiliates;"
   },
   {
    tag: "li",
    t: "\" Customer Account ” shall mean an electronic account opened for the customer for purchasing products offered on the website;"
   },
   {
    tag: "h2",
    t: "3. INTERPRETATION"
   },
   {
    tag: "li",
    t: "All references to the singular include the plural and vice versa and the word \"includes\" should be construed as \"without limitation\"."
   },
   {
    tag: "li",
    t: "Words importing any gender shall include all the other genders."
   },
   {
    tag: "li",
    t: "Reference to any statute, ordinance, or other law includes all regulations and other instruments and all consolidations, amendments, re-enactments, or replacements for the time being in force."
   },
   {
    tag: "li",
    t: "All headings, bold typing, and italics (if any) have been inserted for convenience of reference only and do not define limit, or affect the meaning or interpretation of the terms of this Agreement."
   },
   {
    tag: "h2",
    t: "4. INTRODUCTION AND SCOPE"
   },
   {
    tag: "li",
    t: "Scope . These Terms govern your use of the Website and the Services. Except as otherwise specified, these Terms do not apply to Third-Party Products or Services, which are governed by their terms of service."
   },
   {
    tag: "li",
    t: "Eligibility : Certain Service of the Website is not available to users under the age of 18 or any users suspended or removed from the system by us for any reason."
   },
   {
    tag: "li",
    t: "Electronic Communication: When you use this Website or send e-mails and other electronic communications from your desktop or mobile device to us, you are communicating with us electronically. By sending, you agree to receive a reply communications from us electronically in the same format and you can keep copies of these communications for your records."
   },
   {
    tag: "h2",
    t: "5. SERVICES"
   },
   {
    tag: "p",
    t: "At www.edivovina.hr, we offer you a meticulously designed website where we make top quality wines, but also to make them unique.. With all of our products, we focus on quality by having our products subject to rigorous quality checks before it reaches you."
   },
   {
    tag: "h2",
    t: "6. MODIFICATIONS TO THE SERVICE"
   },
   {
    tag: "p",
    t: "We reserve the right, at our discretion, to change, modify, add to, or remove portions of the Terms (collectively, “ Changes ”), at any time. We may notify you of changes by posting a revised version of the Terms incorporating the changes to its Website. Your continued use of the Site following the posting of changes will mean that you accept and agree to the Changes."
   },
   {
    tag: "h2",
    t: "7. ACCOUNT"
   },
   {
    tag: "p",
    t: "For accessing the website and using certain Resources, you may be required to provide specific information and to create a user ID and password to establish an account."
   },
   {
    tag: "p",
    t: "You accept that the details you provide concerning establishing an account are correct and that you will keep your details up-to-date. You are responsible for the security of all of your user names, passwords, and registration information (such as unique account identifiers or historical billing information), and you are solely responsible for any use (authorized or not) of your accounts. You agree to notify us immediately about any unauthorized activity regarding any of your accounts or other breaches of security. We may at our discretion suspend or terminate any of your user names and passwords at any time with or without notice."
   },
   {
    tag: "h2",
    t: "8. ORDERING"
   },
   {
    tag: "li",
    t: "All the purchases from this website shall be governed by our terms and conditions."
   },
   {
    tag: "li",
    t: "If you make an Order for buying any product from our website. At the time of order, while providing your details you must be careful and warrant that the information provided is true and accurate."
   },
   {
    tag: "li",
    t: "You will only be charged as soon as you select product, quantity, shipping information, and enter your payment information."
   },
   {
    tag: "li",
    t: "Payment mode shall be: Online: Credit Cards and Debit cards;"
   },
   {
    tag: "li",
    t: "Any order to purchase a product that you place with us is subject to acceptance by us."
   },
   {
    tag: "li",
    t: "If there is an error in the order confirmation, please contact us immediately by email at sales@edivovina.hr ."
   },
   {
    tag: "li",
    t: "We may refuse or unable to process your order if: You do not meet the eligibility to order criteria set out above."
   },
   {
    tag: "li",
    t: "The refund shall be applicable as per our Refund Policy."
   },
   {
    tag: "li",
    t: "We are happy to support you if there is any issue you can contact our back-office team for any inquiry or problem."
   },
   {
    tag: "p",
    t: "We normally dispatch in 24 hours after the order has been placed."
   },
   {
    tag: "p",
    t: "Estimated delivery time is: 2-10 days."
   },
   {
    tag: "p",
    t: "In some cases, shipping may take longer based on your location, which will be communicated to the buyer at the time of the order. Generally, items ship as soon as possible."
   },
   {
    tag: "p",
    t: "Our return address is: Drače 18 A, Janjina 20246, Croatia."
   },
   {
    tag: "p",
    t: "We take customer feedback very seriously and use it to constantly improve our products."
   },
   {
    tag: "h2",
    t: "9. GENERAL CONDITIONS"
   },
   {
    tag: "li",
    t: "We do not guarantee the accuracy, completeness, validity, or timeliness of the information listed by us."
   },
   {
    tag: "li",
    t: "We make material changes to these terms and conditions from time to time, we may notify you either by prominently posting a notice of such changes or via email communication."
   },
   {
    tag: "li",
    t: "The website is licensed to you on a limited, non-exclusive, non-transferable, non-sublicensable basis, solely to be used in connection with the Service for your private, personal, non-commercial use, subject to all the terms and conditions of this Agreement as they apply to the Service. Any breach of this Agreement shall result in the immediate revocation of the license granted in this paragraph without notice to you."
   },
   {
    tag: "li",
    t: "You may not reproduce, distribute, display, sell, lease, transmit, create derivative works from, translate, modify, reverse- engineer, disassemble, decompile or otherwise exploit this Site or any portion of it unless expressly permitted by www.edivovina.hr in writing."
   },
   {
    tag: "li",
    t: "You may not make any commercial use of any of the information provided on the Site or make any use of the Site for the benefit of another business unless explicitly permitted by www.edivovina.hr in advance."
   },
   {
    tag: "li",
    t: "We reserve the right for any printing errors on this site as well as the final sales of products. We do not guarantee that the images reflect the exact appearance of the products as a certain color difference may occur depending on the monitor, photo quality, and resolution. We always try our best to expose the products as accurately as possible."
   },
   {
    tag: "h2",
    t: "10. GEOGRAPHIC RESTRICTION"
   },
   {
    tag: "p",
    t: "We reserve the right, to limit the usage or supply of any service to any person, geographic region, or jurisdiction. We may use this right as per necessity. We reserve the right to suspend any Service at any time. Any offer to provide any Service made on this Website is invalid where banned."
   },
   {
    tag: "h2",
    t: "11. USER RESPONSIBILITIES"
   },
   {
    tag: "li",
    t: "You shall use the Service and Website for a lawful purpose and comply with all the applicable laws while using the Website;"
   },
   {
    tag: "li",
    t: "You shall not use or access the Website for collecting any market research for some competing business;"
   },
   {
    tag: "li",
    t: "You shall not misrepresent or impersonate any person or entity for any false or illegal purpose;"
   },
   {
    tag: "li",
    t: "You will not use any device, scraper, or any automated thing to access the Website for any means without taking permission."
   },
   {
    tag: "li",
    t: "You will inform us about anything that is inappropriate or you can inform us if you find something illegal;"
   },
   {
    tag: "li",
    t: "You will not interfere with or try to interrupt the proper operation of the Website through the use of any virus, device, transmission mechanism, software, or routine, or access or try to gain access to any data, files, or passwords connected to the Website through hacking, password or data mining, or any other means;"
   },
   {
    tag: "li",
    t: "You shall not use a false e-mail address, pretend to be someone other than yourself, or otherwise mislead www.edivovina.hr or third-parties as to the origin of any Submissions or Content."
   },
   {
    tag: "li",
    t: "You warrant that your Submissions, in whole or in part, are clear and free of any IP right infringement, disputes, or third-party claims."
   },
   {
    tag: "li",
    t: "You will let us know about the unsuitable content of which you become aware. If you discover something that infringes any law, please let us know, and we’ll review it."
   },
   {
    tag: "p",
    t: "We reserve the right, in our sole and absolute discretion, to deny you access to the Website or any service, or any portion of the Website or service, without notice, and to remove any content."
   },
   {
    tag: "h2",
    t: "12. ALCOHOLIC PRODUCTS"
   },
   {
    tag: "p",
    t: "We make every effort to ensure that alcoholic beverages are not sold or delivered to anyone who is under the age of 18. Also, we work diligently to ensure that alcoholic beverages are not delivered to anyone who is under the age of 18. By using the Sites, you represent that the person placing an order, picking up the order in one of our Stores (called “in-Store pickup” or “ISP”), or receiving a shipment or delivery of alcoholic product from us (where permitted) is over the age of 18. You also agree that any alcohol purchased from us is intended for personal consumption and not for resale."
   },
   {
    tag: "p",
    t: "Your representations are critical to your right to use the Sites. If you intentionally or unintentionally misrepresent your age in order to obtain or provide alcohol to a person under the age of 18, we may take action to prevent you from accessing the Sites and report your misrepresentation to the appropriate authorities."
   },
   {
    tag: "h2",
    t: "13. EXCLUSION OF LIABILITY"
   },
   {
    tag: "p",
    t: "We take no responsibility for any indirect damage that may result from the product. www.edivovina.hr is not responsible for late deliveries for special occasions, or other events. We encourage customers to place their orders in advance to ensure there is enough time to receive their items."
   },
   {
    tag: "p",
    t: "We accept no responsibility for delays/errors due to circumstances outside of our ruling (Force Majeure). These circumstances can be, for example, labor conflict, fire, war, government decisions, reduced or non-delivery from the supplier."
   },
   {
    tag: "p",
    t: "You understand and agree that we (a) do not guarantee the accuracy, completeness, validity, or timeliness of information listed by us or any third parties; and (b) shall not be responsible for any materials posted by us or any third party. You shall use your judgment, caution, and common sense in evaluating any prospective methods or offers and any information provided by us or any third party."
   },
   {
    tag: "p",
    t: "Further, we shall not be liable for direct, indirect consequential, or any other form of loss or damage that may be suffered by a user through the use of the www.edivovina.hr Website including loss of data or information or any kind of financial or physical loss or damage."
   },
   {
    tag: "p",
    t: "In no event shall EDIVO D.O.O. , nor its Owner, directors, employees, partners, agents, suppliers, or affiliates, be accountable for any indirect, incidental, special, eventful, or exemplary costs, including without limitation, loss of proceeds, figures, usage, goodwill, or other intangible losses, consequential from (i) your use or access of or failure to access or use the Service; (ii) any conduct or content of any third party on the Service; and (iii) unlawful access, use or alteration of your transmissions or content, whether or not based on guarantee, agreement, domestic wrong (including carelessness) or any other lawful concept, whether or not we’ve been aware of the possibility of such damage."
   },
   {
    tag: "h2",
    t: "14. TYPOGRAPHICAL ERRORS"
   },
   {
    tag: "p",
    t: "While www.edivovina.hr strives to provide accurate product and pricing information, pricing or typographical errors may occur. www.edivovina.hr cannot confirm the price of an item until after you order. If an item is listed at an incorrect price or with incorrect information due to an error in pricing or product information, www.edivovina.hr shall have the right, at our sole discretion, to refuse or cancel any orders placed for that item. If an item is mispriced, www.edivovina.hr may, at our discretion, either contact you with instructions or cancel your order and notify you of such cancellation."
   },
   {
    tag: "h2",
    t: "15. NO RESPONSIBILITY"
   },
   {
    tag: "p",
    t: "We are not responsible to you for:"
   },
   {
    tag: "li",
    t: "any losses you suffer because the information you put into our website is inaccurate or incomplete; or"
   },
   {
    tag: "li",
    t: "any losses you suffer because you cannot use our website at any time; or"
   },
   {
    tag: "li",
    t: "any errors in or omissions from our website; or"
   },
   {
    tag: "li",
    t: "any unauthorized access or loss of personal information that is beyond our control."
   },
   {
    tag: "h2",
    t: "16. THIRD-PARTY LINKS"
   },
   {
    tag: "p",
    t: "The Website may comprise links to external or third-party Websites (“ External Sites ”). These links are provided exclusively as ease to you and not as an authorization by us of the content on such External Sites. The content of such External Sites is created and used by others. You can communicate with the site administrator for those External Sites. We are not accountable for the content provided in the link of any External Sites and do not provide any representations about the content or correctness of the information on such External Sites. You should take safety measures when you are downloading files from all these Websites to safeguards your computer from viruses and other critical programs. If you agree to access linked External Sites, you do so at your own risk."
   },
   {
    tag: "h2",
    t: "17. PERSONAL INFORMATION AND PRIVACY POLICY"
   },
   {
    tag: "p",
    t: "By accessing or using this Website, you approve us to use, store, or otherwise process your personal information as per our Privacy Policy."
   },
   {
    tag: "h2",
    t: "18. ERRORS, INACCURACIES, AND OMISSIONS"
   },
   {
    tag: "p",
    t: "Every effort has been taken to ensure that the information offered on this Website is accurate and error-free. We apologize for any errors or omissions that may have occurred. We cannot give you any warranty that usage of the Website will be error-free or fit for purpose, timely, that defects will be amended, or that the site or the server that makes it available are free of viruses or bugs or signifies the full functionality, accuracy, reliability of the Website and we do not make any warranty whatsoever, whether express or implied, relating to fitness for purpose, or accuracy."
   },
   {
    tag: "h2",
    t: "19. DISCLAIMER OF WARRANTIES; LIMITATION OF LIABILITY"
   },
   {
    tag: "p",
    t: "The website and the service are provided on an “as is” and “as available” basis without any warranties of any kind, including that the website will operate error-free or that the website, its servers, or its content or service are free of computer viruses or similar contamination or destructive features."
   },
   {
    tag: "p",
    t: "We disclaim all licenses or warranties, including, but not limited to, licenses or warranties of title, merchantability, non-violation of third parties rights, and fitness for a particular purpose, and any warranties arising from a matter of dealing, course of performance, or usage of trade. In relation with any warranty, contract, or common law tort claims: (i) we shall not be liable for any unintended, incidental, or substantial damages, lost profits, or damages resulting from lost data or business stoppage resulting from the use or inability to access and use the website or the content, even if we have been recommended of the possibility of such damages."
   },
   {
    tag: "p",
    t: "The website may comprise technical incorrectness or typographical errors or omissions. Unless required by applicable laws, we are not accountable for any such typographical, technical, or pricing errors recorded on the website. The website may contain information on certain services, not all of which are available in every location. A reference to a service on the websites does not suggest that such service is or will be accessible in your location. We reserve the right to do changes, corrections, and/or improvements to the website at any time without notice."
   },
   {
    tag: "h2",
    t: "20. COPYRIGHT AND TRADEMARK"
   },
   {
    tag: "p",
    t: "The Website contains material, such as software, text, graphics, images, designs, sound recordings, audiovisual works, and other material provided by or on behalf of us (collectively referred to as the “Content”). The Content may be possessed by us or third parties. Unauthorized use of the Content may infringe copyright, trademark, and other laws. You have no rights in or to the Content, and you will not take the Content except as allowed under this Agreement. No other use is allowed without prior written consent from us. You must recollect all copyright and other proprietary notices contained in the original Content on any copy you make of the Content. You may not transfer, provide license or sub-license, sell, or modify the Content or reproduce, display, publicly perform, make a derivative version of, distribute, or otherwise use the Content in any way for any public or commercial purpose. The use or posting of the Content on any other Website or in a networked computer environment for any purpose is expressly prohibited."
   },
   {
    tag: "p",
    t: "If you infringe any part of this Agreement, your permission to access and/or use the Content and the Website automatically terminates and you must immediately destroy any copies you have made of the Content."
   },
   {
    tag: "p",
    t: "Our trademarks, service marks, and logos used and displayed on the Website are registered and unregistered trademarks or service marks of us. Other product and service names located on the Website may be trademarks or service marks owned by others (the “Third-Party Trademarks,” and, collectively with us, the “Trademarks”). Nothing on the Website should be construed as granting, by implication, estoppel, or otherwise, any license or right to use the Trademarks, without our prior written permission specific for each such use. None of the Content may be retransmitted without our express, written consent for every instance."
   },
   {
    tag: "h2",
    t: "21. INDEMNIFICATION"
   },
   {
    tag: "p",
    t: "You agree to defend, indemnify, and hold us and our officers, directors, employees, successors, licensees and assigns harmless from and against any claims, actions, or demands, including, without limitation, reasonable legal and accounting fees, arising or resulting from your breach of this Agreement or your misuse of the Content or the Website. We shall provide notice to you of any such claim, suit, or proceeding and shall assist you, at your expense, in defending any such claim, suit, or proceeding. We reserve the right, at your expense, to assume the exclusive defense and control of any matter that is subject to indemnification under this section. In such case, you agree to cooperate with any reasonable requests assisting our defense of such matter."
   },
   {
    tag: "h2",
    t: "22. MISCELLANEOUS"
   },
   {
    tag: "h3",
    t: "SEVERABILITY"
   },
   {
    tag: "p",
    t: "If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that the Terms will otherwise remain in full force and effect and enforceable."
   },
   {
    tag: "h3",
    t: "TERMINATION"
   },
   {
    tag: "p",
    t: "Term . The Services will be provided to you can be canceled or terminated by us. We may terminate these Services at any time, with or without cause, upon written notice. We will have no liability to you or any third party because of such termination. Termination of these Terms will terminate all of your Services subscriptions."
   },
   {
    tag: "p",
    t: "Effect of Termination . Upon termination of these Terms for any reason, or cancellation or expiration of your Services: (a) We will cease providing the Services; (b) you will not be entitled to any refunds or usage fees, or any other fees, pro-rata or otherwise; (c) any fees you owe to us will immediately become due and payable in full, and (d) we may delete your archived data within 30 days. All sections of the Terms that expressly provide for survival, or by their nature should survive, will survive termination of the Terms, including, without limitation, indemnification, warranty disclaimers, and limitations of liability."
   },
   {
    tag: "h3",
    t: "ENTIRE AGREEMENT"
   },
   {
    tag: "p",
    t: "This Agreement constitutes the entire agreement between the parties hereto concerning the subject matter contained in this Agreement."
   },
   {
    tag: "h3",
    t: "DISPUTE RESOLUTION"
   },
   {
    tag: "p",
    t: "If a dispute arises between you and the website www.edivovina.hr, our goal is to resolve such a dispute quickly and cost-effectively. Accordingly, you and mobile application agree that we will resolve any claim or controversy at law or equity that arises between us out of this Agreement or the website and mobile application Services (a \"Claim\") following this section entitled \"Dispute Resolution.\" Before resorting to these alternatives, you agree to first contact us directly to seek dispute assistance by going to Customer Service."
   },
   {
    tag: "h3",
    t: "ARBITRATION OPTION"
   },
   {
    tag: "p",
    t: "For any claim arising between you and www.edivovina.hr (excluding claims for injunctive or other equitable relief), the party requesting relief may elect to resolve the dispute cost-effectively through binding non-appearance-based arbitration. A party electing arbitration must initiate such arbitration through an established alternative dispute resolution (\"ADR\") provider mutually agreed upon by the parties. The ADR provider and the parties must comply with the following rules: (a) the arbitration will be conducted by telephone, online, and/or be solely based on written submissions, the specific manner will be chosen by the party initiating the arbitration; (b) the arbitration will not involve any personal appearance by the parties or witnesses unless otherwise mutually agreed by the parties, and (c) if an arbitrator renders an award the party receiving the award may enter any judgment on the award in any court of competent jurisdiction."
   },
   {
    tag: "h3",
    t: "GOVERNING LAW AND JUDICIAL RECOURSE"
   },
   {
    tag: "p",
    t: "The terms herein will be governed by and construed under the laws of Croatia without giving effect to any principles of conflicts of law. The Courts of Croatia shall have exclusive jurisdiction over any dispute arising from the use of the Website."
   },
   {
    tag: "h3",
    t: "FORCE MAJEURE"
   },
   {
    tag: "p",
    t: "We will have no liability to you, your users, or any third party for any failure us to perform its obligations under these Terms if such non-performance arises as a result of the occurrence of an event beyond the reasonable control of us, including, without limitation, an act of war or terrorism, natural disaster, failure of electricity supply, riot, civil disorder, or civil commotion or other force majeure event."
   },
   {
    tag: "h3",
    t: "ASSIGNMENT"
   },
   {
    tag: "p",
    t: "We shall have the right to assign/transfer this agreement to any third party including our holding, subsidiaries, affiliates, associates, and group companies, without any consent of the User."
   },
   {
    tag: "p",
    t: "If you have any questions about our Terms & Conditions, please contact us:"
   },
   {
    tag: "li",
    t: "By email: sales@edivovina.hr"
   },
   {
    tag: "li",
    t: "By visiting this page on our website: https://www.edivovina.hr/contact"
   },
   {
    tag: "p",
    t: "Janjina 62, 20246 Janjina Pelješac peninsula Croatia – Hrvatska"
   },
   {
    tag: "p",
    t: "Drače 18, 20246 Drače Pelješac peninsula Croatia – Hrvatska"
   },
   {
    tag: "li",
    t: "+385 91 6127 229"
   },
   {
    tag: "li",
    t: "info@edivovina.hr"
   },
   {
    tag: "li",
    t: "Terms & Conditions"
   },
   {
    tag: "li",
    t: "Privacy Policy"
   },
   {
    tag: "li",
    t: "Cookie Policy"
   },
   {
    tag: "li",
    t: "Return & Refund Policy"
   },
   {
    tag: "li",
    t: "Shipping & Cancellation Policy"
   },
   {
    tag: "li",
    t: "Disclaimer"
   },
   {
    tag: "p",
    t: "No products in the cart."
   },
   {
    tag: "li",
    t: "Already have an account?"
   },
   {
    tag: "li",
    t: "Sign in"
   }
  ]
 },
 {
  slug: "privacy-policy",
  title: "Privacy Policy",
  blocks: [
   {
    tag: "p",
    t: "Last updated [June 05 th , 2021]"
   },
   {
    tag: "p",
    t: "Our Privacy Policy forms part of and must be read in conjunction with, website Terms and Conditions. We reserve the right to change this Privacy Policy at any time."
   },
   {
    tag: "p",
    t: "We respect the privacy of our users and every person who visits our site www.edivovina.hr . Here, EDIVO D.O.O. refers to as (“we”, “us”, or “our”). We are committed to protecting your personal information and your right to privacy under this Privacy Policy. If you have any questions or concerns about our policy or our practices with regards to your personal information, please contact us at sales@edivovina.hr ."
   },
   {
    tag: "p",
    t: "When you visit our website www.edivovina.hr (“Site”) and use our services, you trust us with your personal information. We take your privacy very seriously. In this privacy notice, we describe our privacy policy. We seek to explain to you in the clearest way possible what information we collect, how we use it, and what rights you have concerning it. We hope you take some time to read through it carefully, as it is important. If there are any terms in this privacy policy that you do not agree with, please discontinue the use of our site and our services."
   },
   {
    tag: "p",
    t: "At www.edivovina.hr, we offer you a meticulously designed website where we make top quality wines, but also to make them unique. With all of our products, we focus on quality by having our products subject to rigorous quality checks before it reaches you. We are located in Croatia."
   },
   {
    tag: "p",
    t: "Please read this privacy policy carefully as it will help you make informed decisions about sharing your personal information with us."
   },
   {
    tag: "h1",
    t: "Interpretation and Definitions"
   },
   {
    tag: "h2",
    t: "Interpretation"
   },
   {
    tag: "p",
    t: "The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural."
   },
   {
    tag: "h2",
    t: "Definitions"
   },
   {
    tag: "p",
    t: "For the purposes of this Privacy Policy:"
   },
   {
    tag: "li",
    t: "Account means a unique account created for You to access our Service or parts of our Service."
   },
   {
    tag: "li",
    t: "Company (referred to as either \"the Company\", \"We\", \"Us\" or \"Our\" in this Agreement) refers to EDIVO d.o.o, Kunićeva ul. 13, Dubrovnik, Croatia 20000."
   },
   {
    tag: "li",
    t: "Cookies are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses."
   },
   {
    tag: "li",
    t: "Country refers to: Croatia"
   },
   {
    tag: "li",
    t: "Device means any device that can access the Service such as a computer, a cellphone or a digital tablet."
   },
   {
    tag: "li",
    t: "Personal Data is any information that relates to an identified or identifiable individual."
   },
   {
    tag: "li",
    t: "Service refers to the Website."
   },
   {
    tag: "li",
    t: "Service Provider means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used."
   },
   {
    tag: "li",
    t: "Third-party Social Media Service refers to any website or any social network website through which a User can log in or create an account to use the Service."
   },
   {
    tag: "li",
    t: "Usage Data refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit)."
   },
   {
    tag: "li",
    t: "Website refers to Edivo Vina, accessible from https://www.edivovina.hr/"
   },
   {
    tag: "li",
    t: "You means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable."
   },
   {
    tag: "h2",
    t: "1. WHAT INFORMATION DO WE COLLECT?"
   },
   {
    tag: "p",
    t: "The personal information you disclose to us"
   },
   {
    tag: "p",
    t: "We collect personal information that you voluntarily provide to us when expressing an interest in obtaining information about us or our products when participating in activities on the Site or otherwise contacting us."
   },
   {
    tag: "p",
    t: "The personal information that we collect depends on the context of your interactions with us and the Site, the choices you make, and the products and features you use. The personal information we collect can include the following:"
   },
   {
    tag: "li",
    t: "Name and Contact Data. We collect your first and last name, email address, postal address, phone number, and other similar contact data."
   },
   {
    tag: "li",
    t: "Credentials. We collect passwords, password hints, and similar security information used for authentication and account access."
   },
   {
    tag: "li",
    t: "Payment . Customers can pay with VISA card or credit card, where the transaction is via a secure connection through QuickPay."
   },
   {
    tag: "p",
    t: "Information automatically collected"
   },
   {
    tag: "p",
    t: "We automatically collect certain information when you visit, use, or navigate the Site. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser, and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Site and other technical information. If you access our site with your mobile device, we may automatically collect device information (such as your mobile device ID, model, and manufacturer), operating system, version information, and IP address. This information is primarily needed to maintain the security and operation of our Site, and for our internal analytics and reporting purposes."
   },
   {
    tag: "p",
    t: "Like many businesses, we also collect information through cookies and similar technologies. You can find out more about this in our Cookie Policy ."
   },
   {
    tag: "p",
    t: "Information collected from other Sources"
   },
   {
    tag: "p",
    t: "We may obtain information about you from other sources, such as public databases, joint marketing partners, social media platforms (such as Facebook, Instagram, Tiktok, Twitter), as well as from other third parties."
   },
   {
    tag: "p",
    t: "If you have chosen to subscribe to our newsletter, your first name, last name, birthday, and e-mail address will be shared with our newsletter provider. This is to keep you updated with information and offers for marketing purposes. We send email content to our customers that may include the following: Transaction mail, Shipping notification, Weekly deal, Promotion, Activity."
   },
   {
    tag: "p",
    t: "If you have chosen to subscribe to our newsletter, your first name, last name and e-mail address will be shared with our newsletter provider. We use Klaviyo for email marketing services. Klaviyo’s privacy policy is located at https://www.klaviyo.com/privacy/policy ."
   },
   {
    tag: "p",
    t: "External Processors perform only the activities that are necessary to provide our services. Your personal data is transmitted to the following external data processors: Web račun, Croatia."
   },
   {
    tag: "p",
    t: "All external Processors are committed to complying with the applicable data protection regulations."
   },
   {
    tag: "h2",
    t: "2. HOW DO WE USE YOUR INFORMATION?"
   },
   {
    tag: "p",
    t: "We use your personal information for these purposes in reliance on our legitimate business interests (“Business Purposes”), to enter into or perform a contract with you (“Contractual”), with your consent (“Consent”), and/or for compliance with our legal obligations (“Legal Reasons”). We indicate the specific processing grounds we rely on next to each purpose listed below."
   },
   {
    tag: "p",
    t: "We use the information we collect or receive:"
   },
   {
    tag: "li",
    t: "To send administrative information to you related to your account, our business purposes, and/or for legal reasons. We may use your personal information to send you a product, and new feature information, and/or information about changes to our terms, conditions, and policies."
   },
   {
    tag: "li",
    t: "Deliver targeted advertising to you for our Business Purposes and/or with your Consent. We may use your information to develop and display content and advertising (and work with third parties who do so) tailored to your interests and/or location and to measure its effectiveness. For more information, see our Cookie Policy ."
   },
   {
    tag: "li",
    t: "Request Feedback for our Business Purposes and/or with your Consent. We may use your information to request feedback and to contact you about your use of our Site."
   },
   {
    tag: "li",
    t: "To protect our Site for Business Purposes and/or Legal Reasons. We may use your information as part of our efforts to keep our Site safe and secure (for example, for fraud monitoring and prevention)."
   },
   {
    tag: "li",
    t: "To enable user-to-user communications with your consent. We may use your information to enable user-to-user communications with each user’s consent."
   },
   {
    tag: "li",
    t: "To enforce our terms, conditions, and policies for our business purposes and as legally required."
   },
   {
    tag: "li",
    t: "To respond to legal requests and prevent harm as legally required. If we receive a subpoena or other legal request, we may need to inspect the data we hold to determine how to respond."
   },
   {
    tag: "li",
    t: "For other Business Purposes . We may use your information for other Business Purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns, and evaluating and improve our Site, products, services, marketing, and experience."
   },
   {
    tag: "h2",
    t: "3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?"
   },
   {
    tag: "p",
    t: "We only share and disclose your information in the following situations:"
   },
   {
    tag: "li",
    t: "Compliance with Laws . We may disclose your information where we are legally required to do so to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal processes, such as in response to a court order or a subpoena (including in response to public authorities to meet national security or law enforcement requirements)."
   },
   {
    tag: "li",
    t: "Vital Interests and Legal Rights . We may disclose your information where we believe it is necessary to investigate, prevent, or take action regarding potential violations of our policies, suspected fraud, situations involving potential threats to the safety of any person, and illegal activities, or as evidence in litigation in which we are involved."
   },
   {
    tag: "li",
    t: "Vendors, Consultants, and Other Third-Party Service Providers . We may share your data with third-party vendors, service providers, contractors, or agents who perform services for us or on our behalf and require access to such information to do that work."
   },
   {
    tag: "li",
    t: "Business Transfers . We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company."
   },
   {
    tag: "li",
    t: "Third-Party Advertisers . We may use third-party advertising companies to serve ads when you visit the Site. These companies may use information about your visits to our Site and other websites that are contained in web cookies and other tracking technologies to provide advertisements about goods and services of interest to you."
   },
   {
    tag: "li",
    t: "Affiliates. We may share your information with our affiliates, in which case we will require those affiliates to honor this privacy policy. Affiliates include our parent company and any subsidiaries, joint venture partners, or other companies that we control or that are under common control with us."
   },
   {
    tag: "li",
    t: "Business Partners. We may share your information with our business partners to offer you certain products, services, or promotions."
   },
   {
    tag: "li",
    t: "With your Consent. We may disclose your personal information for any other purpose with your consent."
   },
   {
    tag: "li",
    t: "Other Users. When you share personal information (for example, by posting comments, contributions, or other content to the Site) or otherwise interact with public areas of the Site, such personal information may be viewed by all users and may be publicly distributed outside the Site in perpetuity."
   },
   {
    tag: "h2",
    t: "4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?"
   },
   {
    tag: "p",
    t: "We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Policy ."
   },
   {
    tag: "h2",
    t: "5. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?"
   },
   {
    tag: "p",
    t: "The website is hosted at Cloudways in datacentres located in Germany. It is protected by 256-bit encryption. SSL certificate provided by Let’s Encrypt from the Internet Security Research Group (ISRG)."
   },
   {
    tag: "p",
    t: "Cloudways security details: https://www.cloudways.com/"
   },
   {
    tag: "p",
    t: "Let’s Encrypt privacy policy: https://letsencrypt.org/privacy/"
   },
   {
    tag: "p",
    t: "We will not transfer your personal information to an overseas recipient."
   },
   {
    tag: "h2",
    t: "6. WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?"
   },
   {
    tag: "p",
    t: "The Site may contain advertisements from third parties that are not affiliated with us and which may link to other websites, online services, or mobile applications. We cannot guarantee the safety and privacy of the data you provide to any third parties. Any data collected by third parties is not covered by this privacy policy. We are not responsible for the content or privacy and security practices and policies of any third parties, including other websites, services, or applications that may be linked to or from the Site. You should review the policies of such third parties and contact them directly to respond to your questions."
   },
   {
    tag: "h2",
    t: "7. ANALY TICS AND ADVERTISING"
   },
   {
    tag: "p",
    t: "Facebook Pixel"
   },
   {
    tag: "p",
    t: "Based on our legitimate interests in the analysis, optimization, and economic operation of our online offering and for these purposes, this website uses what is called the \"Facebook pixel\" of the social network Facebook operated by Facebook Inc., 1 Hacker Way, Menlo Park, CA 94025, USA or, if you are resident in the EU, by Facebook Ireland Ltd., 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Ireland (\"Facebook\")."
   },
   {
    tag: "p",
    t: "The Facebook pixel allows Facebook to identify the visitors to our online offering as a target group for this display of advertisements (known as Facebook ads). Accordingly, we use the Facebook pixel to display the Facebook ads placed by us only to those Facebook users who have shown an interest in our online offering, or who exhibit certain characteristics (e.g. interest in certain topics or products determined based on the websites that are visited), which we transmit to Facebook (known as Custom Audiences). We also use the Facebook pixel to ensure that our Facebook ads correspond to the potential interests of users and are not perceived as bothersome. With the help of the Facebook pixel, we are also able to understand the effectiveness of Facebook ads for statistical and market research purposes by seeing whether users were forwarded to our website after clicking a Facebook advertisement (known as conversion)."
   },
   {
    tag: "p",
    t: "Facebook processes the data according to Facebook’s data usage guidelines. Corresponding general information about the display of Facebook ads in Facebook’s data usage guideline: https://www.facebook.com/about/privacy/. Specific information and details about the Facebook pixel and its functionality are available in the Facebook help section: https://www.facebook.com/business/help/651294705016616."
   },
   {
    tag: "p",
    t: "You can object to the recording of data by the Facebook pixel and their use for the display of Facebook ads. To choose what types of advertisements are displayed to you on Facebook, you can call up the page set up by Facebook and follow the instructions for configuring usage-based advertising settings: https://www.facebook.com/settings?tab=ads. The settings are platform-independent, meaning they apply to all devices including desktop computers and mobile devices."
   },
   {
    tag: "p",
    t: "You can also object to the use of cookies to measure coverage and for promotional purposes on the deactivation page of the network advertising initiative (http://optout.networkadvertising.org/) and the US website (http://www.aboutads.info/choices) or the European website ( http://www.youronlinechoices.com/uk/your-ad-choices/ )."
   },
   {
    tag: "p",
    t: "Google reCAPTCHA"
   },
   {
    tag: "p",
    t: "We use \"Google reCAPTCHA\" (hereinafter \"reCAPTCHA\") on our websites. This service is provided by Google Inc., 1600 Amphitheater Parkway, Mountain View, CA 94043, USA (\"Google\")."
   },
   {
    tag: "p",
    t: "reCAPTCHA is used to check whether the data entered on our website (such as on a contact form) has been entered by a human or by an automated program. To do this, reCAPTCHA analyzes the behavior of the website visitor based on various characteristics. This analysis starts automatically as soon as the website visitor enters the website. For the analysis, reCAPTCHA evaluates various information (e.g. IP address, how long the visitor has been on the website, or mouse movements made by the user). The data collected during the analysis will be forwarded to Google."
   },
   {
    tag: "p",
    t: "The reCAPTCHA analyses take place completely in the background. Website visitors are not advised that such an analysis is taking place."
   },
   {
    tag: "p",
    t: "Data processing is based on Art. 6 (1) (f) DSGVO. The website operator has a legitimate interest in protecting its site from abusive automated crawling and spam."
   },
   {
    tag: "p",
    t: "For more information about Google reCAPTCHA and Google’s privacy policy, please visit the following"
   },
   {
    tag: "p",
    t: "links: https://www.google.com/intl/de/policies/privacy/ and https://www.google.com/recaptcha/intro/android.html"
   },
   {
    tag: "h2",
    t: "8. HOW LONG DO WE KEEP YOUR INFORMATION?"
   },
   {
    tag: "p",
    t: "We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy policy unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements)."
   },
   {
    tag: "p",
    t: "When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize it, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible."
   },
   {
    tag: "h2",
    t: "9. HOW DO WE KEEP YOUR INFORMATION SAFE?"
   },
   {
    tag: "p",
    t: "We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure. Although we will do our best to protect your personal information, the transmission of personal information to and from our Site is at your own risk. You should only access the services within a secure environment."
   },
   {
    tag: "h2",
    t: "10. DO WE COLLECT INFORMATION FROM MINORS?"
   },
   {
    tag: "p",
    t: "We do not knowingly solicit data from or market to children under 18 years of age. By using the Site, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent’s use of the Site. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we have collected from children under age 18, please contact us at sales@edivovina.hr ."
   },
   {
    tag: "h2",
    t: "11. WHAT ARE YOUR PRIVACY RIGHTS?"
   },
   {
    tag: "p",
    t: ". Personal Information"
   },
   {
    tag: "p",
    t: "You may at any time review or change the information in your account or terminate your account by:"
   },
   {
    tag: "li",
    t: "Contacting us using the contact information provided below"
   },
   {
    tag: "p",
    t: "Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, some information may be retained in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our Terms of Use, and/or comply with legal requirements."
   },
   {
    tag: "p",
    t: "Cookies and similar technologies : Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Site."
   },
   {
    tag: "h2",
    t: "12. DO WE MAKE UPDATES TO THIS POLICY?"
   },
   {
    tag: "p",
    t: "We may update this privacy policy from time to time. The updated version will be indicated by an updated “Revised” date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy policy, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy policy frequently to be informed of how we are protecting your information."
   },
   {
    tag: "h2",
    t: "13. HOW CAN YOU CONTACT US ABOUT THIS POLICY?"
   },
   {
    tag: "p",
    t: "If you have any questions about our Privacy Policy, please contact us:"
   },
   {
    tag: "li",
    t: "By email: sales@edivovina.hr"
   },
   {
    tag: "li",
    t: "By visiting this page on our website: https://www.edivovina.hr/contact"
   },
   {
    tag: "p",
    t: "Janjina 62, 20246 Janjina Pelješac peninsula Croatia – Hrvatska"
   },
   {
    tag: "p",
    t: "Drače 18, 20246 Drače Pelješac peninsula Croatia – Hrvatska"
   },
   {
    tag: "li",
    t: "+385 91 6127 229"
   },
   {
    tag: "li",
    t: "info@edivovina.hr"
   },
   {
    tag: "li",
    t: "Terms & Conditions"
   },
   {
    tag: "li",
    t: "Privacy Policy"
   },
   {
    tag: "li",
    t: "Cookie Policy"
   },
   {
    tag: "li",
    t: "Return & Refund Policy"
   },
   {
    tag: "li",
    t: "Shipping & Cancellation Policy"
   },
   {
    tag: "li",
    t: "Disclaimer"
   },
   {
    tag: "p",
    t: "No products in the cart."
   },
   {
    tag: "li",
    t: "Already have an account?"
   },
   {
    tag: "li",
    t: "Sign in"
   }
  ]
 },
 {
  slug: "cookie-policy",
  title: "Cookie Policy",
  blocks: [
   {
    tag: "h3",
    t: "About this cookie policy"
   },
   {
    tag: "p",
    t: "This Cookie Policy explains what cookies are and how we use them, the types of cookies we use i.e, the information we collect using cookies and how that information is used, and how to control the cookie preferences. For further information on how we use, store, and keep your personal data secure, see our Privacy Policy."
   },
   {
    tag: "p",
    t: "You can at any time change or withdraw your consent from the Cookie Declaration on our website Learn more about who we are, how you can contact us, and how we process personal data in our Privacy Policy. Your consent applies to the following domains: https://www.edivovina.hr"
   },
   {
    tag: "h2",
    t: "What are cookies ?"
   },
   {
    tag: "h2",
    t: "How do we use cookies ?"
   },
   {
    tag: "p",
    t: "As most of the online services, our website uses first-party and third-party cookies for several purposes. First-party cookies are mostly necessary for the website to function the right way, and they do not collect any of your personally identifiable data."
   },
   {
    tag: "p",
    t: "The third-party cookies used on our website are mainly for understanding how the website performs, how you interact with our website, keeping our services secure, providing advertisements that are relevant to you, and all in all providing you with a better and improved user experience and help speed up your future interactions with our website."
   },
   {
    tag: "h2",
    t: "What types of cookies do we use ?"
   },
   {
    tag: "p",
    t: "Essential: Some cookies are essential for you to be able to experience the full functionality of our site. They allow us to maintain user sessions and prevent any security threats. They do not collect or store any personal information. For example, these cookies allow you to log-in to your account and add products to your basket, and checkout securely."
   },
   {
    tag: "p",
    t: "Statistics: These cookies store information like the number of visitors to the website, the number of unique visitors, which pages of the website have been visited, the source of the visit, etc. These data help us understand and analyze how well the website performs and where it needs improvement."
   },
   {
    tag: "p",
    t: "Marketing: Our website displays advertisements. These cookies are used to personalize the advertisements that we show to you so that they are meaningful to you. These cookies also help us keep track of the efficiency of these ad campaigns. The information stored in these cookies may also be used by the third-party ad providers to show you ads on other websites on the browser as well."
   },
   {
    tag: "p",
    t: "Functional: These are the cookies that help certain non-essential functionalities on our website. These functionalities include embedding content like videos or sharing content of the website on social media platforms."
   },
   {
    tag: "p",
    t: "Preferences: These cookies help us store your settings and browsing preferences like language preferences so that you have a better and efficient experience on future visits to the website. Cookie Description __kla_id This cookie is set by the provider Klsviyo. This cookie is used to collect information on the visitor’s behaviour. This information is used for internal analytics and is used to optimize the website. It also register if the visitor has subscribed to news letter. _fbp This cookie is set by Facebook to deliver advertisement when they are on Facebook or a digital platform powered by Facebook advertising after visiting this website. _ga This cookie is installed by Google Analytics. The cookie is used to calculate visitor, session, campaign data and keep track of site usage for the site’s analytics report. The cookies store information anonymously and assign a randomly generated number to identify unique visitors. _gat_gtag_UA_90629328_38 This cookie is set by Google and is used to distinguish users. _gid This cookie is installed by Google Analytics. The cookie is used to store information of how visitors use a website and helps in creating an analytics report of how the website is doing. The data collected including the number visitors, the source where they have come from, and the pages visted in an anonymous form. cookielawinfo-checbox-analytics This cookie is set by GDPR Cookie Consent plugin. The cookie is used to store the user consent for the cookies in the category \"Analytics\". cookielawinfo-checbox-functional The cookie is set by GDPR cookie consent to record the user consent for the cookies in the category \"Functional\". cookielawinfo-checbox-others This cookie is set by GDPR Cookie Consent plugin. The cookie is used to store the user consent for the cookies in the category \"Other. cookielawinfo-checkbox-advertisement The cookie is set by GDPR cookie consent to record the user consent for the cookies in the category \"Advertisement\". cookielawinfo-checkbox-necessary This cookie is set by GDPR Cookie Consent plugin. The cookies is used to store the user consent for the cookies in the category \"Necessary\". cookielawinfo-checkbox-performance This cookie is set by GDPR Cookie Consent plugin. The cookie is used to store the user consent for the cookies in the category \"Performance\". fr The cookie is set by Facebook to show relevant advertisments to the users and measure and improve the advertisements. The cookie also tracks the behavior of the user across the web on sites that have Facebook pixel or Facebook social plugin. gdpr_status This cookie is set by the provider Media.net. This cookie is used to check the status whether the user has accepted the cookie consent box. It also helps in not showing the cookie consent box upon re-entry to the website. IDE Used by Google DoubleClick and stores information about how the user uses the website and any other advertisement before visiting the website. This is used to present users with ads that are relevant to them according to the user profile. KL_FORMS_MODAL Tracks when someone subscribes (opts in) to a form test_cookie This cookie is set by doubleclick.net. The purpose of the cookie is to determine if the user’s browser supports cookies. viewed_cookie_policy The cookie is set by the GDPR Cookie Consent plugin and is used to store whether or not user has consented to the use of cookies. It does not store any personal data. VISITOR_INFO1_LIVE This cookie is set by Youtube. Used to track the information of the embedded YouTube videos on a website. YSC This cookies is set by Youtube and is used to track the views of embedded videos."
   },
   {
    tag: "h2",
    t: "How can I control the cookie preferences ?"
   },
   {
    tag: "p",
    t: "Should you decide to change your preferences later through your browsing session, you can click on the \"Privacy & Cookie Policy\" tab on your screen. This will display the consent notice again enabling you to change your preferences or withdraw your consent entirely."
   },
   {
    tag: "p",
    t: "In addition to this, different browsers provide different methods to block and delete cookies used by websites. You can change the settings of your browser to block/delete the cookies. To find out more about how to manage and delete cookies, visit wikipedia.org, www.allaboutcookies.org."
   },
   {
    tag: "p",
    t: "Janjina 62, 20246 Janjina Pelješac peninsula Croatia – Hrvatska"
   },
   {
    tag: "p",
    t: "Drače 18, 20246 Drače Pelješac peninsula Croatia – Hrvatska"
   },
   {
    tag: "li",
    t: "+385 91 6127 229"
   },
   {
    tag: "li",
    t: "info@edivovina.hr"
   },
   {
    tag: "li",
    t: "Terms & Conditions"
   },
   {
    tag: "li",
    t: "Privacy Policy"
   },
   {
    tag: "li",
    t: "Cookie Policy"
   },
   {
    tag: "li",
    t: "Return & Refund Policy"
   },
   {
    tag: "li",
    t: "Shipping & Cancellation Policy"
   },
   {
    tag: "li",
    t: "Disclaimer"
   },
   {
    tag: "p",
    t: "No products in the cart."
   },
   {
    tag: "li",
    t: "Already have an account?"
   },
   {
    tag: "li",
    t: "Sign in"
   }
  ]
 },
 {
  slug: "return-refund-policy",
  title: "Return & Refund Policy",
  blocks: [
   {
    tag: "p",
    t: "Last updated [June 05 th , 2021]"
   },
   {
    tag: "p",
    t: "Our Return and Exchange Policy forms part of and must be read in conjunction with, website Terms and Conditions. We reserve the right to change this Return and Exchange Policy at any time."
   },
   {
    tag: "h2",
    t: "Returns (Perishable Goods only)"
   },
   {
    tag: "p",
    t: "Due to the perishable nature of our product, we do not accept returns. In the event you are dissatisfied with your purchase, you must contact us within 30 days of receiving your order. We reserve the right to limit refunds and replacements, and we can only offer one replacement per consumer."
   },
   {
    tag: "h2",
    t: "Damaged product"
   },
   {
    tag: "p",
    t: "When the product is incorrect from the one that the customer ordered or when the product is damaged, the customer has to send photos or a video within 48 hours after delivery that shows the item is incorrect or DOA (Dead On Arrival)."
   },
   {
    tag: "p",
    t: "In this case, we will reship a new item and the customer shall return the delivered product."
   },
   {
    tag: "p",
    t: "We will ask the customer to send the product back to our factory (the full address and number of days will be provided to the customer via email). In this case, the customer shall be held responsible for all the shipping fees."
   },
   {
    tag: "p",
    t: "In case, our customer support team accepts the exchange of your product. The customer shall be held responsible for all the shipping fees."
   },
   {
    tag: "li",
    t: "The customer must ensure to return the item with its original packaging and all accessories in the same condition as received. Be sure to provide the tracking number as soon as you ship your return."
   },
   {
    tag: "li",
    t: "All customers must contact www.edivovina.hr for approval before sending or returning any item to us."
   },
   {
    tag: "li",
    t: "edivovina.hr will not be responsible for the returned item without prior notification to www.edivovina.hr."
   },
   {
    tag: "li",
    t: "To ensure that your Return is valid: Always process a return following our Return procedure"
   },
   {
    tag: "p",
    t: "Note: www.edivovina.hr reserves the right to any changes to the return and exchange policy. Any changes will be updated on our website."
   },
   {
    tag: "p",
    t: "Any sale or promotional items that are sold are non-refundable and non-returnable."
   },
   {
    tag: "p",
    t: "If you have any questions about our Return & Refund Policy, please contact us:"
   },
   {
    tag: "li",
    t: "By email: sales@edivovina.hr"
   },
   {
    tag: "li",
    t: "By visiting this page on our website: https://www.edivovina.hr/contact"
   },
   {
    tag: "p",
    t: "Janjina 62, 20246 Janjina Pelješac peninsula Croatia – Hrvatska"
   },
   {
    tag: "p",
    t: "Drače 18, 20246 Drače Pelješac peninsula Croatia – Hrvatska"
   },
   {
    tag: "li",
    t: "+385 91 6127 229"
   },
   {
    tag: "li",
    t: "info@edivovina.hr"
   },
   {
    tag: "li",
    t: "Terms & Conditions"
   },
   {
    tag: "li",
    t: "Privacy Policy"
   },
   {
    tag: "li",
    t: "Cookie Policy"
   },
   {
    tag: "li",
    t: "Return & Refund Policy"
   },
   {
    tag: "li",
    t: "Shipping & Cancellation Policy"
   },
   {
    tag: "li",
    t: "Disclaimer"
   },
   {
    tag: "p",
    t: "No products in the cart."
   },
   {
    tag: "li",
    t: "Already have an account?"
   },
   {
    tag: "li",
    t: "Sign in"
   }
  ]
 },
 {
  slug: "shipping-cancellation-policy",
  title: "Shipping & Cancellation Policy",
  blocks: [
   {
    tag: "p",
    t: "Last updated [June 10 th , 2022]"
   },
   {
    tag: "p",
    t: "Our Shipping and Cancellation Policy forms part of and must be read in conjunction with, website Terms and Conditions. We reserve the right to change this Shipping and Delivery Policy at any time."
   },
   {
    tag: "p",
    t: "We (www.edivovina.hr) know that your order arriving on time for your event is VITAL. You shall order with our free standard turnaround time, we never take an order unless we are 100% sure that we can guarantee your deadline. The total delivery time is Order Processing Time + Delivery Time."
   },
   {
    tag: "p",
    t: "Delivery will be made through our Courier Partners UPS, DPD & DHL."
   },
   {
    tag: "p",
    t: "We normally dispatch in 24 hours after the order has been placed."
   },
   {
    tag: "p",
    t: "In some cases, shipping may take longer based on your location, which will be communicated to the buyer at the time of the order. Generally, items ship as soon as possible."
   },
   {
    tag: "p",
    t: "Customs taxes according to the nature of each country shall be borne by the customer and he/she must be aware of its details according to his/her country."
   },
   {
    tag: "p",
    t: "The buyer is responsible for the customs fees. The sender doesn’t do refunds in cases when the buyer refused to pay customs fees."
   },
   {
    tag: "p",
    t: "When your package is scanned by our shipping provider, it automatically sends you an email with the tracking number included. Please refer to your tracking information to get an estimate on when you will receive your item(s). We reserve the right to use an email address you provide in your details while making an Order to inform you about updates and other information regarding your Order."
   },
   {
    tag: "p",
    t: "If you have any other questions, please contact us at sales@edivovina.hr"
   },
   {
    tag: "p",
    t: "The delivery fee is calculated based on the value of the order, product size, and destination country."
   },
   {
    tag: "p",
    t: "Additional delivery service fees may be applicable based on the specific conditions of each delivery. We reserve the right to charge an additional delivery fee if the recipient is not available to accept delivery at the nominated delivery time, or if the recipient is not available to accept the delivery after a reasonable amount of delivery attempts."
   },
   {
    tag: "p",
    t: "It is the responsibility of the Customer to notify our Website immediately of any change to their delivery address."
   },
   {
    tag: "p",
    t: "We reserve the right to decline delivery of goods to any Customer at our sole discretion."
   },
   {
    tag: "h2",
    t: "ORDER CANCEL:"
   },
   {
    tag: "p",
    t: "Please accept our apologies, occasionally we have to cancel orders for some reasons:"
   },
   {
    tag: "p",
    t: "Product unavailability: We try to get as much choice as possible onto our website, and occasionally we have to cancel orders when the ordered product is unavailable. Customer cancellation : If you have requested to cancel part or all of your order."
   },
   {
    tag: "h2",
    t: "CANCELLATION POLICY"
   },
   {
    tag: "p",
    t: "Here, at www.edivovina.hr , Order cancellations are available exclusively via the contact form to the Website, no later than 48 hours from the time of purchase and before the item is shipped. For any issue, you can contact us at our email sales@edivovina.hr."
   },
   {
    tag: "p",
    t: "We take customer feedback very seriously and use it to constantly improve our products and quality of service."
   },
   {
    tag: "h2",
    t: "UNETHICAL ORDER & CANCELLATION POLICY"
   },
   {
    tag: "li",
    t: "In case of any product purchase made through unethical means; by taking advantage of a technical glitch; or by misusing/ the offer terms/guidelines/codes – the particular order/s will be canceled whatsoever and edivovina.hr will not be liable to pay any refund to you in all such cases."
   },
   {
    tag: "p",
    t: "If you have any questions about our Shipping & Cancellation Policy, please contact us:"
   },
   {
    tag: "li",
    t: "By email: sales@edivovina.hr"
   },
   {
    tag: "li",
    t: "By visiting this page on our website: https://www.edivovina.hr/contact"
   },
   {
    tag: "p",
    t: "Janjina 62, 20246 Janjina Pelješac peninsula Croatia – Hrvatska"
   },
   {
    tag: "p",
    t: "Drače 18, 20246 Drače Pelješac peninsula Croatia – Hrvatska"
   },
   {
    tag: "li",
    t: "+385 91 6127 229"
   },
   {
    tag: "li",
    t: "info@edivovina.hr"
   },
   {
    tag: "li",
    t: "Terms & Conditions"
   },
   {
    tag: "li",
    t: "Privacy Policy"
   },
   {
    tag: "li",
    t: "Cookie Policy"
   },
   {
    tag: "li",
    t: "Return & Refund Policy"
   },
   {
    tag: "li",
    t: "Shipping & Cancellation Policy"
   },
   {
    tag: "li",
    t: "Disclaimer"
   },
   {
    tag: "p",
    t: "No products in the cart."
   },
   {
    tag: "li",
    t: "Already have an account?"
   },
   {
    tag: "li",
    t: "Sign in"
   }
  ]
 },
 {
  slug: "disclaimer",
  title: "Disclaimer",
  blocks: [
   {
    tag: "p",
    t: "Last updated [June 05 th , 2021]"
   },
   {
    tag: "p",
    t: "This Disclaimer forms part of and must be read in conjunction with, website Terms and Conditions. We reserve the right to change this Disclaimer at any time."
   },
   {
    tag: "p",
    t: "The information contained on this website is for general information purposes only. The information is provided by www.edivovina.hr (“ TRE STELLE J.D.O.O. ” or “ we ”)."
   },
   {
    tag: "p",
    t: "You understand and agree that we (a) do not guarantee the accuracy, completeness, validity, or timeliness of information listed by us or any third parties; and (b) shall not be responsible for any materials posted by us or any third party. You shall use your judgment, caution, and common sense in evaluating any prospective methods or offers and any information provided by us or any third party."
   },
   {
    tag: "p",
    t: "Further, we shall not be liable for direct, indirect consequential, or any other form of loss or damage that may be suffered by a user through the use of the www.edivovina.hr Website including loss of data or information or any kind of financial or physical loss or damage."
   },
   {
    tag: "h2",
    t: "General:"
   },
   {
    tag: "p",
    t: "The website, its content, and service are provided on an “as is” and “as available” basis without any warranties of any kind, including that the website will operate error-free or that the website, its servers, its content, or its service are free of computer viruses or similar contamination or destructive features. Although we seek to maintain safe, secure, accurate, and well-functioning services, we cannot guarantee the continuous operation of or access to our services, and there may at times be inadvertent technical or factual errors or inaccuracies."
   },
   {
    tag: "h2",
    t: "1. No warranties."
   },
   {
    tag: "p",
    t: "We specifically (but without limitation) disclaims"
   },
   {
    tag: "li",
    t: "Any implied warranties of merchantability, fitness for a particular purpose, quiet enjoyment, or non-infringement; and"
   },
   {
    tag: "li",
    t: "Any warranties arising out of course-of-dealing, usage, or trade. You assume all risk for any/all damages that may result from your use of or access to the services. We shall not be responsible for the loss of, damage to, or unavailability of any information you have made available through the services, and you are solely responsible for ensuring that you have backup copies of any information you have made available through the services."
   },
   {
    tag: "h2",
    t: "2. No guarantee of accuracy."
   },
   {
    tag: "p",
    t: "We do not guarantee the accuracy of and disclaim all liability for, any errors or other inaccuracies in the information, content, recommendations, and materials made available through the services."
   },
   {
    tag: "h2",
    t: "3. No warranties regarding third parties ."
   },
   {
    tag: "p",
    t: "We make no representations, warranties, or guarantees, express or implied, regarding any third-party service or advice provided by a third party."
   },
   {
    tag: "p",
    t: "Every effort is made to keep the website up and running smoothly. However, we take no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control."
   },
   {
    tag: "p",
    t: "If you require any more information or have any questions about our site’s disclaimer, please feel free to contact us:"
   },
   {
    tag: "li",
    t: "By email: sales@edivovina.hr"
   },
   {
    tag: "li",
    t: "By visiting this page on our website: https://www.edivovina.hr/contact"
   },
   {
    tag: "p",
    t: "Janjina 62, 20246 Janjina Pelješac peninsula Croatia – Hrvatska"
   },
   {
    tag: "p",
    t: "Drače 18, 20246 Drače Pelješac peninsula Croatia – Hrvatska"
   },
   {
    tag: "li",
    t: "+385 91 6127 229"
   },
   {
    tag: "li",
    t: "info@edivovina.hr"
   },
   {
    tag: "li",
    t: "Terms & Conditions"
   },
   {
    tag: "li",
    t: "Privacy Policy"
   },
   {
    tag: "li",
    t: "Cookie Policy"
   },
   {
    tag: "li",
    t: "Return & Refund Policy"
   },
   {
    tag: "li",
    t: "Shipping & Cancellation Policy"
   },
   {
    tag: "li",
    t: "Disclaimer"
   },
   {
    tag: "p",
    t: "No products in the cart."
   },
   {
    tag: "li",
    t: "Already have an account?"
   },
   {
    tag: "li",
    t: "Sign in"
   }
  ]
 }
]

export const legalBySlug = (slug: string) => LEGAL.find((p) => p.slug === slug)
export const LEGAL_NAV = LEGAL.map((p) => ({ slug: p.slug, title: p.title }))
