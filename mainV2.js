// Initial setup for cart and UI components
class CartItems {
    constructor() {
        this.items = [];
        this.init();
    }

    init() {
        // Setup event listeners and initialize cart items display
        document.querySelectorAll(".cart-item").forEach((item) => {
            this.items.push(item);
        });
    }

    updateQuantity(itemID, quantity) {
        // Update item quantity in the cart and reflect changes in UI
        const item = this.items.find((item) => item.id === itemID);
        if (item) {
            item.querySelector(".quantity").textContent = quantity;
        }
    }
}

class CartRemoveButton {
    constructor(button) {
        this.button = button;
        this.button.addEventListener("click", () => this.removeItem());
    }

    removeItem() {
        // Logic to remove item from cart
        const itemID = this.button.dataset.itemId;
        document.getElementById(itemID).remove();
        console.log(`Item ${itemID} removed from cart`);
    }
}

// Main cart functionality setup
function initializeCart() {
    const cartItems = new CartItems();
    document.querySelectorAll(".remove-item-button").forEach((button) => {
        new CartRemoveButton(button);
    });

    // Example of updating cart quantity
    cartItems.updateQuantity("item-1", 2);
}

document.addEventListener("DOMContentLoaded", () => {
    initializeCart();
});

// Function to handle search functionality
class PredictiveSearch {
    constructor(inputSelector, resultsContainerSelector) {
        this.input = document.querySelector(inputSelector);
        this.resultsContainer = document.querySelector(resultsContainerSelector);
        this.init();
    }

    init() {
        this.input.addEventListener("input", () => this.fetchResults());
    }

    fetchResults() {
        const query = this.input.value;
        if (query.length > 2) {
            // Mock fetch call for search results
            console.log(`Fetching search results for query: ${query}`);
            this.displayResults([
                { title: "Result 1", link: "/result1" },
                { title: "Result 2", link: "/result2" }
            ]);
        } else {
            this.clearResults();
        }
    }

    displayResults(results) {
        this.resultsContainer.innerHTML = "";
        results.forEach(result => {
            const resultElement = document.createElement("div");
            resultElement.innerHTML = `<a href="${result.link}">${result.title}</a>`;
            this.resultsContainer.appendChild(resultElement);
        });
    }

    clearResults() {
        this.resultsContainer.innerHTML = "";
    }
}

// Initialize predictive search
function initializeSearch() {
    new PredictiveSearch("#search-input", "#search-results");
}

document.addEventListener("DOMContentLoaded", () => {
    initializeSearch();
});

// Video playback handling for media components
class VideoPlayer {
    constructor(videoSelector) {
        this.videoElement = document.querySelector(videoSelector);
        this.init();
    }

    init() {
        if (this.videoElement) {
            this.videoElement.addEventListener("play", () => console.log("Video started playing"));
            this.videoElement.addEventListener("pause", () => console.log("Video paused"));
        }
    }

    playVideo() {
        if (this.videoElement) this.videoElement.play();
    }

    pauseVideo() {
        if (this.videoElement) this.videoElement.pause();
    }
}

// Initialize video player
function initializeVideo() {
    const videoPlayer = new VideoPlayer("#product-video");
    document.querySelector("#play-video").addEventListener("click", () => videoPlayer.playVideo());
    document.querySelector("#pause-video").addEventListener("click", () => videoPlayer.pauseVideo());
}

document.addEventListener("DOMContentLoaded", () => {
    initializeVideo();
});

// Modal popup handling for quick add feature
class QuickAddModal {
    constructor(modalSelector) {
        this.modal = document.querySelector(modalSelector);
        this.init();
    }

    init() {
        document.querySelectorAll(".quick-add-button").forEach((button) => {
            button.addEventListener("click", () => this.openModal(button.dataset.productId));
        });
        document.querySelector(".modal-close").addEventListener("click", () => this.closeModal());
    }

    openModal(productId) {
        console.log(`Opening modal for product ID: ${productId}`);
        this.modal.classList.add("is-visible");
    }

    closeModal() {
        this.modal.classList.remove("is-visible");
        console.log("Modal closed");
    }
}

// Initialize quick add modal
function initializeQuickAddModal() {
    new QuickAddModal("#quick-add-modal");
}

document.addEventListener("DOMContentLoaded", () => {
    initializeQuickAddModal();
});

// Gallery functionality for product media
class MediaGallery {
    constructor(gallerySelector) {
        this.gallery = document.querySelector(gallerySelector);
        this.init();
    }

    init() {
        this.gallery.querySelectorAll(".gallery-thumbnail").forEach((thumbnail) => {
            thumbnail.addEventListener("click", (e) => this.showImage(e.target));
        });
    }

    showImage(thumbnail) {
        const imageSrc = thumbnail.dataset.fullImage;
        this.gallery.querySelector(".main-image").src = imageSrc;
        console.log(`Displaying image: ${imageSrc}`);
    }
}

// Initialize media gallery
function initializeMediaGallery() {
    new MediaGallery("#product-gallery");
}

document.addEventListener("DOMContentLoaded", () => {
    initializeMediaGallery();
});

// Handle pickup availability feature
class PickupAvailability {
    constructor(pickupSelector) {
        this.pickupElement = document.querySelector(pickupSelector);
        this.init();
    }

    init() {
        document.querySelector("#check-pickup-availability").addEventListener("click", () => this.checkAvailability());
    }

    checkAvailability() {
        console.log("Checking pickup availability...");
        // Mock display for pickup locations
        this.pickupElement.innerHTML = "<p>Pickup available at select locations.</p>";
    }
}

// Initialize pickup availability
function initializePickupAvailability() {
    new PickupAvailability("#pickup-availability");
}

document.addEventListener("DOMContentLoaded", () => {
    initializePickupAvailability();
});

