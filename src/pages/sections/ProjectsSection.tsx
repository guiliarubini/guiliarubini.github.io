import React, { useState } from 'react';
import { Project } from './data/types';
import { newYorkerProject } from './data/newYorkerData';
import { fashionShowProject } from './data/fashionShowData';
import { specialFashionCollectionProject } from './data/specialFashionCollectionData';

const projects: Project[] = [newYorkerProject, fashionShowProject, specialFashionCollectionProject];

const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const handleProjectClick = (projectId: string) => {
    setSelectedProject(projectId);
    setSelectedSubcategory(null);
    setSelectedFilter('All');
  };

  const handleBackToProjects = () => {
    setSelectedProject(null);
    setSelectedSubcategory(null);
    setSelectedFilter('All');
  };

  const handleSubcategoryClick = (subcategoryName: string) => {
    setSelectedSubcategory(subcategoryName);
  };

  const handleFilterClick = (filterName: string) => {
    setSelectedFilter(filterName);
  };

  const currentProject = projects.find((p) => p.id === selectedProject);
  
  // Flatten all items from all subcategories with category info
  const allProjectItems = currentProject?.subcategories
    ? currentProject.subcategories.flatMap((sub) => 
        sub.items.map(item => ({ ...item, category: sub.name }))
      )
    : currentProject?.items?.map(item => ({ ...item, category: null })) || [];

  // Filter items based on selected filter
  const filteredItems = selectedFilter === 'All' 
    ? allProjectItems 
    : allProjectItems.filter(item => item.category === selectedFilter);

  return (
    <div className="py-10 px-5">
      <h2 className="text-4xl font-bold mb-12 text-center text-white">Projects</h2>

      {/* Landing View - Scrollable Project Cards */}
      {!selectedProject && (
        <div className="space-y-16 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group cursor-pointer"
              onClick={() => handleProjectClick(project.id)}
            >
              <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}>
                {/* Image Placeholder */}
                <div className="w-full md:w-2/5 aspect-square flex items-center justify-center group-hover:scale-105 transition-all duration-500">
                  <img 
                    src={project.coverImage} 
                    alt={project.title}
                    className="w-full h-auto object-contain rounded-2xl shadow-2xl"
                  />
                </div>

                {/* Content */}
                <div className="w-full md:w-3/5 space-y-4">
                  <h3 className="text-3xl md:text-4xl font-bold text-white group-hover:text-white/80 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-lg text-white/70 leading-relaxed">
                    {project.description}
                  </p>
                  {project.subcategories && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.subcategories.map((sub) => (
                        <span
                          key={sub.name}
                          className="px-3 py-1 text-sm bg-white/10 text-white/80 rounded-full border border-white/20"
                        >
                          {sub.name}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="pt-4">
                    <span className="inline-flex items-center gap-2 text-white/60 group-hover:text-white group-hover:gap-4 transition-all duration-300">
                      View Project <span>→</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Project Detail View */}
      {selectedProject && currentProject && (
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <button
            onClick={handleBackToProjects}
            className="mb-8 text-white/80 hover:text-white transition-colors duration-300 flex items-center gap-2 text-lg"
          >
            <span>←</span> Back to Projects
          </button>

          <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">{currentProject.title}</h3>

          {/* Categories/Tags Display */}
          {currentProject.subcategories && (
            <div className="mb-12">
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => handleFilterClick('All')}
                  className={`px-4 py-2 text-sm rounded-full border transition-all duration-300 ${
                    selectedFilter === 'All'
                      ? 'bg-white text-black shadow-lg scale-105'
                      : 'bg-white/10 text-white/80 border-white/20 hover:bg-white/20 hover:scale-105'
                  }`}
                >
                  All
                </button>
                {currentProject.subcategories.map((subcategory) => (
                  <button
                    key={subcategory.name}
                    onClick={() => handleFilterClick(subcategory.name)}
                    className={`px-4 py-2 text-sm rounded-full border transition-all duration-300 ${
                      selectedFilter === subcategory.name
                        ? 'bg-white text-black shadow-lg scale-105'
                        : 'bg-white/10 text-white/80 border-white/20 hover:bg-white/20 hover:scale-105'
                    }`}
                  >
                    {subcategory.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Alternating Image + Description Layout */}
          <div className="space-y-16">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
              >
                {/* Image */}
                <div className="w-full md:w-1/2 flex items-center justify-center">
                  <img 
                    src={item.image} 
                    alt={item.description}
                    className="w-full h-auto object-contain rounded-2xl shadow-2xl"
                  />
                </div>

                {/* Description */}
                <div className="w-full md:w-1/2 space-y-4">
                  <p className="text-xl text-white/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsSection;
