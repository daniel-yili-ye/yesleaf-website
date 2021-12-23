function Pricing() {
  return (
    <div className="container mx-auto p-6">
      <p className="text-5xl font-bold">Pricing</p>
      <div className="rounded bg-blue-200 flex flex-col p-6 my-4">
        <p className="text-xl font-bold flex justify-center">
          🎊🎉 PROMO: 90 DAY FREE TRIAL ON ALL PAID PACKAGES 🎉🎊
        </p>
      </div>
      <div className="flex justify-between">
        <div className="rounded bg-blue-200 flex p-6 my-4 flex-col w-96">
          <p>Free Package</p>
          <p className="font-bold text-4xl">Free</p>
          <p>
            This is an option for users with low business activity and limited
            transaction volume.
          </p>
          <p className="font-bold">Activity Volume:</p>
          <ul className="list-disc ml-6">
            <li>100 Sales Invoices per month</li>
            <li>100 Purchase Bills per month</li>
            <li>100 Payments per month</li>
            <li>2 Payrolls per month</li>
            <li>Limited to 10 Employees</li>
            <li>Limited to 2 Users</li>
          </ul>
        </div>
        <div className="rounded bg-blue-200 flex p-6 my-4 flex-col w-96">
          <p>Monthly Package</p>
          <p className="font-bold text-4xl">$69.99/month</p>
          <p>This option is recommended for most business.</p>
          <p className="font-bold">Activity Volume:</p>
          <ul className="list-disc ml-6">
            <li>Unlimited Sales Invoices</li>
            <li>Unlimited Purchase Bills</li>
            <li>Unlimited Payments</li>
            <li>Unlimited Payrolls</li>
            <li>Limited to 50 Employees</li>
            <li>Limited to 10 Users</li>
          </ul>
        </div>
        <div className="rounded bg-blue-200 flex p-6 my-4 flex-col w-96">
          <p>Enterprise Package</p>
          <p className="font-bold text-4xl">Contact Us</p>
          <p>
            This package is for the business that has more than 50 employees or
            has multiple subdivisions.
          </p>
          <p>
            This is also good for the business service providers (E.g. Accouting
            Firms) to provides the business service to their clients.
          </p>
          <p>
            Please contact{" "}
            <a href="mailto:sales@yesleaf.com" className="">
              sales@yesleaf.com
            </a>{" "}
            for details.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
