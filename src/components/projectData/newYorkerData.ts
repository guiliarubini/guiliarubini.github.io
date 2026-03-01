import { Project } from './types';
import newYorkerLogo from '../../assets/new_yorker_project_logo.jpeg';
import deneamJeansWoman1 from '../../assets/new_yorker_project/deneam_jeans_ss_24_woman_car.jpg';
import deneamJeansWoman2 from '../../assets/new_yorker_project/deneam_jeans_ss_24_woman_walk.jpg';
import denimJeansWideLeg from '../../assets/new_yorker_project/denim_jeans_wide_leg_with_leo_print.png';
import denimShorts from '../../assets/new_yorker_project/denim_shorts_ss_24.png';
import denimWideLegLaser from '../../assets/new_yorker_project/denim_wode_leg_with_laser_allover_print_ss_23.png';
import shinyPants from '../../assets/new_yorker_project/shiny_pants_ss_24.png';
import tailoringSet from '../../assets/new_yorker_project/tailoring_set_ss_24.png';
import ss_26_brownPants from '../../assets/new_yorker_project/ss_26_brown_panties.jpg';
import ss_26_video from '../../assets/new_yorker_project/ss_26_video.mp4';

export const newYorkerProject: Project = {
  id: 'newyorker',
  title: '2022 - Present\nFashion Designer\nat New Yorker',
  description: 'Commercial fashion design projects for New Yorker brand',
  coverImage: newYorkerLogo,
  items: [
    {
      video: ss_26_video,
      image: ss_26_video,
      isVideo: true,
      description: 'Spring is a reset. Longer days, softer moments and the freedom to move with ease. Our new collection captures the lightness of the season — crafted for wherever spring takes you. 🌸',
      tags: ['SS26'],
    },
    {
      image: deneamJeansWoman1,
      description: 'Denim jeans - woman with car',
      tags: ['SS24'],
    },
    {
      image: deneamJeansWoman2,
      description: 'Denim jeans - woman walking',
      tags: ['SS24'],
    },
    {
      image: denimJeansWideLeg,
      description: 'Wide leg jeans with leopard print',
      tags: ['SS24'],
    },
    {
      image: denimWideLegLaser,
      description: 'Wide leg jeans with laser allover print',
      tags: ['SS23'],
    },
    {
      image: denimShorts,
      description: 'Denim shorts',
      tags: ['SS24'],
    },
    {
      image: tailoringSet,
      description: 'Tailoring set',
      tags: ['SS24'],
    },
    {
      image: ss_26_brownPants,
      description: 'Grounded in warm tones and easy movement. A baggy silhouette in warm brown, designed to bring depth and balance to the season. 🤎',
      tags: ['SS26'],
    },
    {
      image: shinyPants,
      description: 'Shiny pants',
      tags: ['SS24'],
    },
  ],
};
