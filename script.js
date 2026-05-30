// Nav scroll effect
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
	nav.classList.toggle('scrolled', window.scrollY > 20);
});

// Intersection Observer for scroll-triggered animations
const observer = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.style.opacity = '1';
				entry.target.style.transform = 'translateY(0)';
				observer.unobserve(entry.target);
			}
		});
	},
	{ threshold: 0.12 },
);

document
	.querySelectorAll(
		'.service-card, .testimonial-card, .walker-grid, .tracking-inner',
	)
	.forEach((el) => {
		el.style.opacity = '0';
		el.style.transform = 'translateY(28px)';
		el.style.transition =
			'opacity 0.6s cubic-bezier(.22,1,.36,1), transform 0.6s cubic-bezier(.22,1,.36,1)';
		observer.observe(el);
	});

// Mobile menu toggle
const mobileToggle = document.querySelector('.nav-mobile-toggle');

if (mobileToggle) {
	mobileToggle.addEventListener('click', (e) => {
		e.stopPropagation();
		nav.classList.toggle('mobile-open');
		console.log(
			'Menu toggled, mobile-open:',
			nav.classList.contains('mobile-open'),
		);
	});

	// Close menu when clicking on a link
	document.querySelectorAll('.nav-links a').forEach((link) => {
		link.addEventListener('click', () => {
			nav.classList.remove('mobile-open');
		});
	});

	// Close menu when clicking outside
	document.addEventListener('click', (e) => {
		if (!nav.contains(e.target)) {
			nav.classList.remove('mobile-open');
		}
	});
}

// Staggered service cards
document.querySelectorAll('.service-card').forEach((card, i) => {
	card.style.transitionDelay = `${i * 0.1}s`;
});
document.querySelectorAll('.testimonial-card').forEach((card, i) => {
	card.style.transitionDelay = `${i * 0.08}s`;
});
