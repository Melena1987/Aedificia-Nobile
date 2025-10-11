
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const ContactSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="bg-brand-dark text-white py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Column */}
          <div className="lg:w-5/12 w-full flex flex-col justify-between">
            <div> {/* Top Content Wrapper */}
              <h2 className="text-4xl font-bold text-brand-gold mb-6">{t('contactTitle')}</h2>
              <p className="text-gray-400 mb-8">{t('contactSubtitle')}</p>
              <div className="space-y-4 text-gray-300">
                <p><span className="font-bold">{t('serviceAreas')}</span><br/>Costa del Sol - Málaga, España</p>
                <p><span className="font-bold">Aedificia Nobile</span><br/>San Pedro de Alcántara<br/>aedificianobile@yahoo.com<br/>Teléfono: +34610926670</p>
              </div>
            </div>
            <div className="mt-12 lg:mt-0"> {/* Logo Wrapper */}
              <img 
                src="https://firebasestorage.googleapis.com/v0/b/aedificia-nobile.firebasestorage.app/o/recursos%20web%2FAedificia%20Nobile%20logo.png?alt=media" 
                alt="Aedificia Nobile Logo"
                className="h-32 brightness-0 invert"
              />
            </div>
          </div>
          
          {/* Right Column */}
          <div className="lg:w-7/12 w-full">
            <form className="flex flex-col justify-between h-full">
              <div> {/* Form fields wrapper */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
                  <InputField label={t('formName')} name="name" type="text" />
                  <InputField label={t('formSurname')} name="surname" type="text" />
                  <InputField label={t('formEmail')} name="email" type="email" />
                  <InputField label={t('formPhone')} name="phone" type="tel" />
                  <div className="sm:col-span-2">
                    <InputField label={t('formAddress')} name="address" type="text" />
                  </div>
                  <div className="sm:col-span-2">
                    <InputField label={t('formSubject')} name="subject" type="text" />
                  </div>
                  <div className="sm:col-span-2">
                    <InputField label={t('formMessage')} name="message" type="textarea" />
                  </div>
                </div>
              </div>
              <button type="submit" className="w-full mt-10 bg-white text-brand-dark font-bold py-4 px-8 hover:bg-gray-200 transition-colors duration-300">
                {t('sendButton')}
              </button>
            </form>
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
}

const InputField: React.FC<InputFieldProps> = ({ label, name, type }) => {
  const commonProps = {
    id: name,
    name: name,
    className: "peer w-full bg-transparent border-0 border-b border-gray-500 text-white focus:ring-0 focus:border-brand-gold transition-colors py-2",
  };
  
  return (
    <div className="relative">
      {type === 'textarea' ? (
        <textarea {...commonProps} rows={3} placeholder=" "></textarea>
      ) : (
        <input {...commonProps} type={type} placeholder=" " />
      )}
      <label htmlFor={name} className="absolute left-0 -top-3.5 text-gray-400 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-brand-gold peer-focus:text-sm">
        {label}
      </label>
    </div>
  );
};

export default ContactSection;