// Password modal for restricted pages
class PasswordModal {
    constructor(modalSelector) {
        this.modal = document.querySelector(modalSelector);
        this.init();
    }

    init() {
        document.querySelector("#open-password-modal").addEventListener("click", () => this.openModal());
        document.querySelector("#password-submit").addEventListener("click", () => this.verifyPassword());
        document.querySelector(".modal-close").addEventListener("click", () => this.closeModal());
    }

    openModal() {
        this.modal.classList.add("is-visible");
        console.log("Password modal opened");
    }

    closeModal() {
        this.modal.classList.remove("is-visible");
        console.log("Password modal closed");
    }

    verifyPassword() {
        const password = document.querySelector("#password-input").value;
        if (password === "correct-password") {
            console.log("Password verified");
            this.closeModal();
        } else {
            console.log("Incorrect password");
            alert("Incorrect password. Please try again.");
        }
    }
}

// Initialize password modal
function initializePasswordModal() {
    new PasswordModal("#password-modal");
}

document.addEventListener("DOMContentLoaded", () => {
    initializePasswordModal();
});

// Show more content handling
class ShowMore {
    constructor(buttonSelector, contentSelector) {
        this.button = document.querySelector(buttonSelector);
        this.content = document.querySelector(contentSelector);
        this.init();
    }

    init() {
        this.button.addEventListener("click", () => this.toggleContent());
    }

    toggleContent() {
        if (this.content.classList.contains("is-expanded")) {
            this.content.classList.remove("is-expanded");
            this.button.textContent = "Show More";
            console.log("Content collapsed");
        } else {
            this.content.classList.add("is-expanded");
            this.button.textContent = "Show Less";
            console.log("Content expanded");
        }
    }
}

// Initialize show more feature
function initializeShowMore() {
    new ShowMore("#show-more-button", "#extra-content");
}

document.addEventListener("DOMContentLoaded", () => {
    initializeShowMore();
});

// Magnify product images on hover
class Magnify {
    constructor(imageSelector, zoomLevel = 2) {
        this.image = document.querySelector(imageSelector);
        this.zoomLevel = zoomLevel;
        this.init();
    }

    init() {
        this.image.addEventListener("mousemove", (e) => this.zoomImage(e));
        this.image.addEventListener("mouseleave", () => this.resetZoom());
    }

    zoomImage(e) {
        const { offsetX, offsetY } = e;
        const xPercent = (offsetX / this.image.offsetWidth) * 100;
        const yPercent = (offsetY / this.image.offsetHeight) * 100;
        this.image.style.transformOrigin = `${xPercent}% ${yPercent}%`;
        this.image.style.transform = `scale(${this.zoomLevel})`;
        console.log(`Image zoomed to ${this.zoomLevel}x at (${xPercent}%, ${yPercent}%)`);
    }

    resetZoom() {
        this.image.style.transform = "scale(1)";
        console.log("Image zoom reset");
    }
}

// Initialize magnify feature
function initializeMagnify() {
    new Magnify("#product-image");
}

document.addEventListener("DOMContentLoaded", () => {
    initializeMagnify();
});

// Handle facets (filtering options for product collections)
class FacetFiltersForm {
    constructor(formSelector) {
        this.form = document.querySelector(formSelector);
        this.init();
    }

    init() {
        this.form.addEventListener("change", () => this.applyFilters());
    }

    applyFilters() {
        console.log("Applying filters...");
        // Mock fetch for filter results
        setTimeout(() => {
            console.log("Filters applied - updating collection display.");
            document.querySelector("#collection-content").textContent = "Filtered results displayed here.";
        }, 500);
    }
}

// Initialize facet filters form
function initializeFacets() {
    new FacetFiltersForm("#facet-filters-form");
}

document.addEventListener("DOMContentLoaded", () => {
    initializeFacets();
});

// Magnify image functionality for product images
class MagnifyImage {
    constructor(imageSelector) {
        this.image = document.querySelector(imageSelector);
        this.init();
    }

    init() {
        this.image.addEventListener("mousemove", (e) => this.magnify(e));
        this.image.addEventListener("mouseleave", () => this.resetMagnify());
    }

    magnify(event) {
        const rect = this.image.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        this.image.style.transformOrigin = `${(x / rect.width) * 100}% ${(y / rect.height) * 100}%`;
        this.image.style.transform = "scale(2)";
        console.log("Magnifying image");
    }

    resetMagnify() {
        this.image.style.transform = "scale(1)";
        console.log("Reset image magnification");
    }
}

// Initialize magnify image functionality
function initializeMagnifyImage() {
    new MagnifyImage("#product-image");
}

document.addEventListener("DOMContentLoaded", () => {
    initializeMagnifyImage();
});

// Facet filter handling for product filtering on collection pages
class FacetFilters {
    constructor(filterSelector) {
        this.filterContainer = document.querySelector(filterSelector);
        this.init();
    }

    init() {
        this.filterContainer.querySelectorAll(".facet-option").forEach((option) => {
            option.addEventListener("change", () => this.applyFilters());
        });
    }

    applyFilters() {
        console.log("Applying selected filters");
        // Mock display for applying filters
        this.filterContainer.innerHTML = "<p>Filters applied. Displaying filtered results.</p>";
    }
}

// Initialize facet filters
function initializeFacetFilters() {
    new FacetFilters("#facet-filters");
}

document.addEventListener("DOMContentLoaded", () => {
    initializeFacetFilters();
});

// Cart notification handling for adding items to the cart
class CartNotification {
    constructor(notificationSelector) {
        this.notification = document.querySelector(notificationSelector);
        this.init();
    }

    init() {
        document.querySelectorAll(".add-to-cart-button").forEach((button) => {
            button.addEventListener("click", () => this.showNotification());
        });
    }

    showNotification() {
        this.notification.classList.add("is-visible");
        console.log("Cart notification displayed");
        setTimeout(() => this.hideNotification(), 3000);
    }

