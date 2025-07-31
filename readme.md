<!-- README.md -->
# Joseph Chidubem Okafor Portfolio

![Portfolio Preview](images/og-image.jpg)

Welcome to the personal portfolio of **Joseph Chidubem Okafor**, a passionate **Full Stack Software Engineer** and **Cloud Architect** based in Nigeria. This portfolio showcases my expertise in building scalable web applications, cloud infrastructure, and innovative AI solutions, crafted with a sleek, luxurious design using only **HTML** and **CSS**.

Built with a focus on simplicity, accessibility, and responsiveness, this project highlights my skills, projects, education, certifications, and thought leadership in software engineering and cloud architecture. Explore my work, connect with me, or collaborate on exciting projects!

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [File Structure](#file-structure)
- [Customization](#customization)
- [Form Submission](#form-submission)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices, ensuring a seamless experience across all screen sizes.
- **CSS-Only Theme Toggle**: Switch between dark and light themes using a checkbox-based solution, no JavaScript required.
- **Accessible Navigation**: Mobile-friendly navigation with a CSS-only hamburger menu and ARIA labels for screen reader support.
- **Rich Content Sections**:
  - **About**: A personal introduction highlighting my background and passion for technology.
  - **Education**: Academic credentials and professional training from prestigious programs.
  - **Skills**: A grid showcasing key technical skills like Python, Django, and AWS.
  - **Certifications**: Industry-recognized certifications, including AWS Certified Solutions Architect.
  - **Experience**: Professional roles with measurable impacts, such as improving user experience by 15%.
  - **Projects**: Detailed project showcases with images, tech badges, and impact metrics (e.g., reduced load time by 20%).
  - **Blog & Articles**: Insights into scalable web development and Generative AI, with full articles accessible via "Read More" links.
  - **Testimonials**: Endorsements from colleagues and industry professionals.
  - **Contact**: A form for direct outreach (requires backend integration).
  - **CTA Banner**: Encourages collaboration and resume downloads for hiring opportunities.
- **SEO Optimized**: Includes meta tags and Open Graph properties for better search engine visibility and social sharing.
- **Visual Polish**: Luxurious bronze and charcoal aesthetic with smooth animations (fade-in, slide-in, pulse) and a favicon for branding.
- **Accessibility**: ARIA labels and focus styles ensure usability for all users, including those using assistive technologies.

## Technologies Used
- **HTML5**: Semantic structure for content organization and accessibility.
- **CSS3**: Advanced styling with CSS variables, flexbox, grid, and animations for a modern, responsive design.
- **Font Awesome**: Icons for navigation and social links.
- **Google Fonts**: 'Inter' for body text and 'Orbitron' for headings, creating a futuristic yet readable look.
- **No JavaScript**: Pure HTML/CSS implementation for lightweight performance.

## Setup Instructions
To run this portfolio locally or deploy it, follow these steps:

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge) for testing.
- A code editor (e.g., VS Code) for customization.
- A web server (e.g., Live Server extension, GitHub Pages, or Netlify) for hosting.

### Steps
1. **Clone or Download the Repository**
   ```bash
   git clone https://github.com/your-username/joseph-okafor-portfolio.git

    Or download the ZIP file and extract it.Ensure Required Files
Verify the following files are in place:index.html: Main portfolio file.
css/everystyle.css: Custom styles.
css/all.min.css: Font Awesome icons (download from Font Awesome).
images/8.avif: Hero background image.
images/airbnb-clone.jpg, images/ecommerce.jpg, images/chatbot.jpg: Project placeholder images.
images/favicon.ico: Favicon (create a stylized "J" icon).
images/og-image.jpg: Open Graph image for social sharing.
resume/lastOneResume.pdf: Resume file for download.

Run LocallyOpen index.html in a browser for a quick preview.
For a better experience, use a local server:VS Code Live Server: Install the Live Server extension and right-click index.html to select "Open with Live Server."
Python Simple Server: Navigate to the project directory and run:bash

python -m http.server 8000

Then visit http://localhost:8000.

Deploy OnlineGitHub Pages: Push the repository to GitHub, enable GitHub Pages in the repository settings, and set the source to the main branch.
Netlify: Drag and drop the project folder into Netlify’s dashboard or connect the GitHub repository for automatic deployment.
Vercel: Import the repository into Vercel and deploy with default settings.

Test ResponsivenessUse browser developer tools to test on various screen sizes (mobile, tablet, desktop).
Verify the theme toggle, mobile navigation, and blog article links.
Test accessibility with a screen reader to ensure ARIA labels work.

File Structure

dubic-portfolio/
├── css/
│   ├── all.min.css         # Font Awesome icons
│   └── everystyle.css      # Custom CSS styles
├── images/
│   ├── 8.avif             # Hero background
│   ├── airbnb-clone.jpg   # Project image
│   ├── ecommerce.jpg      # Project image
│   ├── chatbot.jpg        # Project image
│   ├── favicon.ico        # Favicon
│   └── og-image.jpg       # Open Graph image
├── resume/
│   └── lastOneResume.pdf  # Resume file
├── index.html             # Main portfolio file
├── README.md              # Project documentation
└── LICENSE                # MIT License file

CustomizationTo personalize the portfolio, update the following:Content:Replace placeholder links (href="#") in Projects, Blog, and Social Icons with real URLs (e.g., GitHub, live demos, LinkedIn, Twitter/X).
Update Education, Certifications, and Articles with accurate dates and details.
Add specific metrics or impacts in Projects (e.g., "Reduced load time by 20%") and Experience.
Replace the avatar image (https://i.pravatar.cc/120) with your own in the .avatar CSS rule.

Images:Add real project and article images to images/ and update project-image or article-image background URLs in index.html.
Create a custom favicon (images/favicon.ico) and Open Graph image (images/og-image.jpg).

Styling:Modify CSS variables in :root (e.g., --accent, --primary) in everystyle.css to change the color scheme.
Adjust font sizes, padding, or animations in everystyle.css for a different feel.

Form SubmissionThe contact form requires a backend or third-party service for functionality, as it uses only HTML/CSS. To enable form submissions:Use a Third-Party Service (e.g., Formspree):Sign up at Formspree to get a form endpoint.
Update the <form> tag in the Contact section:html

<form action="https://formspree.io/f/your-form-id" method="POST">

Custom Backend:If hosting on a server, implement a backend (e.g., Node.js, Django) to handle form submissions.
Update the form’s action attribute to point to your backend endpoint.

Test the form to ensure submissions work correctly.ContributingContributions are welcome to enhance this portfolio! To contribute:Fork the Repository: Click "Fork" on GitHub to create your own copy.
Create a Branch:bash

git checkout -b feature/your-feature-name

Make Changes: Add new features, fix bugs, or improve styles while maintaining the HTML/CSS-only constraint.
Commit Changes:bash

git commit -m "Add your feature description"

Push to GitHub:bash

git push origin feature/your-feature-name

Create a Pull Request: Submit a PR with a clear description of your changes.

Please ensure your contributions align with the portfolio’s aesthetic and accessibility standards.LicenseThis project is licensed under the MIT License. You are free to use, modify, and distribute the code, provided you include the license and copyright notice. See LICENSE for details.ContactReach out to me for collaboration, opportunities, or feedback:Email: your-email@example.com (mailto:your-email@example.com)
LinkedIn: linkedin.com/in/your-profile
GitHub: github.com/your-username
Twitter/X: twitter.com/your-handle

You can also use the Contact Form (#contact) on the portfolio to send a message directly.Thank you for exploring my portfolio! Let’s build something amazing together. 

