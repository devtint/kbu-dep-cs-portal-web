export type Announcement = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  featured?: boolean;
};

export type Event = {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  type: string;
  image: string;
};

export type Resource = {
  id: string;
  title: string;
  description: string;
  href: string;
  label: string;
  image: string;
};

export type DepartmentHighlight = {
  value: string;
  label: string;
};