    hideNotification() {
        this.notification.classList.remove("is-visible");
        console.log("Cart notification hidden");
    }
}

// Initialize cart notification
function initializeCartNotification() {
    new CartNotification("#cart-notification");
}

document.addEventListener("DOMContentLoaded", () => {
    initializeCartNotification();
});

// Predictive text search handling for enhanced search experience
class PredictiveTextSearch {
    constructor(inputSelector, resultsSelector) {
        this.input = document.querySelector(inputSelector);
        this.resultsContainer = document.querySelector(resultsSelector);
        this.init();
    }

    init() {
        this.input.addEventListener("input", () => this.handleInput());
    }

    handleInput() {
        const query = this.input.value.trim();
        if (query.length > 2) {
            console.log(`Performing predictive search for: ${query}`);
            this.displayResults([
                { title: "Suggested Result 1", url: "/suggested1" },
                { title: "Suggested Result 2", url: "/suggested2" }
            ]);
        } else {
            this.clearResults();
        }
    }

    displayResults(results) {
        this.resultsContainer.innerHTML = "";
        results.forEach(result => {
            const resultItem = document.createElement("div");
            resultItem.innerHTML = `<a href="${result.url}">${result.title}</a>`;
            this.resultsContainer.appendChild(resultItem);
        });
    }

    clearResults() {
        this.resultsContainer.innerHTML = "";
        console.log("Cleared predictive search results");
    }
}

// Initialize predictive text search
function initializePredictiveTextSearch() {
    new PredictiveTextSearch("#search-input", "#search-suggestions");
}

document.addEventListener("DOMContentLoaded", () => {
    initializePredictiveTextSearch();
});

// Handling for sticky header functionality
class StickyHeader {
    constructor(headerSelector) {
        this.header = document.querySelector(headerSelector);
        this.init();
    }

    init() {
        window.addEventListener("scroll", () => this.handleScroll());
    }

    handleScroll() {
        if (window.scrollY > 100) {
            this.header.classList.add("is-sticky");
            console.log("Sticky header activated");
        } else {
            this.header.classList.remove("is-sticky");
            console.log("Sticky header deactivated");
        }
    }
}

// Initialize sticky header
function initializeStickyHeader() {
    new StickyHeader("#site-header");
}

document.addEventListener("DOMContentLoaded", () => {
    initializeStickyHeader();
});

// Product recommendations handling for displaying related products
class ProductRecommendations {
    constructor(recommendationSelector) {
        this.recommendationSection = document.querySelector(recommendationSelector);
        this.init();
    }

    init() {
        this.fetchRecommendations();
    }

    fetchRecommendations() {
        console.log("Fetching product recommendations...");
        // Mock data for recommendations
        this.displayRecommendations([
            { title: "Recommended Product 1", url: "/product1", image: "/images/product1.jpg" },
            { title: "Recommended Product 2", url: "/product2", image: "/images/product2.jpg" }
        ]);
    }

    displayRecommendations(recommendations) {
        this.recommendationSection.innerHTML = "";
        recommendations.forEach(product => {
            const productElement = document.createElement("div");
            productElement.innerHTML = `
                <a href="${product.url}">
                    <img src="${product.image}" alt="${product.title}">
                    <p>${product.title}</p>
                </a>
            `;
            this.recommendationSection.appendChild(productElement);
        });
        console.log("Product recommendations displayed");
    }
}

// Initialize product recommendations
function initializeProductRecommendations() {
    new ProductRecommendations("#product-recommendations");
}

document.addEventListener("DOMContentLoaded", () => {
    initializeProductRecommendations();
});

// Back to top button functionality
class BackToTopButton {
    constructor(buttonSelector) {
        this.button = document.querySelector(buttonSelector);
        this.init();
    }

    init() {
        window.addEventListener("scroll", () => this.toggleButtonVisibility());
        this.button.addEventListener("click", () => this.scrollToTop());
    }

    toggleButtonVisibility() {
        if (window.scrollY > 300) {
            this.button.classList.add("is-visible");
            console.log("Back to top button visible");
        } else {
            this.button.classList.remove("is-visible");
            console.log("Back to top button hidden");
        }
    }

    scrollToTop() {
        window.scrollTo({ top: 0, behavior: "smooth" });
        console.log("Scrolled to top");
    }
}

// Initialize back to top button
function initializeBackToTopButton() {
    new BackToTopButton("#back-to-top");
}

document.addEventListener("DOMContentLoaded", () => {
    initializeBackToTopButton();
});

// Toggle mobile navigation menu functionality
class MobileNavigation {
    constructor(menuSelector, toggleButtonSelector) {
        this.menu = document.querySelector(menuSelector);
        this.toggleButton = document.querySelector(toggleButtonSelector);
        this.init();
    }

    init() {
        this.toggleButton.addEventListener("click", () => this.toggleMenu());
    }

    toggleMenu() {
        this.menu.classList.toggle("is-open");
        if (this.menu.classList.contains("is-open")) {
            console.log("Mobile menu opened");
        } else {
            console.log("Mobile menu closed");
        }
    }
}

// Initialize mobile navigation
function initializeMobileNavigation() {
    new MobileNavigation("#mobile-nav", "#mobile-nav-toggle");
}

document.addEventListener("DOMContentLoaded", () => {
    initializeMobileNavigation();
});

// Accordion functionality for FAQ or expandable content sections
class Accordion {
    constructor(accordionSelector) {
        this.accordion = document.querySelector(accordionSelector);
        this.init();
    }

    init() {
        this.accordion.querySelectorAll(".accordion-header").forEach((header) => {
            header.addEventListener("click", () => this.toggleAccordion(header));
        });
    }

