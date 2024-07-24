import { useParams } from "react-router-dom";

export default function SpecificContent() {
  const params = useParams();
  const content = {
    sportsDay: {
      name: "Sports Day",
      images: [
        "https://media.istockphoto.com/id/471829246/photo/space-hopper-obstacle-course.jpg?s=612x612&w=0&k=20&c=fn2CFUDQnKzFzcgBuwbVnctxfaVbzwrkcYU4PnFVMNU=",
        "https://c.tadst.com/gfx/750w/sport-day-un.jpg",
        "https://media.istockphoto.com/id/498385347/photo/school-sports.jpg?s=612x612&w=0&k=20&c=oJafXCgUBo5eg87YojC2EijUCSLVIBRE39eLaTLor28=",
        "https://media.istockphoto.com/id/466335028/photo/space-hopper-challenge.jpg?s=612x612&w=0&k=20&c=cMclHXIaHQCDwq9Ft9jfDYyiLMESB4tmywOv23QFq-A=",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs3fRXlxw26L_dbNnB-0vY6aO2wzSYzSSUfg&usqp=CAU",
      ],
    },
    scienceExhibition: {
      name: "Science Exhibition",
      images: [
        "https://upload.wikimedia.org/wikipedia/commons/3/32/Usa_science_and_engineering_festival_%2814062155971%29.jpg",
        "https://dnycf48t040dh.cloudfront.net/Top-US-science-competitions-and-events-for-school-students.jpeg",
        "https://media.wired.com/photos/59272bc4cefba457b079c4c2/master/pass/DP14G4.jpg",
        "https://s.wsj.net/public/resources/images/BN-KK463_0922wo_M_20150921175345.jpg",
        "https://live.staticflickr.com/1558/26479852502_1ed4fb4fa3_b.jpg",
      ],
    },
    culturalFest: {
      name: "Cultural Fest",
      images: [
        "https://www.shutterstock.com/image-photo/happy-friends-having-partythrowing-confetti-600nw-1012263394.jpg",
        "https://www.bakerschoolpto.org/uploads/1/2/5/0/12506508/8043654_orig.jpg",
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202007/why_college_festivals_are_impo.jpeg?size=1200:675",
        "https://www.americanpress.com/wp-content/uploads/sites/65/2023/05/Culture-Fest.jpg",
        "https://multiculturalkidblogs.com/wp-content/uploads/2022/09/festival-entrance-Edited.jpg",
      ],
    },
    classrooms: {
      name: "Classrooms",
      images: [
        "https://cdn.pixabay.com/photo/2017/02/24/02/37/classroom-2093744_1280.jpg",
        "https://cdn.pixabay.com/photo/2023/10/21/03/57/classroom-8330653_640.jpg",
        "https://mediaproxy.salon.com/width/1200/height/675/https://media2.salon.com/2022/08/classroom-0826221.jpg",
        "https://qph.cf2.quoracdn.net/main-qimg-3cd8669ad262af77fd04cfc1879d9131-lq",
        "https://static01.nyt.com/images/2023/09/28/multimedia/00NAT-DOD-SCHOOLS-vjwl/00NAT-DOD-SCHOOLS-vjwl-videoSixteenByNine3000-v2.jpg",
        "https://media.istockphoto.com/id/1133835310/photo/rear-view-of-female-high-school-teacher-standing-at-front-of-class-teaching-lesson.jpg?s=612x612&w=0&k=20&c=elre9ZuGwR1HnevFjjwcTlGiP8g0p7YoxbAeTbPakiA=",
      ],
    },
    library: {
      name: "Library",
      images: [
        "https://media.istockphoto.com/id/1015149600/photo/book-hall-in-library.jpg?s=612x612&w=0&k=20&c=DzbHaOg_iLwRAU96BzzpZ7a70xCGj3XBTVQ_HmqiN3A=",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/NYC_-_New_York_City_Library_-_1723.jpg/1200px-NYC_-_New_York_City_Library_-_1723.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhOfbr13-1QqEKV83ui5xu1JwXvmg6uv3k8A&usqp=CAU",
        "https://media.them.us/photos/656f39414f50f6d4a467d615/4:3/w_1704,h_1278,c_limit/library.jpg",
        "https://thumbs.dreamstime.com/b/high-school-library-arranged-tables-chairs-29663317.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk_QcIs8KI0wyv6j7buXxOTUC2srJmHBht7Q&usqp=CAU",
      ],
    },
  };

  return (
    <div className="bg-gray-100 pb-12 pt-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-6">
          {content[params.id].name}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {content[params.id].images.map((image, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
              <img
                src={image}
                alt={content[params.id].name}
                loading="lazy"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
