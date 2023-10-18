import { useState } from 'react';
import { ReactSVG } from 'react-svg';
import emailjs from '@emailjs/browser';

import "./v-home.css"
import data from '../data/slider.json'

import Vision from '../assets/vision-icon.svg'
import Mision from '../assets/mision-icon.svg'
import Values from '../assets/value-icon.svg'
import Certification1 from '../assets/certification1.svg'
import Certification2 from '../assets/certification2.svg'
import Certification3 from '../assets/certification3.svg'
import StationIcon from '../assets/station-icon.svg'
import ProfileIcon from '../assets/profile-icon.svg'
import EmailIcon from '../assets/email-icon.svg'
import PhoneIcon from '../assets/phone-icon.svg'
import PhoneIcon2 from '../assets/phone-icon2.svg'
import MessageIcon from '../assets/message-icon.svg'
import Logo from '../assets/logo.svg'

import CHeader from "../components/c-header/c-header"
import CSlider from "../components/c-slider/c-slider"

export default function VHome() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')
    const [success, setSuccess] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.send("service_3gd4lyi","template_h8is8z5", {name: name, email: email, phone: phone, message: message}, 'jBYdk_-pJvjLt3-op')
          .then((result) => {
              console.log(result.status);
              setName('');
              setEmail('');
              setPhone('');
              setMessage('');
              if(result.status === 200){
                setSuccess(true)
              }
          }, (error) => {
              console.log(error.text);
          });
      };

    return(
        <div id='inicio' className="v-home">
            <section className="v-home__section__header">
                <CHeader />
                <div className="v-home__section__header__backgouend-opacity">
                    <div className="v-home__section__header__title-group">
                        <div className="v-home__section__header__dots">
                            <div className="v-home__section__header__dot"></div>
                            <div className="v-home__section__header__dot"></div>
                            <div className="v-home__section__header__dot"></div>
                        </div>
                        <h1 className="v-home__section__header__title">
                            Distribuidor pionero <br/> <b>de gas natural <br/> en la República <br/> Dominicana</b>
                        </h1>
                        <a href="#estaciones" className="v-home__section__header__button">CONOCE LAS ESTACIONES</a>
                    </div>
                </div>
            </section>
            <section id="sobre-nosotros" className="v-home__section__about-us">
                <h2 className="v-home__section__about-us__title">Sobre Nosotros</h2>
                <div className="v-home__section__about-us__cards">
                    <div className="v-home__section__about-us__card">
                        <ReactSVG src={Vision} className="v-home__section__about-us__card-icon"/>
                        <h2 className="v-home__section__about-us__card-title">Vision</h2>
                        <p className="v-home__section__about-us__card-text">Ser la empresa líder de gas natural en República Dominicana, ofertándole a nuestros clientes productos y servicios de la mejor calidad y precios competitivos en el mercado.</p>
                    </div>
                    <div className="v-home__section__about-us__card">
                        <ReactSVG src={Mision} className="v-home__section__about-us__card-icon"/>
                        <h2 className="v-home__section__about-us__card-title">Mision</h2>
                        <p className="v-home__section__about-us__card-text">Somos una empresa dedicada a la venta y distribución de gas natural, comprometida con brindar un servicio de la más alta calidad a todos nuestros clientes, contribuyendo con la disminución de la huella de carbono.</p>
                    </div>
                    <div className="v-home__section__about-us__card">
                        <ReactSVG src={Values} className="v-home__section__about-us__card-icon"/>
                        <h2 className="v-home__section__about-us__card-title">Valores</h2>
                        <p className="v-home__section__about-us__card-text">Seguridad Transparencia Integridad Compromiso Respeto</p>
                    </div>
                </div>
            </section>
            <section id="galería" className="v-home__section__gallery">
                <CSlider title="" data={data.slider1}/>
            </section>
            <section className="v-home__section__certifications">
                <ReactSVG src={Certification1} className="v-home__section__certification-item"/>
                <ReactSVG src={Certification2} className="v-home__section__certification-item"/>
                <ReactSVG src={Certification3} className="v-home__section__certification-item"/>
            </section>
            <section className="v-home__section__map">
                 {/* <img src="" alt="" /> */}
            </section>
            <section id='estaciones' className="v-home__section__stations">
                <div className="v-home__section__stations__card">
                    <h2 className="v-home__section__stations__title">Estaciones</h2>
                    <div className="v-home__section__stations__container">
                        <div className="v-home__section__stations__items-group">
                            <div className="v-home__section__stations__item">
                                <ReactSVG src={StationIcon} className="v-home__section__stations-icon"/>
                                <div className="v-home__section__stations__side-label-box">
                                    <div className="v-home__section__stations__side-label-decoration"></div>
                                    <p className="v-home__section__stations__side-label-text">Plaza Lama</p>
                                </div>
                            </div>
                            <div className="v-home__section__stations__item">
                                <ReactSVG src={StationIcon} className="v-home__section__stations-icon"/>
                                <div className="v-home__section__stations__side-label-box">
                                    <div className="v-home__section__stations__side-label-decoration"></div>
                                    <p className="v-home__section__stations__side-label-text">Bonao (Petromovil)</p>
                                </div>
                            </div>
                        </div>
                        <div className="v-home__section__stations__items-group">
                            <div className="v-home__section__stations__item">
                                <ReactSVG src={StationIcon} className="v-home__section__stations-icon"/>
                                <div className="v-home__section__stations__side-label-box">
                                    <div className="v-home__section__stations__side-label-decoration"></div>
                                    <p className="v-home__section__stations__side-label-text">Higüero (Unite Pretoleum)</p>
                                </div>
                            </div>
                            <div className="v-home__section__stations__item">
                                <ReactSVG src={StationIcon} className="v-home__section__stations-icon"/>
                                <div className="v-home__section__stations__side-label-box">
                                    <div className="v-home__section__stations__side-label-decoration"></div>
                                    <p className="v-home__section__stations__side-label-text">Navarrete (Petromovil)</p>
                                </div>
                            </div>
                        </div>
                        <div className="v-home__section__stations__items-group">
                            <div className="v-home__section__stations__item">
                                <ReactSVG src={StationIcon} className="v-home__section__stations-icon"/>
                                <div className="v-home__section__stations__side-label-box">
                                    <div className="v-home__section__stations__side-label-decoration"></div>
                                    <p className="v-home__section__stations__side-label-text">Av. Luperón (Petromovil)</p>
                                </div>
                            </div>
                            <div className="v-home__section__stations__item">
                                <ReactSVG src={StationIcon} className="v-home__section__stations-icon"/>
                                <div className="v-home__section__stations__side-label-box">
                                    <div className="v-home__section__stations__side-label-decoration"></div>
                                    <p className="v-home__section__stations__side-label-text">Bávaro</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id='contacto' className="v-home__section__contact-us">
                <div className="v-home__section__contact-us__form-container">
                    <div className="v-home__section__contact-us__form-title-container">
                        <h2 className="v-home__section__contact-us__form-title">Contacto</h2>
                    </div>
                    <form onSubmit={sendEmail} className="v-home__section__form">
                        <div className="v-home__section__form-input-group">
                            <ReactSVG src={ProfileIcon} className="v-home__section__form-input-icon"/>
                            <input type="text" placeholder='Nombre' className="v-home__section__form-input-text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                        </div>
                        <div className="v-home__section__form-input-group">
                            <ReactSVG src={EmailIcon} className="v-home__section__form-input-icon"/>
                            <input type="text" placeholder='Email' className="v-home__section__form-input-text" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                        </div>
                        <div className="v-home__section__form-input-group">
                            <ReactSVG src={PhoneIcon} className="v-home__section__form-input-icon"/>
                            <input type="text" placeholder='Teléfono' className="v-home__section__form-input-text" value={phone} onChange={(e)=>{setPhone(e.target.value)}}/>
                        </div>
                        <div className="v-home__section__form-text-area-group">
                            <ReactSVG src={MessageIcon} className="v-home__section__form-input-icon"/>
                            <textarea name="" id="" cols="20" rows="10" className="v-home__section__form-input-text-area" placeholder='Comentarios' value={message} onChange={(e)=>{setMessage(e.target.value)}}></textarea>
                        </div>
                        {name && email && phone && message ? <input type="submit" value="Enviar" className="v-home__section__form-button"/> : <input type="submit" value="Enviar" className="v-home__section__form-button__disabled"/>}
                        {success && <div className='v-home__section__form__success'>Formulario enviado exitosamente</div>}
                    </form>
                </div>
                <div className="v-home__section__contact-us__map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15137.98001367886!2d-69.9352671!3d18.4612242!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ea5620a4c7ae41b%3A0x5c1eb3eff564db1c!2sSGN%20Gas%20Natural!5e0!3m2!1sen!2sdo!4v1697010250634!5m2!1sen!2sdo" width="100%" height="99%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='map'></iframe>
                </div>
            </section>
            <footer className="v-home__footer">
                <div className="v-home__footer__logo-container">
                    <ReactSVG src={Logo} className="v-home__footer__logo"/>
                    <div className="v-home__footer__nav">
                        <a href="#inicio" className="v-home__footer__nav-ietm">Inicio</a>
                        <a href="#sobre-nosotros" className="v-home__footer__nav-ietm">Sobre Nosotros</a>
                        <a href="#estaciones" className="v-home__footer__nav-ietm">Estaciones</a>
                        <a href="#contacto" className="v-home__footer__nav-ietm">Contacto</a>
                    </div>
                </div>
                <div className="v-home__footer__info-container">
                    <p className="v-home__footer__addres">Av. Winston Churchill NO. 95 Torre Blue Mall, Piso 28</p>
                    <div className="v-home__footer__info-item">
                        <ReactSVG src={PhoneIcon2} className="v-home__footer__icon"/>
                        <p className="v-home__footer__info-text">info@sng.com.do</p>
                    </div>
                    <div className="v-home__footer__info-item">
                        <ReactSVG src={PhoneIcon2} className="v-home__footer__icon"/>
                        <p className="v-home__footer__info-text">809-533-3373</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}