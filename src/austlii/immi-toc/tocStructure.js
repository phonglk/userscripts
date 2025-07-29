/**
 * Extracts table of contents structure from document body
 * @returns {Array} Hierarchical structure of headings
 */
function getTOCStructure() {
  const body = document.body;
  const headingPatterns = [
    /^Subclass\s+\d{3}/i,  // Subclass followed by 3 digits
    /^\d{3}\.\d{1,3}/,     // 3 digits followed by dot and 1-3 digits
  ];
  
  function isHeading(text) {
    return headingPatterns.some(pattern => pattern.test(text.trim()));
  }
  
  function hasNeighboringSpanNodes(node) {
    // Check if this span node has sibling span nodes
    if (node.nodeName.toLowerCase() === 'span' && node.parentNode) {
      const siblings = Array.from(node.parentNode.childNodes);
      const spanSiblings = siblings.filter(sibling => 
        sibling.nodeType === Node.ELEMENT_NODE && 
        sibling.nodeName.toLowerCase() === 'span'
      );
      return spanSiblings.length > 1;
    }
    return false;
  }
  
  function isFirstSpanNode(node) {
    // Check if this is the first span node among its siblings
    if (node.nodeName.toLowerCase() === 'span' && node.parentNode) {
      const siblings = Array.from(node.parentNode.childNodes);
      const spanSiblings = siblings.filter(sibling => 
        sibling.nodeType === Node.ELEMENT_NODE && 
        sibling.nodeName.toLowerCase() === 'span'
      );
      return spanSiblings.length > 1 && spanSiblings[0] === node;
    }
    return false;
  }
  
  function isSpanWithHeadingContent(node) {
    // For span nodes, check if they contain heading content
    if (node.nodeName.toLowerCase() === 'span') {
      const text = node.textContent || '';
      return isHeading(text);
    }
    return false;
  }
  
  function countChildren(node) {
    let count = 0;
    const walker = document.createTreeWalker(
      node,
      NodeFilter.SHOW_ELEMENT,
      null,
      false
    );
    
    while (walker.nextNode()) {
      count++;
    }
    return count;
  }
  
  function findHeadings(node) {
    const headings = [];
    
    // Check if current node is an element with heading text
    if (node.nodeType === Node.ELEMENT_NODE) {
      const text = node.textContent || '';
      if (isHeading(text)) {
        // For span nodes, check if they have neighboring span nodes
        if (node.nodeName.toLowerCase() === 'span') {
          if (hasNeighboringSpanNodes(node)) {
            // Only add if this is the first span node among siblings
            if (isFirstSpanNode(node)) {
              const hasChildHeadings = hasChildElementsWithHeadings(node);
              if (!hasChildHeadings) {
                headings.push({
                  header: text.trim(),
                  children: [],
                  node: node,
                  childCount: countChildren(node)
                });
              }
            }
          } else {
            // No neighboring span nodes, treat normally
            const hasChildHeadings = hasChildElementsWithHeadings(node);
            if (!hasChildHeadings) {
              headings.push({
                header: text.trim(),
                children: [],
                node: node,
                childCount: countChildren(node)
              });
            }
          }
        } else {
          // Non-span elements, treat normally
          const hasChildHeadings = hasChildElementsWithHeadings(node);
          if (!hasChildHeadings) {
            headings.push({
              header: text.trim(),
              children: [],
              node: node,
              childCount: countChildren(node)
            });
          }
        }
      }
    }
    
    // Recursively search children
    for (let child of node.childNodes) {
      if (child.nodeType === Node.ELEMENT_NODE) {
        const childHeadings = findHeadings(child);
        headings.push(...childHeadings);
      }
    }
    
    return headings;
  }
  
  function hasChildElementsWithHeadings(node) {
    for (let child of node.childNodes) {
      if (child.nodeType === Node.ELEMENT_NODE) {
        const text = child.textContent || '';
        if (isHeading(text)) {
          return true;
        }
        // Recursively check children
        if (hasChildElementsWithHeadings(child)) {
          return true;
        }
      }
    }
    return false;
  }
  
  function buildHierarchy(headings) {
    const result = [];
    const stack = [];
    
    for (const heading of headings) {
      const level = getHeadingLevel(heading.header);
      
      // Pop stack until we find the right parent level
      while (stack.length > 0 && stack[stack.length - 1].level >= level) {
        stack.pop();
      }
      
      const headingNode = {
        header: heading.header,
        children: [],
        node: heading.node,
        level: level
      };
      
      if (stack.length > 0) {
        stack[stack.length - 1].children.push(headingNode);
      } else {
        result.push(headingNode);
      }
      
      stack.push(headingNode);
    }
    
    return result;
  }
  
  function filterHeadingsWithoutChildren(headings) {
    return headings.filter(heading => {
      // Keep heading if it has children
      if (heading.children && heading.children.length > 0) {
        // Recursively filter children
        heading.children = filterHeadingsWithoutChildren(heading.children);
        return true;
      }
      
      // For first level headings (level 1), only keep if they have children
      if (heading.level === 1) {
        return false; // Remove first level headings without children
      }
      
      // For other levels, keep them
      return true;
    });
  }
  
  function getHeadingLevel(text) {
    // Determine heading level based on pattern
    if (/^Subclass\s+\d{3}/i.test(text)) {
      return 1; // Top level
    } else if (/^\d{3}\.\d{1,3}/.test(text)) {
      return 2; // Sub level
    }
    return 1; // Default
  }
  
  const allHeadings = findHeadings(body);
  return filterHeadingsWithoutChildren(buildHierarchy(allHeadings));
}

/**
 * Helper function to create a mock DOM structure for testing
 * @param {string} html - HTML string to parse
 * @returns {Document} Mock document with the parsed HTML
 */
function createMockDocument(html) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  return doc;
}

// Export for CommonJS
module.exports = {
  getTOCStructure,
  createMockDocument
}; 