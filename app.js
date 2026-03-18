// ========== Car Database ==========
const CARS = [
    {
        id: 1, make: "Tesla", model: "Model 3", year: 2025, price: 38990,
        type: "electric", hp: 271, mpg: 132, zeroToSixty: 5.8, seats: 5,
        drivetrain: "RWD", engine: "Electric Motor", range: "272 mi",
        emoji: "⚡", color: "#1a1a2e"
    },
    {
        id: 2, make: "Tesla", model: "Model Y", year: 2025, price: 44990,
        type: "electric", hp: 310, mpg: 125, zeroToSixty: 5.0, seats: 5,
        drivetrain: "AWD", engine: "Dual Motor", range: "310 mi",
        emoji: "⚡", color: "#16213e"
    },
    {
        id: 3, make: "Toyota", model: "Camry", year: 2025, price: 28855,
        type: "sedan", hp: 203, mpg: 39, zeroToSixty: 7.6, seats: 5,
        drivetrain: "FWD", engine: "2.5L 4-Cyl", range: "N/A",
        emoji: "🚗", color: "#1b2838"
    },
    {
        id: 4, make: "Honda", model: "Civic", year: 2025, price: 24950,
        type: "sedan", hp: 150, mpg: 36, zeroToSixty: 8.2, seats: 5,
        drivetrain: "FWD", engine: "2.0L 4-Cyl", range: "N/A",
        emoji: "🚗", color: "#1a1a2e"
    },
    {
        id: 5, make: "Ford", model: "Mustang", year: 2025, price: 32515,
        type: "sports", hp: 315, mpg: 27, zeroToSixty: 5.1, seats: 4,
        drivetrain: "RWD", engine: "2.3L Turbo 4-Cyl", range: "N/A",
        emoji: "🏎️", color: "#2d1b2e"
    },
    {
        id: 6, make: "Chevrolet", model: "Corvette", year: 2025, price: 66300,
        type: "sports", hp: 490, mpg: 19, zeroToSixty: 2.9, seats: 2,
        drivetrain: "RWD", engine: "6.2L V8", range: "N/A",
        emoji: "🏎️", color: "#2e1a1a"
    },
    {
        id: 7, make: "Toyota", model: "RAV4", year: 2025, price: 31275,
        type: "suv", hp: 203, mpg: 30, zeroToSixty: 8.3, seats: 5,
        drivetrain: "AWD", engine: "2.5L 4-Cyl", range: "N/A",
        emoji: "🚙", color: "#1b2e1b"
    },
    {
        id: 8, make: "Honda", model: "CR-V", year: 2025, price: 31450,
        type: "suv", hp: 190, mpg: 32, zeroToSixty: 8.0, seats: 5,
        drivetrain: "AWD", engine: "1.5L Turbo 4-Cyl", range: "N/A",
        emoji: "🚙", color: "#1b2838"
    },
    {
        id: 9, make: "Ford", model: "F-150", year: 2025, price: 36965,
        type: "truck", hp: 400, mpg: 24, zeroToSixty: 5.6, seats: 6,
        drivetrain: "4WD", engine: "3.5L V6 Turbo", range: "N/A",
        emoji: "🛻", color: "#2e2e1a"
    },
    {
        id: 10, make: "RAM", model: "1500", year: 2025, price: 39590,
        type: "truck", hp: 395, mpg: 22, zeroToSixty: 6.3, seats: 6,
        drivetrain: "4WD", engine: "5.7L V8 HEMI", range: "N/A",
        emoji: "🛻", color: "#2e1a1a"
    },
    {
        id: 11, make: "BMW", model: "3 Series", year: 2025, price: 44450,
        type: "sedan", hp: 255, mpg: 30, zeroToSixty: 5.6, seats: 5,
        drivetrain: "RWD", engine: "2.0L Turbo 4-Cyl", range: "N/A",
        emoji: "🚗", color: "#1a1a2e"
    },
    {
        id: 12, make: "Mercedes", model: "C-Class", year: 2025, price: 46150,
        type: "sedan", hp: 255, mpg: 29, zeroToSixty: 5.9, seats: 5,
        drivetrain: "RWD", engine: "2.0L Turbo 4-Cyl", range: "N/A",
        emoji: "🚗", color: "#1a2e2e"
    },
    {
        id: 13, make: "Porsche", model: "911", year: 2025, price: 116550,
        type: "sports", hp: 394, mpg: 22, zeroToSixty: 4.0, seats: 4,
        drivetrain: "RWD", engine: "3.0L Twin-Turbo H6", range: "N/A",
        emoji: "🏎️", color: "#2e2e1a"
    },
    {
        id: 14, make: "Toyota", model: "Prius", year: 2025, price: 29345,
        type: "hybrid", hp: 196, mpg: 57, zeroToSixty: 7.0, seats: 5,
        drivetrain: "FWD", engine: "2.0L Hybrid", range: "N/A",
        emoji: "🌿", color: "#1b2e1b"
    },
    {
        id: 15, make: "Hyundai", model: "Ioniq 5", year: 2025, price: 43875,
        type: "electric", hp: 225, mpg: 114, zeroToSixty: 7.4, seats: 5,
        drivetrain: "RWD", engine: "Electric Motor", range: "303 mi",
        emoji: "⚡", color: "#16213e"
    },
    {
        id: 16, make: "Jeep", model: "Wrangler", year: 2025, price: 33690,
        type: "suv", hp: 285, mpg: 22, zeroToSixty: 7.5, seats: 5,
        drivetrain: "4WD", engine: "3.6L V6", range: "N/A",
        emoji: "🚙", color: "#2e2e1a"
    },
    {
        id: 17, make: "Mazda", model: "MX-5 Miata", year: 2025, price: 28985,
        type: "sports", hp: 181, mpg: 30, zeroToSixty: 5.8, seats: 2,
        drivetrain: "RWD", engine: "2.0L 4-Cyl", range: "N/A",
        emoji: "🏎️", color: "#2e1a1a"
    },
    {
        id: 18, make: "Rivian", model: "R1T", year: 2025, price: 69900,
        type: "truck", hp: 835, mpg: 70, zeroToSixty: 3.0, seats: 5,
        drivetrain: "AWD", engine: "Quad Motor", range: "328 mi",
        emoji: "🛻", color: "#1b2e1b"
    },
    {
        id: 19, make: "Honda", model: "Accord Hybrid", year: 2025, price: 33990,
        type: "hybrid", hp: 204, mpg: 48, zeroToSixty: 7.2, seats: 5,
        drivetrain: "FWD", engine: "2.0L Hybrid", range: "N/A",
        emoji: "🌿", color: "#1a2e2e"
    },
    {
        id: 20, make: "Chevrolet", model: "Equinox EV", year: 2025, price: 34995,
        type: "electric", hp: 215, mpg: 119, zeroToSixty: 6.0, seats: 5,
        drivetrain: "FWD", engine: "Electric Motor", range: "315 mi",
        emoji: "⚡", color: "#1a1a2e"
    }
];

