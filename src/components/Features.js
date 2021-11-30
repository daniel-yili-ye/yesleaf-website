import coffeeshop from "../images/coffeeshop.jpg";

function Features() {
  return (
    <div className="container mx-auto p-6">
      <p className="text-5xl font-bold">Our Features</p>
      <div className="lg:flex items-center mt-4 mb-6">
        <div className="flex flex-col items-start lg:mr-6 xl:mr-24">
          <p className="text-3xl font-bold">Accounting</p>
          <p className="text-xl my-4">
            Manage and update accounts whether it be your receivables, payables,
            or cash. Monitor your financial statements in <i>real time</i>.
          </p>
        </div>
        <img
          src={coffeeshop}
          alt="coffee shop"
          className="rounded my-2 lg:my-0 lg:ml-2 lg:max-w-2xl"
        />
      </div>
      <div className="lg:flex items-center my-6">
        <div className="flex flex-col items-start lg:mr-6 xl:mr-24">
          <p className="text-3xl font-bold">Membership</p>
          <p className="text-xl my-4">
            Manage and track your members whether it be for a club, restaurant,
            retail shop, charity, or religious group.
          </p>
        </div>
        <img
          src={coffeeshop}
          alt="coffee shop"
          className="rounded my-2 lg:my-0 lg:ml-2 lg:max-w-2xl"
        />
      </div>
      <div className="lg:flex items-center my-6">
        <div className="flex flex-col items-start lg:mr-6 xl:mr-24">
          <p className="text-3xl font-bold">Donations</p>
          <p className="text-xl my-4">
            Manages donations information and issue donation receipts. Donations
            are automatically synced with the accounting system.
          </p>
        </div>
        <img
          src={coffeeshop}
          alt="coffee shop"
          className="rounded my-2 lg:my-0 lg:ml-2 lg:max-w-2xl"
        />
      </div>
    </div>
  );
}

export default Features;
