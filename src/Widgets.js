import React from 'react';
import './Widgets.css';
import { InfoRounded, FiberManualRecord } from '@mui/icons-material';

function Widgets() {

  const newsArticle = (heading, subtitle) => {
    return (
      <div className='widgets_article'>
        <div className='widgets_articleleft'>
          <FiberManualRecord />
        </div>
        <div className='widgets_articleright'>
          <h4>{heading}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    );
  };

  return (
    <div className='widgets'>
      <div className='widgets_header'>
        <h2>Linkedin News</h2>
        <InfoRounded />
      </div>
      {newsArticle("Madhu's Linkedin clone is ready", "Design and Functionalities added")}
      {newsArticle("Madhu's Linkedin clone is ready", "Design and Functionalities added")}
      {newsArticle("Madhu's Linkedin clone is ready", "Design and Functionalities added")}
      {newsArticle("Madhu's Linkedin clone is ready", "Design and Functionalities added")}
      {newsArticle("Madhu's Linkedin clone is ready", "Design and Functionalities added")}
      {newsArticle("Madhu's Linkedin clone is ready", "Design and Functionalities added")}
      {newsArticle("Madhu's Linkedin clone is ready", "Design and Functionalities added")}
      
    </div>
  );
}

export default Widgets;
