"use client";
import { getImagePath } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Portfolio item interface
interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
  featured: boolean;
}

// Sample portfolio data
const portfolioData: PortfolioItem[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    description:
      "A comprehensive e-commerce solution with advanced inventory management, payment integration, and analytics dashboard.",
    image: "/images/portfolio/project-1.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "#",
    featured: true,
  },
  {
    id: 2,
    title: "AI-Powered Analytics",
    category: "AI/ML",
    description:
      "Machine learning platform that provides predictive analytics and business insights through advanced data processing.",
    image: "/images/portfolio/project-2.jpg",
    technologies: ["Python", "TensorFlow", "React", "AWS"],
    link: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Mobile Banking App",
    category: "Mobile Development",
    description:
      "Secure mobile banking application with biometric authentication and real-time transaction monitoring.",
    image: "/images/portfolio/project-3.jpg",
    technologies: ["React Native", "Node.js", "PostgreSQL"],
    link: "#",
    featured: false,
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(portfolioData);

  const handleCategoryFilter = (category: string) => {
    setActiveCategory(category);
    if (category === "All") {
      setFilteredProjects(portfolioData);
    } else {
      setFilteredProjects(
        portfolioData.filter((project) => project.category === category),
      );
    }
  };

  return (
    <section
      id="portfolio"
      className="bg-gray-light py-16 dark:bg-bg-color-dark md:py-20 lg:py-28 "
    >
      <div className="container">
        {/* Section Header */}
        <div
          className="wow fadeInUp mx-auto mb-14 max-w-4xl text-center"
          data-wow-delay=".15s"
        >
          <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
            Featured{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-base !leading-relaxed text-body-color md:text-lg">
            Discover our portfolio of successful projects that showcase our
            expertise in delivering innovative digital solutions across various
            industries and technologies.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="-mx-4 flex flex-wrap">
          {filteredProjects.map((project, index) => (
            <div key={project.id} className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div
                className="wow fadeInUp group relative mb-10 overflow-hidden rounded-2xl bg-white shadow-three transition-all duration-300 hover:shadow-xl dark:bg-gray-dark"
                data-wow-delay={`.${index + 1}5s`}
              >
                {/* Project Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={getImagePath(project.image)}
                    alt={project.title}
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  {project.featured && (
                    <div className="absolute left-4 top-4 z-10">
                      <span className="rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-3 py-1 text-xs font-medium text-white">
                        Featured
                      </span>
                    </div>
                  )}

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
                      <div className="mb-2 flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md bg-white/20 px-2 py-1 text-xs backdrop-blur-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* View Project Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
                    <Link
                      href={project.link}
                      className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white/90 text-indigo-600 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-white"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18 2L2 18M18 2L8 2M18 2L18 12"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-8">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="mb-3 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    <Link
                      href={project.link}
                      className="transition-colors duration-200 hover:text-indigo-600 dark:hover:text-indigo-400"
                    >
                      {project.title}
                    </Link>
                  </h3>

                  <p className="mb-4 line-clamp-3 text-base font-medium leading-relaxed text-body-color">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-600 dark:bg-gray-800 dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="wow fadeInUp mt-12 text-center" data-wow-delay=".3s">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:from-indigo-700 hover:to-purple-700 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-800"
          >
            View All Projects
            <svg
              className="ml-2 h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute left-0 top-0 z-[-1]">
        <svg
          width="1440"
          height="969"
          viewBox="0 0 1440 969"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_95:1005"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="1440"
            height="969"
          >
            <rect width="1440" height="969" fill="#090E34" />
          </mask>
          <g mask="url(#mask0_95:1005)">
            <path
              opacity="0.1"
              d="M1086.96 297.978L632.959 554.978L935.625 535.926L1086.96 297.978Z"
              fill="url(#paint0_linear_95:1005)"
            />
            <path
              opacity="0.1"
              d="M1324.5 755.5L1450 687V886.5L1324.5 967.5L-10 288L1324.5 755.5Z"
              fill="url(#paint1_linear_95:1005)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_95:1005"
              x1="1178.4"
              y1="151.853"
              x2="780.959"
              y2="453.581"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_95:1005"
              x1="160.5"
              y1="220"
              x2="1099.45"
              y2="1192.04"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Portfolio;
