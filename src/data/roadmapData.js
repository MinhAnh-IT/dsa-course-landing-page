/**
 * Vertical Roadmap Data Structure
 * 
 * Each topic has:
 * - id: unique identifier
 * - title: display name
 * - level: vertical position (0 = top, increases downward)
 * - column: horizontal position within the level (for multiple topics at same level)
 * - prerequisites: array of topic IDs that should be completed first
 */

export const roadmapTopics = [
  // Level 0 - Foundation
  {
    id: 'arrays',
    title: 'Arrays',
    level: 0,
    column: 0,
    prerequisites: [],
    moduleNumber: 1,
    content: ['Ram', 'Static', 'Dynamic', 'Big O']
  },
  
  // Level 1 - From Arrays
  {
    id: 'stack-queue',
    title: 'Stack & Queue',
    level: 1,
    column: 0,
    prerequisites: ['arrays'],
    moduleNumber: 6,
    content: ['Stack', 'Queue']
  },
  {
    id: 'hashing',
    title: 'Hashing',
    level: 1,
    column: 1,
    prerequisites: ['arrays'],
    moduleNumber: 10,
    content: ['Hash Map', 'Hash Set', 'Hash usage', 'Hash implementation']
  },
   {
    id: 'two-pointers',
    title: 'Two Pointers',
    level: 1,
    column: 2,
    prerequisites: ['arrays'],
    moduleNumber: 3,
    content: ['Left & Right Pointers', 'Fast & Slow Pointers', 'Same Direction', 'Opposite Direction']
  },
  {
    id: 'prefix-sum',
    title: 'Prefix Sum',
    level: 1,
    column: 3,
    prerequisites: ['arrays'],
    moduleNumber: 3,
    content: ['1D Prefix Sum', '2D Prefix Sum', 'Range Sum Query', 'Subarray Sum']
  },
  {
    id: 'sorting',
    title: 'Sorting',
    level: 1,
    column: 4,
    prerequisites: ['arrays'],
    moduleNumber: 4,
    content: ['Insert', 'Merge', 'Quick', 'Bucket Sort']
  },
  
  // Level 2
    {
    id: 'linked-list',
    title: 'Linked List',
    level: 2,
    column: 0,
    prerequisites: ['two-pointers'],
    moduleNumber: 2,
    content: ['Single', 'Double']
  },
  {
    id: 'sliding-window',
    title: 'Sliding Window',
    level: 2,
    column: 1,
    prerequisites: ['two-pointers'],
    moduleNumber: 3,
    content: ['Fixed Window', 'Variable Window', 'Maximum/Minimum', 'Substring Problems']
  },
  {
    id: 'binary-search',
    title: 'Binary Search',
    level: 2,
    column: 2,
    prerequisites: ['sorting'],
    moduleNumber: 5,
    content: ['Search Array', 'Search Range']
  },
  
  // Level 3 - Tree
  {
    id: 'tree',
    title: 'Tree',
    level: 3,
    column: 0,
    prerequisites: ['linked-list', 'binary-search'],
    moduleNumber: 9,
    content: ['Binary tree', 'Binary search tree', 'BST insert – remove', 'DFS / BFS']
  },
  
  // Level 4 - From Tree
  {
    id: 'recursion',
    title: 'Recursion',
    level: 4,
    column: 0,
    prerequisites: ['tree'],
    moduleNumber: 7,
    content: ['Factorial', 'Fibonacci']
  },
  {
    id: 'heap',
    title: 'Heap',
    level: 4,
    column: 1,
    prerequisites: ['tree'],
    moduleNumber: 11,
    content: ['Heap Properties', 'Push Pop']
  },
  
  // Level 5 - Advanced
  {
    id: 'backtracking',
    title: 'Backtracking',
    level: 5,
    column: 0,
    prerequisites: ['recursion'],
    moduleNumber: 8,
    content: ['Tree Maze']
  },
  {
    id: 'graph',
    title: 'Graph',
    level: 5,
    column: 2,
    prerequisites: ['recursion'],
    moduleNumber: 12,
    content: ['Matrix DFS', 'Matrix BFS', 'Adjacency list']
  },
  {
    id: 'dynamic-programming',
    title: 'Dynamic Programming',
    level: 5,
    column: 1,
    prerequisites: ['recursion'],
    moduleNumber: 13,
    content: ['1 Dimension', '2 Dimension']
  }
];

// Helper function to get topics by level
export const getTopicsByLevel = (levelIndex) => {
  return roadmapTopics
    .filter(topic => topic.level === levelIndex)
    .sort((a, b) => a.column - b.column);
};

// Get total number of levels
export const getTotalLevels = () => {
  return Math.max(...roadmapTopics.map(t => t.level)) + 1;
};

// Get prerequisites for a topic
export const getPrerequisites = (topicId) => {
  const topic = roadmapTopics.find(t => t.id === topicId);
  return topic ? topic.prerequisites : [];
};
