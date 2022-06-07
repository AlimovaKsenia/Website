import { useRef } from 'react';
import { CONTACT_US_TEXT } from '../constants';
import { sendEmail } from '../services/email';

export default function ContactUs() {
  const form = useRef();
  const onSubmit = (ev) => {
    ev.preventDefault();
    sendEmail(form.current).then((result) => {
      form.current.reset();
    });
  };
  return (
    <section id='contact' className='row'>
      <div className='col-xs-12 col-sm-6'>
        <h3>{CONTACT_US_TEXT.title}</h3>
        {CONTACT_US_TEXT.info.map(({ title, value }) => (
          <address key={title}>
            <strong>{title}</strong>
            <br />
            <abbr>{value}</abbr>
          </address>
        ))}
      </div>
      <div className='col-xs-12 col-sm-6'>
        <div className='contact-form'>
          <form ref={form} onSubmit={onSubmit} id='main-contact-form'>
            <div className='form-group'>
              <input
                type='text'
                className='form-control'
                name='name'
                placeholder={CONTACT_US_TEXT.form.firstname}
                required
              />
            </div>

            <div className='form-group'>
              <input
                type='email'
                className='form-control'
                name='email'
                placeholder={CONTACT_US_TEXT.form.email}
                required
              />
            </div>

            <div className='form-group'>
              <input
                type='text'
                className='form-control'
                name='subject'
                placeholder={CONTACT_US_TEXT.form.subject}
                required
              />
            </div>

            <div className='form-group'>
              <textarea
                className='form-control'
                name='message'
                rows='7'
                placeholder={CONTACT_US_TEXT.form.message}
              />
            </div>

            <div>
              <input
                type='submit'
                value={CONTACT_US_TEXT.form.send}
                className='btn btn-primary'
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
