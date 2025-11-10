import './Partners.scss';

import PartnerForm from '@components/forms/partner-form/PartnerForm';
import HorizontalSection from '@/components/templates/horizontal-section/HorizontalSection';
import SectionContent from '@/components/templates/section-content/SectionContent';
import WaveTop from '@/components/wave/WaveTop';
import WaveBottom from '@/components/wave/WaveBottom';

import SellerBeller from '@assets/img/partners/seller-beller.svg?react';
import ReturnZero from '@assets/img/partners/return-zero.svg?react';
import SellerMeller from '@assets/img/partners/seller-meller.svg?react';
import SellerReller from '@assets/img/partners/seller-reller.svg?react';

const PARTNERS = [
    {
        partnerName: 'Seller Beller',
        partnerIcon: SellerBeller,
    },    
    {
        partnerName: 'Return Zero',
        partnerIcon: ReturnZero,
    },
    {
        partnerName: 'Seller Meller',
        partnerIcon: SellerMeller,
    },
    {
        partnerName: 'Seller Reller',
        partnerIcon: SellerReller,
    },
]

function Partners() {
    return (
        <div className="partners">
            <div className="partners__header">
                <h1 className="partners__header__title">Большой опыт на рынке</h1>
                <h4 className="partners__header__description">
                    Уже 5 лет мы поставляем лучшее печенье. Нам доверяют крупнейшие розничные сети страны.
                </h4>
            </div>

            <div className="partners__content">
                <WaveTop />
                <HorizontalSection className="partners__content__section">
                    <SectionContent className="partners__content__section-items">
                        { PARTNERS.map((partner) => (
                            <PartnerForm key={partner.partnerName} 
                                partnerName={partner.partnerName} 
                                partnerIcon={<partner.partnerIcon />} 
                            />
                        )) }
                    </SectionContent> 
                </HorizontalSection>
                <WaveBottom />
            </div>
        </div>
    );
}

export default Partners;

