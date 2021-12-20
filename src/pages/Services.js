function Services() {
  return (
    <div className="container mx-auto p-6">
      <p className="text-5xl font-bold mb-6">Services</p>
      <p className="text-xl">
        Yesleaf provides a suite of services to help ensure your business
        operations run smoothly.
      </p>
      <div className="rounded bg-blue-200 flex flex-col p-6 my-4">
        <p className="text-2xl font-bold">Accounting Consulting</p>
        <ul className="text-xl list-disc ml-6">
          <li>
            A professional accountant will help your business accounting on the
            right track.
          </li>
          <li>Review and fix and hence your existing accounting.</li>
          <li>
            Provide solution to move your current accounting to Yesleaf
            platform.
          </li>
          <li>The service can be live or support remotely.</li>
          <li>
            The charge will be hourly rate. For details, please contact us.
          </li>
        </ul>
      </div>
      <div className="rounded bg-blue-200 flex flex-col p-6 my-4">
        <p className="text-2xl font-bold">POS Consulting</p>
        <ul className="text-xl list-disc ml-6">
          <li>Provide professional POS solution for your busniess needs.</li>
          <li>Help to purchase suitable hardware that meet your budget.</li>
          <li>
            Provide hardware instllation guide, and setup your POS system.
          </li>
          <li>Provide training and support service.</li>
          <li>
            The charge will be one time fee. For details, please contact us
          </li>
        </ul>
      </div>
      <div className="rounded bg-blue-200 flex flex-col p-6 my-4">
        <p className="text-2xl font-bold">Customer Support</p>
        <p className="text-xl">
          To keep your business operational smoothly, we are happy to provide
          any kind of support. If the issue is not from Yesleaf, but the
          customer service fee will applied. We will provide a notice of charge
          in advance.
        </p>
      </div>
    </div>
  );
}

export default Services;
