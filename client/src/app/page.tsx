import SubscriptionRenewalFailed from "@/components/subscriptionRenewalFailed/with-image";

export default function Home() {
  return (
    <main>
      <SubscriptionRenewalFailed
        title="Subscription Renewal Failed"
        name="John Doe"
        image="/images/subscription-payment-error.svg"
        renewalPeriod="Bi-monthly"
        updatePaymentLink="https://example.com/update-payment"
        faqsLink="https://example.com/faqs"
        supportEmail="help@boilerplate.com"
        unsubscribeLink="https://example.com/unsubscribe"
      />
    </main>
  );
}
