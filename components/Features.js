import { FEATURES_TEXT } from '../constants';

export default function Features() {
  return (
    <section id='features'>
      <div className='container'>
        <div className='section-header'>
          <h2 className='section-title text-center wow fadeInDown color__heading'>
            {FEATURES_TEXT.title}
          </h2>
          <p className='text-center wow fadeInDown par__text'>
            {FEATURES_TEXT.subtitle}
          </p>
        </div>
        <div className='row'>
          <div className='col-sm-6 wow fadeInLeft'>
            <img
              className='img-responsive'
              src={FEATURES_TEXT.mainImgUrl}
              alt=''
            />
          </div>
          <div className='col-sm-6'>
            {FEATURES_TEXT.features.map(({ icon, title, description }) => (
              <div key={title} className='media service-box wow fadeInRight'>
                <div className='pull-left'>
                  <i className={`fa ${icon}`}></i>
                </div>
                <div className='media-body'>
                  <h4 className='media-heading'>{title}</h4>
                  <p>{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
