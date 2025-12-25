
import React, { useState, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import emailjs from '@emailjs/browser';

const ContactSection: React.FC = () => {
  const { t } = useLanguage();
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const logoUrl = "https://firebasestorage.googleapis.com/v0/b/aedificia-nobile.firebasestorage.app/o/recursos%20web%2FAedificia%20Nobile%20logo.png?alt=media&token=7ecc00e6-28ed-4897-86b0-d29a96c0b141";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      surname: formData.get('surname'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      address: formData.get('address'),
      subject: formData.get('subject'),
      message: formData.get('message'),
      status: 'new',
      createdAt: serverTimestamp(),
    };

    try {
      await addDoc(collection(db, 'submissions'), data);

      if (form.current) {
        await emailjs.sendForm(
          process.env.VITE_EMAILJS_SERVICE_ID as string,
          process.env.VITE_EMAILJS_TEMPLATE_ID as string,
          form.current,
          process.env.VITE_EMAILJS_PUBLIC_KEY as string
        );
      }

      setIsSuccess(true);
      if (form.current) {
        form.current.reset();
      }
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error("Error sending message: ", error);
      alert("Error al enviar el mensaje. Por favor, inténtelo de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-brand-dark text-white py-24 lg:py-36 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-gold/5 -skew-x-12 transform translate-x-1/2"></div>
      
      <div className="container mx-auto px-6 sm:px-12 lg:px-24 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 xl:gap-24">
          {/* Left Column */}
          <div className="lg:w-5/12 w-full flex flex-col justify-between">
            <div>
              <span className="text-brand-gold uppercase tracking-[0.4em] text-sm font-semibold mb-6 block">Get in touch</span>
              <h2 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">{t('contactTitle')}</h2>
              <p className="text-gray-400 text-lg mb-12 max-w-md leading-relaxed">{t('contactSubtitle')}</p>
              
              <div className="space-y-10 text-gray-300">
                <div className="group">
                  <p className="text-brand-gold uppercase tracking-widest text-xs font-bold mb-2 transition-colors group-hover:text-white">{t('serviceAreas')}</p>
                  <p className="text-lg">Costa del Sol - Málaga, España</p>
                </div>
                
                <div className="group">
                  <p className="text-brand-gold uppercase tracking-widest text-xs font-bold mb-2 transition-colors group-hover:text-white">Aedificia Nobile</p>
                  <p className="text-lg leading-loose font-light">
                    San Pedro de Alcántara<br/>
                    <a href="mailto:aedificianobile@yahoo.com" className="hover:text-brand-gold transition-colors block mt-2">aedificianobile@yahoo.com</a>
                    <a href="tel:+34610926670" className="hover:text-brand-gold transition-colors block">+34 610 926 670</a>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-20 lg:mt-0 opacity-10 hover:opacity-100 transition-opacity duration-1000">
              <img 
                src={logoUrl} 
                alt="Aedificia Nobile Logo"
                className="h-28 brightness-0 invert"
              />
            </div>
          </div>
          
          {/* Right Column */}
          <div className="lg:w-7/12 w-full">
            {isSuccess ? (
              <div className="h-full min-h-[500px] flex items-center justify-center border border-brand-gold/20 bg-white/5 backdrop-blur-sm p-16 text-center animate-fade-in rounded-sm">
                <div>
                  <div className="w-24 h-24 border-2 border-brand-gold rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse">
                    <div className="text-brand-gold text-4xl">✓</div>
                  </div>
                  <h3 className="text-4xl font-bold mb-4 tracking-tight">¡Mensaje Enviado!</h3>
                  <p className="text-gray-400 text-lg font-light">Nos pondremos en contacto contigo lo antes posible para dar forma a tu visión.</p>
                </div>
              </div>
            ) : (
              <form 
                ref={form}
                onSubmit={handleSubmit} 
                className="flex flex-col gap-10 bg-white/5 backdrop-blur-sm p-8 sm:p-12 lg:p-16 rounded-sm border border-white/10 shadow-2xl"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
                  <InputField label={t('formName')} name="name" type="text" required />
                  <InputField label={t('formSurname')} name="surname" type="text" required />
                  <InputField label={t('formEmail')} name="email" type="email" required />
                  <InputField label={t('formPhone')} name="phone" type="tel" />
                  <div className="sm:col-span-2">
                    <InputField label={t('formAddress')} name="address" type="text" />
                  </div>
                  <div className="sm:col-span-2">
                    <InputField label={t('formSubject')} name="subject" type="text" required />
                  </div>
                  <div className="sm:col-span-2">
                    <InputField label={t('formMessage')} name="message" type="textarea" required />
                  </div>
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="relative group overflow-hidden w-full bg-brand-gold text-white font-bold py-6 px-8 transition-all disabled:opacity-50 mt-4 shadow-lg"
                >
                  <span className="relative z-10 tracking-[0.3em] uppercase text-sm">
                    {isSubmitting ? 'Enviando...' : t('sendButton')}
                  </span>
                  <div className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  <style>{`.group:hover .relative.z-10 { color: #1a1a1a; transition: color 0.3s; }`}</style>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

interface InputFieldProps {
  label: string;
  name: string;
  type: 'text' | 'email' | 'tel' | 'textarea';
  required?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({ label, name, type, required }) => {
  const commonProps = {
    id: name,
    name: name,
    required: required,
    className: "peer w-full bg-transparent border-0 border-b-2 border-white/10 text-white focus:ring-0 focus:border-brand-gold transition-all py-3 outline-none text-lg font-light placeholder-transparent",
  };
  
  return (
    <div className="relative group/field">
      {type === 'textarea' ? (
        <textarea {...commonProps} rows={4} placeholder={label}></textarea>
      ) : (
        <input {...commonProps} type={type} placeholder={label} />
      )}
      <label 
        htmlFor={name} 
        className="absolute left-0 -top-6 text-brand-gold uppercase tracking-[0.2em] text-[10px] font-bold transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-3 peer-placeholder-shown:tracking-widest peer-focus:-top-6 peer-focus:text-brand-gold peer-focus:text-[10px] peer-focus:tracking-[0.2em]"
      >
        {label}
      </label>
      <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-brand-gold transition-all duration-300 peer-focus:w-full"></div>
    </div>
  );
};

export default ContactSection;
