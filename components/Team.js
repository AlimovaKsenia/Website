import { TEAM_TEXT } from '../constants';

export default function Team() {
  return (
    <section id='meet-team'>
      <div className='container meet-team__container'>
        <div className='section-header'>
          <h2 className='section-title text-center wow fadeInDown color__heading'>
            {TEAM_TEXT.title}
          </h2>
        </div>

        <ul className='row meet__list'>
          {TEAM_TEXT.members.map((member) => (
            <li key={member.fullname} className='col-lg-3 col-md-6 col-sm-12 col-12 meet__list-item'>
              {/* <div
                className='team-member wow fadeInUp'
                data-wow-duration='400ms'
                data-wow-delay={member.delay}
              > */}
                  <img
                     className='meet__peoples'
                     src={member.imgUrl}
                     alt=''
                  />
                <div className='meet__info'>
                  <h3 className='meet_names'>{member.fullname}</h3>
                  <p className='meet_descr'>{member.position}</p>
                </div>
            </li>
          ))}
        </ul>

        <div className='divider' />
      </div>
    </section>
  );
}