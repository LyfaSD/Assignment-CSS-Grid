# CSS Grid Assignment - Product Showcase

A beginner-friendly responsive website built with CSS Grid that displays products from an API.

## What This Project Teaches You

1. **CSS Grid Layout** - How to create a grid layout with header, main content, and footer
2. **Fetch API** - How to get data from the internet and display it on your webpage
3. **Responsive Design** - How to make your website work on phones, tablets, and computers
4. **JavaScript Basics** - How to manipulate HTML using JavaScript

## What You Need to Know

- Basic HTML
- Basic CSS
- Basic JavaScript

## Files Explained 

### `index.html`
- The **main page** where products are shown
- Contains the structure: header, product grid, footer
- Links to CSS and JavaScript files

### `detail.html`
- The **detail page** that shows one product at a time
- Opens when you click "View Details" on a product

### `styles.css`
- Contains all the **styling** (colors, sizes, layouts)
- Uses CSS Grid to create the layout
- Makes the website look good on all devices

### `script.js`
- **JavaScript code** for the main page
- Fetches products from the API
- Displays products in the grid

### `detail.js`
- **JavaScript code** for the detail page
- Fetches one product's details from the API
- Shows the product information

## How to Use

1. **Open the website**: Double-click `index.html` to open it in your browser
2. **Wait for loading**: Products will load from the internet (this might take a few seconds)
3. **View products**: You'll see 9 products in a grid
4. **Click "View Details"**: See more information about a specific product
5. **Click "Back to Products"**: Return to the main page

## How CSS Grid Works (Simple Explanation)

CSS Grid lets you create layouts by dividing space into rows and columns.

### Main Container Grid:
```
┌─────────────────────┐
│      HEADER         │  ← Row 1 (auto height)
├─────────────────────┤
│                     │
│    MAIN CONTENT     │  ← Row 2 (takes remaining space)
│                     │
├─────────────────────┤
│      FOOTER         │  ← Row 3 (auto height)
└─────────────────────┘
```

### Product Grid:
```
┌─────┬─────┬─────┐
│  1  │  2  │  3  │  ← Row 1
├─────┼─────┼─────┤
│  4  │  5  │  6  │  ← Row 2
├─────┼─────┼─────┤
│  7  │  8  │  9  │  ← Row 3
└─────┴─────┴─────┘
```

On tablets, it becomes 2 columns. On phones, it becomes 1 column (stacked).

## How the Fetch API Works (Simple Explanation)

1. **JavaScript asks** the API for data
2. **API sends back** data (like products with images and text)
3. **JavaScript receives** the data
4. **JavaScript displays** the data on the webpage

Think of it like ordering food:
- You order (fetch)
- Restaurant prepares (API processes)
- You receive food (get data)
- You eat (display on page)

## Responsive Design Explained

The website looks different on different devices:

- **Computer (Desktop)**: 3 columns of products
- **Tablet**: 2 columns of products
- **Phone**: 1 column of products (stacked)

This is done with "media queries" in CSS that check the screen size.

## Technologies Used

- **HTML5** - Structure of the webpage
- **CSS3** - Styling (CSS Grid for layout)
- **JavaScript** - Interactivity and fetching data
- **Fetch API** - Getting data from the internet
- **JSONPlaceholder API** - Free API for practice (provides fake data)

## Key Concepts Explained

### CSS Grid Properties:
- `display: grid` - Makes an element a grid container
- `grid-template-columns: repeat(3, 1fr)` - Creates 3 equal columns
- `grid-template-rows: auto 1fr auto` - Creates 3 rows with different heights
- `gap: 2rem` - Space between grid items

### JavaScript Concepts:
- `fetch()` - Gets data from a URL
- `async/await` - Waits for data to load
- `document.getElementById()` - Finds an HTML element
- `.innerHTML` - Changes what's inside an HTML element

### Fetch API Example:
```javascript
// Step 1: Ask for data
const response = await fetch('https://api.example.com/data');

// Step 2: Convert to JavaScript object
const data = await response.json();

// Step 3: Use the data
console.log(data);
```

## Learning Path

1. **Start with HTML**: Look at `index.html` - see the structure
2. **Then CSS**: Look at `styles.css` - see how it's styled
3. **Then JavaScript**: Look at `script.js` - see how data is loaded
4. **Try changing things**: 
   - Change colors in CSS
   - Change text in HTML
   - See what happens!

## Code Comments

Every file has detailed comments explaining:
- What each section does
- Why it's written that way
- How it works

Read the comments - they're your best friend when learning!

## Requirements Checklist

-  Main page layout using CSS Grid (header, main, footer)
-  3×3 product grid in main section
-  Each grid item has: image, title/text, button
-  Uses Fetch API to load data
-  Navigation to detail pages
-  Clear way to return to main page
-  Responsive design for all screen sizes

## Troubleshooting

**Problem**: Products don't load
- **Solution**: Check your internet connection. The API needs internet to work.

**Problem**: Page looks broken
- **Solution**: Make sure all files are in the same folder (index.html, styles.css, script.js, etc.)

**Problem**: Images don't show
- **Solution**: This is normal - the API might be slow. Wait a few seconds.

## Submission

Submitted via GitHub repository by Sunday, 7th December 2025

