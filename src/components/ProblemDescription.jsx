import React, { useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { problemDescriptions } from '../data/problemDescriptions';
import '../styles/problem-description.css';
import '../styles/mobile/mobile-problem-description.css';

/**
 * ProblemDescription Component - Displays LeetCode-style problem description for premium problems
 * Mimics the exact LeetCode UI without code editor
 */
const ProblemDescription = () => {
  const { problemSlug } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  // Find the problem by slug
  const problem = problemDescriptions.find(p => p.slug === problemSlug);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [problemSlug]);

  // If problem not found, show error
  if (!problem) {
    return (
      <div className="problem-container">
        <div className="problem-not-found">
          <h2>Problem Not Found</h2>
          <p>The problem you're looking for doesn't exist.</p>
          <button onClick={() => navigate('/homework')} className="back-button">
            Back to Homework
          </button>
        </div>
      </div>
    );
  }

  // Get difficulty class for styling
  const getDifficultyClass = () => {
    switch(problem.difficulty.toLowerCase()) {
      case 'easy': return 'difficulty-easy';
      case 'medium': return 'difficulty-medium';
      case 'hard': return 'difficulty-hard';
      default: return '';
    }
  };

  return (
    <div className="problem-container">
      {/* Header */}
      <div className="problem-header">
        <button onClick={() => navigate('/homework', {
          state: {
            activeCategory: location.state?.fromCategory,
            activeFilter: location.state?.fromFilter
          }
        })} className="back-arrow">
          ← Back
        </button>
        <div className="problem-title-section">
          <h1 className="problem-title">
            {problem.id}. {problem.title}
          </h1>
          <div className="problem-meta">
            <span className={`difficulty-badge ${getDifficultyClass()}`}>
              {problem.difficulty}
            </span>
          </div>
        </div>
      </div>

      {/* Problem Content */}
      <div className="problem-content">
        <div className="problem-description">
          {/* Description Title */}
          <p className="section-title">Description:</p>
          
          {/* Problem Statement */}
          <div 
            className="problem-statement" 
            dangerouslySetInnerHTML={{ __html: problem.description }}
          />

          {/* Examples */}
          {problem.examples && problem.examples.map((example, index) => (
            <div key={index} className="example-section">
              <p className="example-title">Example {index + 1}:</p>
              <div className="example-content">
                {example.input && (
                  <div className="example-block">
                    <strong>Input:</strong> {example.input}
                  </div>
                )}
                {example.output && (
                  <div className="example-block">
                    <strong>Output:</strong> {example.output}
                  </div>
                )}
                {example.explanation && (
                  <div className="example-block">
                    <strong>Explanation:</strong> {example.explanation}
                  </div>
                )}
                {example.image && (
                  <div className="example-image">
                    <img src={example.image} alt={`Example ${index + 1}`} />
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Constraints */}
          {problem.constraints && (
            <div className="constraints-section">
              <p className="section-title">Constraints:</p>
              <ul className="constraints-list">
                {problem.constraints.map((constraint, index) => (
                  <li key={index} dangerouslySetInnerHTML={{ __html: constraint }} />
                ))}
              </ul>
            </div>
          )}

          {/* Follow-up */}
          {problem.followUp && (
            <div className="followup-section">
              <p className="section-title">Follow-up:</p>
              <p className="followup-text" dangerouslySetInnerHTML={{ __html: problem.followUp }} />
            </div>
          )}

          {/* Hints */}
          {problem.hints && problem.hints.length > 0 && (
            <div className="hints-section">
              <p className="section-title">Hints:</p>
              {problem.hints.map((hint, index) => (
                <details key={index} className="hint-details">
                  <summary>Hint {index + 1}</summary>
                  <p dangerouslySetInnerHTML={{ __html: hint }} />
                </details>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProblemDescription;
