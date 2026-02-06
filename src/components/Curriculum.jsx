import React from 'react'
import { useMobileHover } from '../hooks/useMobileHover'

function Curriculum() {
  const { hoveredId: hoveredModuleId, handleItemInteraction, containerRef } = useMobileHover()
  
  const modules = [
    { 
      number: 1, 
      title: 'Arrays', 
      icon: '📊', 
      level: 'Beginner',
      topics: ['Ram', 'Static', 'Dynamic', 'Stack']
    },
    { 
      number: 2, 
      title: 'Linked List', 
      icon: '🔗', 
      level: 'Beginner',
      topics: ['Single', 'Double', 'Queue']
    },
    { 
      number: 3, 
      title: 'Recursion', 
      icon: '♾️', 
      level: 'Intermediate',
      topics: ['Factorial', 'Fibonacci']
    },
    { 
      number: 4, 
      title: 'Sorting', 
      icon: '🔄', 
      level: 'Intermediate',
      topics: ['Insert', 'Merge', 'Quick', 'Bucket Sort']
    },
    { 
      number: 5, 
      title: 'Binary Search', 
      icon: '🔍', 
      level: 'Intermediate',
      topics: ['Search Array', 'Search Range']
    },
    { 
      number: 6, 
      title: 'Tree', 
      icon: '🌳', 
      level: 'Advanced',
      topics: ['Binary tree', 'Binary search tree', 'BST insert - remove', 'DFS/BFS', 'Set/Map - treemap']
    },
    { 
      number: 7, 
      title: 'Hashing', 
      icon: '🗂️', 
      level: 'Advanced',
      topics: ['Hash usage', 'Hash implementation']
    },
    { 
      number: 8, 
      title: 'Backtracking', 
      icon: '🔙', 
      level: 'Advanced',
      topics: ['Tree Maze']
    },
    { 
      number: 9, 
      title: 'Heap', 
      icon: '⛰️', 
      level: 'Advanced',
      topics: ['Heap Properties', 'Push Pop']
    },
    { 
      number: 10, 
      title: 'Graph', 
      icon: '🕸️', 
      level: 'Advanced',
      topics: ['Matrix DFS', 'Matrix BFS', 'Adjacency list']
    },
    { 
      number: 11, 
      title: 'Dynamic Programming', 
      icon: '🧮', 
      level: 'Expert',
      topics: ['1 Dimension', '2 Dimension']
    }
  ]

  return (
    <section className="section curriculum" id="curriculum">
      <h2 className="section-title">Lộ trình</h2>
      <p className="section-subtitle">
        Tí cố gắng đi từ cơ bản đến nâng cao hơn để các bạn mới bắt đầu có thể dễ dàng.
      </p>
      
      <div className="curriculum-grid" ref={containerRef}>
        {modules.map((module) => (
          <div 
            key={module.number} 
            className={`module-card ${hoveredModuleId === module.number ? 'hovered' : ''}`}
            onClick={() => handleItemInteraction(module.number)}
          >
            <div className="module-number">MODULE {module.number}</div>
            <h3 className="module-title">{module.title}</h3>
            
            <ul className="module-topics">
              {module.topics.map((topic, index) => (
                <li key={index} className="topic-item">
                  <span className="topic-bullet">→</span>
                  {topic}
                </li>
              ))}
            </ul>
            
            <span className={`module-level ${module.level.toLowerCase()}`}>
              {module.level}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Curriculum
