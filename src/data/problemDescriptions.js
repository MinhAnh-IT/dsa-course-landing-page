/**
 * Problem Descriptions Data
 * Contains full problem descriptions for premium LeetCode problems
 * Mimics LeetCode's problem description format
 */

export const problemDescriptions = [
  {
    id: 271,
    slug: 'encode-and-decode-strings',
    title: 'Encode and Decode Strings',
    difficulty: 'Medium',
    category: 'Hashing',
    isPremium: true,
    description: `
      <p>Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings.</p>
      <p>Please implement <code>encode</code> and <code>decode</code></p>
    `,
    examples: [
      {
        input: 'strs = ["neet","code","love","you"]',
        output: '["neet","code","love","you"]',
        explanation: 'The encoded string can be any valid encoding that allows us to decode it back to the original array.'
      },
      {
        input: 'strs = ["we","say",":","yes"]',
        output: '["we","say",":","yes"]',
        explanation: 'The string may contain any possible characters including special characters.'
      }
    ],
    constraints: [
      '<code>0 <= strs.length < 100</code>',
      '<code>0 <= strs[i].length < 200</code>',
      '<code>strs[i]</code> contains only UTF-8 characters.'
    ],
    followUp: 'Can you design an algorithm that works even if the strings contain the delimiter character?',
    hints: []
  },
  {
    id: 286,
    slug: 'walls-and-gates',
    title: 'Walls and Gates',
    difficulty: 'Medium',
    category: 'Graphs',
    isPremium: true,
    description: `
      <p>You are given an <code>m x n</code> grid <code>rooms</code> initialized with these three possible values:</p>
      <ul>
        <li><code>-1</code> A wall or an obstacle.</li>
        <li><code>0</code> A gate.</li>
        <li><code>INF</code> Infinity means an empty room. We use the value <code>2<sup>31</sup> - 1 = 2147483647</code> to represent <code>INF</code> as you may assume that the distance to a gate is less than <code>2147483647</code>.</li>
      </ul>
      <p>Fill each empty room with the distance to its nearest gate. If it is impossible to reach a gate, it should be filled with <code>INF</code>.</p>
    `,
    examples: [
      {
        input: 'rooms = [[2147483647,-1,0,2147483647],[2147483647,2147483647,2147483647,-1],[2147483647,-1,2147483647,-1],[0,-1,2147483647,2147483647]]',
        output: '[[3,-1,0,1],[2,2,1,-1],[1,-1,2,-1],[0,-1,3,4]]',
        explanation: 'Each empty room is filled with the distance to its nearest gate.'
      },
      {
        input: 'rooms = [[-1]]',
        output: '[[-1]]',
        explanation: 'There are no gates, so the room remains unchanged.'
      }
    ],
    constraints: [
      '<code>m == rooms.length</code>',
      '<code>n == rooms[i].length</code>',
      '<code>1 <= m, n <= 250</code>',
      '<code>rooms[i][j]</code> is <code>-1</code>, <code>0</code>, or <code>2<sup>31</sup> - 1</code>.'
    ],
    followUp: null,
    hints: [
      'Use BFS starting from all gates simultaneously.',
      'Process all gates in one pass to find the shortest distance to each room.'
    ]
  },
  {
    id: 261,
    slug: 'graph-valid-tree',
    title: 'Graph Valid Tree',
    difficulty: 'Medium',
    category: 'Graphs',
    isPremium: true,
    description: `
      <p>You have a graph of <code>n</code> nodes labeled from <code>0</code> to <code>n - 1</code>. You are given an integer <code>n</code> and a list of <code>edges</code> where <code>edges[i] = [a<sub>i</sub>, b<sub>i</sub>]</code> indicates that there is an undirected edge between nodes <code>a<sub>i</sub></code> and <code>b<sub>i</sub></code> in the graph.</p>
      <p>Return <code>true</code> if the edges of the given graph make up a valid tree, and <code>false</code> otherwise.</p>
    `,
    examples: [
      {
        input: 'n = 5, edges = [[0,1],[0,2],[0,3],[1,4]]',
        output: 'true',
        explanation: 'The graph forms a valid tree.'
      },
      {
        input: 'n = 5, edges = [[0,1],[1,2],[2,3],[1,3],[1,4]]',
        output: 'false',
        explanation: 'The graph contains a cycle, so it is not a valid tree.'
      }
    ],
    constraints: [
      '<code>1 <= n <= 2000</code>',
      '<code>0 <= edges.length <= 5000</code>',
      '<code>edges[i].length == 2</code>',
      '<code>0 <= a<sub>i</sub>, b<sub>i</sub> < n</code>',
      '<code>a<sub>i</sub> != b<sub>i</sub></code>',
      'There are no self-loops or repeated edges.'
    ],
    followUp: null,
    hints: [
      'A valid tree must be connected and have no cycles.',
      'For a tree with n nodes, there must be exactly n-1 edges.',
      'You can use Union-Find or DFS to detect cycles.'
    ]
  },
  {
    id: 323,
    slug: 'number-of-connected-components-in-an-undirected-graph',
    title: 'Number of Connected Components in an Undirected Graph',
    difficulty: 'Medium',
    category: 'Graphs',
    isPremium: true,
    description: `
      <p>You have a graph of <code>n</code> nodes. You are given an integer <code>n</code> and an array <code>edges</code> where <code>edges[i] = [a<sub>i</sub>, b<sub>i</sub>]</code> indicates that there is an edge between <code>a<sub>i</sub></code> and <code>b<sub>i</sub></code> in the graph.</p>
      <p>Return the number of connected components in the graph.</p>
    `,
    examples: [
      {
        input: 'n = 5, edges = [[0,1],[1,2],[3,4]]',
        output: '2',
        explanation: 'There are 2 connected components: {0, 1, 2} and {3, 4}.'
      },
      {
        input: 'n = 5, edges = [[0,1],[1,2],[2,3],[3,4]]',
        output: '1',
        explanation: 'All nodes are connected in one component.'
      }
    ],
    constraints: [
      '<code>1 <= n <= 2000</code>',
      '<code>1 <= edges.length <= 5000</code>',
      '<code>edges[i].length == 2</code>',
      '<code>0 <= a<sub>i</sub> <= b<sub>i</sub> < n</code>',
      '<code>a<sub>i</sub> != b<sub>i</sub></code>',
      'There are no repeated edges.'
    ],
    followUp: null,
    hints: [
      'Use Union-Find (Disjoint Set Union) data structure.',
      'Count the number of unique parent nodes after processing all edges.',
      'Alternatively, use DFS or BFS to count connected components.'
    ]
  },
  {
    id: 269,
    slug: 'alien-dictionary',
    title: 'Alien Dictionary',
    difficulty: 'Hard',
    category: 'Graphs',
    isPremium: true,
    description: `
      <p>There is a new alien language that uses the English alphabet. However, the order among the letters is unknown to you.</p>
      <p>You are given a list of strings <code>words</code> from the alien language's dictionary, where the strings in <code>words</code> are sorted lexicographically by the rules of this new language.</p>
      <p>Return a string of the unique letters in the new alien language sorted in lexicographically increasing order by the new language's rules. If there is no solution, return <code>""</code>. If there are multiple solutions, return any of them.</p>
    `,
    examples: [
      {
        input: 'words = ["wrt","wrf","er","ett","rftt"]',
        output: '"wertf"',
        explanation: 'From the given words, we can deduce the order: w -> e -> r -> t -> f.'
      },
      {
        input: 'words = ["z","x"]',
        output: '"zx"',
        explanation: 'From the given words, we can deduce the order: z -> x.'
      },
      {
        input: 'words = ["z","x","z"]',
        output: '""',
        explanation: 'The order is invalid, so return "".'
      }
    ],
    constraints: [
      '<code>1 <= words.length <= 100</code>',
      '<code>1 <= words[i].length <= 100</code>',
      '<code>words[i]</code> consists of only lowercase English letters.'
    ],
    followUp: null,
    hints: [
      'Build a directed graph where an edge from u to v means u comes before v.',
      'Use topological sort to find the order.',
      'Detect cycles to determine if the input is invalid.'
    ]
  },
  {
    id: 1265,
    slug: 'print-immutable-linked-list-in-reverse',
    title: 'Print Immutable Linked List in Reverse',
    difficulty: 'Medium',
    category: 'Linked List',
    isPremium: true,
    description: `
      <p>You are given an immutable linked list, print out all values of each node in reverse with the help of the following interface:</p>
      <ul>
        <li><code>ImmutableListNode</code>: An interface of immutable linked list, you are given the head of the list.</li>
      </ul>
      <p>You need to use the following functions to access the linked list (you can't access the <code>ImmutableListNode</code> directly):</p>
      <ul>
        <li><code>ImmutableListNode.printValue()</code>: Print value of the current node.</li>
        <li><code>ImmutableListNode.getNext()</code>: Return the next node.</li>
      </ul>
      <p>The input is only given to initialize the linked list internally. You must solve this problem without modifying the linked list. In other words, you must operate the linked list using only the mentioned APIs.</p>
    `,
    examples: [
      {
        input: 'head = [1,2,3,4]',
        output: '[4,3,2,1]',
        explanation: 'Print the values in reverse order.'
      },
      {
        input: 'head = [0,-4,-1,3,-5]',
        output: '[-5,3,-1,-4,0]',
        explanation: 'Print the values in reverse order.'
      }
    ],
    constraints: [
      'The length of the linked list is between <code>[1, 1000]</code>.',
      'The value of each node in the linked list is between <code>[-1000, 1000]</code>.'
    ],
    followUp: 'Could you solve this problem in O(1) space complexity and without modifying the linked list?',
    hints: [
      'Use recursion to print in reverse order.',
      'Consider the space complexity of your recursive solution.'
    ]
  },
  {
    id: 702,
    slug: 'search-in-a-sorted-array-of-unknown-size',
    title: 'Search in a Sorted Array of Unknown Size',
    difficulty: 'Medium',
    category: 'Binary Search',
    isPremium: true,
    description: `
      <p>This is an interactive problem.</p>
      <p>You have a sorted array of unique elements and an unknown size. You do not have an access to the array but you can use the <code>ArrayReader</code> interface to access it. You can call <code>ArrayReader.get(i)</code> that:</p>
      <ul>
        <li>returns the value at the <code>i<sup>th</sup></code> index (0-indexed) of the secret array (i.e., <code>secret[i]</code>), or</li>
        <li>returns <code>2<sup>31</sup> - 1</code> if the <code>i</code> is out of the boundary of the array.</li>
      </ul>
      <p>You are also given an integer <code>target</code>.</p>
      <p>Return the index <code>k</code> of the hidden array where <code>secret[k] == target</code> or return <code>-1</code> otherwise.</p>
      <p>You must write an algorithm with <code>O(log n)</code> runtime complexity.</p>
    `,
    examples: [
      {
        input: 'secret = [-1,0,3,5,9,12], target = 9',
        output: '4',
        explanation: '9 exists in secret and its index is 4.'
      },
      {
        input: 'secret = [-1,0,3,5,9,12], target = 2',
        output: '-1',
        explanation: '2 does not exist in secret so return -1.'
      }
    ],
    constraints: [
      '<code>1 <= secret.length <= 10<sup>4</sup></code>',
      '<code>-10<sup>4</sup> <= secret[i], target <= 10<sup>4</sup></code>',
      '<code>secret</code> is sorted in a strictly increasing order.'
    ],
    followUp: null,
    hints: [
      'First, find the right boundary by exponentially increasing the index.',
      'Then use binary search within the found range.'
    ]
  },
  {
    id: 159,
    slug: 'longest-substring-with-at-most-two-distinct-characters',
    title: 'Longest Substring with At Most Two Distinct Characters',
    difficulty: 'Medium',
    category: 'Sliding Window',
    isPremium: true,
    description: `
      <p>Given a string <code>s</code>, return the length of the longest substring that contains at most two distinct characters.</p>
    `,
    examples: [
      {
        input: 's = "eceba"',
        output: '3',
        explanation: 'The substring is "ece" with length 3.'
      },
      {
        input: 's = "ccaabbb"',
        output: '5',
        explanation: 'The substring is "aabbb" with length 5.'
      }
    ],
    constraints: [
      '<code>1 <= s.length <= 10<sup>5</sup></code>',
      '<code>s</code> consists of English letters.'
    ],
    followUp: 'Can you solve it using a sliding window approach in O(n) time?',
    hints: [
      'Use a sliding window with a hash map to track character frequencies.',
      'Expand the window when we have at most 2 distinct characters.',
      'Shrink the window when we have more than 2 distinct characters.'
    ]
  }
];

/**
 * Get problem by slug
 */
export const getProblemBySlug = (slug) => {
  return problemDescriptions.find(p => p.slug === slug);
};

/**
 * Get all premium problems
 */
export const getPremiumProblems = () => {
  return problemDescriptions.filter(p => p.isPremium);
};
