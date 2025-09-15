import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useRepositoriesStore } from "../../store/useRepositoriesStore";
import { Link, useNavigate } from 'react-router-dom';
import {
  Star,
  Cpu,
  LayoutGrid,
  List,
  Search,
  Filter,
  BookOpen,
  Calendar,
  Tag,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import DashboardFooter from "../../components/dashboard/DashboardFooter";

const heroVariants = {
  hidden: { opacity: 0, y: -50, scale: 0.9, filter: "blur(20px)" },
  visible: {
    opacity: 1, y: 0, scale: 1, filter: "blur(0px)",
    transition: { duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
};

const RepositoriesListing = () => {
  const {
    projects,
    pagination,
    filters,
    sort,
    loadingList,
    error,
    fetchProjects,
    setSearch,
    setFilter,
    setSort,
    goToPage,
    clearFiltersAndSearch,
  } = useRepositoriesStore();

  const navigate = useNavigate();
  
  const [viewMode, setViewMode] = useState("grid");
  const [showFilters, setShowFilters] = useState(false);
  const [activeFilterType, setActiveFilterType] = useState("category");
  
  useEffect(() => {
    fetchProjects();
  }, []); 

  const handleRepoClick = (id, event) => {
    if (event.target.tagName === 'A' || event.target.closest('a')) {
      return;
    }
    navigate(`/repositories/${id}`);
  };
  
  const formatDate = (dateString) => {
    if (!dateString) return "Unknown";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "short", year: "numeric" });
  };
 
  const allTags = useMemo(() => Array.from(new Set(projects.flatMap(p => p.tags || []))).sort(), [projects]);
  const allTechStacks = useMemo(() => Array.from(new Set(projects.flatMap(p => p.techStack || []))).sort(), [projects]);
  const activeFiltersCount = filters.tags.length + filters.tech.length;

  if (loadingList && projects.length === 0) {
    return (
      <div className="min-h-screen bg-[#121212] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#C6FF3D]"></div>
      </div>
    );
  }

  return (
    <motion.div
      className="min-h-screen bg-[#121212] text-white"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        
        <motion.div className="mb-6 flex items-center justify-between" variants={itemVariants}>
          <motion.div
              variants={heroVariants}
              whileHover={{ rotateX: 2 }}
            >
              <h1 className="text-xl sm:text-2xl font-bold text-white">
                Project Repositories
              </h1>
              <p className="text-[#A1A1AA] mt-2 text-sm sm:text-base">
                Explore a <span className="text-[#BCDD19]">curated</span> collection of <span className="text-[#BCDD19]">community-driven</span> projects.
              </p>
          </motion.div>
          <div className="text-[#A1A1AA] text-sm">
              {pagination.totalProjects} project{pagination.totalProjects !== 1 ? 's' : ''} found
          </div>
        </motion.div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 text-center mb-6 text-red-400">
            {error}
          </div>
        )}
       
        <motion.div className="bg-[#1A1A1A] border border-[#23252B] rounded-xl p-6 mb-6" variants={itemVariants}>
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A1A1AA]" size={20} />
              <input
                  type="text"
                  value={filters.search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search by name, description, or technology..."
                  className="w-full bg-[#121212] border border-[#3A3A3A] rounded-lg pl-12 pr-4 py-3 text-white placeholder-[#A1A1AA] focus:outline-none focus:ring-2 focus:ring-[#C6FF3D]/50 focus:border-[#C6FF3D] transition-all"
              />
            </div>
            <div className="flex items-center gap-2">
              <div className="flex bg-[#121212] border border-[#3A3A3A] rounded-lg p-1">
                <button onClick={() => setViewMode("grid")} className={`p-2 rounded-md transition-all ${viewMode === 'grid' ? 'bg-[#3A3A3A] text-white' : 'text-[#A1A1AA] hover:bg-[#2A2A2A]'}`}><LayoutGrid size={20} /></button>
                <button onClick={() => setViewMode("list")} className={`p-2 rounded-md transition-all ${viewMode === 'list' ? 'bg-[#3A3A3A] text-white' : 'text-[#A1A1AA] hover:bg-[#2A2A2A]'}`}><List size={20} /></button>
              </div>
              <button onClick={() => setShowFilters(!showFilters)} className="flex w-full md:w-auto items-center justify-center gap-2 bg-transparent border border-[#3A3A3A] text-white px-4 py-3 rounded-lg hover:bg-[#2A2A2A] transition-colors relative">
                <Filter size={20} /> Filters
                {activeFiltersCount > 0 && <span className="absolute -top-2 -right-2 bg-[#C6FF3D] text-black text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">{activeFiltersCount}</span>}
              </button>
            </div>
          </div>

          {/* --- MODIFIED ANIMATION --- */}
          <AnimatePresence>
            {showFilters && (
                <motion.div
                  className="overflow-hidden mt-6 pt-6 border-t border-[#23252B]"
                  initial={{ opacity: 0, maxHeight: 0 }}
                  animate={{ opacity: 1, maxHeight: "500px" }} // Animate to a height large enough for the content
                  exit={{ opacity: 0, maxHeight: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex bg-[#121212] border border-[#3A3A3A] rounded-lg p-1">
                            <button onClick={() => setActiveFilterType("category")} className={`px-3 py-1.5 rounded-md text-sm flex items-center gap-1.5 ${activeFilterType === 'category' ? 'bg-[#3A3A3A] text-white' : 'text-[#A1A1AA] hover:text-white'}`}><Tag size={16}/>Categories</button>
                            <button onClick={() => setActiveFilterType("tech")} className={`px-3 py-1.5 rounded-md text-sm flex items-center gap-1.5 ${activeFilterType === 'tech' ? 'bg-[#3A3A3A] text-white' : 'text-[#A1A1AA] hover:text-white'}`}><Cpu size={16}/>Tech Stack</button>
                        </div>
                        <button onClick={clearFiltersAndSearch} className="text-sm text-[#A1A1AA] hover:text-white transition-colors">Clear All Filters</button>
                    </div>

                    {activeFilterType === 'category' && (
                        <div className="flex flex-wrap gap-2">
                            <button onClick={() => setFilter('tags', [])} className={`px-3 py-1 text-xs rounded-full ${filters.tags.length === 0 ? 'bg-[#C6FF3D] text-black' : 'bg-[#2A2A2A] text-[#A1A1AA]'}`}>All Categories</button>
                            {allTags.map(tag => <button key={tag} onClick={() => setFilter('tags', [tag])} className={`px-3 py-1 text-xs rounded-full ${filters.tags.includes(tag) ? 'bg-[#C6FF3D] text-black' : 'bg-[#2A2A2A] text-[#A1A1AA]'}`}>{tag}</button>)}
                        </div>
                    )}
                     {activeFilterType === 'tech' && (
                        <div className="flex flex-wrap gap-2">
                            <button onClick={() => setFilter('tech', [])} className={`px-3 py-1 text-xs rounded-full ${filters.tech.length === 0 ? 'bg-[#C6FF3D] text-black' : 'bg-[#2A2A2A] text-[#A1A1AA]'}`}>All Technologies</button>
                            {allTechStacks.map(tech => <button key={tech} onClick={() => setFilter('tech', [tech])} className={`px-3 py-1 text-xs rounded-full ${filters.tech.includes(tech) ? 'bg-[#C6FF3D] text-black' : 'bg-[#2A2A2A] text-[#A1A1AA]'}`}>{tech}</button>)}
                        </div>
                    )}
                </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        
        {!loadingList && !error && (
            projects.length > 0 ? (
                viewMode === 'grid' ? (
                  <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5" variants={containerVariants}>
                    {projects.map((project) => (
                      <ProjectCardGrid key={project.id} project={project} onClick={(e) => handleRepoClick(project.id, e)} formatDate={formatDate}/>
                    ))}
                  </motion.div>
                ) : (
                  <motion.div className="space-y-4" variants={containerVariants}>
                      {projects.map((project) => (
                          <ProjectCardList key={project.id} project={project} onClick={(e) => handleRepoClick(project.id, e)} formatDate={formatDate}/>
                      ))}
                  </motion.div>
                )
            ) : (
                <EmptyState onClear={clearFiltersAndSearch} />
            )
        )}

        {pagination.totalPages > 1 && (
            <motion.div 
              className="flex justify-center items-center gap-2 mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
                {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map(page => (
                    <button key={page} onClick={() => goToPage(page)} className={`px-4 py-2 text-sm rounded-lg transition-colors ${pagination.currentPage === page ? 'bg-[#C6FF3D] text-black font-semibold' : 'bg-[#2A2A2A] text-white hover:bg-[#3A3A3A]'}`}>
                        {page}
                    </button>
                ))}
            </motion.div>
        )}
      </div> 
      <div className='px-8 pb-8'>
        <DashboardFooter />
      </div>
    </motion.div>
  );
};



const ProjectCardGrid = ({ project, onClick, formatDate }) => (
    <motion.div 
      onClick={onClick} 
      className="bg-[#1A1A1A] border border-[#23252B] rounded-xl p-5 transition-all duration-300 cursor-pointer hover:border-[#C6FF3D]/50 group flex flex-col" 
      variants={cardVariants}
      layout
    >
        <div className="flex-grow">
            <h3 className="text-white font-semibold text-lg group-hover:text-[#C6FF3D] transition-colors truncate mb-2">{project.name}</h3>
            <p className="text-[#A1A1AA] text-sm mb-4 line-clamp-2 leading-relaxed">{project.description || "No description available."}</p>
            {project.techStack?.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 3).map((tech) => (
                        <span key={tech} className="bg-[#2A2A2A] text-[#C6FF3D] text-xs font-medium px-2.5 py-1 rounded-full">{tech}</span>
                    ))}
                </div>
            )}
        </div>
        <div className="pt-4 border-t border-[#23252B] mt-auto">
        {project.tags.slice(0, 3).map((tag) => (
            <span key={tag} className=" text-[#A1A1AA] text-xs font-medium pr-2 "># {tag}</span>
        ))}
            <div className="flex items-center justify-between text-[#A1A1AA] text-xs mb-4 mt-4">
                <div className="flex items-center gap-1.5" title="Stars"><Star size={14} className="text-yellow-400" /> <span>{project.stars || 0}</span></div>
                <div className="flex items-center gap-1.5" title="Last Updated"><Calendar size={14} /> <span>{formatDate(project.updatedAt)}</span></div>
            </div>
        </div>
    </motion.div>
);

const ProjectCardList = ({ project, onClick, formatDate }) => (
  <motion.div 
    onClick={onClick} 
    className="bg-[#1A1A1A] border border-[#23252B] rounded-xl p-5 transition-all duration-300 cursor-pointer hover:bg-[#1C1C1C] group" 
    variants={cardVariants}
    layout
  >
    <div className="flex flex-col md:flex-row gap-6">
      <div className="flex-1">
        <h3 className="text-white font-semibold text-lg group-hover:text-[#C6FF3D] transition-colors mb-2">{project.name}</h3>
        <p className="text-[#A1A1AA] text-sm mb-4 line-clamp-1">{project.description || "No description available."}</p>
        <div className="flex flex-wrap gap-2">
          {project.techStack?.map((tech) => (<span key={tech} className="bg-[#C6FF3D]/10 text-[#C6FF3D] text-xs font-medium px-2.5 py-1 rounded-md">{tech}</span>))}
          {project.tags?.map((tag) => (<span key={tag} className="bg-[#2A2A2A] text-[#A1A1AA] text-xs font-medium px-2.5 py-1 rounded-md">{tag}</span>))}
        </div>
      </div>
      <div className="flex md:flex-col md:items-end md:text-right justify-between gap-4 md:w-56">
        <div className="flex items-center md:justify-end gap-4 text-[#A1A1AA] text-sm">
          <div className="flex items-center gap-2"><Star size={14} className="text-yellow-400" /><span>{project.stars || 0}</span></div>
          <div className="flex items-center gap-1.5"><Calendar size={14} /><span>{formatDate(project.updatedAt)}</span></div>
        </div>
      </div>
    </div>
  </motion.div>
);

const EmptyState = ({ onClear }) => (
    <motion.div 
      className="text-center py-16 col-span-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <BookOpen className="mx-auto text-[#A1A1AA] mb-4" size={48} />
      <h3 className="text-white text-xl font-semibold mb-2">No projects found</h3>
      <p className="text-[#A1A1AA] mb-6">Try adjusting your search or clearing the filters.</p>
      <motion.button
        onClick={onClear}
        className="bg-gradient-to-r from-[#C6FF3D] to-[#b3e230] text-black font-semibold px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-[#C6FF3D]/20 transition-all"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Clear Filters
      </motion.button>
    </motion.div>
);

export default RepositoriesListing;
