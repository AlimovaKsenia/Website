import { FOOTER_TEXT } from "../constants";

export default function Footer() {
  return (
    <footer id='footer'>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-6'>&copy; {new Date().getFullYear()} {FOOTER_TEXT.text}</div>
        </div>
      </div>
    </footer>
  );
}
