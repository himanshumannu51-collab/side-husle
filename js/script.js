// Hustles Data
const hustles = [
    {
        title: "AI Blog Writer",
        category: "content",
        description: "Create blog posts using Jasper or Copy.ai.",
        earnings: "$200–$500/month",
        time: "2–3 hours",
        link: "blog-writer.html"
    },
    {
        title: "AI Video Creator",
        category: "content",
        description: "Turn blogs into videos with Pictory or Synthesia.",
        earnings: "$250+/month",
        time: "3–4 hours",
        link: "video-creator.html"
    },
    {
        title: "AI Voiceover Service",
        category: "business",
        description: "Create voiceovers for videos using Murf.ai.",
        earnings: "$75–$200/project",
        time: "1–2 hours",
        link: "voiceover.html"
    },
    // Add more hustles here
];

// Render Hustles
function renderHustles(hustlesToRender) {
    const grid = document.getElementById('hustlesGrid');
    grid.innerHTML = ""; // clear previous

    hustlesToRender.forEach(hustle => {
        const card = document.createElement('div');
        card.className = 'hustle-card';
        card.dataset.category = hustle.category;
        card.style = "background:#F3F4F6; padding:20px; border-radius:12px; width:300px; box-shadow:0 4px 12px rgba(0,0,0,0.1); margin:10px;";

        card.innerHTML = `
            <h3>${hustle.title}</h3>
            <p>${hustle.description}</p>
            <p><strong>Earnings:</strong> ${hustle.earnings}</p>
            <p><strong>Time to start:</strong> ${hustle.time}</p>
            <a href="${hustle.link}" class="btn btn-primary">See How →</a>
        `;
        grid.appendChild(card);
    });

    updateResultsCount();
}

// Filter Functions (keep your original)
function filterCategory(category) {
    const filtered = category === 'all' ? hustles : hustles.filter(h => h.category === category);
    renderHustles(filtered);
}

// Search Function
function filterHustles() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const filtered = hustles.filter(h => 
        h.title.toLowerCase().includes(input) || 
        h.description.toLowerCase().includes(input)
    );
    renderHustles(filtered);
}

// Update Results Count
function updateResultsCount() {
    const grid = document.getElementById('hustlesGrid');
    const count = grid.children.length;
    const countElement = document.getElementById('resultsCount');
    if (countElement) countElement.textContent = count;
}

// Initial Render
renderHustles(hustles);
