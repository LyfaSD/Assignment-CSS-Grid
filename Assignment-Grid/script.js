async function fetchProducts() {
    try {
        const photosResponse = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=9');
        const photos = await photosResponse.json();
        
        const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=9');
        const posts = await postsResponse.json();
        
        const products = [];
        
        for (let i = 0; i < photos.length; i++) {
            const product = {
                id: photos[i].id,
                image: photos[i].url,
                thumbnail: photos[i].thumbnailUrl,
                title: posts[i].title,
                text: posts[i].body,
                postId: posts[i].id
            };
            
            products.push(product);
        }
        
        return products;
        
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
}

function displayProducts(products) {
    const productsGrid = document.getElementById('productsGrid');
    
    if (products.length === 0) {
        productsGrid.innerHTML = '<div class="loading">No products found. Please try again later.</div>';
        return;
    }
    
    let htmlContent = '';
    
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        
        htmlContent += `
            <div class="product-card">
                <img src="${product.thumbnail}" 
                     alt="${product.title}" 
                     class="product-image">
                <div class="product-content">
                    <h3 class="product-title">${product.title}</h3>
                    <p class="product-text">${product.text.substring(0, 100)}...</p>
                    <a href="detail.html?id=${product.id}&postId=${product.postId}" 
                       class="product-button">
                        View Details
                    </a>
                </div>
            </div>
        `;
    }
    
    productsGrid.innerHTML = htmlContent;
}

async function init() {
    const productsGrid = document.getElementById('productsGrid');
    productsGrid.innerHTML = '<div class="loading">Loading products...</div>';
    
    const products = await fetchProducts();
    displayProducts(products);
}

document.addEventListener('DOMContentLoaded', init);
