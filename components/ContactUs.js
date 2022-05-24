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
    <section id='contact' className='contact'>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12'>
            <div className='contact_contant sections'>
              <div className='separator'></div>
            </div>
            <div className='row'>
              <div className='col-sm-6'>
                <div className='main_contact_info'>
                  <div className='row'>
                    <div className='contact_info_content padding-top-90 padding-bottom-60 p_l_r'>
                      {CONTACT_US_TEXT.info.map(({ title, value }) => (
                        <div key={title} className='col-sm-12'>
                          <div className='single_contact_info'>
                            <div className='single_info_text'>
                              <h3>{title}</h3>
                              <h4>{value}</h4>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className='col-sm-6'>
                <div className='single_contant_left padding-top-90 padding-bottom-90'>
                  <form ref={form} onSubmit={onSubmit} id='formid'>
                    <div className='col-lg-8 col-md-8 col-sm-10 col-lg-offset-2 col-md-offset-2 col-sm-offset-1'>
                      <div className='row'>
                        <div className='col-sm-12'>
                          <div className='form-group'>
                            <input
                              type='text'
                              className='form-control'
                              name='name'
                              placeholder={CONTACT_US_TEXT.form.firstname}
                              required
                            />
                          </div>
                        </div>
                        <div className='col-sm-12'>
                          <div className='form-group'>
                            <input
                              type='email'
                              className='form-control'
                              name='email'
                              placeholder={CONTACT_US_TEXT.form.email}
                              required
                            />
                          </div>
                        </div>
                        <div className='col-sm-12'>
                          <div className='form-group'>
                            <input
                              type='text'
                              className='form-control'
                              name='subject'
                              placeholder={CONTACT_US_TEXT.form.subject}
                              required
                            />
                          </div>
                        </div>
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
                          className='btn btn-lg'
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
