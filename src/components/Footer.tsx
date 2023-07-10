import about from "../../content/about.json";

export function Footer() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <div className="mx-auto max-w-3xl py-12 md:flex md:items-center md:justify-between">
      <div className="flex justify-center space-x-6 md:order-2">
        {/* Instagram Twitter */}
      </div>
      <div className="mt-8 md:order-1 md:mt-0">
        <p className="text-center text-xs leading-5 text-gray-500">
          &copy; 2023 {currentYear !== 2023 ? `- ${currentYear}` : ""}{" "}
          {about.title}. All rights reserved.
        </p>
      </div>
    </div>
  );
}
