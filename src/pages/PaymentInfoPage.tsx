import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";

const PaymentInfoPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader title="Payment Info" showBack />
      <div className="max-w-lg mx-auto px-4 pt-4 space-y-4">
        <div className="rounded-lg bg-card p-4 shadow-card">
          <p className="text-sm font-medium text-card-foreground">Bank Account</p>
          <p className="text-xs text-muted-foreground mt-1">First Bank · ****4521</p>
        </div>
        <div className="rounded-lg bg-card p-4 shadow-card">
          <p className="text-sm font-medium text-card-foreground">Card on File</p>
          <p className="text-xs text-muted-foreground mt-1">Visa · ****8832</p>
        </div>
        <Button variant="outline" className="w-full h-12">Add Payment Method</Button>
      </div>
    </div>
  );
};

export default PaymentInfoPage;
