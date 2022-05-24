import { NUMBERS_TEXT } from '../constants';

export default function Numbers() {
  return (
    <section id='animated-number'>
      <div className='container'>
        <div className='section-header'>
          <h2 className='section-title text-center wow fadeInDown color__heading'>
            {NUMBERS_TEXT.title}
          </h2>
        </div>

        <div className='row text-center'>
          {NUMBERS_TEXT.numbers.map(({ title, value, delay }) => (
            <div key={title} className='col-sm-3 col-xs-6'>
              <div
                className='wow fadeInUp'
                data-wow-duration='400ms'
                data-wow-delay={delay}
              >
                <div
                  className='animated-number'
                  data-digit={value}
                  data-duration='1000'
                >{value}</div>
                <strong>{title}</strong>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
