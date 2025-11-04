/* ==========================================
   AI SIDE HUSTLES - MAIN JAVASCRIPT
   ========================================== */

// ==========================================
// AI SIDE HUSTLE DATA
// ==========================================
const hustles = [
    {
        id: 1,
        icon: '✍️',
        title: 'AI Content Writing',
        description: 'Write blog posts, articles, and social media content using AI tools like ChatGPT and Claude. Clients pay $50-200 per article.',
        tags: ['content', 'writing', 'beginner'],
        category: 'content',
        earnings: '$500-3,000/month',
        difficulty: 'Beginner'
    },
    {
        id: 2,
        icon: '🎨',
        title: 'AI Logo Design',
        description: 'Create professional logos using Midjourney, DALL-E, and Canva. Sell on Fiverr or to local businesses for $50-300 each.',
        tags: ['design', 'creative', 'beginner'],
        category: 'design',
        earnings: '$400-2,500/month',
        difficulty: 'Beginner'
    },
    {
        id: 3,
        icon: '🎥',
        title: 'AI Video Creation',
        description: 'Generate faceless YouTube videos using AI scripts, voiceovers, and editing tools. Monetize through ads and sponsorships.',
        tags: ['video', 'content', 'intermediate'],
        category: 'content',
        earnings: '$1,000-5,000/month',
        difficulty: 'Intermediate'
    },
    {
        id: 4,
        icon: '💻',
        title: 'AI Coding Assistant',
        description: 'Help businesses automate tasks with AI-generated code. No expert coding needed with tools like GitHub Copilot.',
        tags: ['coding', 'automation', 'intermediate'],
        category: 'coding',
        earnings: '$1,500-8,000/month',
        difficulty: 'Intermediate'
    },
    {
        id: 5,
        icon: '📱',
        title: 'AI Social Media Manager',
        description: 'Manage social media accounts using AI tools for content creation, scheduling, and analytics. $300-1,000 per client.',
        tags: ['social', 'marketing', 'beginner'],
        category: 'business',
        earnings: '$900-4,000/month',
        difficulty: 'Beginner'
    },
    {
        id: 6,
        icon: '🎓',
        title: 'AI Course Creator',
        description: 'Create and sell online courses about AI tools and skills. Use AI to help with content, scripts, and marketing.',
        tags: ['education', 'passive', 'intermediate'],
        category: 'education',
        earnings: '$500-10,000/month',
        difficulty: 'Intermediate'
    },
    {
        id: 7,
        icon: '🖼️',
        title: 'AI Art Prints',
        description: 'Generate unique art with Midjourney or Stable Diffusion and sell prints on Etsy, Redbubble, or your own site.',
        tags: ['design', 'creative', 'beginner'],
        category: 'design',
        earnings: '$300-2,000/month',
        difficulty: 'Beginner'
    },
    {
        id: 8,
        icon: '📝',
        title: 'AI Copywriting',
        description: 'Write sales pages, email campaigns, and ads using AI. High-paying skill with $100-500 per project.',
        tags: ['writing', 'marketing', 'intermediate'],
        category: 'content',
        earnings: '$1,000-5,000/month',
        difficulty: 'Intermediate'
    },
    {
        id: 9,
        icon: '🤖',
        title: 'AI Chatbot Builder',
        description: 'Build custom chatbots for businesses using no-code AI tools. Charge $500-2,000 per chatbot setup.',
        tags: ['automation', 'business', 'intermediate'],
        category: 'coding',
        earnings: '$1,500-6,000/month',
        difficulty: 'Intermediate'
    },
    {
        id: 10,
        icon: '🎵',
        title: 'AI Music Production',
        description: 'Create background music, jingles, and beats using AI music generators. Sell on AudioJungle or directly to creators.',
        tags: ['creative', 'audio', 'beginner'],
        category: 'content',
        earnings: '$400-3,000/month',
        difficulty: 'Beginner'
    },
    {
        id: 11,
        icon: '📊',
        title: 'AI Data Analysis',
        description: 'Help businesses analyze data and create reports using AI tools. No statistics degree required.',
        tags: ['analytics', 'business', 'intermediate'],
        category: 'business',
        earnings: '$2,000-8,000/month',
        difficulty: 'Intermediate'
    },
    {
        id: 12,
        icon: '🌐',
        title: 'AI Website Builder',
        description: 'Build websites for clients using AI-powered tools and templates. Quick turnaround, high profit margins.',
        tags: ['web', 'design', 'beginner'],
        category: 'coding',
        earnings: '$800-4,000/month',
        difficulty: 'Beginner'
    },
    {
        id: 13,
        icon: '🎤',
        title: 'AI Voiceover Services',
        description: 'Create professional voiceovers using AI voice tools. Perfect for YouTube videos, audiobooks, and commercials.',
        tags: ['audio', 'content', 'beginner'],
        category: 'content',
        earnings: '$600-3,500/month',
        difficulty: 'Beginner'
    },
    {
        id: 14,
        icon: '📚',
        title: 'AI eBook Writer',
        description: 'Write and publish eBooks on Amazon Kindle using AI assistance. Create multiple books in various niches.',
        tags: ['writing', 'passive', 'beginner'],
        category: 'content',
        earnings: '$300-5,000/month',
        difficulty: 'Beginner'
    },
    {
        id: 15,
        icon: '🎯',
        title: 'AI Ad Campaign Manager',
        description: 'Create and manage ad campaigns using AI tools for targeting and optimization. Help businesses get better ROI.',
        tags: ['marketing', 'business', 'advanced'],
        category: 'business',
        earnings: '$2,000-10,000/month',
        difficulty: 'Advanced'
    }
];

