import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const SocialLinks = () => {
  const socials = [
    {
      name: 'LinkedIn',
      icon: faLinkedinIn,
      url: 'https://www.linkedin.com/in/venkateswari-sudalai-371a77bb/',
      color: 'hover:text-blue-500'
    },
    {
      name: 'GitHub',
      icon: faGithub,
      url: 'https://github.com/venkateswarisudalai',
      color: 'hover:text-purple-500'
    },
    {
      name: 'Email',
      icon: faEnvelope,
      url: 'mailto:sudalai.v@northeastern.edu',
      color: 'hover:text-primary-500'
    }
  ];

  return (
    <div className="text-center">
      <h3 className="text-white text-lg font-semibold mb-4">Connect With Me</h3>
      <div className="flex justify-center gap-4">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative p-4 bg-slate-900/50 rounded-xl border border-white/10 ${social.color} transition-all duration-300 hover:scale-110 hover:border-white/30`}
            aria-label={social.name}
          >
            <FontAwesomeIcon
              icon={social.icon}
              className="text-2xl text-gray-400 group-hover:text-inherit transition-colors duration-300"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
