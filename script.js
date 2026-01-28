// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Service Details
const serviceDetails = {
    'Sofa Upholstery': 'Transform your beloved sofas with our premium reupholstery service. We offer a wide selection of fabrics and colors to match your interior. Our expert artisans ensure perfect stitching and finishing for years of comfort and durability.',
    'Curtain Making': 'Custom-designed curtains and blinds tailored to your specific measurements and style preferences. From elegant silk to durable textiles, we help you control light and enhance your interior aesthetics.',
    'Yacht Interiors': 'Specialized marine upholstery designed to withstand salt water and harsh ocean conditions while maintaining luxury. Perfect for boats, yachts, and marine vessels.',
    'Furniture Upholstery': 'Complete restoration services for all types of furniture. Whether antique or modern, we breathe new life into your cherished pieces with precision and care.',
    'Commercial Seating': 'Durable and stylish seating solutions for hospitality businesses. Perfect for restaurants, hotels, lounges, and office spaces with high traffic requirements.',
    'Chairs Upholstery': 'Expert tailoring for all chair types - from dining chairs to accent armchairs. We ensure perfect fit and comfort with premium materials.'
};

function openServiceDetail(event, serviceName) {
    event.preventDefault();
    const modal = document.getElementById('serviceModal');
    document.getElementById('serviceTitle').textContent = serviceName;
    document.getElementById('serviceDescription').textContent = serviceDetails[serviceName];
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeServiceDetail() {
    const modal = document.getElementById('serviceModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Portfolio Modal Functions
function openPortfolio() {
    const modal = document.getElementById('portfolioModal');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closePortfolio() {
    const modal = document.getElementById('portfolioModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside the modal content
window.onclick = function(event) {
    const serviceModal = document.getElementById('serviceModal');
    const portfolioModal = document.getElementById('portfolioModal');
    
    if (event.target == serviceModal) {
        closeServiceDetail();
    }
    if (event.target == portfolioModal) {
        closePortfolio();
    }
}

// Close modal on Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeServiceDetail();
        closePortfolio();
    }
});
