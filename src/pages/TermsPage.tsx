import { PageHeader } from "@/components/PageHeader";

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-background pb-8">
      <PageHeader title="Terms & Privacy" showBack />
      <div className="max-w-lg mx-auto px-4 pt-4 space-y-6">
        <section>
          <h3 className="font-bold text-foreground mb-2">Terms of Service</h3>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-2">
            <p>By using Xchange, you agree to these terms. Xchange is a marketplace platform connecting licensed healthcare facilities for the exchange of medicines approaching expiry dates.</p>
            <p>All facilities must maintain valid regulatory licenses. Xchange reserves the right to remove any listing or suspend accounts that violate these terms or applicable pharmaceutical regulations.</p>
            <p>Xchange acts as a facilitator and is not responsible for the quality, safety, or efficacy of medicines listed on the platform. Sellers are responsible for ensuring all listed medicines meet regulatory requirements.</p>
          </div>
        </section>
        <section>
          <h3 className="font-bold text-foreground mb-2">Privacy Policy</h3>
          <div className="text-sm text-muted-foreground leading-relaxed space-y-2">
            <p>We collect facility information, transaction data, and usage analytics to provide and improve our service. Your data is encrypted and stored securely.</p>
            <p>We do not sell your data to third parties. Facility information may be shared with other users as part of listing details to enable transactions.</p>
            <p>You may request data deletion by contacting our support team. For questions about data handling, reach out to privacy@xchange.ng.</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TermsPage;
