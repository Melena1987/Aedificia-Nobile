import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const PrivacyPolicyPage: React.FC = () => {
  const { t } = useLanguage();

  const PolicySection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-brand-dark mb-4">{title}</h2>
      <div className="text-gray-700 leading-relaxed space-y-4">{children}</div>
    </div>
  );

  return (
    <div className="animate-fade-in bg-brand-light">
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="container mx-auto px-4 sm:px-8 lg:px-16 max-w-4xl">
          <h1 className="text-4xl lg:text-5xl font-bold text-brand-dark mb-4">{t('privacyPolicyTitle')}</h1>
          <p className="text-md text-gray-500 mb-12">{t('privacyPolicyLastUpdated')}</p>

          <PolicySection title="">
            <p>{t('privacyPolicyIntro')}</p>
          </PolicySection>

          <PolicySection title={t('privacyPolicyDataControllerTitle')}>
            <p>{t('privacyPolicyDataControllerText')}</p>
            <ul className="list-disc list-inside">
              <li>{t('privacyPolicyDataControllerAddress')}</li>
              <li>{t('privacyPolicyDataControllerEmail')}</li>
              <li>{t('privacyPolicyDataControllerPhone')}</li>
            </ul>
          </PolicySection>
          
          <PolicySection title={t('privacyPolicyDataCollectionTitle')}>
            <p>{t('privacyPolicyDataCollectionText')}</p>
          </PolicySection>

          <PolicySection title={t('privacyPolicyDataUsageTitle')}>
            <p>{t('privacyPolicyDataUsageText')}</p>
            <ul className="list-disc list-inside">
              <li>{t('privacyPolicyDataUsagePoint1')}</li>
              <li>{t('privacyPolicyDataUsagePoint2')}</li>
              <li>{t('privacyPolicyDataUsagePoint3')}</li>
            </ul>
          </PolicySection>

          <PolicySection title={t('privacyPolicyDataSharingTitle')}>
            <p>{t('privacyPolicyDataSharingText')}</p>
          </PolicySection>

          <PolicySection title={t('privacyPolicyUserRightsTitle')}>
            <p>{t('privacyPolicyUserRightsText')}</p>
          </PolicySection>

          <PolicySection title={t('privacyPolicyCookiesTitle')}>
            <p>{t('privacyPolicyCookiesText')}</p>
          </PolicySection>

          <PolicySection title={t('privacyPolicyContactTitle')}>
            <p>{t('privacyPolicyContactText')}</p>
            <a href="mailto:aedificianobile@yahoo.com" className="text-brand-gold hover:underline">aedificianobile@yahoo.com</a>
          </PolicySection>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;