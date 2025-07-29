const { getTOCStructure, createMockDocument } = require('./tocStructure.js');

// Mock document for testing getTOCStructure with various element types
const mockHTML = `
<!DOCTYPE html>
<html>
<head><title>Test</title></head>
<body>
  <div id="content">
    <div class="heading">Subclass 123</div>
    <p>Some content</p>
    <div>
      <span class="subheading">123.45</span>
      <p>Sub content</p>
      <div>
        <p class="subheading">123.46</p>
        <p>More sub content</p>
      </div>
    </div>
    <h1>Subclass 456</h1>
    <p>Another section</p>
    <div>
      <h2>456.78</h2>
      <p>Another sub section</p>
    </div>
  </div>
</body>
</html>
`;

describe('getTOCStructure', () => {
  let originalBody;

  beforeEach(() => {
    // Store original document.body
    originalBody = document.body;
  });

  afterEach(() => {
    // Restore original document.body
    document.body = originalBody;
  });

  test('should extract TOC structure from mock document with various element types', () => {
    // Create mock document
    const doc = createMockDocument(mockHTML);
    
    // Temporarily replace document.body for testing
    document.body = doc.body;
    
    // Call getTOCStructure
    const result = getTOCStructure();
    
    // Verify result structure
    expect(result).toBeTruthy();
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
    
    // Check first level headings
    const topLevelHeadings = result.filter(item => item.level === 1);
    expect(topLevelHeadings).toHaveLength(2);
    
    // Verify heading content
    const subclassHeadings = topLevelHeadings.map(item => item.header);
    expect(subclassHeadings).toContain('Subclass 123');
    expect(subclassHeadings).toContain('Subclass 456');
    
    // Check for children
    const firstHeading = result.find(item => item.header === 'Subclass 123');
    expect(firstHeading).toBeTruthy();
    expect(firstHeading.children).toBeTruthy();
    expect(Array.isArray(firstHeading.children)).toBe(true);
    
    // Check second level headings
    if (firstHeading.children.length > 0) {
      const subHeadings = firstHeading.children.map(item => item.header);
      expect(subHeadings).toContain('123.45');
    }
    
    console.log('📋 Extracted TOC structure:', JSON.stringify(result, null, 2));
  });

  test('should handle document with no headings', () => {
    const emptyHTML = `
      <!DOCTYPE html>
      <html>
      <head><title>Test</title></head>
      <body>
        <div id="content">
          <p>Regular text content</p>
          <div>More content</div>
        </div>
      </body>
      </html>
    `;
    
    const doc = createMockDocument(emptyHTML);
    document.body = doc.body;
    
    const result = getTOCStructure();
    expect(result).toBeTruthy();
    expect(Array.isArray(result)).toBe(true);
    // Should return empty array or handle gracefully
    console.log('📋 Empty document result:', result);
  });

  test('should handle complex nested structure with mixed elements', () => {
    const complexHTML = `
      <!DOCTYPE html>
      <html>
      <head><title>Test</title></head>
      <body>
        <div id="content">
          <div class="section">Subclass 100</div>
          <div>
            <span class="subsection">100.10</span>
            <div>
              <p class="subsection">100.11</p>
              <p>Content</p>
            </div>
          </div>
          <h1>Subclass 200</h1>
          <div>
            <h2>200.20</h2>
            <p>Content</p>
          </div>
        </div>
      </body>
      </html>
    `;
    
    const doc = createMockDocument(complexHTML);
    document.body = doc.body;
    
    const result = getTOCStructure();
    
    expect(result).toBeTruthy();
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBeGreaterThan(0);
    
    // Should have two top-level headings
    const topLevel = result.filter(item => item.level === 1);
    expect(topLevel).toHaveLength(2);
    
    console.log('📋 Complex structure result:', JSON.stringify(result, null, 2));
  });

  test('should handle mixed content with headings in various elements', () => {
    const mixedHTML = `
      <!DOCTYPE html>
      <html>
      <head><title>Test</title></head>
      <body>
        <div id="content">
          <h1>Regular Heading</h1>
          <p>Some content</p>
          <div class="heading">Subclass 300</div>
          <div>
            <span class="subheading">300.30</span>
            <p>Content</p>
          </div>
          <p class="heading">Another Regular Heading</p>
          <p>More content</p>
        </div>
      </body>
      </html>
    `;
    
    const doc = createMockDocument(mixedHTML);
    document.body = doc.body;
    
    const result = getTOCStructure();
    
    expect(result).toBeTruthy();
    expect(Array.isArray(result)).toBe(true);
    
    // Should only find the Subclass heading
    const subclassHeadings = result.filter(item => item.header.includes('Subclass'));
    expect(subclassHeadings).toHaveLength(1);
    expect(subclassHeadings[0].header).toBe('Subclass 300');
    
    console.log('📋 Mixed content result:', JSON.stringify(result, null, 2));
  });

  test('should ignore span nodes with neighboring span nodes that have prefixes', () => {
    const neighboringSpanHTML = `
      <!DOCTYPE html>
      <html>
      <head><title>Test</title></head>
      <body>
        <div id="content">
          <div>
            <span>(a)</span>
            <span class="heading">Subclass 303 (Emergency (Temporary Visa Applicant))</span>
          </div>
          <div>
            <span>(b)</span>
            <span class="subheading">303.10</span>
            <p>Content</p>
          </div>
          <div>
            <span>Some prefix</span>
            <span class="subheading">303.20</span>
            <p>More content</p>
          </div>
          <div class="heading">Subclass 304</div>
          <div>
            <span class="subheading">304.10</span>
            <p>Content</p>
          </div>
        </div>
      </body>
      </html>
    `;
    
    const doc = createMockDocument(neighboringSpanHTML);
    document.body = doc.body;
    
    const result = getTOCStructure();
    
    expect(result).toBeTruthy();
    expect(Array.isArray(result)).toBe(true);
    
    // Should only find Subclass 304 (not 303 because it's not the first span)
    const subclassHeadings = result.filter(item => item.header.includes('Subclass'));
    expect(subclassHeadings).toHaveLength(1);
    expect(subclassHeadings[0].header).toBe('Subclass 304');
    
    // Should find the numbered subheadings
    const allHeadings = getAllHeadings(result);
    const numberedHeadings = allHeadings.filter(item => /\d{3}\.\d{1,3}/.test(item.header));
    expect(numberedHeadings.length).toBeGreaterThan(0);
    
    console.log('📋 Neighboring span result:', JSON.stringify(result, null, 2));
    console.log('📋 Numbered headings found:', numberedHeadings.map(h => h.header));
  });

  test('should handle span nodes without neighboring span nodes normally', () => {
    const singleSpanHTML = `
      <!DOCTYPE html>
      <html>
      <head><title>Test</title></head>
      <body>
        <div id="content">
          <div>
            <span class="heading">Subclass 305</span>
          </div>
          <div>
            <span class="subheading">305.10</span>
            <p>Content</p>
          </div>
          <p class="heading">Subclass 306</p>
          <div>
            <span class="subheading">306.10</span>
            <p>Content</p>
          </div>
        </div>
      </body>
      </html>
    `;
    
    const doc = createMockDocument(singleSpanHTML);
    document.body = doc.body;
    
    const result = getTOCStructure();
    
    expect(result).toBeTruthy();
    expect(Array.isArray(result)).toBe(true);
    
    // Should find both Subclass headings
    const subclassHeadings = result.filter(item => item.header.includes('Subclass'));
    expect(subclassHeadings).toHaveLength(2);
    
    // Should find the numbered subheadings
    const allHeadings = getAllHeadings(result);
    const numberedHeadings = allHeadings.filter(item => /\d{3}\.\d{1,3}/.test(item.header));
    expect(numberedHeadings.length).toBeGreaterThan(0);
    
    console.log('📋 Single span result:', JSON.stringify(result, null, 2));
    console.log('📋 Numbered headings found:', numberedHeadings.map(h => h.header));
  });

  test('should handle complex neighboring span scenarios', () => {
    const complexSpanHTML = `
      <!DOCTYPE html>
      <html>
      <head><title>Test</title></head>
      <body>
        <div id="content">
          <div>
            <span>(a)</span>
            <span class="heading">Subclass 307</span>
            <span>(some suffix)</span>
          </div>
          <div>
            <span>(i)</span>
            <span class="subheading">307.10</span>
            <span>(note)</span>
          </div>
          <div>
            <span>(ii)</span>
            <span class="subheading">307.20</span>
          </div>
          <div class="heading">Subclass 308</div>
          <div>
            <span class="subheading">308.10</span>
          </div>
        </div>
      </body>
      </html>
    `;
    
    const doc = createMockDocument(complexSpanHTML);
    document.body = doc.body;
    
    const result = getTOCStructure();
    
    expect(result).toBeTruthy();
    expect(Array.isArray(result)).toBe(true);
    
    // Should only find Subclass 308 (not 307 because it's not the first span)
    const subclassHeadings = result.filter(item => item.header.includes('Subclass'));
    expect(subclassHeadings).toHaveLength(1);
    expect(subclassHeadings[0].header).toBe('Subclass 308');
    
    // Should find the numbered subheadings
    const allHeadings = getAllHeadings(result);
    const numberedHeadings = allHeadings.filter(item => /\d{3}\.\d{1,3}/.test(item.header));
    expect(numberedHeadings.length).toBeGreaterThan(0);
    
    console.log('📋 Complex span result:', JSON.stringify(result, null, 2));
    console.log('📋 Numbered headings found:', numberedHeadings.map(h => h.header));
  });

  test('should consider first span node when it contains heading content', () => {
    const firstSpanHeadingHTML = `
      <!DOCTYPE html>
      <html>
      <head><title>Test</title></head>
      <body>
        <div id="content">
          <div>
            <span class="heading">Subclass 309</span>
            <span>(some suffix)</span>
          </div>
          <div>
            <span class="subheading">309.10</span>
            <span>(note)</span>
          </div>
          <div class="heading">Subclass 310</div>
          <div>
            <span class="subheading">310.10</span>
          </div>
        </div>
      </body>
      </html>
    `;
    
    const doc = createMockDocument(firstSpanHeadingHTML);
    document.body = doc.body;
    
    const result = getTOCStructure();
    
    expect(result).toBeTruthy();
    expect(Array.isArray(result)).toBe(true);
    
    // Should find both Subclass headings (309 is first span, 310 is not a span)
    const subclassHeadings = result.filter(item => item.header.includes('Subclass'));
    expect(subclassHeadings).toHaveLength(2);
    
    // Should find the numbered subheadings
    const allHeadings = getAllHeadings(result);
    const numberedHeadings = allHeadings.filter(item => /\d{3}\.\d{1,3}/.test(item.header));
    expect(numberedHeadings.length).toBeGreaterThan(0);
    
    console.log('📋 First span heading result:', JSON.stringify(result, null, 2));
    console.log('📋 Numbered headings found:', numberedHeadings.map(h => h.header));
  });

  test('should handle headings in table cells and other complex structures', () => {
    const tableHTML = `
      <!DOCTYPE html>
      <html>
      <head><title>Test</title></head>
      <body>
        <div id="content">
          <table>
            <tr>
              <td><div class="heading">Subclass 400</div></td>
              <td>Description</td>
            </tr>
            <tr>
              <td><span class="subheading">400.40</span></td>
              <td>Sub description</td>
            </tr>
          </table>
          <div>
            <p class="heading">Subclass 500</p>
            <ul>
              <li><span>500.50</span></li>
              <li>Another item</li>
            </ul>
          </div>
        </div>
      </body>
      </html>
    `;
    
    const doc = createMockDocument(tableHTML);
    document.body = doc.body;
    
    const result = getTOCStructure();
    
    expect(result).toBeTruthy();
    expect(Array.isArray(result)).toBe(true);
    
    // Should find both Subclass headings
    const subclassHeadings = result.filter(item => item.header.includes('Subclass'));
    expect(subclassHeadings).toHaveLength(2);
    
    // Should find numbered subheadings (check all levels)
    const allHeadings = getAllHeadings(result);
    const numberedHeadings = allHeadings.filter(item => /\d{3}\.\d{1,3}/.test(item.header));
    console.log('📋 Table structure result:', JSON.stringify(result, null, 2));
    console.log('📋 Numbered headings found:', numberedHeadings.map(h => h.header));
    expect(numberedHeadings.length).toBeGreaterThan(0);
  });

  test('should handle deeply nested headings', () => {
    const nestedHTML = `
      <!DOCTYPE html>
      <html>
      <head><title>Test</title></head>
      <body>
        <div id="content">
          <div>
            <div>
              <div>
                <div class="heading">Subclass 600</div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <span class="subheading">600.60</span>
            </div>
          </div>
        </div>
      </body>
      </html>
    `;
    
    const doc = createMockDocument(nestedHTML);
    document.body = doc.body;
    
    const result = getTOCStructure();
    
    expect(result).toBeTruthy();
    expect(Array.isArray(result)).toBe(true);
    
    // Should find the deeply nested heading
    const subclassHeadings = result.filter(item => item.header.includes('Subclass'));
    expect(subclassHeadings).toHaveLength(1);
    
    // Should find the nested subheading (check all levels)
    const allHeadings = getAllHeadings(result);
    const numberedHeadings = allHeadings.filter(item => /\d{3}\.\d{1,3}/.test(item.header));
    console.log('📋 Deeply nested result:', JSON.stringify(result, null, 2));
    console.log('📋 Numbered headings found:', numberedHeadings.map(h => h.header));
    expect(numberedHeadings).toHaveLength(1);
  });

  // Helper function to get all headings from the structure (including children)
  function getAllHeadings(structure) {
    const allHeadings = [];
    
    function traverse(headings) {
      for (const heading of headings) {
        allHeadings.push(heading);
        if (heading.children && heading.children.length > 0) {
          traverse(heading.children);
        }
      }
    }
    
    traverse(structure);
    return allHeadings;
  }
}); 