function Contact() {
  return (
    <div className="container mx-auto p-6">
      <p className="text-5xl font-bold mb-6">Contact</p>
      <div className="rounded bg-blue-200 flex flex-col p-6 my-4">
        <p className="text-2xl font-bold">Sales Team ‍💼</p>
        <a
          href="mailto:sales@yesleaf.com"
          className="text-xl text-blue-500 hover:underline"
        >
          sales@yesleaf.com
        </a>
      </div>
      <div className="rounded bg-blue-200 flex flex-col p-6 my-4">
        <p className="text-2xl font-bold">Technical Support ‍💻</p>
        <a
          href="mailto:support@yesleaf.com"
          className="text-xl text-blue-500 hover:underline"
        >
          support@yesleaf.com
        </a>
      </div>
      <div className="rounded bg-blue-200 flex flex-col p-6 my-4">
        <p className="text-2xl font-bold">Support Ticket 🎟</p>
        <p className="text-xl text-blue-500 hover:underline">
          Create a support ticket
        </p>
      </div>
    </div>
  );
}

export default Contact;
