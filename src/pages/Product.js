function Product() {
  return (
    <div className="container mx-auto p-6">
      <p className="text-5xl font-bold mb-6">Product Modules</p>
      <div className="rounded bg-blue-200 flex flex-col p-6 my-4">
        <p className="text-2xl font-bold">Accounting</p>
        <ul className="text-xl list-disc ml-6">
          <li>
            Double-Entry Accounting identifies revenue items and their related
            expenses, giving you an accurate calculation of profits and losses.
          </li>
          <li>
            Automatic checks and balances ensure debit and credit amounts are
            equal, which greatly reduces the chance of errors year-round and
            when you file taxes.
          </li>
          <li>
            Manage and update accounts whether it be your revenues, expenses,
            capital assets, taxes payable, cash, and etc.
          </li>
          <li>
            Track your receivables and payables and receive payment
            notifications.
          </li>
          <li>Customize your Chart of Accounts to your business needs.</li>
          <li>Calculate and track your tax remittances.</li>
        </ul>
      </div>
      <div className="rounded bg-blue-200 flex flex-col p-6 my-4">
        <p className="text-2xl font-bold">Membership</p>
        <ul className="text-xl list-disc ml-6">
          <li>
            Manage and track your members whether it be for a club, restaurant,
            retail shop, charity, or religious group.
          </li>
          <li>Maintain member info with our built in member directory.</li>
          <li>Track membership and renew data accurately.</li>
          <li>Send notifications to members via email/text message.</li>
          <li>Customize your Chart of Accounts to your business needs.</li>
          <li>
            Seamlessly integrates with our Meetings & Voting functinality.
          </li>
        </ul>
      </div>
      <div className="rounded bg-blue-200 flex flex-col p-6 my-4">
        <p className="text-2xl font-bold">Donations</p>
        <ul className="text-xl list-disc ml-6">
          <li>
            Maintain your donation information and issue donation receipts.
          </li>
          <li>
            Track detailed donor data including donor status, type of payment,
            and donation purpose.
          </li>
          <li>Issue charitable receipts.</li>
          <li>Engage with donors with our built in communication tools.</li>
          <li>Seamlessly integrates with our accounting functionality.</li>
        </ul>
      </div>
      <div className="rounded bg-blue-200 flex flex-col p-6 my-4">
        <p className="text-2xl font-bold">Payroll</p>
        <ul className="text-xl list-disc ml-6">
          <li>
            Maintain different employee types and multiple payroll groups.
          </li>
          <li>Run payroll and file taxes quickly.</li>
          <li>Pay your employees via cheque or direct deposit.</li>
          <li>Fully integrates with our accounting and timesheet system.</li>
        </ul>
      </div>
      <div className="rounded bg-blue-200 flex flex-col p-6 my-4">
        <p className="text-2xl font-bold">Sales</p>
        <ul className="text-xl list-disc ml-6">
          <li>Manage customers, track invoices, estimate, and sales orders.</li>
          <li>
            Anticipate your purchasing needs with our intelligent sales
            forecasting tool.
          </li>
          <li>
            Seamlessly integrates with our accounting and inventory
            functionality.
          </li>
        </ul>
      </div>
      <div className="rounded bg-blue-200 flex flex-col p-6 my-4">
        <p className="text-2xl font-bold">Purchasing</p>
        <ul className="text-xl list-disc ml-6">
          <li>Manage your vendors, purchase orders, and bills.</li>
          <li>Implement approval processes to ensure order quality.</li>
          <li>
            Notify your vendors through our Purchasing function for purchase
            orders.
          </li>
          <li>Seamlessly integrates with our accounting functionality.</li>
        </ul>
      </div>
      <div className="rounded bg-blue-200 flex flex-col p-6 my-4">
        <p className="text-2xl font-bold">Inventory</p>
        <ul className="text-xl list-disc ml-6">
          <li>Manage and monitor your inventory levels.</li>
          <li>Reduce costs and improve profit margins.</li>
          <li>
            Our intelligent systems help you track your inventory levels and
            sends you purchase order reminders.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Product;