    toggleAccordion(header) {
        const content = header.nextElementSibling;
        if (content.classList.contains("is-open")) {
            content.classList.remove("is-open");
            content.style.maxHeight = null;
            console.log("Accordion closed");
        } else {
            content.classList.add("is-open");
            content.style.maxHeight = content.scrollHeight + "px";
            console.log("Accordion opened");
        }
    }
}

// Initialize accordion functionality
function initializeAccordion() {
    new Accordion("#accordion");
}

document.addEventListener("DOMContentLoaded", () => {
    initializeAccordion();
});

// Countdown timer functionality for limited-time offers or promotions
class CountdownTimer {
    constructor(timerSelector, endDate) {
        this.timerElement = document.querySelector(timerSelector);
        this.endDate = new Date(endDate);
        this.init();
    }

    init() {
        this.updateTimer();
        this.interval = setInterval(() => this.updateTimer(), 1000);
    }

    updateTimer() {
        const now = new Date();
        const timeLeft = this.endDate - now;

        if (timeLeft <= 0) {
            clearInterval(this.interval);
            this.timerElement.textContent = "Offer expired";
            console.log("Countdown timer expired");
        } else {
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            this.timerElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
            console.log("Countdown timer updated");
        }
    }
}

// Initialize countdown timer
function initializeCountdownTimer() {
    new CountdownTimer("#countdown-timer", "2024-12-31T23:59:59");
}

document.addEventListener("DOMContentLoaded", () => {
    initializeCountdownTimer();
});

// Tabs functionality for switching between different content sections
class Tabs {
    constructor(tabsContainerSelector) {
        this.tabsContainer = document.querySelector(tabsContainerSelector);
        this.init();
    }

    init() {
        this.tabsContainer.querySelectorAll(".tab-button").forEach((button) => {
            button.addEventListener("click", (e) => this.switchTab(e));
        });
    }

    switchTab(event) {
        const selectedTab = event.target.dataset.tab;

        this.tabsContainer.querySelectorAll(".tab-content").forEach((content) => {
            content.classList.remove("is-active");
        });
        this.tabsContainer.querySelector(`#${selectedTab}`).classList.add("is-active");

        this.tabsContainer.querySelectorAll(".tab-button").forEach((button) => {
            button.classList.remove("is-active");
        });
        event.target.classList.add("is-active");

        console.log(`Switched to tab: ${selectedTab}`);
    }
}

// Initialize tabs functionality
function initializeTabs() {
    new Tabs("#tabs-container");
}

document.addEventListener("DOMContentLoaded", () => {
    initializeTabs();
});

// Carousel or slider functionality for featured products or images
class Carousel {
    constructor(carouselSelector) {
        this.carousel = document.querySelector(carouselSelector);
        this.slides = this.carousel.querySelectorAll(".carousel-slide");
        this.currentIndex = 0;
        this.init();
    }

    init() {
        this.carousel.querySelector(".carousel-next").addEventListener("click", () => this.nextSlide());
        this.carousel.querySelector(".carousel-prev").addEventListener("click", () => this.prevSlide());
    }

    showSlide(index) {
        this.slides.forEach((slide) => slide.classList.remove("is-active"));
        this.slides[index].classList.add("is-active");
        console.log(`Showing slide index: ${index}`);
    }

    nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.slides.length;
        this.showSlide(this.currentIndex);
    }

    prevSlide() {
        this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
        this.showSlide(this.currentIndex);
    }
}

// Initialize carousel
function initializeCarousel() {
    new Carousel("#carousel");
}

document.addEventListener("DOMContentLoaded", () => {
    initializeCarousel();
});

// Product zoom functionality for detailed view of product images
class ProductZoom {
    constructor(zoomSelector) {
        this.zoomImage = document.querySelector(zoomSelector);
        this.init();
    }

    init() {
        this.zoomImage.addEventListener("mouseover", () => this.activateZoom());
        this.zoomImage.addEventListener("mouseout", () => this.deactivateZoom());
    }

    activateZoom() {
        this.zoomImage.classList.add("is-zoomed");
        console.log("Product zoom activated");
    }

    deactivateZoom() {
        this.zoomImage.classList.remove("is-zoomed");
        console.log("Product zoom deactivated");
    }
}

// Initialize product zoom
function initializeProductZoom() {
    new ProductZoom("#product-image-zoom");
}

document.addEventListener("DOMContentLoaded", () => {
    initializeProductZoom();
});

// Lazy loading functionality for images
class LazyLoadImages {
    constructor(imagesSelector) {
        this.images = document.querySelectorAll(imagesSelector);
        this.init();
    }

    init() {
        this.images.forEach((image) => {
            if ("IntersectionObserver" in window) {
                let observer = new IntersectionObserver((entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            this.loadImage(entry.target);
                            observer.unobserve(entry.target);
                        }
                    });
                });
                observer.observe(image);
            } else {
                // Fallback for older browsers
                this.loadImage(image);
            }
        });
    }

    loadImage(image) {
        image.src = image.dataset.src;
        console.log(`Lazy loaded image: ${image.src}`);
    }
}

// Initialize lazy loading for images
function initializeLazyLoadImages() {
    new LazyLoadImages(".lazy-load");
}

document.addEventListener("DOMContentLoaded", () => {
    initializeLazyLoadImages();
});

// Notification banner functionality for displaying alerts or messages
class NotificationBanner {
    constructor(bannerSelector) {
        this.banner = document.querySelector(bannerSelector);
        this.init();
    }

    init() {
        this.banner.querySelector(".close-banner").addEventListener("click", () => this.hideBanner());
        console.log("Notification banner initialized");
    }

    hideBanner() {
        this.banner.classList.add("is-hidden");
        console.log("Notification banner hidden");
    }
}

// Initialize notification banner
function initializeNotificationBanner() {
    new NotificationBanner("#notification-banner");
}

