"use client";
import styles from "./page.module.css";
import Image from "next/image";

export default function projects() {
  const projects = [
    {
      title: "Diet Builder",
      image: "/MacroApp.png",
      link: "https://meal-app-c2a6278c79d2.herokuapp.com/password-required",
      description:
        "A web app to build meals, track your macronutrients, save recipes, and more.",
    },
    {
      title: " Not Available",
      image: "/coming_soon.png",
      link: "https://coming-soon-unavailable",
      description: "No description, app coming soon",
    },
    {
      title: "Not Available",
      image: "/coming_soon.png",
      link: "https://coming-soon-unavailable",
      description: "No description, app coming soon",
    },
  ];
  return (
    <div className={styles.projectPage}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-2">
        {projects.map(({ title, image, link, description }) => (
          <div
            key={title}
            className="bg-gray-800 shadow rounded-lg rounded-lg shadow hover:shadow-xl transition"
          >
            <a href={link}>
              <div className={"relative w-full h-48"}>
                <Image
                  src={image}
                  alt={title}
                  className="object-cover rounded-t-lg"
                  fill
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg text-white font-bold">{title}</h3>
                <p className="text-sm text-gray-200">{description}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
