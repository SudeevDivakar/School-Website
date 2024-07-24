import Navbar from "../../components/Navbar";
import StaffProfiles from "../../components/Faculty/StaffProfiles";
import StudentProfiles from "../../components/Students/StudentProfiles";
import Footer from "../../components/Footer";

export default function Students() {
  return (
    <>
      <Navbar />
      <StudentProfiles />
      <Footer />
    </>
  );
}