document.addEventListener("DOMContentLoaded", () => {
    initializeNotificationBanner();
});

// FAQ expand/collapse functionality
class FAQToggle {
    constructor(faqSelector) {
        this.faqContainer = document.querySelector(faqSelector);
        this.init();
    }

    init() {
        this.faqContainer.querySelectorAll(".faq-question").forEach((question) => {
            question.addEventListener("click", () => this.toggleFAQ(question));
        });
    }

    toggleFAQ(question) {
        const answer = question.nextElementSibling;
        if (answer.classList.contains("is-expanded")) {
            answer.classList.remove("is-expanded");
            answer.style.maxHeight = null;
            console.log("FAQ answer collapsed");
        } else {
            answer.classList.add("is-expanded");
            answer.style.maxHeight = answer.scrollHeight + "px";
            console.log("FAQ answer expanded");
        }
    }
}

// Initialize FAQ toggles
function initializeFAQToggles() {
    new FAQToggle("#faq-section");
}

document.addEventListener("DOMContentLoaded", () => {
    initializeFAQToggles();
});

// Lightbox functionality for opening images in a modal view
class Lightbox {
    constructor(lightboxSelector, imagesSelector) {
        this.lightbox = document.querySelector(lightboxSelector);
        this.images = document.querySelectorAll(imagesSelector);
        this.init();
    }

    init() {
        this.images.forEach((image) => {
            image.addEventListener("click", () => this.openLightbox(image));
        });
        this.lightbox.querySelector(".close-lightbox").addEventListener("click", () => this.closeLightbox());
    }

    openLightbox(image) {
        const lightboxImage = this.lightbox.querySelector(".lightbox-image");
        lightboxImage.src = image.src;
        this.lightbox.classList.add("is-visible");
        console.log("Lightbox opened");
    }

    closeLightbox() {
        this.lightbox.classList.remove("is-visible");
        console.log("Lightbox closed");
    }
}

// Initialize lightbox functionality
function initializeLightbox() {
    new Lightbox("#lightbox", ".gallery-image");
}

document.addEventListener("DOMContentLoaded", () => {
    initializeLightbox();
});

// Quick view functionality for products in a modal window
class QuickView {
    constructor(quickViewSelector) {
        this.quickViewModal = document.querySelector(quickViewSelector);
        this.init();
    }

    init() {
        document.querySelectorAll(".quick-view-button").forEach((button) => {
            button.addEventListener("click", (e) => this.openQuickView(e.target.dataset.productId));
        });
        this.quickViewModal.querySelector(".close-quick-view").addEventListener("click", () => this.closeQuickView());
    }

    openQuickView(productId) {
        console.log(`Quick view opened for product ID: ${productId}`);
        this.quickViewModal.classList.add("is-visible");
        // Mock display for product details in quick view modal
        this.quickViewModal.querySelector(".product-details").innerHTML = `<p>Product details for ID: ${productId}</p>`;
    }

    closeQuickView() {
        this.quickViewModal.classList.remove("is-visible");
        console.log("Quick view closed");
    }
}

// Initialize quick view functionality
function initializeQuickView() {
    new QuickView("#quick-view-modal");
}

document.addEventListener("DOMContentLoaded", () => {
    initializeQuickView();
});

// Dropdown functionality for navigation or options
class Dropdown {
    constructor(dropdownSelector) {
        this.dropdown = document.querySelector(dropdownSelector);
        this.init();
    }

    init() {
        this.dropdown.addEventListener("click", () => this.toggleDropdown());
        document.addEventListener("click", (e) => this.closeOnOutsideClick(e));
    }

    toggleDropdown() {
        this.dropdown.classList.toggle("is-open");
        console.log("Dropdown toggled");
    }

    closeOnOutsideClick(event) {
        if (!this.dropdown.contains(event.target)) {
            this.dropdown.classList.remove("is-open");
            console.log("Dropdown closed due to outside click");
        }
    }
}

// Initialize dropdown functionality
function initializeDropdown() {
    new Dropdown("#dropdown-menu");
}

document.addEventListener("DOMContentLoaded", () => {
    initializeDropdown();
});

// Progress bar functionality, e.g., for reading progress or order steps
class ProgressBar {
    constructor(progressSelector) {
        this.progressBar = document.querySelector(progressSelector);
        this.init();
    }

    init() {
        window.addEventListener("scroll", () => this.updateProgress());
    }

    updateProgress() {
        const scrollTop = window.scrollY;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const progress = (scrollTop / docHeight) * 100;
        this.progressBar.style.width = `${progress}%`;
        console.log("Progress bar updated");
    }
}

// Initialize progress bar functionality
function initializeProgressBar() {
    new ProgressBar("#progress-bar");
}

document.addEventListener("DOMContentLoaded", () => {
    initializeProgressBar();
});

// Sticky add to cart button functionality
class StickyAddToCart {
    constructor(buttonSelector) {
        this.button = document.querySelector(buttonSelector);
        this.init();
    }

    init() {
        window.addEventListener("scroll", () => this.toggleVisibility());
    }

    toggleVisibility() {
        const threshold = document.querySelector("#product-info").offsetHeight;
        if (window.scrollY > threshold) {
            this.button.classList.add("is-visible");
            console.log("Sticky add to cart button shown");
        } else {
            this.button.classList.remove("is-visible");
            console.log("Sticky add to cart button hidden");
        }
    }
}

// Initialize sticky add to cart functionality
function initializeStickyAddToCart() {
    new StickyAddToCart("#sticky-add-to-cart");
}

document.addEventListener("DOMContentLoaded", () => {
    initializeStickyAddToCart();
});

// Product color swatch functionality
class ColorSwatch {
    constructor(swatchContainerSelector) {
        this.swatchContainer = document.querySelector(swatchContainerSelector);
        this.init();
    }

