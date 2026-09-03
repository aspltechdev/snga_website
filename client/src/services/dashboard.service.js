import api from "./axios";

export const getDashboardStats = async () => {
  const [
    newsResponse,
    blogsResponse,
    galleryResponse,
    achievementsResponse,
    admissionsResponse,
    testimonialsResponse,
    contactResponse,
  ] = await Promise.all([
    api.get("/news"),
    api.get("/blogs"),
    api.get("/gallery"),
    api.get("/achievements"),
    api.get("/admissions"),
    api.get("/testimonials"),
    api.get("/contact"),
  ]);

  return {
    news: newsResponse.data.count || 0,
    blogs: blogsResponse.data.count || 0,
    gallery: galleryResponse.data.count || 0,
    achievements:
      achievementsResponse.data.count || 0,
    admissions:
      admissionsResponse.data.count || 0,
    testimonials:
      testimonialsResponse.data.count || 0,
    contacts:
      contactResponse.data.count || 0,
  };
};