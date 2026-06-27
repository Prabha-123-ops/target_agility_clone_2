import { courses } from "@/data/courses";
import course1 from "@/assets/course-1.jpg";
import course2 from "@/assets/course-2.jpg";
import course3 from "@/assets/course-3.jpg";
import course4 from "@/assets/course-4.jpg";

export const coursesSectionContent = {
  subtitle: "Courses",
  title: "Most In-Demand Courses",
};

// Map your local images to the specific course IDs you want to feature
const featuredMappings = [
  { id: "psm-1", img: course1 },
  { id: "pspo-1", img: course2 },
  { id: "leading-safe", img: course3 }, 
  { id: "icp-acc", img: course4 },      
];

// Dynamically build the array by merging the images with the real course data
export const featuredCoursesData = featuredMappings.map((feature) => {
  const courseData = courses.find((c) => c.id === feature.id);
  
  return {
    id: feature.id,
    img: feature.img,
    title: courseData?.title || "Upcoming Course",
    badge: courseData?.badge || "New",
    // Grabs the first schedule date from the course, or defaults to a fallback
    date: courseData && courseData.schedules.length > 0 
      ? courseData.schedules[0].date 
      : "TBD",
  };
});