    init() {
        this.swatchContainer.querySelectorAll(".swatch-option").forEach((swatch) => {
            swatch.addEventListener("click", () => this.selectColor(swatch));
        });
    }

    selectColor(swatch) {
        const selectedColor = swatch.dataset.color;
        console.log(`Selected color: ${selectedColor}`);
        this.swatchContainer.querySelector(".selected-color").textContent = selectedColor;
    }
}

// Initialize color swatch functionality
function initializeColorSwatch() {
    new ColorSwatch("#color-swatch");
}

document.addEventListener("DOMContentLoaded", () => {
    initializeColorSwatch();
});

// Quantity selector functionality for product pages
class QuantitySelector {
    constructor(selector) {
        this.container = document.querySelector(selector);
        this.init();
    }

    init() {
        this.container.querySelector(".increase-quantity").addEventListener("click", () => this.changeQuantity(1));
        this.container.querySelector(".decrease-quantity").addEventListener("click", () => this.changeQuantity(-1));
    }

    changeQuantity(amount) {
        const quantityInput = this.container.querySelector(".quantity-input");
        let currentQuantity = parseInt(quantityInput.value, 10);
        currentQuantity = isNaN(currentQuantity) ? 1 : currentQuantity + amount;
        currentQuantity = Math.max(1, currentQuantity); // Ensure quantity is at least 1
        quantityInput.value = currentQuantity;
        console.log(`Quantity changed to: ${currentQuantity}`);
    }
}

// Initialize quantity selector functionality
function initializeQuantitySelector() {
    new QuantitySelector("#quantity-selector");
}

document.addEventListener("DOMContentLoaded", () => {
    initializeQuantitySelector();
});

// Newsletter subscription form functionality
class NewsletterSubscription {
    constructor(formSelector) {
        this.form = document.querySelector(formSelector);
        this.init();
    }

    init() {
        this.form.addEventListener("submit", (e) => this.subscribe(e));
    }

    subscribe(event) {
        event.preventDefault();
        const email = this.form.querySelector("input[type='email']").value;
        console.log(`Subscribed with email: ${email}`);
        this.form.reset();
        alert("Thank you for subscribing!");
    }
}

// Initialize newsletter subscription functionality
function initializeNewsletterSubscription() {
    new NewsletterSubscription("#newsletter-form");
}

document.addEventListener("DOMContentLoaded", () => {
    initializeNewsletterSubscription();
});

// Tooltip functionality for displaying hints or additional info
class Tooltip {
    constructor(triggerSelector) {
        this.triggers = document.querySelectorAll(triggerSelector);
        this.init();
    }

    init() {
        this.triggers.forEach((trigger) => {
            trigger.addEventListener("mouseenter", (e) => this.showTooltip(e, trigger));
            trigger.addEventListener("mouseleave", () => this.hideTooltip());
        });
    }

    showTooltip(event, trigger) {
        const tooltip = document.createElement("div");
        tooltip.className = "tooltip";
        tooltip.textContent = trigger.dataset.tooltip;
        document.body.appendChild(tooltip);

        const rect = trigger.getBoundingClientRect();
        tooltip.style.left = `${rect.left + window.pageXOffset}px`;
        tooltip.style.top = `${rect.top + window.pageYOffset - tooltip.offsetHeight}px`;
        this.tooltip = tooltip;

        console.log("Tooltip shown");
    }

    hideTooltip() {
        if (this.tooltip) {
            this.tooltip.remove();
            this.tooltip = null;
            console.log("Tooltip hidden");
        }
    }
}

// Initialize tooltip functionality
function initializeTooltip() {
    new Tooltip("[data-tooltip]");
}

document.addEventListener("DOMContentLoaded", () => {
    initializeTooltip();
});

// Image carousel with thumbnails functionality for product images
class ImageCarousel {
    constructor(carouselSelector, thumbnailSelector) {
        this.carousel = document.querySelector(carouselSelector);
        this.thumbnails = document.querySelectorAll(thumbnailSelector);
        this.currentIndex = 0;
        this.init();
    }

    init() {
        this.thumbnails.forEach((thumbnail, index) => {
            thumbnail.addEventListener("click", () => this.showSlide(index));
        });
        console.log("Image carousel initialized");
    }

    showSlide(index) {
        this.carousel.querySelectorAll(".carousel-slide").forEach((slide, i) => {
            slide.classList.toggle("is-active", i === index);
        });
        this.currentIndex = index;
        console.log(`Showing slide index: ${index}`);
    }
}

// Initialize image carousel with thumbnails
function initializeImageCarousel() {
    new ImageCarousel("#image-carousel", ".thumbnail");
}

document.addEventListener("DOMContentLoaded", () => {
    initializeImageCarousel();
});

// Collapsible content functionality for expanding and collapsing sections
class CollapsibleContent {
    constructor(collapsibleSelector) {
        this.collapsibles = document.querySelectorAll(collapsibleSelector);
        this.init();
    }

    init() {
        this.collapsibles.forEach((collapsible) => {
            collapsible.querySelector(".collapsible-header").addEventListener("click", () => this.toggleContent(collapsible));
        });
        console.log("Collapsible content initialized");
    }

    toggleContent(collapsible) {
        const content = collapsible.querySelector(".collapsible-content");
        const isExpanded = content.style.maxHeight;
        if (isExpanded) {
            content.style.maxHeight = null;
            console.log("Collapsible content collapsed");
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
            console.log("Collapsible content expanded");
        }
    }
}

// Initialize collapsible content
function initializeCollapsibleContent() {
    new CollapsibleContent(".collapsible");
}

document.addEventListener("DOMContentLoaded", () => {
    initializeCollapsibleContent();
});

// Modal functionality for general use
class Modal {
    constructor(modalSelector, triggerSelector) {
        this.modal = document.querySelector(modalSelector);
        this.triggers = document.querySelectorAll(triggerSelector);
        this.init();
    }

