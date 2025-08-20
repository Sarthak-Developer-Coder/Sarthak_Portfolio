import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'cyber': ['Orbitron', 'monospace'],
				'code': ['Fira Code', 'monospace'],
				'body': ['Inter', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: {
					DEFAULT: 'hsl(var(--background))',
					secondary: 'hsl(var(--background-secondary))',
					tertiary: 'hsl(var(--background-tertiary))',
				},
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					glow: 'hsl(var(--primary-glow))',
					muted: 'hsl(var(--primary-muted))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
					glow: 'hsl(var(--secondary-glow))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
					glow: 'hsl(var(--accent-glow))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
					hover: 'hsl(var(--card-hover))',
				},
				neon: {
					cyan: 'hsl(var(--neon-cyan))',
					blue: 'hsl(var(--neon-blue))',
					green: 'hsl(var(--neon-green))',
					purple: 'hsl(var(--neon-purple))',
					pink: 'hsl(var(--neon-pink))',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'glow': 'glow 2s ease-in-out infinite alternate',
				'shimmer': 'shimmer 2s infinite',
				'typing': 'typing 3s steps(40, end)',
				'blink-caret': 'blink-caret 0.75s step-end infinite',
				'glitch': 'glitch 2s infinite',
				'float': 'float 3s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'rotate': 'rotate 20s linear infinite',
				'robot-hover': 'robot-hover 4s ease-in-out infinite',
				'robot-eyes': 'robot-eyes 3s ease-in-out infinite',
				'circuit-flow': 'circuit-flow 2s ease-in-out infinite',
				'hologram': 'hologram 2s ease-in-out infinite',
				'data-stream': 'data-stream 3s linear infinite',
				'particle-float': 'particle-float 8s linear infinite',
				'morphing-border': 'morphing-border 6s ease-in-out infinite',
				'quantum-spin': 'quantum-spin 10s linear infinite',
				'neural-pulse': 'neural-pulse 3s ease-in-out infinite',
			},
			backgroundImage: {
				'cyber-gradient': 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary)))',
				'matrix-gradient': 'linear-gradient(180deg, hsl(var(--background)), hsl(var(--background-secondary)))',
				'glow-gradient': 'radial-gradient(circle, hsl(var(--primary) / 0.2), transparent 70%)',
			},
			boxShadow: {
				'glow': '0 0 20px hsl(var(--primary) / 0.5)',
				'glow-lg': '0 0 40px hsl(var(--primary) / 0.6)',
				'neon': '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
