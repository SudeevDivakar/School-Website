import { FaFileDownload } from "react-icons/fa";

export default function AdmissionsContent() {
  return (
    <div className="p-8 bg-gray-100 flex flex-col items-center">
      <h1 className="text-5xl font-bold mb-16 mt-24">Admissions</h1>
      <div className="w-full max-w-4xl">
        <div className="flex flex-col lg:flex-row mb-12">
          <div className="w-full lg:w-1/2 flex flex-col items-start pr-0 lg:pr-8 mb-8 lg:mb-0">
            <h2 className="text-3xl font-semibold mb-4">Process</h2>
            <p className="mb-4 h-24">
              Admission forms are available for download. Submit the completed
              form along with required documents at the school office.
            </p>
            <img
              loading="lazy"
              src="https://st2.depositphotos.com/39091214/48280/i/450/depositphotos_482803198-stock-photo-word-admission-written-wooden-cubes.jpg"
              alt="Admission Process"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col items-start pl-0 lg:pl-8">
            <h2 className="text-3xl font-semibold mb-4">Criteria</h2>
            <p className="mb-4 h-24">
              Admission is based on merit and availability of seats. Entrance
              tests may be conducted for certain grades.
            </p>
            <img
              loading="lazy"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2EAfjvbRbiZKIyS-z0TdzWcztW67jFja64Q&usqp=CAU"
              alt="Admission Criteria"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Important Dates</h2>
          <table className="table-auto w-full text-left">
            <thead>
              <tr>
                <th className="px-4 py-2">Event</th>
                <th className="px-4 py-2">Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">
                  Admission Form Availability
                </td>
                <td className="border px-4 py-2">March 1st</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Last Date for Submission</td>
                <td className="border px-4 py-2">March 31st</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Entrance Test</td>
                <td className="border px-4 py-2">April 15th</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Announcement of Results</td>
                <td className="border px-4 py-2">April 30th</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">
            Admission Form Download
          </h2>
          <a
            href="./admission_form.jpeg"
            download
            className="inline-flex bg-blue-700 text-white p-3 rounded-md mt-2 hover:bg-blue-900 transition-colors"
          >
            <FaFileDownload className="mt-1 mr-2" />
            Download Admission Form
          </a>
        </div>
      </div>
    </div>
  );
}
