import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './About.css';

const About: React.FC = () => {
  const { elementRef: aboutRef, isVisible: aboutVisible } = useScrollAnimation();

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div 
          ref={aboutRef}
          className={`about-content ${aboutVisible ? 'scroll-animate animate-in' : 'scroll-animate'}`}
        >
          <div className="about-text">
            <h2 className="about-title">About Me</h2>
            <div className="about-summary">
              <p>
                <strong>Haisam Abbas</strong> is an AI Engineer and Researcher specializing in developing scalable, real-world AI systems that bridge the gap between academic research and practical deployment. His expertise spans Large Language Models (LLMs), Computer Vision and Agents.
              </p>
              
              <p>
                He has hands-on experience fine-tuning and optimizing models like GPT-2 and LLaMA, building robust NLP pipelines, and applying MLOps practices for maintainable, production-grade AI systems.
              </p>

              <p>
                His work reflects a deep interest in mechanistic interpretability consistently pushing toward AI systems that are both efficient and trustworthy in real-world environments.
              </p>
            </div>
          </div>
          
          <div className="about-photo">
            <div className="photo-container hover-scale">
              <img 
                src={`${import.meta.env.BASE_URL}images/profile/profile_picture.jpg`}
                alt="Professional headshot" 
                className="profile-image"
                loading="lazy"
              />
              <div className="photo-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