    init() {
        this.triggers.forEach((trigger) => {
            trigger.addEventListener("click", () => this.openModal());
        });
        this.modal.querySelector(".close-modal").addEventListener("click", () => this.closeModal());
        console.log("Modal functionality initialized");
    }

    openModal() {
        this.modal.classList.add("is-visible");
        console.log("Modal opened");
    }

    closeModal() {
        this.modal.classList.remove("is-visible");
        console.log("Modal closed");
    }
}

// Initialize modal functionality
function initializeModal() {
    new Modal("#generic-modal", ".modal-trigger");
}

document.addEventListener("DOMContentLoaded", () => {
    initializeModal();
});

// Accordion-style FAQ for expanding/collapsing FAQ answers
class FAQAccordion {
    constructor(accordionSelector) {
        this.accordion = document.querySelector(accordionSelector);
        this.init();
    }

    init() {
        this.accordion.querySelectorAll(".faq-question").forEach((question) => {
            question.addEventListener("click", () => this.toggleAnswer(question));
        });
        console.log("FAQ accordion initialized");
    }

    toggleAnswer(question) {
        const answer = question.nextElementSibling;
        const isExpanded = answer.style.maxHeight;
        if (isExpanded) {
            answer.style.maxHeight = null;
            console.log("FAQ answer collapsed");
        } else {
            answer.style.maxHeight = answer.scrollHeight + "px";
            console.log("FAQ answer expanded");
        }
    }
}

// Initialize FAQ accordion
function initializeFAQAccordion() {
    new FAQAccordion("#faq-accordion");
}

document.addEventListener("DOMContentLoaded", () => {
    initializeFAQAccordion();
});

// Scroll animation functionality for smooth scrolling to page sections
class SmoothScroll {
    constructor(triggerSelector) {
        this.triggers = document.querySelectorAll(triggerSelector);
        this.init();
    }

    init() {
        this.triggers.forEach((trigger) => {
            trigger.addEventListener("click", (e) => this.scrollToSection(e, trigger));
        });
        console.log("Smooth scroll initialized");
    }

    scrollToSection(event, trigger) {
        event.preventDefault();
        const targetId = trigger.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: "smooth" });
        console.log(`Smooth scrolling to section: ${targetId}`);
    }
}

// Initialize smooth scroll functionality
function initializeSmoothScroll() {
    new SmoothScroll("a[href^='#']");
}

document.addEventListener("DOMContentLoaded", () => {
    initializeSmoothScroll();
});

// Floating action button functionality for quick access options
class FloatingActionButton {
    constructor(buttonSelector) {
        this.button = document.querySelector(buttonSelector);
        this.init();
    }

    init() {
        this.button.addEventListener("click", () => this.toggleMenu());
        console.log("Floating action button initialized");
    }

    toggleMenu() {
        this.button.classList.toggle("is-expanded");
        console.log("Floating action button menu toggled");
    }
}

// Initialize floating action button functionality
function initializeFloatingActionButton() {
    new FloatingActionButton("#floating-action-button");
}

document.addEventListener("DOMContentLoaded", () => {
    initializeFloatingActionButton();
});

// Header reveal on scroll functionality
class HeaderReveal {
    constructor(headerSelector) {
        this.header = document.querySelector(headerSelector);
        this.previousScrollPosition = window.scrollY;
        this.init();
    }

    init() {
        window.addEventListener("scroll", () => this.handleScroll());
        console.log("Header reveal on scroll initialized");
    }

    handleScroll() {
        const currentScrollPosition = window.scrollY;
        if (currentScrollPosition > this.previousScrollPosition) {
            this.header.classList.add("is-hidden");
            console.log("Header hidden on scroll down");
        } else {
            this.header.classList.remove("is-hidden");
            console.log("Header revealed on scroll up");
        }
        this.previousScrollPosition = currentScrollPosition;
    }
}

// Initialize header reveal functionality
function initializeHeaderReveal() {
    new HeaderReveal("#header");
}

document.addEventListener("DOMContentLoaded", () => {
    initializeHeaderReveal();
});

// Auto-hide footer when scrolling functionality
class FooterAutoHide {
    constructor(footerSelector) {
        this.footer = document.querySelector(footerSelector);
        this.previousScrollPosition = window.scrollY;
        this.init();
    }

    init() {
        window.addEventListener("scroll", () => this.handleScroll());
        console.log("Footer auto-hide on scroll initialized");
    }

    handleScroll() {
        const currentScrollPosition = window.scrollY;
        if (currentScrollPosition > this.previousScrollPosition) {
            this.footer.classList.add("is-hidden");
            console.log("Footer hidden on scroll down");
        } else {
            this.footer.classList.remove("is-hidden");
            console.log("Footer revealed on scroll up");
        }
        this.previousScrollPosition = currentScrollPosition;
    }
}

// Initialize footer auto-hide functionality
function initializeFooterAutoHide() {
    new FooterAutoHide("#footer");
}

document.addEventListener("DOMContentLoaded", () => {
    initializeFooterAutoHide();
});

// Search overlay functionality for fullscreen search experience
class SearchOverlay {
    constructor(overlaySelector, openButtonSelector, closeButtonSelector) {
        this.overlay = document.querySelector(overlaySelector);
        this.openButton = document.querySelector(openButtonSelector);
        this.closeButton = document.querySelector(closeButtonSelector);
        this.init();
    }

    init() {
        this.openButton.addEventListener("click", () => this.showOverlay());
        this.closeButton.addEventListener("click", () => this.hideOverlay());
        console.log("Search overlay initialized");
    }

    showOverlay() {
        this.overlay.classList.add("is-visible");
        console.log("Search overlay opened");
    }

    hideOverlay() {
        this.overlay.classList.remove("is-visible");
        console.log("Search overlay closed");
    }
}

