import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";

export default function ContactPage() {
  return (
    <>
      <div data-webild-section="ContactSplitForm"><ContactSplitForm
        tag="Contact Us"
        title="Let's Talk Growth"
        description="Ready to build a predictable client acquisition system? Share your details below and our team will reach out to schedule a discovery call."
        inputs={[{"name":"name","type":"text","placeholder":"Full Name","required":true},{"name":"email","type":"email","placeholder":"Work Email","required":true},{"name":"company","type":"text","placeholder":"Company Name","required":false}]}
        textarea={{"name":"message","placeholder":"Tell us about your current acquisition challenges...","rows":4,"required":true}}
        buttonText="Submit Request"
        imageSrc="https://img.freepik.com/free-photo/two-business-partners-working-together-office_1098-17671.jpg"
      /></div>
    </>
  );
}
