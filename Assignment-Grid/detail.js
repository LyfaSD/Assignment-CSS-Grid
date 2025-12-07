function getURLParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    const postId = urlParams.get('postId');
    
    return {
        id: id,
        postId: postId
    };
}

async function fetchProductDetails(id, postId) {
    try {
        const photoResponse = await fetch('https://jsonplaceholder.typicode.com/photos/' + id);
        const photo = await photoResponse.json();
        
        const postIdToUse = postId || id;
        const postResponse = await fetch('https://jsonplaceholder.typicode.com/posts/' + postIdToUse);
        const post = await postResponse.json();
        
        const product = {
            id: photo.id,
            image: photo.url,
            thumbnail: photo.thumbnailUrl,
            title: post.title,
            text: post.body
        };
        
        return product;
        
    } catch (error) {
        console.error('Error fetching product details:', error);
        return null;
    }
}

function displayProductDetails(product) {
    const detailContainer = document.getElementById('detailContainer');
    
    if (!product) {
        detailContainer.innerHTML = `
            <div class="loading">
                <p>Product not found. Please check the URL or try again later.</p>
                <a href="index.html" class="back-button" style="margin-top: 1rem;">← Back to Home</a>
            </div>
        `;
        return;
    }
    
    const htmlContent = `
        <img src="${product.image}" 
             alt="${product.title}" 
             class="detail-image">
        <h2 class="detail-title">${product.title}</h2>
        <p class="detail-text">${product.text}</p>
        <a href="index.html" class="back-button">← Back to Products</a>
    `;
    
    detailContainer.innerHTML = htmlContent;
}

async function init() {
    const detailContainer = document.getElementById('detailContainer');
    detailContainer.innerHTML = '<div class="loading">Loading product details...</div>';
    
    const urlParams = getURLParams();
    const productId = urlParams.id;
    const postId = urlParams.postId;
    
    if (!productId) {
        detailContainer.innerHTML = `
            <div class="loading">
                <p>Invalid product ID. Please go back and select a product.</p>
                <a href="index.html" class="back-button" style="margin-top: 1rem;">← Back to Home</a>
            </div>
        `;
        return;
    }
    
    const product = await fetchProductDetails(productId, postId);
    displayProductDetails(product);
}

document.addEventListener('DOMContentLoaded', init);
