export interface Profile {
  name: string;
  title: string;
  bio: string;
  location: string;
  avatar: string;
  availableForWork: boolean;
}

export interface Skill {
  name: string;
  level: number;
  category: string;
}

export interface Qualification {
  id: number;
  degree: string;
  institution: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  github: string;
  live: string | null;
  featured: boolean;
}

export interface Contact {
  email: string;
  phone: string;
  linkedin: string | null;
  github: string;
  twitter: string | null;
}

export interface Portfolio {
  profile: Profile;
  skills: Skill[];
  qualifications: Qualification[];
  projects: Project[];
  contact: Contact;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

const fallbackPortfolio: Portfolio = {
  profile: {
    name: "Amos Magembe Masalu",
    title: "Data Scientist",
    bio: "University student based in Dar es Salaam with a growing passion for data science. I enjoy collecting and cleaning data through web scraping, uncovering patterns through analysis, and building practical systems and web applications that turn insights into real-world solutions.",
    location: "Dar es Salaam, Tanzania",
    avatar: "/api/placeholder",
    availableForWork: true,
  },
  skills: [
    { name: "Web Scraping", level: 82, category: "Data Science" },
    { name: "Data Analysis", level: 85, category: "Data Science" },
    { name: "System Development", level: 78, category: "Development" },
    { name: "Web Development", level: 80, category: "Development" },
  ],
  qualifications: [
    {
      id: 1,
      degree: "University Degree (In Progress)",
      institution: "University — Dar es Salaam, Tanzania",
      period: "Present",
      description:
        "Currently pursuing an undergraduate programme while building skills in data science, software development, and cloud-based application deployment.",
      highlights: ["Data Science", "Cloud Computing", "Software Development"],
    },
  ],
  projects: [],
  contact: {
    email: "magembeamos4@gmail.com",
    phone: "+255 658 566 222",
    linkedin: null,
    github: "https://github.com/macmuga98",
    twitter: null,
  },
};

async function fetchApi<T>(endpoint: string): Promise<T> {
  const res = await fetch(`${API_URL}${endpoint}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }

  const json: ApiResponse<T> = await res.json();
  return json.data;
}

export async function getPortfolio(): Promise<Portfolio> {
  try {
    return await fetchApi<Portfolio>("/api/portfolio");
  } catch {
    return fallbackPortfolio;
  }
}

export async function submitContactForm(data: {
  name: string;
  email: string;
  message: string;
}): Promise<{ success: boolean; message: string }> {
  const res = await fetch(`${API_URL}/api/portfolio/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  return res.json();
}
