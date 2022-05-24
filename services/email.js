import emailjs from '@emailjs/browser';
import { MAIL } from '../constants';

export const sendEmail = (data) => emailjs.sendForm(MAIL.SERVICE_ID, MAIL.TEMPLATE_ID, data, MAIL.PUBLIC_KEY);
