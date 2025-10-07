import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  className?: string;
  bgColor?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  className = "",
  bgColor = "bg-gray-100",
}) => {
  return (
    <div
      className={`${bgColor} rounded-lg p-6 flex flex-col justify-center items-center text-center shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${className}`}
    >
      <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

const PortfolioGrid: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Portfolio Showcase
          </h1>
          <p className="text-gray-300 text-lg">
            A collection of our featured projects
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-3 grid-rows-3 gap-6 h-[800px]">
          {/* Project 1 - Takes 2 columns, 2 rows (top-left) */}
          <ProjectCard
            title="Project One"
            description="This is the first featured project taking up a 2x2 grid space. Perfect for showcasing major work."
            className="col-span-2 row-span-1"
            bgColor="bg-gradient-to-br from-purple-500 to-pink-600 text-white"
          />

          {/* Project 2 - Takes 2 columns, 2 rows (top-right, vertical) */}
          <ProjectCard
            title="Project Two"
            description="Second featured project with vertical layout, also taking 2x2 grid space for prominent display."
            className="col-span-1 row-span-2"
            bgColor="bg-gradient-to-br from-blue-500 to-cyan-600 text-white"
          />

          {/* Project 3 - Takes 1 column, 1 row */}
          <ProjectCard
            title="Project Three"
            description="Compact project showcase in single grid cell."
            className="col-span-1 row-span-1"
            bgColor="bg-gradient-to-br from-green-400 to-emerald-600 text-white"
          />

          {/* Project 4 - Takes 1 column, 1 row */}
          <ProjectCard
            title="Project Four"
            description="Another single cell project display."
            className="col-span-1 row-span-1"
            bgColor="bg-gradient-to-br from-yellow-400 to-orange-500 text-white"
          />

          {/* Project 5 - Takes 1 column, 1 row */}
          <ProjectCard
            title="Project Five"
            description="Fifth project in single grid layout."
            className="col-span-1 row-span-1"
            bgColor="bg-gradient-to-br from-red-400 to-rose-600 text-white"
          />

          {/* Project 6 - Takes 2 columns, 1 row */}
          <ProjectCard
            title="Project Six"
            description="Final project spanning two columns horizontally for extended content display."
            className="col-span-2 row-span-1"
            bgColor="bg-gradient-to-br from-indigo-500 to-purple-700 text-white"
          />
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <p className="text-gray-400">
            Ready to customize and decorate as needed
          </p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioGrid;