// ==========================================
// RENDER HUSTLES FUNCTION
// ==========================================
function renderHustles(hustlesToRender = hustles) {
    const grid = document.getElementById('hustlesGrid');
    
    if (!grid) return; // Exit if grid doesn't exist on this page
    
    grid.innerHTML = '';

    if (hustlesToRender.length === 0) {
        grid.innerHTML = '<p style="text-align: center; grid-column: 1/-1; color: #666; font-size: 1.2em;">No hustles found. Try a different search or filter.</p>';
        return;
    }

    hustlesToRender.forEach(hustle => {
        const card = document.createElement('div');
        card.className = 'hustle-card';
        card.setAttribute('data-category', hustle.category);
        card.setAttribute('data-id', hustle.id);
        
        card.innerHTML = `
            <div class="hustle-icon">${hustle.icon}</div>
            <div class="hustle-title">${hustle.title}</div>
            <div class="hustle-description">${hustle.description}</div>
            <div class="hustle-tags">
                ${hustle.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <div class="hustle-earnings">💵 ${hustle.earnings}</div>
            <div class="hustle-difficulty">${hustle.difficulty}</div>
        `;
        
        grid.appendChild(card);
    });
}

// ==========================================
// FILTER BY CATEGORY
// ==========================================
function filterCategory(category) {
    // Update active button
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // Find and activate the clicked button
    const activeBtn = Array.from(buttons).find(btn => 
        btn.textContent.toLowerCase().includes(category) || 
        (category === 'all' && btn.textContent === 'All')
    );
    
    if (activeBtn) {
        activeBtn.classList.add('active');
    }

    // Filter hustles
    if (category === 'all') {
        renderHustles(hustles);
    } else {
        const filtered = hustles.filter(h => h.category === category);
        renderHustles(filtered);
    }
}

// ==========================================
// SEARCH FUNCTIONALITY
// ==========================================
function filterHustles() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;
    
    const searchTerm = searchInput.value.toLowerCase();
    
    if (searchTerm === '') {
        renderHustles(hustles);
        return;
    }
    
    const filtered = hustles.filter(h => 
        h.title.toLowerCase().includes(searchTerm) ||
        h.description.toLowerCase().includes(searchTerm) ||
        h.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
        h.category.toLowerCase().includes(searchTerm)
    );
    
    renderHustles(filtered);
}

// ==========================================
// NEWSLETTER SUBSCRIPTION
// ==========================================
function subscribeNewsletter(e) {
    e.preventDefault();
    
    const form = e.target;
    const emailInput = form.querySelector('input[type="email"]');
    const email = emailInput.value;
    
    // Simple email validation
    if (!email || !email.includes('@')) {
        alert('Please enter a valid email address.');
        return;
    }
    
    // In production, you would send this to your email service
    // For now, we'll just show a success message
    alert(`🎉 Success! Check ${email} for your free AI side hustle guide.\n\nWelcome to the community!`);
    
    // Reset form
    form.reset();
}

// ==========================================
// CONTACT FORM SUBMISSION
// ==========================================
function submitContact(e) {
    e.preventDefault();
    
    const form = e.target;
    const name = form.querySelector('#name').value;
    const email = form.querySelector('#email').value;
    const message = form.querySelector('#message').value;
    
    // Validate inputs
    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }
    
    if (!email.includes('@')) {
        alert('Please enter a valid email address.');
        return;
    }
    
    // In production, send to backend/email service
    alert(`Thank you ${name}! We've received your message and will get back to you at ${email} soon.`);
    
    // Reset form
    form.reset();
}

// ==========================================
// SMOOTH SCROLLING FOR ANCHOR LINKS
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Don't prevent default for empty # links
            if (href === '#' || href === '#!') return;
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Initialize hustles grid if it exists
    renderHustles();
});

// ==========================================
// ANIMATE ON SCROLL (Optional Enhancement)
// ==========================================
function animateOnScroll() {
    const elements = document.querySelectorAll('.hustle-card, .stat-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    elements.forEach(el => observer.observe(el));
}

// Call animate on scroll when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', animateOnScroll);
} else {
    animateOnScroll();
}