// Initialize search overlay functionality
function initializeSearchOverlay() {
    new SearchOverlay("#search-overlay", "#open-search", "#close-search");
}

document.addEventListener("DOMContentLoaded", () => {
    initializeSearchOverlay();
});

// Notification toast functionality for temporary messages
class NotificationToast {
    constructor(toastContainerSelector) {
        this.toastContainer = document.querySelector(toastContainerSelector);
        this.init();
    }

    init() {
        document.querySelectorAll(".show-toast").forEach((button) => {
            button.addEventListener("click", () => this.showToast("This is a notification!"));
        });
        console.log("Notification toast initialized");
    }

    showToast(message) {
        const toast = document.createElement("div");
        toast.className = "toast";
        toast.textContent = message;
        this.toastContainer.appendChild(toast);
        console.log("Toast message shown");

        setTimeout(() => {
            toast.classList.add("fade-out");
            toast.addEventListener("transitionend", () => toast.remove());
            console.log("Toast message removed");
        }, 3000);
    }
}

// Initialize notification toast functionality
function initializeNotificationToast() {
    new NotificationToast("#toast-container");
}

document.addEventListener("DOMContentLoaded", () => {
    initializeNotificationToast();
});

// Sidebar functionality for toggling a sidebar on/off
class Sidebar {
    constructor(sidebarSelector, toggleButtonSelector) {
        this.sidebar = document.querySelector(sidebarSelector);
        this.toggleButton = document.querySelector(toggleButtonSelector);
        this.init();
    }

    init() {
        this.toggleButton.addEventListener("click", () => this.toggleSidebar());
        console.log("Sidebar functionality initialized");
    }

    toggleSidebar() {
        this.sidebar.classList.toggle("is-visible");
        if (this.sidebar.classList.contains("is-visible")) {
            console.log("Sidebar opened");
        } else {
            console.log("Sidebar closed");
        }
    }
}

// Initialize sidebar functionality
function initializeSidebar() {
    new Sidebar("#sidebar", "#sidebar-toggle");
}

document.addEventListener("DOMContentLoaded", () => {
    initializeSidebar();
});

// Backdrop functionality for modals or overlays
class Backdrop {
    constructor(backdropSelector) {
        this.backdrop = document.querySelector(backdropSelector);
        this.init();
    }

    init() {
        document.querySelectorAll(".show-backdrop").forEach((button) => {
            button.addEventListener("click", () => this.showBackdrop());
        });
        this.backdrop.addEventListener("click", () => this.hideBackdrop());
        console.log("Backdrop functionality initialized");
    }

    showBackdrop() {
        this.backdrop.classList.add("is-visible");
        console.log("Backdrop shown");
    }

    hideBackdrop() {
        this.backdrop.classList.remove("is-visible");
        console.log("Backdrop hidden");
    }
}

// Initialize backdrop functionality
function initializeBackdrop() {
    new Backdrop("#backdrop");
}

document.addEventListener("DOMContentLoaded", () => {
    initializeBackdrop();
});

// Dropdown menu functionality for navigation items
class DropdownMenu {
    constructor(menuSelector) {
        this.menu = document.querySelector(menuSelector);
        this.init();
    }

    init() {
        this.menu.addEventListener("mouseenter", () => this.showMenu());
        this.menu.addEventListener("mouseleave", () => this.hideMenu());
        console.log("Dropdown menu initialized");
    }

    showMenu() {
        this.menu.classList.add("is-visible");
        console.log("Dropdown menu shown");
    }

    hideMenu() {
        this.menu.classList.remove("is-visible");
        console.log("Dropdown menu hidden");
    }
}

// Initialize dropdown menu functionality
function initializeDropdownMenu() {
    new DropdownMenu("#dropdown-menu");
}

document.addEventListener("DOMContentLoaded", () => {
    initializeDropdownMenu();
});

// Floating chat widget functionality for customer support
class FloatingChatWidget {
    constructor(widgetSelector, openButtonSelector) {
        this.widget = document.querySelector(widgetSelector);
        this.openButton = document.querySelector(openButtonSelector);
        this.init();
    }

    init() {
        this.openButton.addEventListener("click", () => this.toggleWidget());
        console.log("Floating chat widget initialized");
    }

    toggleWidget() {
        this.widget.classList.toggle("is-visible");
        if (this.widget.classList.contains("is-visible")) {
            console.log("Chat widget opened");
        } else {
            console.log("Chat widget closed");
        }
    }
}

// Initialize floating chat widget
function initializeFloatingChatWidget() {
    new FloatingChatWidget("#chat-widget", "#open-chat-widget");
}

document.addEventListener("DOMContentLoaded", () => {
    initializeFloatingChatWidget();
});

// Tooltips for form validation feedback
class FormValidationTooltip {
    constructor(inputSelector) {
        this.inputs = document.querySelectorAll(inputSelector);
        this.init();
    }

    init() {
        this.inputs.forEach((input) => {
            input.addEventListener("invalid", (e) => this.showTooltip(e));
            input.addEventListener("input", () => this.hideTooltip());
        });
        console.log("Form validation tooltips initialized");
    }

    showTooltip(event) {
        const input = event.target;
        let tooltip = document.createElement("div");
        tooltip.className = "validation-tooltip";
        tooltip.textContent = input.validationMessage;
        input.parentNode.appendChild(tooltip);
        this.tooltip = tooltip;
        console.log("Validation tooltip shown");
    }

    hideTooltip() {
        if (this.tooltip) {
            this.tooltip.remove();
            this.tooltip = null;
            console.log("Validation tooltip hidden");
        }
    }
}

// Initialize form validation tooltips
function initializeFormValidationTooltip() {
    new FormValidationTooltip("input[required]");
}

document.addEventListener("DOMContentLoaded", () => {
    initializeFormValidationTooltip();
});

