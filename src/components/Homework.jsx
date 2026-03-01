import React, { useState, useMemo, useEffect } from 'react';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import { homeworkData, getCategories, getCategoryStats, getLevels, getCategoryLevelBreakdown } from '../data/homeworkData';
import { problemDescriptions } from '../data/problemDescriptions';
import '../styles/homework.css';

/**
 * Homework Component - Displays LeetCode problems organized by category
 * Features tab navigation to filter problems by category
 */
const Homework = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Get all unique categories and levels from homework data (dynamic)
  const categories = useMemo(() => getCategories(), []);
  const availableLevels = useMemo(() => getLevels(), []);
  
  // Initialize state from URL params or defaults
  const [activeCategory, setActiveCategory] = useState(() => {
    const categoryParam = searchParams.get('category');
    return categoryParam && categories.includes(categoryParam) ? categoryParam : categories[0];
  });
  
  const [activeFilter, setActiveFilter] = useState(() => {
    return searchParams.get('filter') || 'all';
  });
  
  // Restore state from navigation if coming back from problem page
  useEffect(() => {
    if (location.state?.activeCategory) {
      setActiveCategory(location.state.activeCategory);
    }
    if (location.state?.activeFilter) {
      setActiveFilter(location.state.activeFilter);
    }
  }, [location.state]);
  
  // Update URL params when category or filter changes
  useEffect(() => {
    const params = new URLSearchParams();
    params.set('category', activeCategory);
    params.set('filter', activeFilter);
    setSearchParams(params, { replace: true });
  }, [activeCategory, activeFilter, setSearchParams]);

  // Filter problems by selected category and difficulty
  const filteredProblems = useMemo(() => {
    let filtered = homeworkData.filter(problem => problem.category === activeCategory);
    
    if (activeFilter !== 'all') {
      if (activeFilter === 'premium') {
        // Filter for premium problems only
        filtered = filtered.filter(problem => problem.isPremium);
      } else {
        // Filter by difficulty level
        filtered = filtered.filter(problem => 
          problem.level.toLowerCase() === activeFilter
        );
      }
    }
    
    return filtered;
  }, [activeCategory, activeFilter]);

  // Get statistics for current category
  const stats = useMemo(() => getCategoryStats(activeCategory), [activeCategory]);
  
  // Get level breakdown for current category (dynamic)
  const levelBreakdown = useMemo(() => getCategoryLevelBreakdown(activeCategory), [activeCategory]);

  /**
   * Handle tab click - switch to selected category
   */
  const handleTabClick = (category) => {
    setActiveCategory(category);
    setActiveFilter('all'); // Reset filter when changing category
  };
  
  /**
   * Handle filter click - switch difficulty filter
   */
  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  /**
   * Get CSS class for difficulty level badge
   */
  const getLevelClass = (level) => {
    return `level-badge level-${level.toLowerCase()}`;
  };

  /**
   * Handle problem click - navigate to internal page for premium or open LeetCode for free
   */
  const handleProblemClick = (problem) => {
    if (problem.isPremium) {
      // Find the problem slug from problemDescriptions
      const problemDetail = problemDescriptions.find(
        p => p.id === problem.id
      );
      
      if (problemDetail) {
        // Navigate to internal problem description page with current state
        navigate(`/problem/${problemDetail.slug}`, {
          state: { 
            fromCategory: activeCategory,
            fromFilter: activeFilter 
          }
        });
      } else {
        // Fallback to LeetCode if problem description not found
        window.open(problem.link, '_blank', 'noopener,noreferrer');
      }
    } else {
      // Open LeetCode for non-premium problems
      window.open(problem.link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="homework-container">
      {/* Header Section */}
      <div className="homework-header">
        <h1 className="homework-title">DSA Practice Problems</h1>
        <p className="homework-subtitle">
          Let's have fun with these challenges, young talents! 😉
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="tabs-container">
        <div className="tabs-wrapper">
          {categories.map((category) => (
            <button
              key={category}
              className={`tab-button ${activeCategory === category ? 'active' : ''}`}
              onClick={() => handleTabClick(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Filter Bar - Dynamic based on available levels */}
      <div className="filter-bar">
        <button
          className={`filter-button ${activeFilter === 'all' ? 'active' : ''}`}
          onClick={() => handleFilterClick('all')}
        >
          All ({stats.total})
        </button>
        
        {/* Dynamically render filter buttons for each difficulty level (only if count > 0) */}
        {levelBreakdown
          .filter(({ count }) => count > 0)
          .map(({ level, count }) => {
            const levelLower = level.toLowerCase();
            return (
              <button
                key={level}
                className={`filter-button filter-${levelLower} ${activeFilter === levelLower ? 'active' : ''}`}
                onClick={() => handleFilterClick(levelLower)}
              >
                {level} ({count})
              </button>
            );
          })}
        
        {/* Premium filter - only show if there are premium problems */}
        {stats.premium > 0 && (
          <button
            className={`filter-button filter-premium ${activeFilter === 'premium' ? 'active' : ''}`}
            onClick={() => handleFilterClick('premium')}
          >
            Premium ({stats.premium})
          </button>
        )}
      </div>

      {/* Problems List */}
      <div className="problems-container">
        <div className="problems-grid">
          {filteredProblems.map((problem, index) => (
            <div 
              key={`${problem.name}-${index}`}
              className={`problem-card ${problem.isPremium ? 'premium' : ''}`}
              onClick={() => handleProblemClick(problem)}
            >
              {/* Premium Star Icon - Top Right Corner */}
              {problem.isPremium && (
                <div className="premium-star">
                  <svg 
                    width="18" 
                    height="18" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                  >
                    <path d="M12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21L12 17.27L18.18 21l-1.63-7.03L22 9.24l-7.19-.61L12 2z"/>
                  </svg>
                </div>
              )}
              
              {/* Problem Content */}
              <div className="problem-content">
                <h3 className="problem-name">{problem.name}</h3>
                
                <div className="problem-meta">
                  <span className={getLevelClass(problem.level)}>
                    {problem.level}
                  </span>
                </div>
              </div>

              {/* Arrow Icon */}
              <div className="problem-arrow">
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Back to Home Link */}
      <div className="back-to-home">
        <a href="/" className="back-link">
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default Homework;
