import { TEAM_TEXT } from '../constants';

export default function Team() {
  return (
    <section id='meet-team'>
      <div className='container'>
        <div className='section-header'>
          <h2 className='section-title text-center wow fadeInDown color__heading'>
            {TEAM_TEXT.title}
          </h2>
        </div>

        <div className='row'>
          {TEAM_TEXT.members.map((member) => (
            <div key={member.fullname} className='col-sm-6 col-md-3'>
              <div
                className='team-member wow fadeInUp'
                data-wow-duration='400ms'
                data-wow-delay={member.delay}
              >
                <div className='team-img'>
                  <img
                    className='img-responsive img-circle'
                    src={member.imgUrl}
                    alt=''
                  />
                </div>
                <div className='team-info'>
                  <h3>{member.fullname}</h3>
                  <span>{member.position}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='divider' />
      </div>
    </section>
  );
}
