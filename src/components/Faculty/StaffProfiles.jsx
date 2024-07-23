const staffData = [
  {
    name: "Mr. John Doe",
    role: "Principal",
    qualifications: "M.Ed",
    experience: "20 years of experience in educational administration.",
    image: "./johndoe.jpeg",
  },
  {
    name: "Mrs. Jane Smith",
    role: "Vice Principal",
    qualifications: "M.Sc. in Physics",
    experience: "15 years of teaching experience.",
    image: "./janesmith.jpeg",
  },
  {
    name: "Mr. Michael Brown",
    role: "Mathematics Teacher",
    qualifications: "M.Sc. in Mathematics",
    experience: "8 years of teaching experience.",
    image: "./michaelbrown.jpeg",
  },
  {
    name: "Ms. Emily Johnson",
    role: "English Teacher",
    qualifications: "M.A. in English",
    experience: "10 years of teaching experience.",
    image: "./emilyjohnson.jpeg",
  },
  {
    name: "Ms. Sophia Davis",
    role: "Science Teacher",
    qualifications: "M.Sc. in Chemistry",
    experience: "12 years of teaching experience.",
    image: "./sophiadavies.jpg",
  },
  {
    name: "Mr. David Wilson",
    role: "Computer Science Teacher",
    qualifications: "B.Tech in Computer Science",
    experience: "5 years of teaching experience.",
    image: "./davidwilson.jpg",
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
