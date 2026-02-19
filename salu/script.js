        // Initial products data
        let products = [
            {
                id: '1',
                name: 'Trådlösa hörlurar',
                description: 'Mycket hög kvalitet, lång batteritid, sparsamt använda.',
                price: 299,
                image: 'https://images.unsplash.com/photo-1757946718516-fddeb8d3ed9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBoZWFkcGhvbmVzJTIwcHJvZHVjdHxlbnwxfHx8fDE3NzA1Njg3NDV8MA&ixlib=rb-4.1.0&q=80&w=400',
                category: 'electronics',
                rating: 4.8,
                reviews: 342,
                inStock: true,
                seller: { name: 'TechGear Store', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=TechGear' }
            },
            {
                id: '2',
                name: 'MacBook Pro 16-inch',
                description: 'kraftfull laptop med M2 chip, perfekt för personer som arbetar digitalt.',
                price: 1899,
                image: 'https://images.unsplash.com/photo-1642943038577-eb4a59549766?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjBjb21wdXRlciUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcwNjQxNzE4fDA&ixlib=rb-4.1.0&q=80&w=400',
                category: 'electronics',
                rating: 4.9,
                reviews: 856,
                inStock: true,
                seller: { name: 'Digital World', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Digital' }
            },
            {
                id: '3',
                name: 'Klackskor',
                description: 'Vita klackskor från märket St Michael. Inköpta i London år 1995',
                price: 399,
                image: 'https://picsum.photos/id/21/400/',
                category: 'fashion',
                rating: 4.6,
                reviews: 523,
                inStock: true,
                seller: { name: 'SaraJohnson', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah' }
            },
            {
                id: '4',
                name: 'Professionell DSLR Camera',
                description: '5MP upplösning, 4K video inspelning. Passar den erfarna fotografen.',
                price: 1499,
                image: 'https://images.unsplash.com/photo-1764557359097-f15dd0c0a17b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1lcmElMjBwaG90b2dyYXBoeSUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NzA1MTk2MjV8MA&ixlib=rb-4.1.0&q=80&w=400',
                category: 'hobby',
                rating: 4.7,
                reviews: 234,
                inStock: false,
                seller: { name: 'CameraHub', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Camera' }
            },
            {
                id: '5',
                name: 'DVD-filmer',
                description: 'Min samling DVD-filmer. 30 st totalt. Alla fungerar.',
                price: 199,
                image: 'https://c7.alamy.com/comp/C0WT3F/pile-of-dvds-uk-C0WT3F.jpg',
                category: 'media',
                rating: 4.9,
                reviews: 1245,
                inStock: true,
                seller: { name: 'Erik99', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Easton' }
            },
            {
                id: '6',
                name: 'Antik skänk',
                description: 'antik skänk i fint skick. Bredd: 130cm. Höjd: 75cm',
                price: 1200,
                image: 'https://prd.place/400?id=21',
                category: 'home',
                rating: 4.5,
                reviews: 678,
                inStock: true,
                seller: { name: 'Emmaaa', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alexander' }
            },
            {
                id: '7',
                name: 'iPad Pro 12.9',
                description: 'Versatile tablet with stunning display and all-day battery life',
                price: 1099,
                image: 'https://images.unsplash.com/photo-1769603891182-0316b20ce2aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWJsZXQlMjBkZXZpY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3MDU5Njg1MXww&ixlib=rb-4.1.0&q=80&w=400',
                category: 'home',
                rating: 4.8,
                reviews: 423,
                inStock: true,
                seller: { name: 'Tablet Tech', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Amaya' }
            },
            {
                id: '8',
                name: 'Gaming Console Pro',
                description: 'Next-gen gaming console with 4K graphics and exclusive titles',
                price: 499,
                image: 'https://images.unsplash.com/photo-1695028644151-1ec92bae9fb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBjb25zb2xlJTIwY29udHJvbGxlcnxlbnwxfHx8fDE3NzA2MzA3MDB8MA&ixlib=rb-4.1.0&q=80&w=400',
                category: 'crafts',
                rating: 4.7,
                reviews: 912,
                inStock: true,
                seller: { name: 'Greta', avatar: 'https://api.dicebear.com/9.x/avataaars/svg?seed=Leo' }
            }
        ];

        let cart = [];
        let uploadedImage = '';
        let currentUser = null;

        // Initialize
        document.addEventListener('DOMContentLoaded', function() {
            loadUserSession();
            loadProducts();
            loadCart();
            renderProducts();
            updateCartBadge();
            updateAuthUI();
            
            // Search functionality
            document.getElementById('searchInput').addEventListener('input', filterProducts);

            // Click outside to close dropdown
            document.addEventListener('click', function(e) {
                const userMenu = document.getElementById('userMenu');
                const dropdown = document.getElementById('userDropdown');
                if (!userMenu.contains(e.target)) {
                    dropdown.classList.remove('active');
                }
            });
        });

        // Auth Functions
        function loadUserSession() {
            const savedUser = localStorage.getItem('currentUser');
            if (savedUser) {
                currentUser = JSON.parse(savedUser);
            }
        }

        function saveUserSession() {
            if (currentUser) {
                localStorage.setItem('currentUser', JSON.stringify(currentUser));
            } else {
                localStorage.removeItem('currentUser');
            }
        }

        function updateAuthUI() {
            const authButtons = document.getElementById('authButtons');
            const userMenu = document.getElementById('userMenu');
            
            if (currentUser) {
                authButtons.classList.add('hidden');
                userMenu.classList.remove('hidden');
                
                document.getElementById('userAvatar').src = currentUser.avatar;
                document.getElementById('dropdownName').textContent = currentUser.name;
                document.getElementById('dropdownEmail').textContent = currentUser.email;
            } else {
                authButtons.classList.remove('hidden');
                userMenu.classList.add('hidden');
            }
        }

        function openLoginModal() {
            document.getElementById('loginModal').classList.add('active');
        }

        function closeLoginModal() {
            document.getElementById('loginModal').classList.remove('active');
            document.getElementById('loginForm').reset();
        }

        function openSignupModal() {
            document.getElementById('signupModal').classList.add('active');
        }

        function closeSignupModal() {
            document.getElementById('signupModal').classList.remove('active');
            document.getElementById('signupForm').reset();
        }

        function handleLogin(event) {
            event.preventDefault();
            
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            
            // Get all users from localStorage
            const users = JSON.parse(localStorage.getItem('users') || '[]');
            const user = users.find(u => u.email === email && u.password === password);
            
            if (user) {
                currentUser = {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    avatar: user.avatar
                };
                saveUserSession();
                updateAuthUI();
                closeLoginModal();
                showToast('Välkommen tillbaka, ' + user.name + '!');
            } else {
                showToast('Ogiltigt lösenord');
            }
        }

        function handleSignup(event) {
            event.preventDefault();
            
            const name = document.getElementById('signupName').value;
            const email = document.getElementById('signupEmail').value;
            const password = document.getElementById('signupPassword').value;
            
            // Get all users from localStorage
            const users = JSON.parse(localStorage.getItem('users') || '[]');
            
            // Check if email already exists
            if (users.find(u => u.email === email)) {
                showToast('epostadressen finns redan registrerad');
                return;
            }
            
            // Create new user
            const newUser = {
                id: Date.now().toString(),
                name: name,
                email: email,
                password: password,
                avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`
            };
            
            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));
            
            // Auto login
            currentUser = {
                id: newUser.id,
                name: newUser.name,
                email: newUser.email,
                avatar: newUser.avatar
            };
            saveUserSession();
            updateAuthUI();
            closeSignupModal();
            showToast('Välkommen till salu, ' + name + '!');
        }

        function logout() {
            currentUser = null;
            saveUserSession();
            updateAuthUI();
            document.getElementById('userDropdown').classList.remove('active');
            showToast('Utloggad!');
            filterProducts(); // Refresh to hide "My Listings" if active
        }

        function toggleUserDropdown() {
            document.getElementById('userDropdown').classList.toggle('active');
        }

        function showMyListings() {
            if (!currentUser) return;
            
            const myProducts = products.filter(p => p.seller && p.seller.userId === currentUser.id);
            renderProducts(myProducts);
            
            document.getElementById('categoryTitle').textContent = 'Mina annonser';
            document.getElementById('productCount').textContent = myProducts.length + ' produkter hittade';
            document.getElementById('userDropdown').classList.remove('active');
        }

        // Product Functions
        function loadProducts() {
            const savedProducts = localStorage.getItem('products');
            if (savedProducts) {
                const customProducts = JSON.parse(savedProducts);
                products = [...customProducts, ...products.filter(p => !p.seller || !p.seller.userId)];
            }
        }

        function saveProducts() {
            const customProducts = products.filter(p => p.seller && p.seller.userId);
            localStorage.setItem('products', JSON.stringify(customProducts));
        }

        // Filter products
        function filterProducts() {
            const searchQuery = document.getElementById('searchInput').value.toLowerCase();
            const selectedCategory = document.querySelector('input[name="category"]:checked').value;
            const maxPrice = parseInt(document.getElementById('priceMax').value);
            
            document.getElementById('maxPriceLabel').textContent = 'kr' + maxPrice;

            const filtered = products.filter(product => {
                const matchesSearch = product.name.toLowerCase().includes(searchQuery);
                const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
                const matchesPrice = product.price <= maxPrice;
                return matchesSearch && matchesCategory && matchesPrice;
            });

            renderProducts(filtered);
            
            // Update header
            const categoryName = selectedCategory === 'all' ? 'All Products' : 
                selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1);
            document.getElementById('categoryTitle').textContent = categoryName;
            document.getElementById('productCount').textContent = filtered.length + ' products found';
        }

        // Render products
        function renderProducts(productList = products) {
            const grid = document.getElementById('productGrid');
            grid.innerHTML = '';

            if (productList.length === 0) {
                grid.innerHTML = '<div class="empty-state">Hittar inga produkter som matchar...</div>';
                return;
            }

            productList.forEach(product => {
                const card = document.createElement('div');
                card.className = 'product-card';
                card.onclick = () => showProductDetail(product);
                
                card.innerHTML = `
                    <img src="${product.image}" alt="${product.name}" class="product-image">
                    <div class="product-content">
                        ${product.seller ? `
                            <div class="seller-info">
                                <img src="${product.seller.avatar}" alt="${product.seller.name}" class="seller-avatar">
                                <span class="seller-name">${product.seller.name}</span>
                            </div>
                        ` : ''}
                        <div class="product-rating">
                            <span class="star">⭐</span>
                            <span>${product.rating}</span>
                            <span style="color: #6b7280;">(${product.reviews})</span>
                        </div>
                        <h3 class="product-name">${product.name}</h3>
                        <p class="product-description">${product.description}</p>
                        <div class="product-price">${product.price} kr</div>
                        <button class="btn btn-primary" style="width: 100%;" 
                                onclick="event.stopPropagation(); addToCart('${product.id}')"
                                ${!product.inStock ? 'disabled' : ''}>
                             🛒Lägg till i varukorgen
                        </button>
                    </div>
                `;
                
                grid.appendChild(card);
            });
        }

        // Show product detail
        function showProductDetail(product) {
            const modal = document.getElementById('productDetailModal');
            const content = document.getElementById('productDetailContent');
            
            const stars = '⭐'.repeat(Math.floor(product.rating)) + '☆'.repeat(5 - Math.floor(product.rating));
            
            content.innerHTML = `
                <div>
                    <img src="${product.image}" alt="${product.name}" class="product-detail-image">
                </div>
                <div>
                    ${product.seller ? `
                        <div class="seller-card">
                            <img src="${product.seller.avatar}" alt="${product.seller.name}" class="seller-card-avatar">
                            <div>
                                <p style="font-size: 0.875rem; color: #6b7280;">Sold by</p>
                                <p style="font-weight: 600;">${product.seller.name}</p>
                            </div>
                        </div>
                    ` : ''}
                    <div style="margin-bottom: 0.5rem;">
                        <span class="badge">${product.category}</span>
                        ${!product.inStock ? '<span class="badge" style="background: #fee2e2; color: #991b1b;">Out of Stock</span>' : ''}
                    </div>
                    <h1 style="font-size: 1.875rem; font-weight: 700; margin-bottom: 1rem;">${product.name}</h1>
                    <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1rem;">
                        <span style="font-size: 1.25rem;">${stars}</span>
                        <span style="font-weight: 500;">${product.rating}</span>
                        <span style="color: #6b7280;">(${product.reviews} reviews)</span>
                    </div>
                    <p style="color: #6b7280; margin-bottom: 1.5rem;">${product.description}</p>
                    <div style="font-size: 2.25rem; font-weight: 700; margin-bottom: 1.5rem;">$${product.price}</div>
                    <button class="btn btn-primary" style="width: 100%;" 
                            onclick="addToCart('${product.id}'); closeProductDetail()"
                            ${!product.inStock ? 'disabled' : ''}>
                        🛒 Add to Cart
                    </button>
                    <div style="margin-top: 2rem;">
                        <h3 style="font-weight: 600; font-size: 1.125rem; margin-bottom: 1rem;">Product Features</h3>
                        <ul style="color: #6b7280; line-height: 1.75;">
                            <li>• Premium quality materials</li>
                            <li>• 1 year warranty included</li>
                            <li>• Free shipping on orders over $50</li>
                            <li>• 30-day money back guarantee</li>
                        </ul>
                    </div>
                </div>
            `;
            
            modal.classList.add('active');
        }

        function closeProductDetail() {
            document.getElementById('productDetailModal').classList.remove('active');
        }

        // Create listing
        function openCreateListingModal() {
            if (!currentUser) {
                showToast('Logga in eller skapa ett konto för att ladda upp produkter!');
                openLoginModal();
                return;
            }
            document.getElementById('createListingModal').classList.add('active');
        }

        function closeCreateListingModal() {
            document.getElementById('createListingModal').classList.remove('active');
            document.getElementById('createListingForm').reset();
            uploadedImage = '';
            document.getElementById('imageUploadArea').innerHTML = `
                <div>📷</div>
                <p>Click to upload image</p>
            `;
        }

        function handleImageUpload(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    uploadedImage = e.target.result;
                    document.getElementById('imageUploadArea').innerHTML = `
                        <div class="image-preview">
                            <img src="${uploadedImage}" alt="Preview">
                            <button type="button" class="btn btn-outline image-preview-remove" 
                                    onclick="event.stopPropagation(); removeImage()">
                                × Remove
                            </button>
                        </div>
                    `;
                };
                reader.readAsDataURL(file);
            }
        }

        function removeImage() {
            uploadedImage = '';
            document.getElementById('imageInput').value = '';
            document.getElementById('imageUploadArea').innerHTML = `
                <div>📷</div>
                <p>Ladda up bild</p>
            `;
        }

        function handleCreateListing(event) {
            event.preventDefault();
            
            if (!currentUser) {
                showToast('Logga in eller skapa ett konto för att ladda upp produkt');
                return;
            }
            
            const newProduct = {
                id: Date.now().toString(),
                name: document.getElementById('productName').value,
                description: document.getElementById('productDescription').value,
                price: parseFloat(document.getElementById('productPrice').value),
                category: document.getElementById('productCategory').value,
                image: uploadedImage || 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
                rating: 0,
                reviews: 0,
                inStock: true,
                seller: {
                    userId: currentUser.id,
                    name: currentUser.name,
                    avatar: currentUser.avatar
                }
            };
            
            products.unshift(newProduct);
            saveProducts();
            renderProducts();
            closeCreateListingModal();
            showToast('Din annons är skapad!');
        }

        // Cart functions
        function loadCart() {
            const savedCart = localStorage.getItem('cart');
            if (savedCart) {
                cart = JSON.parse(savedCart);
            }
        }

        function saveCart() {
            localStorage.setItem('cart', JSON.stringify(cart));
        }

        function addToCart(productId) {
            const product = products.find(p => p.id === productId);
            if (!product || !product.inStock) return;
            
            const existingItem = cart.find(item => item.id === productId);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push({ ...product, quantity: 1 });
                showToast('Tillagd i varukorgen!');
            }
            
            saveCart();
            updateCartBadge();
            renderCart();
        }

        function updateCartBadge() {
            const badge = document.getElementById('cartBadge');
            const total = cart.reduce((sum, item) => sum + item.quantity, 0);
            
            if (total > 0) {
                badge.textContent = total;
                badge.classList.remove('hidden');
            } else {
                badge.classList.add('hidden');
            }
        }

        function openCart() {
            document.getElementById('cartDrawer').classList.add('active');
            renderCart();
        }

        function closeCart() {
            document.getElementById('cartDrawer').classList.remove('active');
        }

        function renderCart() {
            const itemsContainer = document.getElementById('cartItems');
            const footerContainer = document.getElementById('cartFooter');
            
            if (cart.length === 0) {
                itemsContainer.innerHTML = `
                    <div class="empty-state">
                        <div style="font-size: 4rem; margin-bottom: 1rem;">🛒</div>
                        <p>Din kundvagn är tom</p>
                    </div>
                `;
                footerContainer.innerHTML = '';
                return;
            }
            
            itemsContainer.innerHTML = cart.map(item => `
                <div class="cart-item">
                    <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                    <div class="cart-item-content">
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-price">$${item.price} each</div>
                        <div class="quantity-controls">
                            <button class="quantity-btn" onclick="updateQuantity('${item.id}', ${item.quantity - 1})"
                                    ${item.quantity <= 1 ? 'disabled' : ''}>−</button>
                            <span style="width: 2rem; text-align: center;">${item.quantity}</span>
                            <button class="quantity-btn" onclick="updateQuantity('${item.id}', ${item.quantity + 1})">+</button>
                            <button class="btn btn-outline" style="margin-left: auto; padding: 0.25rem 0.5rem;" 
                                    onclick="removeFromCart('${item.id}')">🗑️</button>
                        </div>
                    </div>
                    <div style="font-weight: 600;">$${(item.price * item.quantity).toFixed(2)}</div>
                </div>
            `).join('');
            
            const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            footerContainer.innerHTML = `
                <div class="cart-total">
                    <span style="font-weight: 600;">Total:</span>
                    <span class="cart-total-amount">$${total.toFixed(2)}</span>
                </div>
                <button class="btn btn-primary" style="width: 100%;">Till kassan</button>
            `;
        }

        function updateQuantity(productId, newQuantity) {
            if (newQuantity <= 0) {
                removeFromCart(productId);
                return;
            }
            
            const item = cart.find(item => item.id === productId);
            if (item) {
                item.quantity = newQuantity;
                saveCart();
                updateCartBadge();
                renderCart();
            }
        }

        function removeFromCart(productId) {
            cart = cart.filter(item => item.id !== productId);
            saveCart();
            updateCartBadge();
            renderCart();
            //showToast('Removed from cart');
        }

        // Toast notification
        function showToast(message) {
            const container = document.getElementById('toastContainer');
            const toast = document.createElement('div');
            toast.className = 'toast';
            toast.textContent = message;
            container.appendChild(toast);
            
            setTimeout(() => {
                toast.remove();
            }, 3000);
        }