// ========== App State ==========
const state = {
    compareList: JSON.parse(localStorage.getItem("compareList") || "[]"),
    favorites: JSON.parse(localStorage.getItem("favorites") || "[]"),
    activeTab: "browse"
};

function saveState() {
    localStorage.setItem("compareList", JSON.stringify(state.compareList));
    localStorage.setItem("favorites", JSON.stringify(state.favorites));
}

// ========== Utility ==========
function formatPrice(price) {
    return "$" + price.toLocaleString();
}

function getCarById(id) {
    return CARS.find(c => c.id === id);
}

function isInCompare(id) {
    return state.compareList.includes(id);
}

function isFavorite(id) {
    return state.favorites.includes(id);
}

function toggleCompare(id, e) {
    if (e) e.stopPropagation();
    const idx = state.compareList.indexOf(id);
    if (idx > -1) {
        state.compareList.splice(idx, 1);
    } else {
        if (state.compareList.length >= 4) {
            showToast("Max 4 cars to compare");
            return;
        }
        state.compareList.push(id);
    }
    saveState();
    updateUI();
}

function toggleFavorite(id, e) {
    if (e) e.stopPropagation();
    const idx = state.favorites.indexOf(id);
    if (idx > -1) {
        state.favorites.splice(idx, 1);
    } else {
        state.favorites.push(id);
    }
    saveState();
    updateUI();
}

