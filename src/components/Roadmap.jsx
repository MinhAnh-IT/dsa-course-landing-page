import React, { useState, useEffect, useRef } from 'react';
import { roadmapTopics, getTotalLevels, getTopicsByLevel } from '../data/roadmapData';
import './Roadmap.css';

/**
 * Vertical Roadmap Component
 * 
 * Layout Logic:
 * - Topics are organized in predefined levels (0 to N) vertically
 * - Each level contains topics arranged horizontally
 * - Vertical flow: top → bottom represents learning progression
 * - Topics are always visible
 * - Progress is tracked per topic with checkmarks
 * - Connections show prerequisite relationships
 */

const RoadmapTopic = ({ topic, isCompleted, onToggleComplete, nodeRefs, onOpenModal }) => {
  const nodeRef = useRef(null);

  useEffect(() => {
    if (nodeRef.current) {
      nodeRefs.current[topic.id] = nodeRef.current;
    }
  }, [topic.id, nodeRefs]);

  const handleClick = (e) => {
    e.stopPropagation();
    onOpenModal(topic);
  };

  return (
    <div 
      ref={nodeRef}
      className={`roadmap-topic ${isCompleted ? 'completed' : ''}`}
      onClick={handleClick}
    >
      <div className="topic-header">
        <h3>{topic.title}</h3>
      </div>
    </div>
  );
};

const ConnectionLines = ({ topics, completedTopics, nodeRefs }) => {
  const [connections, setConnections] = useState([]);

  useEffect(() => {
    const calculateConnections = () => {
      const lines = [];
      
      topics.forEach(topic => {
        if (topic.prerequisites && topic.prerequisites.length > 0) {
          topic.prerequisites.forEach(prereqId => {
            const fromNode = nodeRefs.current[prereqId];
            const toNode = nodeRefs.current[topic.id];
            
            if (fromNode && toNode) {
              const fromRect = fromNode.getBoundingClientRect();
              const toRect = toNode.getBoundingClientRect();
              const svgContainer = fromNode.closest('.roadmap-grid')?.querySelector('.connection-svg');
              const svgRect = svgContainer?.getBoundingClientRect();
              
              if (svgRect) {
                // Calculate positions relative to SVG container (which is already offset on mobile)
                // For vertical roadmap: connect from bottom of prerequisite to top of current topic
                const fromX = fromRect.left - svgRect.left + fromRect.width / 2;
                const fromY = fromRect.bottom - svgRect.top; // Bottom of prerequisite node
                const toX = toRect.left - svgRect.left + toRect.width / 2;
                const toY = toRect.top - svgRect.top; // Top of current node
                
                lines.push({
                  id: `${prereqId}-${topic.id}`,
                  fromX,
                  fromY,
                  toX,
                  toY,
                  isCompleted: completedTopics.has(prereqId) && completedTopics.has(topic.id)
                });
              }
            }
          });
        }
      });
      
      setConnections(lines);
    };

    // Calculate after render and on every update
    const timer = setTimeout(calculateConnections, 150);
    
    // Recalculate on window resize
    const handleResize = () => {
      setTimeout(calculateConnections, 100);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, [topics, completedTopics]);

  return (
    <svg className="connection-svg">
      {connections.map(conn => {
        // Calculate control points for smooth curve
        const midY = (conn.fromY + conn.toY) / 2;
        const path = `M ${conn.fromX} ${conn.fromY} 
                      C ${conn.fromX} ${midY}, 
                        ${conn.toX} ${midY}, 
                        ${conn.toX} ${conn.toY}`;
        
        return (
          <path
            key={conn.id}
            d={path}
            className={`connection-path ${conn.isCompleted ? 'completed' : ''}`}
            fill="none"
          />
        );
      })}
    </svg>
  );
};

const Roadmap = () => {
  const [completedTopics, setCompletedTopics] = useState(new Set());
  const [showCompleted, setShowCompleted] = useState(true);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const nodeRefs = useRef({});
  const totalLevels = getTotalLevels();

  const toggleTopicComplete = (topicId) => {
    setCompletedTopics(prev => {
      const newSet = new Set(prev);
      if (newSet.has(topicId)) {
        newSet.delete(topicId);
      } else {
        newSet.add(topicId);
      }
      return newSet;
    });
  };

  const openModal = (topic) => {
    setSelectedTopic(topic);
  };

  const closeModal = () => {
    setSelectedTopic(null);
  };

  const resetProgress = () => {
    setCompletedTopics(new Set());
  };

  const completeAll = () => {
    setCompletedTopics(new Set(roadmapTopics.map(t => t.id)));
  };

  const totalProblems = roadmapTopics.length;
  const completedProblems = completedTopics.size;
  const progressPercentage = Math.round((completedProblems / totalProblems) * 100);

  return (
    <div className="roadmap-section">
      <div className="roadmap-header">
        <h2>Lộ Trình Học DSA</h2>
        <p className="roadmap-subtitle">Thành thạo Cấu trúc Dữ liệu & Giải thuật từng bước</p>
      </div>

      <div className="roadmap-container">
        <div className="roadmap-grid">
          <ConnectionLines 
            topics={roadmapTopics} 
            completedTopics={completedTopics}
            nodeRefs={nodeRefs}
          />
          
          {Array.from({ length: totalLevels }).map((_, levelIndex) => {
            const levelTopics = getTopicsByLevel(levelIndex);
            
            return (
              <div key={levelIndex} className="roadmap-level">
                {levelTopics.map(topic => {
                  if (!showCompleted && completedTopics.has(topic.id)) {
                    return null;
                  }
                  
                  return (
                    <RoadmapTopic
                      key={topic.id}
                      topic={topic}
                      isCompleted={completedTopics.has(topic.id)}
                      onToggleComplete={toggleTopicComplete}
                      onOpenModal={openModal}
                      nodeRefs={nodeRefs}
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>

      {selectedTopic && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <h3 className="modal-title">{selectedTopic.title}</h3>
            
            <div className="modal-topics">
              {selectedTopic.content && selectedTopic.content.map((item, idx) => (
                <div key={idx} className="modal-topic-item">{item}</div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Roadmap;
