# Developer Portfolio - Guilherme Cardoso de Araujo

A sleek, dark-mode, single-page portfolio designed for Full-Stack Development and Cybersecurity professionals. Built with Bootstrap 5.3 and custom CSS.

## Features

* **Single-Page Architecture:**
* **Modern UI/UX:**
* **Animated Background:**
* **Micro-Interactions:**
* **Responsive Design:**

## Built With

* **HTML5**
* **CSS3** (Custom properties and keyframe animations)
* **[Bootstrap 5.3.8](https://getbootstrap.com/)** (CSS & JS Bundle)
* **[Bootstrap Icons](https://icons.getbootstrap.com/)** (Inline SVGs for maximum performance)

## Getting Started

This project requires no build tools or package managers. 

1. Clone the repository:
   ```bash
   git clone [https://github.com/guilhermecara/portfolio.git](https://github.com/guilhermecara/portfolio.git)

## Infrastructure & CI/CD Pipeline

This portfolio is not just statically hosted; it is actively deployed within a secure homelab environment utilizing a custom Continuous Deployment pipeline.

* **Containerization:** The application is packaged using Docker and served via a highly optimized Nginx Alpine image.
* **Automated Deployment:** A self-hosted GitHub Actions runner sits securely behind the local firewall. Pushes to the `main` branch trigger a pull-based deployment, rebuilding and swapping the Docker containers with zero downtime.

### Usage & Attribution

I designed this layout from scratch to be a clean, highly readable developer portfolio.

You are welcome to fork and use this layout for your own personal portfolio! However, as a condition of use, you must provide proper attribution.

If you use this template, please include a visible credit link in your footer or in your project's README.md pointing back to this original repository or my personal GitHub profile:

*Layout originally designed by [Guilherme Cardoso de Araujo](https://github.com/guilhermecara/portfolio-website).*

© 2026 Guilherme Cardoso de Araujo. All Rights Reserved.