// ========== Toast ==========
function showToast(msg) {
    let toast = document.getElementById("toast");
    if (!toast) {
        toast = document.createElement("div");
        toast.id = "toast";
        toast.style.cssText = `
            position: fixed; bottom: 80px; left: 50%; transform: translateX(-50%);
            background: #333; color: white; padding: 10px 20px; border-radius: 10px;
            font-size: 14px; font-weight: 600; z-index: 200; opacity: 0;
            transition: opacity 0.2s; pointer-events: none;
            font-family: -apple-system, sans-serif;
        `;
        document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.style.opacity = "1";
    setTimeout(() => { toast.style.opacity = "0"; }, 1800);
}

// ========== Render Car Card ==========
function renderCarCard(car) {
    const div = document.createElement("div");
    div.className = "car-card";
    div.onclick = () => openModal(car.id);

    const isElectric = car.type === "electric";
    const mpgLabel = isElectric ? "MPGe" : (car.type === "hybrid" ? "MPG" : "MPG");

    div.innerHTML = `
        <div class="car-card-image" style="background: linear-gradient(135deg, ${car.color}, #0a0a0a)">
            <span>${car.emoji}</span>
            <span class="type-badge">${car.type}</span>
        </div>
        <div class="car-card-body">
            <div class="car-card-title">${car.make} ${car.model}</div>
            <div class="car-card-year">${car.year}</div>
            <div class="car-card-specs">
                <span class="spec-pill"><span class="val">${car.hp}</span> hp</span>
                <span class="spec-pill"><span class="val">${car.mpg}</span> ${mpgLabel}</span>
                <span class="spec-pill"><span class="val">${car.zeroToSixty}s</span> 0-60</span>
            </div>
            <div class="car-card-footer">
                <span class="car-price">${formatPrice(car.price)}</span>
                <div class="car-actions">
                    <button class="btn-icon ${isFavorite(car.id) ? 'active-fav' : ''}"
                            onclick="toggleFavorite(${car.id}, event)"
                            aria-label="Favorite">
                        ${isFavorite(car.id) ? '❤️' : '🤍'}
                    </button>
                    <button class="btn-icon ${isInCompare(car.id) ? 'active-compare' : ''}"
                            onclick="toggleCompare(${car.id}, event)"
                            aria-label="Compare">
                        ${isInCompare(car.id) ? '✓' : '+'}
                    </button>
                </div>
            </div>
        </div>
    `;
    return div;
}

// ========== Browse Tab ==========
function renderBrowse() {
    const list = document.getElementById("car-list");
    const search = document.getElementById("search-input").value.toLowerCase();
    const typeFilter = document.getElementById("filter-type").value;
    const sort = document.getElementById("filter-sort").value;

    let cars = CARS.filter(car => {
        const matchSearch = `${car.make} ${car.model} ${car.year}`.toLowerCase().includes(search);
        const matchType = typeFilter === "all" || car.type === typeFilter;
        return matchSearch && matchType;
    });

    switch (sort) {
        case "price-low": cars.sort((a, b) => a.price - b.price); break;
        case "price-high": cars.sort((a, b) => b.price - a.price); break;
        case "mpg": cars.sort((a, b) => b.mpg - a.mpg); break;
        case "hp": cars.sort((a, b) => b.hp - a.hp); break;
        default: cars.sort((a, b) => `${a.make} ${a.model}`.localeCompare(`${b.make} ${b.model}`));
    }

    list.innerHTML = "";
    if (cars.length === 0) {
        list.innerHTML = '<div class="no-results">No cars found</div>';
        return;
    }
    cars.forEach(car => list.appendChild(renderCarCard(car)));
}

// ========== Compare Tab ==========
function renderCompare() {
    const empty = document.getElementById("compare-empty");
    const view = document.getElementById("compare-view");
    const badge = document.getElementById("compare-count");

    if (state.compareList.length === 0) {
        empty.style.display = "block";
        view.style.display = "none";
        badge.style.display = "none";
        return;
    }

    empty.style.display = "none";
    view.style.display = "block";
    badge.style.display = "inline-flex";
    badge.textContent = state.compareList.length;

    const cars = state.compareList.map(getCarById).filter(Boolean);

    // Header chips
    const headerRow = document.getElementById("compare-header-row");
    headerRow.innerHTML = cars.map(car => `
        <div class="compare-car-chip">
            <span class="chip-emoji">${car.emoji}</span>
            <div class="chip-info">
                <div class="chip-name">${car.make} ${car.model}</div>
                <div class="chip-price">${formatPrice(car.price)}</div>
            </div>
            <button class="chip-remove" onclick="toggleCompare(${car.id})">✕</button>
        </div>
    `).join("");

    // Comparison rows
    const specs = [
        { label: "Price", key: "price", format: v => formatPrice(v), best: "low" },
        { label: "Horsepower", key: "hp", format: v => v + " hp", best: "high" },
        { label: "MPG", key: "mpg", format: v => v + (cars.find(c => c.type === "electric") ? " MPGe" : ""), best: "high" },
        { label: "0-60 mph", key: "zeroToSixty", format: v => v + "s", best: "low" },
        { label: "Seats", key: "seats", format: v => v, best: null },
        { label: "Drivetrain", key: "drivetrain", format: v => v, best: null },
        { label: "Engine", key: "engine", format: v => v, best: null },
        { label: "Type", key: "type", format: v => v.charAt(0).toUpperCase() + v.slice(1), best: null }
    ];

    const table = document.getElementById("compare-table");
    table.innerHTML = specs.map(spec => {
        const values = cars.map(c => c[spec.key]);
        let bestVal = null;
        if (spec.best === "high") bestVal = Math.max(...values);
        if (spec.best === "low") bestVal = Math.min(...values);

        const cells = cars.map(car => {
            const val = car[spec.key];
            const isBest = bestVal !== null && val === bestVal && cars.length > 1;
            return `<div class="compare-cell">${isBest ? '<span class="best">' : ''}${spec.format(val)}${isBest ? '</span>' : ''}</div>`;
        }).join("");

        return `
            <div class="compare-row">
                <div class="compare-cell label-cell">${spec.label}</div>
                ${cells}
            </div>
        `;
    }).join("");
}

// ========== Favorites Tab ==========
function renderFavorites() {
    const empty = document.getElementById("favorites-empty");
    const list = document.getElementById("favorites-list");

    if (state.favorites.length === 0) {
        empty.style.display = "block";
        list.innerHTML = "";
        return;
    }

    empty.style.display = "none";
    list.innerHTML = "";
    state.favorites.forEach(id => {
        const car = getCarById(id);
        if (car) list.appendChild(renderCarCard(car));
    });
}

// ========== Modal ==========
function openModal(id) {
    const car = getCarById(id);
    if (!car) return;

    const modal = document.getElementById("car-modal");
    const image = document.getElementById("modal-image");
    const body = document.getElementById("modal-body");

    image.style.background = `linear-gradient(135deg, ${car.color}, #0a0a0a)`;
    image.innerHTML = `<span>${car.emoji}</span>`;

    const isElectric = car.type === "electric";

    body.innerHTML = `
        <div class="modal-title">${car.make} ${car.model}</div>
        <div class="modal-year">${car.year} · ${car.type.charAt(0).toUpperCase() + car.type.slice(1)}</div>
        <div class="modal-price">${formatPrice(car.price)}</div>

        <div class="modal-section-title">Performance</div>
        <div class="modal-specs-grid">
            <div class="modal-spec">
                <div class="modal-spec-label">Horsepower</div>
                <div class="modal-spec-value">${car.hp} hp</div>
            </div>
            <div class="modal-spec">
                <div class="modal-spec-label">0-60 mph</div>
                <div class="modal-spec-value">${car.zeroToSixty}s</div>
            </div>
            <div class="modal-spec">
                <div class="modal-spec-label">${isElectric ? 'MPGe' : 'MPG'}</div>
                <div class="modal-spec-value">${car.mpg}</div>
            </div>
            <div class="modal-spec">
                <div class="modal-spec-label">Drivetrain</div>
                <div class="modal-spec-value">${car.drivetrain}</div>
            </div>
        </div>

        <div class="modal-section-title">Details</div>
        <div class="modal-specs-grid">
            <div class="modal-spec">
                <div class="modal-spec-label">Engine</div>
                <div class="modal-spec-value" style="font-size:14px">${car.engine}</div>
            </div>
            <div class="modal-spec">
                <div class="modal-spec-label">Seats</div>
                <div class="modal-spec-value">${car.seats}</div>
            </div>
            ${isElectric || car.range !== "N/A" ? `
            <div class="modal-spec">
                <div class="modal-spec-label">Range</div>
                <div class="modal-spec-value">${car.range}</div>
            </div>` : ''}
        </div>

        <div class="modal-actions">
            <button class="modal-btn btn-compare ${isInCompare(car.id) ? 'added' : ''}"
                    onclick="toggleCompare(${car.id}); openModal(${car.id});">
                ${isInCompare(car.id) ? '✓ In Compare' : '+ Compare'}
            </button>
            <button class="modal-btn btn-fav ${isFavorite(car.id) ? 'favorited' : ''}"
                    onclick="toggleFavorite(${car.id}); openModal(${car.id});">
                ${isFavorite(car.id) ? '❤️ Favorited' : '🤍 Favorite'}
            </button>
        </div>
    `;

    modal.classList.add("open");
}

function closeModal() {
    document.getElementById("car-modal").classList.remove("open");
}

// ========== Tabs ==========
function switchTab(tab) {
    state.activeTab = tab;
    document.querySelectorAll(".tab").forEach(t => t.classList.toggle("active", t.dataset.tab === tab));
    document.querySelectorAll(".tab-content").forEach(t => t.classList.toggle("active", t.id === tab + "-tab"));
    updateUI();
}

// ========== Global Update ==========
function updateUI() {
    renderBrowse();
    renderCompare();
    renderFavorites();
}

// ========== Init ==========
document.addEventListener("DOMContentLoaded", () => {
    // Tab switching
    document.querySelectorAll(".tab").forEach(tab => {
        tab.addEventListener("click", () => switchTab(tab.dataset.tab));
    });

    // Search & filter
    document.getElementById("search-input").addEventListener("input", renderBrowse);
    document.getElementById("filter-type").addEventListener("change", renderBrowse);
    document.getElementById("filter-sort").addEventListener("change", renderBrowse);

    // Modal close
    document.getElementById("modal-close").addEventListener("click", closeModal);
    document.getElementById("car-modal").addEventListener("click", (e) => {
        if (e.target === e.currentTarget) closeModal();
    });

    updateUI();
});
