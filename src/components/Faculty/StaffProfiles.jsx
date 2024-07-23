const staffData = [
  {
    name: "Mr. Sudeev Divakar",
    role: "Principal",
    qualifications: "Fourth Year B.Tech, PES University",
    experience: "21 years of Life Experience",
    image: "./sudeev.jpg",
  },
  {
    name: "Mr. Satish",
    role: "Mathematics Teacher",
    qualifications: "M.Sc. in Mathematics, B.Ed.",
    experience:
      "10 years of teaching experience with a focus on advanced mathematics.",
    image: "./satish.jpeg",
  },
  {
    name: "Ms. Renuka",
    role: "English Teacher",
    qualifications: "M.A. in English Literature, B.Ed.",
    experience: "8 years of experience in teaching English and literature.",
    image: "./renuka.jpg",
  },
  {
    name: "Ms. Jayalakshmi",
    role: "Science Teacher",
    qualifications: "Ph.D. in Biological Sciences, M.Sc.",
    experience:
      "12 years of experience in teaching biology and science education.",
    image: "./jayalakshmi.jpeg",
  },
  {
    name: "Mr. Dinith",
    role: "Administrative Officer",
    qualifications: "MBA in Management",
    experience:
      "7 years of experience in school administration and operations.",
    image: "./dinith.jpeg",
  },
];

export default function StaffProfiles() {
  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Meet the Faculty
        </h2>
        <p className="mt-4 text-lg text-gray-500">
          Our dedicated team of teaching and administrative staff is committed
          to providing a high-quality educational experience. Here are some
          profiles of our esteemed faculty and staff members.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {staffData.map((staff) => (
            <div key={staff.name} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center">
                <img
                  src={staff.image}
                  alt={staff.name}
                  className="w-24 h-24 object-cover rounded-full border-2 border-gray-300"
                />
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {staff.name}
                  </h3>
                  <p className="text-gray-700">{staff.role}</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-600">
                  <strong>Qualifications:</strong> {staff.qualifications}
                </p>
                <p className="text-gray-600">
                  <strong>Experience:</strong> {staff.experience}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
