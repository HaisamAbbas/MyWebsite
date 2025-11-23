import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'AWS Support Agent',
    description: 'Full-stack AI support agent with FastAPI backend (LangChain + GROQ), Vue 3 frontend, real-time streaming, and vector-based knowledge retrieval.',
    longDescription: `
A production-ready, full-stack AWS Support Agent featuring modern web technologies, intelligent conversation handling, and real-time streaming capabilities. This enterprise-grade application combines a FastAPI backend with LangChain orchestration and a beautiful Vue 3 frontend, demonstrating professional full-stack development practices.

**Core Features & Architecture:**  
- **Intelligent Agent System**: Powered by GROQ LLM (Llama-3.1-8b-instant) with LangChain orchestration for context-aware AWS support queries.  
- **Vector-Based Knowledge Retrieval**: FAISS-powered vector search enabling accurate information retrieval from AWS documentation and knowledge bases.  
- **Real-Time Streaming**: WebSocket integration using Socket.IO for live response streaming, providing immediate user feedback during long-running queries.  
- **Secure Authentication**: API key-based authentication system with Bearer token protection for all agent operations and session management.  
- **Modern Frontend**: Vue 3 with Vite, Tailwind CSS, featuring responsive design, chat history persistence (localStorage), and toggle-able streaming modes.  
- **Production-Ready Backend**: FastAPI with auto-generated Swagger/ReDoc documentation, CORS configuration, and RESTful API design patterns.

**Technical Stack & Implementation:**  
- **Backend**: FastAPI, LangChain, GROQ API, FAISS vector store, Python Socket.IO, Pydantic validation  
- **Frontend**: Vue 3 Composition API, Vite build tooling, Tailwind CSS, Axios HTTP client, Socket.IO client  
- **Pipeline Architecture**: Modular step-based processing with materializers for data persistence and transformation  
- **Developer Experience**: Automated setup scripts (PowerShell), comprehensive documentation, Docker-ready configuration

**Enterprise Features & Best Practices:**  
- Protected API endpoints with authentication middleware and session validation  
- Automatic chat history persistence with localStorage integration  
- Toggle-able streaming vs. synchronous modes for different use cases  
- Source citation system showing documentation references  
- Comprehensive error handling and troubleshooting documentation  
- Clean component architecture with separation of concerns  
- Full testing suite and example client implementations

**Real-World Application Value:**  
- Demonstrates professional full-stack development with modern frameworks  
- Implements production-grade authentication and security patterns  
- Shows real-time communication patterns with WebSocket streaming  
- Provides reusable architecture for building AI-powered customer support systems  
- Ready for deployment on cloud platforms (Docker, Vercel, Netlify)
`,
    technologies: ['Python', 'FastAPI', 'LangChain', 'GROQ', 'FAISS', 'Vue 3', 'Vite', 'Tailwind CSS', 'Socket.IO', 'Docker'],
    imageUrl: `${import.meta.env.BASE_URL}images/projects/AWS2.jpg`,
    githubUrl: 'https://github.com/HaisamAbbas/AWS-Support-Agent',
    featured: true,
    category: 'project'
  },
  {
    id: '2',
    title: 'RagApp – Enterprise RAG System',
    description: 'Production-ready Retrieval-Augmented Generation system with vector search and multi-provider support.',
    longDescription: `
RagApp is a scalable, production-ready Retrieval-Augmented Generation (RAG) system built for enterprise applications.  
It seamlessly integrates multiple LLM providers—OpenAI, Cohere, Ollama, Hugging Face—while maintaining a modular, plug-and-play architecture.  

**Key Achievements & Highlights:**  
- Built a provider factory to allow easy switching or integration of new LLM backends.  
- Clean, modular FastAPI endpoints with Docker-based containerization for deployment flexibility.  
- Database-agnostic vector storage with MongoDB + Qdrant, PostgreSQL + PGVector, or full PostgreSQL implementations.  
- Designed with SWE best practices for scalability, maintainability, and long-term production reliability.  

**Impact & Production Value:**  
- Prepares the system for imminent enterprise deployment with minimal friction.  
- Enables high-throughput RAG pipelines with distributed ingestion, embedding, and query handling.  
- Provides a robust foundation for building AI-driven enterprise applications that scale efficiently.
`,
    technologies: ['Python', 'FastAPI', 'Docker', 'MongoDB', 'PostgreSQL', 'Qdrant', 'AWS', 'RAG'],
    imageUrl: `${import.meta.env.BASE_URL}images/projects/ragapp.png`,
    githubUrl: 'https://github.com/silvaxxx1/RagApp',
    featured: true,
    category: 'project'
  },
  {
    id: '3',
    title: 'SilvaXNet: Educational Deep Learning Framework',
    description: 'Lightweight deep learning library with CPU/GPU support for educational purposes.',
    longDescription: `
SilvaXNet is a lightweight, educational deep learning framework designed for hands-on experimentation with neural networks.  
Built primarily for learning and personal exploration, it provides a clean, hackable codebase ideal for students, researchers, and AI enthusiasts.  

**Technical Highlights:**  
- Implements RNNs, LSTMs, GRUs, CNNs, and foundational neural network components from scratch.  
- CPU/GPU support using NumPy and CuPy with low-level autograd mechanics.  
- Modular building blocks allow learners to extend the framework to advanced architectures like GANs or Transformers.  

**Educational Value:**  
- Provides a deep, hands-on understanding of neural network internals and training workflows.  
- Enables experimentation with custom architectures, layer combinations, and optimization strategies.  
- Excellent resource for learning, prototyping, and research exploration in a controlled environment.
`,
    technologies: ['Python', 'NumPy', 'CuPy', 'Deep Learning', 'ANNs', 'RNNs', 'LSTMs', 'GRUs', 'CNNs', 'Autograd'],
    imageUrl: `${import.meta.env.BASE_URL}images/projects/silvaxnet.png`,
    githubUrl: 'https://github.com/silvaxxx1/SilvaXNet',
    featured: true,
    category: 'project'
  },
  {
    id: '4',
    title: 'PAPER2CODE: SOTA ML Paper Implementations',
    description: 'Reproductions of state-of-the-art machine learning papers for educational and research purposes.',
    longDescription: `
PAPER2CODE is a collection of faithful reproductions of state-of-the-art machine learning papers, enabling education, research, and experimentation.  

**Highlighted Project – GANs Playground:**  
- Implements key papers including:
  - **DCGANs**: Deep convolutional GANs for unsupervised representation learning.  
  - **Stability-focused GAN improvements**: Techniques for convergence and gradient penalties.  
  - **Wasserstein GAN enhancements**: GPU/TPU-accelerated distributed training using TensorFlow.  

**Technical & Educational Value:**  
- Provides reproducible pipelines for both CV and NLP architectures.  
- Modular and scalable design enables learners to explore, experiment, and benchmark advanced ML techniques.  
- Bridges the gap between theoretical research papers and practical implementations with hands-on projects.
`,
    technologies: ['Python', 'PyTorch', 'TensorFlow', 'NumPy', 'ML', 'DL', 'NLP', 'CNN', 'RNN', 'Transformer', 'GANs'],
    imageUrl: `${import.meta.env.BASE_URL}images/projects/P2C.png`,
    githubUrl: 'https://github.com/silvaxxx1/PAPER2CODE',
    featured: false,
    category: 'project'
  },
  {
    id: '5',
    title: 'HandsOnLLM: Practical LLM Pipelines',
    description: 'A modular project suite for hands-on learning with LLMs, including fine-tuning, prompt engineering, and lightweight local RAG.',
    longDescription: `
HandsOnLLM is a modular, end-to-end project suite for practical experimentation with Large Language Models (LLMs), designed for both learners and engineers.  

**Key Components & Innovations:**  
- **LiteRAG**: Fully offline Retrieval-Augmented Generation pipeline using TinyLlama-1.1B and llama.cpp.  
  - PDF parsing → chunking → embedding (MiniLM, MPNet, Paraphrase-MiniLM) → local FAISS similarity search → context-aware prompts → inference.  
- **Unified LLM Text Classification Pipeline**:  
  - Fine-tuning with Hugging Face Transformers.  
  - Embedding-based classification with SentenceTransformers.  
  - Zero-shot and few-shot prompting with OpenAI GPT models.  
  - End-to-end CLI interface via \`uv\`, with built-in evaluation metrics and Gradio web demos.  

**Impact & Educational Value:**  
- Enables fast, lightweight experimentation without reliance on cloud APIs.  
- Demonstrates the full workflow from data ingestion to LLM inference and evaluation.  
- Provides a solid foundation for future NLP applications and real-world LLM integration.
`,
    technologies: [
      'Python',
      'Transformers',
      'TRL',
      'PEFT',
      'BitsAndBytes',
      'LangChain',
      'SetFit',
      'FAISS',
      'TinyLlama',
      'llama.cpp',
      'Local RAG',
      'Prompt Engineering',
      'Jupyter',
      'Scikit-Learn',
      'NLP'
    ],
    imageUrl: `${import.meta.env.BASE_URL}images/projects/HOLMM.png`,
    githubUrl: 'https://github.com/silvaxxx1/HandsOnLLM',
    featured: true,
    category: 'project'
  },
  {
    id: '6',
    title: 'Vision Transformer from Scratch',
    description: 'Automated inference and fine-tuning pipeline using TensorFlow 2 Object Detection API.',
    longDescription: `
This project delivers a fully automated pipeline for object detection using TensorFlow 2 (TF2) Object Detection API, designed to simplify both inference and fine-tuning.  

**Technical Highlights:**  
- Automatic dataset preprocessing, annotation conversion, and TFRecord generation.  
- Modular training and inference loops supporting GPU acceleration.  
- Supports image, video, and webcam-based detection workflows.  

**Impact & Value:**  
- Streamlines the deployment of object detection systems for educational, research, and prototyping use cases.  
- Reduces manual setup time and configuration errors, enabling faster experimentation and integration.  
- Provides a hands-on framework for understanding the end-to-end object detection pipeline.
`,
    technologies: [
      'Python',
      'TensorFlow 2',
      'Object Detection API',
      'TFRecord',
      'OpenCV',
      'NumPy',
      'Data Annotation',
      'Model Fine-Tuning'
    ],
    imageUrl: `${import.meta.env.BASE_URL}images/projects/TF2.png`,
    githubUrl: 'https://github.com/silvaxxx1/Automated-Pipeline-for-Inference-and-Fine-Tuning-Using-TensorFlow-2-Object-Detection-API',
    featured: false,
    category: 'project'
  }
  
];
