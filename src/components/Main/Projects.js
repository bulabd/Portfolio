import './Projects.css';
import ImageSlider from './ImageSlider/ImageSlider';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Projects() {

  const slidesEAC = [
    require('../../docs/eac-mp.png'), 
    require('../../docs/eac-md.png'), 
    require('../../docs/eac-p.png')
  ];

  const slidesWikiMaps = [
    require('../../docs/wikimaps-home.png'),
    require('../../docs/wikimaps-create.png'),
    require('../../docs/wikimaps-map.png'),
    require('../../docs/wikimaps-edit.png')
  ];

  return (
    <div id='projects' className='projects'>
      <p className='myProjects'>Projects</p>
      <div className='project'>
        <ImageSlider slides={slidesEAC} />
        <div className='details'>
          <div>
            <p className='projectTitle'>EAC (Everyone's a Critic)</p>
            <p>A movies app where users can search for movies, review them and create their own playlists.</p>
            <p className='stack'> &gt;&gt; JavaScript, React, NodeJS, PostgreSQL, SCSS, Material-UI, Express</p>
            <a className='githubIcon' href='https://github.com/bulabd/final-project' target='blank'><FontAwesomeIcon icon={faGithub} /></a>
          </div>
        </div>
      </div>
      <span className='separator'></span>
      <div className='project'>
        <ImageSlider slides={slidesWikiMaps} />
        <div className='details'>
          <div>
            <p className='projectTitle'>WikiMaps</p>
            <p>An app where users can create custom maps, customize and share them.</p>
            <p className='stack'> &gt;&gt; JavaScript, EJS, SCSS, NodeJS, PostgreSQL, Express</p>
            <a className='githubIcon' href='https://github.com/bulabd/Wiki-Map' target='blank'><FontAwesomeIcon icon={faGithub} /></a>
          </div>
        </div>
      </div>
      <span className='separator'></span>

      <p className='subtitle'>Smaller Projects</p>
      <section className='smallerProjects'>
        <div className='smallP'>
          <p className='smallPTitle'>Jungle Rails</p>
          <p>A small online plant store.</p>
          <p className='stack'>&gt;&gt; Ruby, Rails, HTML, SCSS, ActiveRecord</p>
          <a className='githubIcon' href='https://github.com/bulabd/jungle-rails' target='blank'><FontAwesomeIcon icon={faGithub} /></a>
        </div>
        <div className='smallP'>
          <p className='smallPTitle'>Scheduler</p>
          <p>An app where students can book meetings with mentors.</p>
          <p className='stack'>&gt;&gt; JavaScript, React, Axios</p>
          <a className='githubIcon' href='https://github.com/bulabd/scheduler' target='blank'><FontAwesomeIcon icon={faGithub} /></a>
        </div>
        <div className='smallP'>
          <p className='smallPTitle'>Tweeter</p>
          <p>A "twitter-like app" where users can post tweets.</p>
          <p className='stack'>&gt;&gt; HTML, CSS, JavaScript, jQuery</p>
          <a className='githubIcon' href='https://github.com/bulabd/tweeter' target='blank'><FontAwesomeIcon icon={faGithub} /></a>
        </div>
      </section>
      <p className='githubProfile'>And many more can be found on my <a className='githubProfileLink' href='https://github.com/bulabd' target='blank'>Github</a></p>

    </div>
  );
};