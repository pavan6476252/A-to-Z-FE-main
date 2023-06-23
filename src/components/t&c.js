import React,{useEffect} from "react";
import "./../assets/css/terms_policy.css";
const TermsAndConditions=()=>{
    useEffect(()=>{
        window.scrollTo({
            top:0,
            left:0,
            behavior:'smooth'
          });
    },[])
    return (
        <div className="terms-and-conditions">
            <div className="tp-1">
            Terms of service
            </div>
            <div className="tp-main">
            Your website may use the Terms and Conditions given below.
            </div>
            <div className="tp-content">
            The terms “We” / “Us” / “Our”/”Company” individually and collectively refer to
            Msmepayments.com and the terms “Visitor” and ”User” refer to the users.
            This page states the Terms and Conditions under which you (Visitor) may visit
            this website (“Website”). Please read this page carefully. If you do not accept
            the Terms and Conditions stated here, we would request you exit this site.
            The business, any of its business divisions and/or its subsidiaries, associate
            companies or subsidiaries to subsidiaries or such other investment companies
            (in India or abroad) reserve their respective rights to revise these Terms and
            Conditions at any time by updating this posting. You should visit this page
            periodically to re-appraise yourself to the Terms and Conditions because they
            are binding on all users of this Website.
            </div>
            <div className="tp-2">USE OF CONTENT</div>
            <div className="tp-content">
            All logos, brands, marks headings, labels, names, signatures, numerals,
            shapes or any combinations thereof, appearing on this site, except as
            otherwise noted, are properties either owned or used under licence, by the
            business and/or it's associate entities who feature on this Website. The use of
            these properties or any other content on this site, except as provided in these
            terms and conditions or in the site content, is strictly prohibited.
            You may not sell or modify the content of this Website or reproduce, display,
            publicly perform, distribute, or otherwise use the materials in any way for any
            public or commercial purpose without the respective organisation’s or entity’s
            written permission.
            </div>
            <div className="tp-2">ACCEPTABLE WEBSITE USE</div>
            <div className="tp-content" style={{marginBottom:'30px'}}>
                <div className="tp-sub">(A) Security Rules </div>
                Visitors are prohibited from violating or attempting to violate the security of the
                Web site, including, without limitation, <br/>
                (1) accessing data not intended for such user or logging into a server or account which the user is not authorised
                to access.<br/>
                (2) attempting to probe, scan or test the vulnerability of a system or
                network or to breach security or authentication measures without proper
                authorisation.<br/>
                (3) attempting to interfere with service to any user, host or
                network, including, without limitation, via means of submitting a virus or
                “Trojan horse” to the Website, overloading, “flooding”, “mail bombing” or
                “crashing”, or <br/>
                (4) sending unsolicited electronic mail, including promotions
                and/or advertising of products or services. Violations of system or network
                security may result in civil or criminal liability. The business and/or its
                associate entities will have the right to investigate occurrences that they
                suspect as involving such violations and will have the right to involve and
                cooperate with, law enforcement authorities in prosecuting users who are
                involved in such violations.
            </div>
            <div className="tp-content">
                <div className="tp-sub">(B) General Rules</div>
            Visitors may not use the Web Site in order to transmit, distribute, store or
            destroy material<br/>
            (a) that could constitute or encourage conduct that would be considered a criminal offence or violate any applicable law or regulation,.<br/>
            (b) in a manner that will infringe the copyright, trademark, trade secret or other intellectual property rights of others or violate the privacy or publicity of other
            personal rights of others, or <br/>
            (c) that is libellous, defamatory, pornographic, profane, obscene, threatening, abusive or hateful.
            </div>
            <div className="tp-2">INDEMNITY</div>
            <div className="tp-content">
            The User unilaterally agrees to indemnify and hold harmless, without
            objection, the Company, its officers, directors, employees and agents from
            and against any claims, actions and/or demands and/or liabilities and/or
            losses and/or damages whatsoever arising from or resulting from their use of
            www.msmepayments.com or their breach of the terms.
            </div>
            <div className="tp-2">LIABILITY</div>
            <div className="tp-content">
                <p>
                User agrees that neither Company nor its group companies, directors, officers
                or employee shall be liable for any direct or/and indirect or/and incidental
                or/and special or/and consequential or/and exemplary damages, resulting
                from the use or/and the inability to use the service or/and for the cost of
                procurement of substitute goods or/and services or resulting from any goods
                or/and data or/and information or/and services purchased or/and obtained
                or/and messages received or/and transactions entered into through or/and
                from the service or/and resulting from unauthorized access to or/and
                alteration of user’s transmissions or/and data or/and arising from any other
                matter relating to the service, including but not limited to, damages for loss of
                profits or/and use or/and data or other intangible, even if Company has been
                advised of the possibility of such damages.
                </p>
                <p>
                User further agrees that Company shall not be liable for any damages arising
                from interruption, suspension or termination of service, including but not
                limited to direct or/and indirect or/and incidental or/and special consequential
                or/and exemplary damages, whether such interruption or/and suspension
                or/and termination was justified or not, negligent or intentional, inadvertent or
                advertent.
                User agrees that Company shall not be responsible or liable to user, or
                anyone, for the statements or conduct of any third party of the service. In sum,
                in no event, shall the Company’s total liability to the User for all damages
                or/and losses or/and causes of action exceed the amount paid by the User to
                the Company, if any, that is related to the cause of action.
                </p>
            </div>
            <div className="tp-2">DISCLAIMER OF CONSEQUENTIAL DAMAGES</div>
            <div className="tp-content">
            In no event shall the Company or any parties, organizations or entities
            associated with the corporate brand name us or otherwise, mentioned at this
            Website be liable for any damages whatsoever (including, without limitations,
            incidental and consequential damages, lost profits, or damage to computer
            hardware or loss of data information or business interruption) resulting from
            the use or inability to use the Website and the Website material, whether
            based on warranty, contract, tort, or any other legal theory, and whether or
            not, such organization or entities were advised of the possibility of such
            damages.
            </div>

        </div>
    )
}
export default TermsAndConditions;