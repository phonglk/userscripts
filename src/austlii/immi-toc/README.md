# AustLII - Immigration Law TOC Support

A userscript that adds a Table of Contents (TOC) to Schedule 2 of immigration regulations on AustLII.

## Features

- **Automatic TOC Generation**: Extracts heading structure from the document
- **Interactive Navigation**: Click on any TOC item to scroll to the corresponding section
- **Hierarchical Display**: Shows nested structure with collapsible sections
- **Ant Design UI**: Modern, accessible interface using Ant Design components
- **Backward Compatible**: Maintains existing functionality while adding new features

## Migration to Ant Design

This userscript has been migrated to use Ant Design components for improved UI/UX while maintaining backward compatibility.

### What Changed

- **UI Components**: Now uses Ant Design's `Collapse`, `Typography`, and `Space` components
- **Styling**: Uses Ant Design design tokens and variables for consistent theming
- **Icons**: Added `CaretRightOutlined` icon for better visual feedback
- **Responsive Design**: Better handling of different screen sizes

### Backward Compatibility

- All existing functionality remains unchanged
- TOC structure and navigation work exactly as before
- Existing CSS classes are preserved for custom styling
- No breaking changes to the API or data structure

### New Features

- **Sticky Positioning**: TOC becomes sticky when scrolling, always accessible
- **Dynamic Height**: Automatically adjusts to fill available viewport space
- **Collapsible Sections**: Click to expand/collapse nested TOC items
- **Better Visual Hierarchy**: Clear distinction between parent and child items
- **Improved Accessibility**: Better keyboard navigation and screen reader support
- **Consistent Theming**: Follows Ant Design design system
- **Smooth Transitions**: Elegant animations when switching to sticky mode

## Installation

1. Install the userscript in your browser's userscript manager (Tampermonkey, Greasemonkey, etc.)
2. Navigate to any AustLII immigration law page
3. The TOC will automatically appear in the sidebar

## Development

### Building

```bash
# Build for production
npm run build:austlii

# Build for development with watch mode
npm run build:austlii:dev
```

### Dependencies

- **Ant Design**: UI component library (v5.26.6)
- **Preact**: React-compatible library for UI components
- **Cash-dom**: Lightweight jQuery alternative for DOM manipulation

### File Structure

```
src/austlii/immi-toc/
├── index.js          # Main entry point
├── toc.js           # TOC component (Ant Design)
├── tocStructure.js  # TOC extraction logic
├── style.less       # Styling (Ant Design variables)
├── header.json      # Userscript metadata
└── README.md        # This file
```

## Technical Details

### TOC Extraction

The script identifies headings using these patterns:
- `Subclass XXX` (e.g., "Subclass 189")
- `XXX.X` (e.g., "189.1", "189.2.1")

### Component Architecture

- **TOC Component**: Renders the hierarchical structure using Ant Design components
- **Affix Component**: Handles sticky positioning when scrolling
- **Collapse Component**: Handles expandable/collapsible sections
- **Typography**: Provides consistent text styling
- **List**: Manages child items with proper spacing
- **Card**: Provides container with title and scrollable content

### Styling

Uses Ant Design design tokens:
- Color variables (`@primary-color`, `@text-color`, etc.)
- Spacing variables (`@padding-md`, `@margin-sm`, etc.)
- Typography variables (`@font-size-base`, `@font-family`, etc.)

## Browser Compatibility

- Chrome/Chromium (recommended)
- Firefox
- Safari
- Edge

## License

MIT License - see LICENSE file for details.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## Support

For issues or questions:
- Create an issue on GitHub
- Check the existing issues for similar problems
- Review the documentation above 