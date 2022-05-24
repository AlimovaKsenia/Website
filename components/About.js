import { ABOUT_TEXT } from '../constants';

export default function About() {
  return (
    <section id='about'>
      <div className='container'>
        <div className='section-header'>
          <h2 className='section-title text-center'>{ABOUT_TEXT.title}</h2>
          <p className='text-center wow fadeInDown'>{ABOUT_TEXT.description}</p>
        </div>

        <div className='row'>
          <div className='col-sm-6 wow fadeInLeft'>
            <h3 className='column-title'>{ABOUT_TEXT.videoTitle}</h3>
            <div className='embed-responsive embed-responsive-16by9'>
              <iframe src={ABOUT_TEXT.videoUrl} />
            </div>
          </div>

          <div className='col-sm-6 wow fadeInRight'>
            <h3 className='column-title'>{ABOUT_TEXT.infoTitle}</h3>
            <p>{ABOUT_TEXT.info}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
