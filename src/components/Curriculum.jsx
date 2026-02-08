import React, { useState } from 'react'

function Curriculum() {
  const [expandedNodes, setExpandedNodes] = useState(new Set(['Arrays']))
  const [selectedNode, setSelectedNode] = useState(null)

  const roadmap = {
    Arrays: {
      children: ['Prefix Sum', 'Two Pointers', 'Stack & Queue', 'Hashing', 'Sorting'],
      topics: ['Ram & Memory', 'Static Arrays', 'Dynamic Arrays', 'Stack Operations'],
      description: 'Nền tảng của tất cả các cấu trúc dữ liệu. Arrays là collection các phần tử được lưu trữ liên tiếp trong bộ nhớ.',
      problems: ['Two Sum', 'Best Time to Buy and Sell Stock', 'Contains Duplicate', 'Product of Array Except Self']
    },
    'Prefix Sum': {
      children: ['Linked List'],
      topics: ['Prefix Sum technique', 'Range Sum Queries', 'Subarray Sum'],
      description: 'Kỹ thuật tính tổng trước để tối ưu hóa các truy vấn range sum.',
      problems: ['Range Sum Query', 'Subarray Sum Equals K', 'Contiguous Array']
    },
    'Two Pointers': {
      children: ['Sliding Window'],
      topics: ['Two Pointer technique', 'Fast & Slow Pointers', 'Left & Right Pointers'],
      description: 'Pattern sử dụng 2 con trỏ để giải quyết bài toán một cách tối ưu.',
      problems: ['Valid Palindrome', 'Two Sum II', 'Container With Most Water', '3Sum']
    },
    'Sliding Window': {
      children: ['Tree'],
      topics: ['Fixed Window', 'Variable Window', 'String Problems'],
      description: 'Kỹ thuật duy trì một window di chuyển qua array/string.',
      problems: ['Longest Substring Without Repeating Characters', 'Minimum Window Substring', 'Permutation in String']
    },
    'Stack & Queue': {
      children: [],
      topics: ['Stack operations', 'Queue operations', 'Monotonic Stack', 'Deque'],
      description: 'Cấu trúc dữ liệu LIFO (Stack) và FIFO (Queue).',
      problems: ['Valid Parentheses', 'Min Stack', 'Daily Temperatures', 'Implement Queue using Stacks']
    },
    'Hashing': {
      children: [],
      topics: ['Hash Sets', 'Hash Maps', 'Hash implementation', 'Collision handling'],
      description: 'Sử dụng hash table để lookup, insert, delete trong O(1).',
      problems: ['Two Sum', 'Group Anagrams', 'Top K Frequent Elements', 'Valid Anagram']
    },
    'Sorting': {
      children: ['Binary Search'],
      topics: ['Insertion Sort', 'Merge Sort', 'Quick Sort', 'Bucket Sort', 'Radix Sort'],
      description: 'Các thuật toán sắp xếp với độ phức tạp khác nhau.',
      problems: ['Sort Colors', 'Merge Intervals', 'Largest Number', 'Sort List']
    },
    'Binary Search': {
      children: ['Tree'],
      topics: ['Search in Array', 'Search Range', 'Binary Search variations', 'Search 2D Matrix'],
      description: 'Tìm kiếm hiệu quả trong mảng đã sắp xếp với O(log n).',
      problems: ['Binary Search', 'Search in Rotated Sorted Array', 'Find Minimum in Rotated Sorted Array', 'Koko Eating Bananas']
    },
    'Linked List': {
      children: ['Tree'],
      topics: ['Singly Linked List', 'Doubly Linked List', 'Fast & Slow Pointer', 'Reverse Linked List'],
      description: 'Cấu trúc dữ liệu gồm các nodes liên kết với nhau.',
      problems: ['Reverse Linked List', 'Merge Two Sorted Lists', 'Linked List Cycle', 'Remove Nth Node From End']
    },
    'Tree': {
      children: ['Heap', 'Recursion'],
      topics: ['Binary Tree', 'Binary Search Tree', 'BST Insert/Remove', 'DFS/BFS', 'TreeMap/TreeSet'],
      description: 'Cấu trúc dữ liệu phân cấp với root và children nodes.',
      problems: ['Maximum Depth of Binary Tree', 'Invert Binary Tree', 'Lowest Common Ancestor', 'Validate BST']
    },
    'Heap': {
      children: [],
      topics: ['Min Heap', 'Max Heap', 'Push/Pop operations', 'Priority Queue', 'Heapify'],
      description: 'Cấu trúc dữ liệu tree-based đảm bảo phần tử lớn nhất/nhỏ nhất ở root.',
      problems: ['Kth Largest Element', 'Top K Frequent Elements', 'Merge K Sorted Lists', 'Find Median from Data Stream']
    },
    'Recursion': {
      children: ['Backtracking', 'Graph', 'Dynamic Programming'],
      topics: ['Base case', 'Recursive case', 'Fibonacci', 'Factorial', 'Tree Recursion'],
      description: 'Kỹ thuật giải quyết vấn đề bằng cách gọi chính nó.',
      problems: ['Fibonacci Number', 'Climbing Stairs', 'Pow(x, n)', 'Reverse String']
    },
    'Backtracking': {
      children: [],
      topics: ['Permutations', 'Combinations', 'Subsets', 'N-Queens', 'Sudoku Solver'],
      description: 'Thuật toán thử tất cả các khả năng và quay lui khi không thỏa mãn.',
      problems: ['Subsets', 'Permutations', 'Combination Sum', 'N-Queens', 'Word Search']
    },
    'Graph': {
      children: [],
      topics: ['Matrix DFS', 'Matrix BFS', 'Adjacency List', 'Adjacency Matrix', 'Topological Sort'],
      description: 'Cấu trúc dữ liệu gồm các nodes (vertices) và edges.',
      problems: ['Number of Islands', 'Clone Graph', 'Course Schedule', 'Pacific Atlantic Water Flow']
    },
    'Dynamic Programming': {
      children: [],
      topics: ['1D DP', '2D DP', 'Memoization', 'Tabulation', 'State Transition'],
      description: 'Kỹ thuật tối ưu hóa bằng cách lưu kết quả của các subproblems.',
      problems: ['Climbing Stairs', 'House Robber', 'Coin Change', 'Longest Common Subsequence', 'Edit Distance']
    }
  }

  const toggleNode = (nodeName) => {
    const newExpanded = new Set(expandedNodes)
    if (newExpanded.has(nodeName)) {
      newExpanded.delete(nodeName)
    } else {
      newExpanded.add(nodeName)
    }
    setExpandedNodes(newExpanded)
  }

  const openNodeDetails = (nodeName, e) => {
    e.stopPropagation()
    setSelectedNode(nodeName)
  }

  const closeModal = () => {
    setSelectedNode(null)
  }

  const RoadmapNode = ({ name, data, level = 0 }) => {
    const isExpanded = expandedNodes.has(name)
    const hasChildren = data.children && data.children.length > 0

    return (
      <div className="roadmap-node-wrapper">
        <div className="roadmap-node-container">
          <div 
            className="roadmap-node"
            onClick={(e) => openNodeDetails(name, e)}
          >
            <div className="node-header">
              <span className="node-title">{name}</span>
            </div>
          </div>
          
          {hasChildren && (
            <button 
              className={`expand-button ${isExpanded ? 'expanded' : ''}`}
              onClick={() => toggleNode(name)}
            >
              {isExpanded ? '−' : '+'}
            </button>
          )}
        </div>

        {hasChildren && (
          <div className={`children-container ${isExpanded ? 'visible' : 'hidden'}`}>
            <div className="connector-vertical"></div>
            <div className="children-row">
              {data.children.map((childName, idx) => (
                <div key={idx} className="child-wrapper">
                  <div className="connector-to-child"></div>
                  <RoadmapNode 
                    name={childName} 
                    data={roadmap[childName]} 
                    level={level + 1}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    )
  }

  return (
    <section className="section curriculum" id="curriculum">
      <h2 className="section-title">Lộ trình</h2>
      <p className="section-subtitle">
        Chương trình được thiết kế theo lộ trình từ nền tảng đến nâng cao, phù hợp với mọi trình độ.
      </p>
      
      <div className="roadmap-container">
        <RoadmapNode name="Arrays" data={roadmap['Arrays']} />
      </div>

      {selectedNode && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <h3 className="modal-title">{selectedNode}</h3>
            <p className="modal-description">{roadmap[selectedNode].description}</p>
            
            <div className="modal-section">
              <h4>Topics</h4>
              <div className="modal-topics">
                {roadmap[selectedNode].topics.map((topic, idx) => (
                  <div key={idx} className="modal-topic-tag">{topic}</div>
                ))}
              </div>
            </div>

            {roadmap[selectedNode].problems && (
              <div className="modal-section">
                <h4>Sample Problems</h4>
                <ul className="modal-problems">
                  {roadmap[selectedNode].problems.map((problem, idx) => (
                    <li key={idx}>{problem}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  )
}

export default Curriculum
