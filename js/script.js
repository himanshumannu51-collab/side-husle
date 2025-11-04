// Hustles Data (start with first 5 examples)
const hustles = [
    {
        title: "AI Blog Writer",
        category: "content",
        description: "Create blog posts using Jasper or Copy.ai.",
        earnings: "$200–$500/month",
        time: "2–3 hours",
        link: "#"
    },
    {
        title: "AI Video Creator",
        category: "content",
        description: "Turn blogs into videos with Pictory or Synthesia.",
        earnings: "$250+/month",
        time: "3–4 hours",
        link: "#"
    },
    {
        title: "AI Voiceover Service",
        category: "business",
        description: "Create voiceovers for videos using Murf.ai.",
        earnings: "$75–$200/project",
        time: "1–2 hours",
        link: "#"
    },
    {
        title: "AI Logo Designer",
        category: "design",
        description: "Design logos using Looka or Canva AI.",
        earnings: "$50–$300/logo",
        time: "1–2 hours",
        link: "#"
    },
    {
        title: "AI Resume Builder",
        category: "education",
        description: "Help clients create professional resumes using AI tools.",
        earnings: "$25–$100/resume",
        time: "30–60 min",
        link: "#"
    }
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

// Initial render
renderHustles(hustles);

// Existing filters/search functions remain unchanged
