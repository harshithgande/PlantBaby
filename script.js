document.addEventListener("DOMContentLoaded", function() {
    console.log("PlantBaby Mock Website Loaded");

    // Simple smooth scroll for navigation links
    const navLinks = document.querySelectorAll(".nav-links a");
    
    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Dynamic Product Load (Example Feature for Future Use)
    const products = [
        { name: "Fiddle Leaf Fig", price: "$25.00", img: "plant1.jpg" },
        { name: "Snake Plant", price: "$20.00", img: "plant2.jpg" },
        { name: "Monstera Deliciosa", price: "$30.00", img: "plant3.jpg" }
    ];
    
    const productContainer = document.querySelector(".product-list");
    
    if (productContainer) {
        productContainer.innerHTML = products.map(product => `
            <div class="product">
                <img src="${product.img}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.price}</p>
            </div>
        `).join("");
    }
});
