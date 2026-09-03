import AchievementManagement from "../admin/pages/AchievementManagement";
import AboutPreview from "../components/home/AboutPreview";
import AcademicsPreview from "../components/home/AcademicsPreview";
import AchievementsPreview from "../components/home/AchivementsPreview";
import AdmissionsCTA from "../components/home/AdmissionCTA";
import CampusPreview from "../components/home/CampusPreview";
import GalleryPreview from "../components/home/GalleryPreview";
import Hero from "../components/home/Hero";
import NewsPreview from "../components/home/NewsPreview";
import TestimonialsPreview from "../components/home/Testimonials";
import WhyChooseUs from "../components/home/WhyChoose";


// const Home = () => {
//   return (
//     <div>
//    <Hero/>
//    <AboutPreview/>
//    <WhyChooseUs/>
//    <AcademicsPreview/>
//    <AchievementsPreview/> 
//   <CampusPreview/>
//    <NewsPreview/>
//    <GalleryPreview/>
//     <TestimonialsPreview/>
//    <AdmissionsCTA/>
   


//     </div>
//   );
// };

const Home = () => {
  return (
    <main className="home-page">
      <Hero />
      <AboutPreview />
      <WhyChooseUs />
      <AcademicsPreview />
      <AchievementsPreview />
      <CampusPreview />
      <NewsPreview />
      <GalleryPreview />
      <TestimonialsPreview />
   <AdmissionsCTA/>
    </main>
  );
};


export default Home;