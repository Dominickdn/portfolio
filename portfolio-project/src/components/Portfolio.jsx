import React from 'react';
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "1. The Tech Centre",
    imageSrc: "/the-tech-centre.png",
    altText: "TheTechCentre",
    description:
      "A clean and responsive 3-page website built with Next.js and styled using Tailwind CSS. It includes a Home, Services, and Contact page, with a fully functional form powered by EmailJS and protected by reCAPTCHA. The site is mobile-friendly, SEO-optimized, and designed with a focus on simplicity, accessibility, and performance.",
    techStack: "Next.js, React, Tailwind CSS, EmailJS, reCAPTCHA, Vercel",
    link: "https://www.thetechcentre.co.za",
    linkLabel: "Project hosted here"
  },
  {
    title: "2. NISI Storefront",
    imageSrc: "/NISI.jpg",
    altText: "Nisi",
    description:
      "A high-performance e-commerce website for NISI using Next.js, integrated with Shopify as the backend. Focused on SEO and optimization, ensuring fast load times and improved search engine visibility while providing a seamless, responsive experience across all devices.",
    techStack: "Next.js, React, Tailwind CSS, Shopify, Vercel, Figma",
    link: "https://commerce-main-sooty.vercel.app",
    linkLabel: "Project hosted here"
  },
  {
    title: "3. OCR Invoice Processor",
    imageSrc: "/invoiceProcessor.png",
    altText: "InvoiceProcessor",
    description:
      "A local, containerized invoice processing system built with Docker Compose. It allows users to upload invoice files through a simple Flask web interface, runs OCR with Tesseract to extract text, and parses key details (like vendor, amount, and invoice number) into a PostgreSQL database. Files are stored using a local MinIO S3 bucket, and services communicate via RabbitMQ, with processing status tracked in Redis.",
    techStack: "Python, Flask, Tesseract OCR, PostgreSQL, MinIO, RabbitMQ, Redis, Docker Compose",
    link: "https://github.com/Dominickdn/invoice_processor",
    linkLabel: "Code found here"
  }
];

function Portfolio() {
  
    return (
      <>
      <section className="flex flex-col items-center custom-font w-full">
        <div className="items-center max-w-4xl p-10">
          <h1 className="text-4xl text-inner-shadow py-2 font-semibold">Portfolio</h1>
        </div>

        <div className="flex justify-center lg:w-3/5 md:w-9/12 sm:w-8/12 p-4">
          <div className="flex flex-col border-pink-200 border-2 rounded-2xl w-full bg-stone-900">
            <div className="flex pt-10 px-5 font-semibold text-lg pb-5">
              <p>Projects</p>
            </div>

            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>
      </>
    
    )
  }
  
  export default Portfolio