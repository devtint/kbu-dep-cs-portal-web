import type { Announcement, DepartmentHighlight, Event, Resource } from "@/lib/types";

const placeholderImage = "/brand/kbu-logo.png";

export const announcements: Announcement[] = [
  {
    id: "orientation-2026",
    title: "Welcome to the new academic year",
    excerpt:
      "Find orientation details, important dates, and the resources you need to start strong.",
    date: "September 10, 2026",
    category: "Department news",
    image: placeholderImage,
    featured: true,
  },
  {
    id: "lab-hours",
    title: "Updated computer lab hours",
    excerpt: "The department labs are now available for extended evening study sessions.",
    date: "September 6, 2026",
    category: "Facilities",
    image: placeholderImage,
  },
  {
    id: "project-showcase",
    title: "Student project showcase submissions are open",
    excerpt: "Share your work with the department community and connect with other builders.",
    date: "September 2, 2026",
    category: "Student life",
    image: placeholderImage,
  },
];

export const events: Event[] = [
  {
    id: "welcome-session",
    title: "First-year welcome session",
    description: "Meet your classmates, faculty, and student mentors.",
    date: "September 18, 2026",
    time: "10:00 AM – 12:00 PM",
    location: "Main Auditorium",
    type: "Community",
    image: placeholderImage,
  },
  {
    id: "coding-night",
    title: "Open coding night",
    description: "Bring a project, solve a challenge, or learn with your peers.",
    date: "September 24, 2026",
    time: "5:30 PM – 8:00 PM",
    location: "Computer Lab 2",
    type: "Workshop",
    image: placeholderImage,
  },
  {
    id: "research-talk",
    title: "Research and careers in computing",
    description: "A conversation with alumni working across the technology industry.",
    date: "October 2, 2026",
    time: "2:00 PM – 3:30 PM",
    location: "Innovation Hall",
    type: "Talk",
    image: placeholderImage,
  },
];

export const resources: Resource[] = [
  {
    id: "courses",
    title: "Course information",
    description: "Explore course pathways and academic requirements.",
    href: "/resources#courses",
    label: "Explore courses",
    image: placeholderImage,
  },
  {
    id: "labs",
    title: "Computer laboratories",
    description: "See lab locations, opening hours, and usage guidelines.",
    href: "/resources#labs",
    label: "View lab details",
    image: placeholderImage,
  },
  {
    id: "support",
    title: "Student support",
    description: "Find academic, technical, and student community support.",
    href: "/resources#support",
    label: "Find support",
    image: placeholderImage,
  },
];

export const highlights: DepartmentHighlight[] = [
  { value: "01", label: "Community for curious builders" },
  { value: "24/7", label: "Ideas that keep moving" },
  { value: "∞", label: "Possibilities to explore" },
];
