import { h } from 'preact';
import { Collapse, Typography, Card, Input, Button, message } from 'antd';
import { CaretRightOutlined, SearchOutlined } from '@ant-design/icons';

const { Text, Title } = Typography;

export default function TOC({ structure = [] }) {
    let searchValue = '';
    let isFiltering = false;

    function scrollToNode(node) {
        if (node?.scrollIntoView) {
            node.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    function findNodeByPattern(pattern, items, parentKey = '') {
        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            const key = parentKey ? `${parentKey}-${i}` : `${i}`;
            
            // Check if current item matches the pattern
            if (item.header && pattern.test(item.header)) {
                return { node: item.node, header: item.header };
            }
            
            // If item has children, search recursively
            if (item.children && item.children.length > 0) {
                const result = findNodeByPattern(pattern, item.children, key);
                if (result) return result;
            }
        }
        return null;
    }

    function filterStructureByText(searchText, items) {
        if (!searchText.trim()) return items;
        
        const filtered = [];
        
        for (const item of items) {
            // Check if current item matches
            const itemMatches = item.header && 
                item.header.toLowerCase().includes(searchText.toLowerCase());
            
            // Check children recursively
            let hasMatchingChildren = false;
            let filteredChildren = [];
            
            if (item.children && item.children.length > 0) {
                filteredChildren = filterStructureByText(searchText, item.children);
                hasMatchingChildren = filteredChildren.length > 0;
            }
            
            // Include item if it matches or has matching children
            if (itemMatches || hasMatchingChildren) {
                filtered.push({
                    ...item,
                    children: hasMatchingChildren ? filteredChildren : item.children
                });
            }
        }
        
        return filtered;
    }

    function handleSearch() {
        if (!searchValue || !searchValue.trim()) {
            // Clear filter and show full TOC
            isFiltering = false;
            return;
        }
        
        // Validate input pattern: \d{3}\.?\d{0,3}
        const pattern = /^\d{3}\.?\d{0,3}$/;
        if (!pattern.test(searchValue)) {
            message.error('Please enter a valid pattern (e.g., 482 or 600.100)');
            return;
        }
        
        let searchPattern;
        if (searchValue.includes('.')) {
            // Search for clauses (e.g., 600.100)
            searchPattern = new RegExp(`^${searchValue.replace('.', '\\.')}`);
        } else {
            // Search for subclasses (e.g., 482)
            searchPattern = new RegExp(`^Subclass\\s+${searchValue}`, 'i');
        }
        
        const result = findNodeByPattern(searchPattern, structure);
        
        if (result) {
            scrollToNode(result.node);
            message.success(`Found: ${result.header}`);
        } else {
            message.warning(`No match found for: ${searchValue}`);
        }
        
        // Clear filter and show full TOC after search
        isFiltering = false;
    }

    function handleInputChange(e) {
        searchValue = e.target.value;
        
        // Enable filtering while typing
        if (searchValue.trim()) {
            isFiltering = true;
        } else {
            isFiltering = false;
        }
    }

    function handleKeyPress(e) {
        if (e.key === 'Enter') {
            handleSearch();
        }
    }

    function renderLeafItem(item) {
        return (
            <div
                className="toc-leaf-item"
                onClick={() => scrollToNode(item.node)}
            >
                <Text>{item.header}</Text>
            </div>
        );
    }

    function renderCollapsibleItem(item, key) {
        return {
            key,
            label: (
                <Text 
                    className="toc-collapsible-label"
                    onClick={(e) => {
                        e.stopPropagation();
                        scrollToNode(item.node);
                    }}
                >
                    {item.header}
                </Text>
            ),
            children: <p>{convertStructureToItems(item.children, key)}</p>,
            showArrow: true,
            collapsible: 'header'
        };
    }

    function convertStructureToItems(structure, parentKey = '') {
        return structure.map((item, index) => {
            const key = parentKey ? `${parentKey}-${index}` : `${index}`;
            const hasChildren = item.children?.length > 0;
            
            return hasChildren 
                ? renderCollapsibleItem(item, key)
                : renderLeafItem(item);
        });
    }

    // Determine which structure to show
    const displayStructure = isFiltering ? filterStructureByText(searchValue, structure) : structure;
    const items = convertStructureToItems(displayStructure);

    return (
        <Card 
            size="small" 
            title={
                <div>
                    <Title level={4} style={{ margin: 0, marginBottom: 12 }}>Table of Contents</Title>
                    <div className="toc-search-container">
                        <Input
                            placeholder="Search subclass (e.g., 482) or clause (e.g., 600.100)"
                            size="small"
                            onChange={handleInputChange}
                            onKeyPress={handleKeyPress}
                            allowClear
                            style={{ 
                                borderRadius: '20px',
                                border: '1px solid #d9d9d9',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                            }}
                        />
                    </div>
                </div>
            }
            className="toc-card"
        >
            <Collapse 
                ghost 
                items={items}
                expandIcon={({ isActive }) => (
                    <CaretRightOutlined rotate={isActive ? 90 : 0} />
                )}
                className="toc-collapse"
            />
        </Card>
    );
}