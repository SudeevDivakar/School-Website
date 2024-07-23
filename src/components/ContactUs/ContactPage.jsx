export default function ContactPage() {
  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Contact Information */}
        <div className="mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">Contact Us</h2>
          <div className="mt-6 text-gray-700">
            <p className="text-lg mb-2">
              <span className="font-semibold">Address:</span> Springdale Public
              School, 123 Education Lane, Cityville, State, ZIP Code
            </p>
            <p className="text-lg mt-2 mb-2">
              <span className="font-semibold">Phone:</span> +1 (123) 456-7890
            </p>
            <p className="text-lg mt-2 mb-2">
              <span className="font-semibold">Email:</span>{" "}
              <a
                href="mailto:info@springdale.edu"
                className="text-blue-500 hover:underline"
              >
                info@springdale.edu
              </a>
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-900">
            Send Us a Message
          </h3>
          <form className="mt-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 h-10 block w-full border-gray-300 rounded-md shadow-sm border focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full border-gray-300 rounded-md h-10 shadow-sm border focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  required
                />
              </div>
            </div>
            <div className="mt-6">
              <label htmlFor="message" className="block text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm border focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                required
              ></textarea>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Google Maps Integration */}
        <div className="mt-12 bg-white rounded-md shadow-2xl p-7">
          <h3 className="text-2xl font-semibold text-gray-900">Our Location</h3>
          <div className="mt-6 relative w-full h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7418.3190086190925!2d-121.49959779747152!3d38.5794118749864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1721765316507!5m2!1sen!2sin"
              width="1200"
              height="600"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
