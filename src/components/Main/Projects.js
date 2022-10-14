import './Projects.css';
import ImageSlider from './ImageSlider/ImageSlider';

export default function Projects() {

  const slidesEAC = [
    require('../../docs/eac-mp.png'), 
    require('../../docs/eac-md.png'), 
    require('../../docs/eac-p.png')
  ];

  const slidesWikiMaps = [];

  return (
    <div id='projects' className='projects'>
      <p className='myProjects'>Projects</p>
      <div className='eac'>
        <ImageSlider slides={slidesEAC} />
        <p>EAC (Everyone's a Critic)</p>
      </div>
      <div className='wikiMaps'>
        <ImageSlider slides={slidesWikiMaps} />
        <p>WikiMaps</p>
      </div>
    </div>
  );
};