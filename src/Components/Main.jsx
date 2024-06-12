import React from 'react';
import myy from '../assets/me.png';
import git from '../assets/git.png';
import link from '../assets/link.png';
import Tweet from '../assets/twitter.png';

const Main = () => {
  const socialMediaLinks = [
    { name: 'GitHub', url: 'https://github.com/thecarlover', logo: git },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ojasvi-mittal-a787821b2/', logo: link },
    { name: 'Twitter', url: 'https://x.com/s1mittal9804', logo: Tweet },
  ];

  const otherLinks = [
    { name: 'Resume', url: '/path/to/your/resume.pdf' },
    { name: 'YouTube Channel', url: 'https://www.youtube.com/channel/yourchannelid' },
  ];

  return (
    <div className="main-container absolute top-0 right-0 z-10 w-full h-full flex flex-col items-center justify-center text-white bg-black bg-opacity-5 p-8 lg:w-auto lg:bg-transparent lg:justify-center lg:items-center lg:gap-8 lg:px-16 lg:py-8 lg:right-auto lg:left-0">
      <div className="profile text-center mb-8 lg:mb-8">
        <img
          className="rounded-full w-32 h-32 mx-auto mb-4"
          src={myy}
          alt="Ojasvi Mittal"
        />
        <h1 className="text-3xl font-bold mb-2">Ojasvi Mittal</h1>
        <p className="text-lg">I Develop for humans</p>
      </div>

      <div className="social-media mb-8">
        <h2 className="text-2xl font-bold mb-4">Connect with me</h2>
        <div className="flex flex-wrap justify-center space-x-4">
          {socialMediaLinks.map((link) => (
            <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer">
              {link.name === 'Twitter' ? (
                <img className="w-8 h-8 mb-2 md:mb-0 filter invert" src={link.logo} alt={link.name} />
              ) : (
                <img className="w-8 h-8 mb-2 md:mb-0" src={link.logo} alt={link.name} />
              )}
            </a>
          ))}
        </div>
      </div>

      <div className="other-links">
        <h2 className="text-2xl font-bold mb-4">My Links</h2>
        <div className="grid grid-cols-1 gap-4">
          {otherLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="link-box border-4 border-yellow-500 p-4 text-center rounded hover:border-yellow-300 transition duration-300 ease-in-out"
            >
              <span>{link.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
