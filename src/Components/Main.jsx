import React from 'react';
import './Main.css';

const Main = () => {
  const socialMediaLinks = [
    { name: 'GitHub', url: 'https://github.com/yourusername', logo: 'https://image.flaticon.com/icons/png/512/25/25231.png' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/yourusername/', logo: 'https://image.flaticon.com/icons/png/512/174/174857.png' },
    { name: 'Twitter', url: 'https://twitter.com/yourusername', logo: 'https://image.flaticon.com/icons/png/512/733/733579.png' },
  ];

  const otherLinks = [
    { name: 'Resume', url: '/path/to/your/resume.pdf', logo: 'https://example.com/resume.png' },
    { name: 'YouTube Channel', url: 'https://www.youtube.com/channel/yourchannelid', logo: 'https://example.com/youtube.png' },
  ];

  return (
    <div className="main-container min-h-screen text-white flex flex-col items-center p-8">
      <div className="profile text-center mb-8">
        <img
          className="rounded-full w-32 h-32 mx-auto mb-4"
          src="https://via.placeholder.com/150"
          alt="Your Name"
        />
        <h1 className="text-3xl font-bold mb-2">Your Name</h1>
        <p className="text-lg">A short bio about yourself.</p>
      </div>

      <div className="social-media mb-8">
        <h2 className="text-2xl font-bold mb-4">Connect with me</h2>
        <div className="flex flex-wrap justify-center space-x-4">
          {socialMediaLinks.map((link) => (
            <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer">
              <img className="w-8 h-8 mb-2 md:mb-0" src={link.logo} alt={link.name} />
            </a>
          ))}
        </div>
      </div>

      <div className="other-links">
        <h2 className="text-2xl font-bold mb-4">My Links</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {otherLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="link-box border-2 border-yellow-500 p-4 text-center rounded hover:border-yellow-300 transition duration-300 ease-in-out"
            >
              <img className="w-8 h-8 mb-2 mx-auto" src={link.logo} alt={link.name} />
              <span>{link.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Main;
