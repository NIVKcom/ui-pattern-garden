
'use client';
import React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Youtube, Square } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

interface FooterLink {
	title: string;
	href: string;
	icon?: React.ComponentType<{ className?: string }>;
	isSection?: boolean;
	isExternal?: boolean;
}

interface FooterSection {
	label: string;
	links: FooterLink[];
}

const footerLinks: FooterSection[] = [
	{
		label: 'Product',
		links: [
			{ title: 'Features', href: '#what-we-do', isSection: true },
			{ title: 'Pricing', href: '/talk' },
			{ title: 'Testimonials', href: '#testimonials', isSection: true },
			{ title: 'Our Work', href: '#our-work', isSection: true },
		],
	},
	{
		label: 'Company',
		links: [
			{ title: 'FAQs', href: '/faqs' },
			{ title: 'About Us', href: '/about' },
			{ title: 'Privacy Policy', href: '/privacy' },
			{ title: 'Terms of Services', href: '/terms' },
		],
	},
	{
		label: 'Resources',
		links: [
			{ title: 'Blog', href: '/blog' },
			{ title: 'Changelog', href: '/changelog' },
			{ title: 'Brand', href: '/brand' },
			{ title: 'Help', href: '/help' },
		],
	},
	{
		label: 'Social Links',
		links: [
			{ title: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61577632031358', icon: Facebook, isExternal: true },
			{ title: 'Instagram', href: 'https://www.instagram.com/nivkcom/', icon: Instagram, isExternal: true },
			{ title: 'Youtube', href: 'https://www.youtube.com/@nivkcom', icon: Youtube, isExternal: true },
			{ title: 'Twitter', href: 'https://x.com/NIVKdesigns', icon: Twitter, isExternal: true },
		],
	},
];

const Footer = () => {
	const location = useLocation();
	const navigate = useNavigate();

	const handleLinkClick = (link: FooterLink) => {
		if (link.isExternal) {
			window.open(link.href, '_blank');
			return;
		}

		if (link.isSection) {
			// If we're not on the homepage, navigate there first
			if (location.pathname !== '/') {
				navigate('/');
				setTimeout(() => {
					scrollToSection(link.href);
				}, 100);
			} else {
				scrollToSection(link.href);
			}
		}
		// For regular routes, Link component will handle navigation
	};

	const scrollToSection = (href: string) => {
		const sectionId = href.replace('#', '');
		const element = document.getElementById(sectionId);
		if (element) {
			const headerOffset = 100;
			const elementPosition = element.getBoundingClientRect().top;
			const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

			window.scrollTo({
				top: offsetPosition,
				behavior: 'smooth'
			});
		}
	};

	return (
		<footer className="relative w-full flex flex-col items-center justify-center backdrop-blur-xl bg-gradient-to-br from-[#FFA200]/70 via-[#FF80C4]/50 to-[#B388FF]/60 bg-white/10 border-t border-white/10 shadow-inner shadow-[inset_0_0_30px_rgba(255,255,255,0.05)] px-8 py-16 md:px-20 md:py-24">
			<div className="w-full max-w-6xl mx-auto flex flex-col items-center justify-center">
			{/* Links Section */}
			<div className="w-full grid grid-cols-2 gap-8 md:grid-cols-4 mb-24">
				{footerLinks.map((section, index) => (
					<AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
						<div className="mb-10 md:mb-0">
							<h3 className="text-white text-base md:text-lg font-semibold tracking-tight">{section.label}</h3>
							<ul className="text-white/80 mt-4 space-y-2 text-sm md:text-base font-medium">
								{section.links.map((link) => (
									<li key={link.title}>
										{link.isExternal || link.isSection ? (
											<button
												onClick={() => handleLinkClick(link)}
												className="hover:text-white hover:font-semibold inline-flex items-center transition-all duration-300 text-left"
											>
												{link.icon && <link.icon className="me-1 size-4" />}
												{link.title}
											</button>
										) : (
											<Link
												to={link.href}
												className="hover:text-white hover:font-semibold inline-flex items-center transition-all duration-300"
											>
												{link.icon && <link.icon className="me-1 size-4" />}
												{link.title}
											</Link>
										)}
									</li>
								))}
							</ul>
						</div>
					</AnimatedContainer>
				))}
			</div>

			{/* Centered Logo and Copyright */}
			<AnimatedContainer className="flex flex-col items-center space-y-4" delay={0.5}>
				<img 
					src="/lovable-uploads/718d133e-2817-4ea0-9fca-62b9acb14406.png" 
					alt="NIVK Logo" 
					className="h-16 w-auto"
				/>
				<p className="text-white/70 text-xs md:text-sm font-medium text-center">
					© 2025 NIVK - Mobile App Design Agency. All rights reserved.
				</p>
			</AnimatedContainer>
			</div>
		</footer>
	);
};

type ViewAnimationProps = {
	delay?: number;
	className?: ComponentProps<typeof motion.div>['className'];
	children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
	const shouldReduceMotion = useReducedMotion();

	if (shouldReduceMotion) {
		return children;
	}

	return (
		<motion.div
			initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
			whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={{ delay, duration: 0.8 }}
			className={className}
		>
			{children}
		</motion.div>
	);
}

export default Footer;
