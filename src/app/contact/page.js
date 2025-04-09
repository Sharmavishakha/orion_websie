export default function Contact() {
  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg mb-2">📞 Phone: +91 98765 43210</p>
      <p className="text-lg mb-2">📧 Email: contact@iei-events.com</p>
      <p className="text-lg mb-2">
        📍 Address: Institute of Engineers India, XYZ Campus, City Name
      </p>
      <p className="text-lg mt-6">
        📸 Follow us on Instagram:{' '}
        <a
          href="https://instagram.com/iei_official"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          @iei_official
        </a>
      </p>
    </div>
  );
}
