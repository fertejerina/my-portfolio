import React, {useRef} from 'react'
import "./contact.css"
import {MdEmail} from 'react-icons/md'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_p5l07ic', 'template_nmz7jfd', form.current, 'PVIz0U5bqjOb3e1kn')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact'>
      <h5>Acercate!</h5>
      <h2>Escribime</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>fernandojtejerina@gmail.com</h5>
            <a href="mailto:fernandojtejerina@gmail.com">Escribir correo</a>
          </article>
        </div>
      {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Nombre completo' required/>
          <input type="text" name='email' placeholder='Email' required/>
          <textarea name="message" rows="7" placeholder='Mensaje...' required></textarea>
          <button type='submit' className='btn btn-primary'>Enviar</button>
        </form>
      </div>
    </section>
  )
}

export default Contact