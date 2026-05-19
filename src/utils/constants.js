import python from "../assets/tech/python.png";
import django from "../assets/tech/django.png";
import fastapi from "../assets/tech/fastapi.png"
import postgresql from "../assets/tech/postgresql.png";
import redis from "../assets/tech/redis.png";
import javascript from "../assets/tech/javascript.png";
import nodejs from "../assets/tech/nodejs.png";
import expressjs from "../assets/tech/expressjs.png";
import docker from "../assets/tech/docker.png";
import git from "../assets/tech/git.png";
import azure from "../assets/tech/azure.png";
import celery from "../assets/tech/celery.png";
import ws from "../assets/tech/websockets.svg";
import mqtt from "../assets/tech/mqtt.png";

import crosslynxus_logo from "../assets/company/crosslynxus_logo.png";
import coderoom from "../assets/projects/project-coderoom.png";

const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "experience",
        title: "Experience",
    },
    {
        id: "skills",
        title: "Skills",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const skills = [
    {
        name: "Python",
        icon: python,
    },
    {
        name: "Django",
        icon: django,
    },
    {
        name: "FastAPI",
        icon: fastapi,
    },
    {
        name: "PostgreSQL",
        icon: postgresql,
    },
    {
        name: "Redis",
        icon: redis,
    },
    {
        name: "Celery",
        icon: celery,
    },
    {
        name: "WebSockets",
        icon: ws,
    },
    {
        name: "MQTT",
        icon: mqtt,
    },
    {
        name: "Docker",
        icon: docker,
    },
    {
        name: "GIT",
        icon: git,
    },
    {
        name: "Azure",
        icon: azure,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "Express JS",
        icon: expressjs,
    },
];

const experiences = [
    {
        title: "Software Developer",
        company_name: "Crosslynx Technologies",
        icon: crosslynxus_logo,
        date: "Feb 2023 – Present",
        points: [
            "Designed scalable PostgreSQL data models for real-time IoT device management and built high-performance, secure RESTful APIs with Django & DRF to handle real-time device communication.",
            "Implemented JWT and OAuth2-based authentication with role-based access control, ensuring 100% compliance with security standards.",
            "Optimized asynchronous workflows using Celery and Redis, reducing API timeouts and failures by 40%.",
            "Deployed applications on AWS EC2/Azure VM and managed static/media files via Amazon S3/Azure Blob, resulting in a 30% boost in file delivery performance.",
            "Instrumented services with OpenTelemetry distributed tracing and Prometheus/Grafana dashboards for real-time observability, reducing MTTD by 50%.",
            "Containerized microservices with Docker and orchestrated deployments via Kubernetes (K8s), enabling zero-downtime rolling updates and horizontal auto-scaling.",
            "Architected event-driven modules using WebSockets and Kafka for real-time bidirectional communication, cutting notification latency by 60%.",
            "Built and deployed serverless functions on AWS Lambda and Azure Functions to handle burst workloads, reducing infrastructure costs by 25%.",
            "Integrated LLM Chatbot with Prompt Engineering and MCP (Model Context Protocol) to automate customer interactions and connect AI agents with internal APIs.",
            "Migrated critical JavaScript modules to TypeScript, improving type safety and reducing runtime errors by 35%.",
        ],
    },
];

const projects = [
    {
        name: "SUPPLY CHAIN MANAGEMENT SYSTEM",
        description: "Backend system for booking, tracking, and delivery across web and mobile applications. Integrated IoT devices through MQTT for secure communication, real-time tracking and navigation, and WebSocket-based live shipment tracking. Implemented Dialogflow-based conversational AI with Prompt Engineering to automate trip booking.",
        tags: ["django", "fastapi", "postgresql", "mqtt", "websockets", "docker"],
        image: coderoom,
        source_code_link: "https://github.com/anshsharma",
    },
    {
        name: "SMART METER DATA MANAGEMENT PLATFORM",
        description: "Integrated MDM and HES systems using SOAP-based services with Python, Tortoise ORM, and Oracle DB for large-scale meter data processing. Built FastAPI + PostgreSQL data pipelines for real-time storage, querying, and analysis of high-volume meter readings. Deployed Prometheus metrics and Grafana dashboards for monitoring pipeline throughput.",
        tags: ["fastapi", "postgresql", "python", "docker", "prometheus"],
        image: coderoom,
        source_code_link: "https://github.com/anshsharma",
    },
    {
        name: "AUTOMATED TEST PLATFORM",
        description: "Multi-tenant platform for streamlined test execution with dynamic reporting. Automated workflows using Azure DevOps REST APIs and Playwright; secured data handling with Microsoft OAuth 2.0 and PostgreSQL. Containerized with Docker and orchestrated on Azure AKS (Kubernetes).",
        tags: ["python", "django", "postgresql", "docker", "kubernetes", "azure"],
        image: coderoom,
        source_code_link: "https://github.com/anshsharma",
    },
];

export { navLinks, skills, experiences, projects };