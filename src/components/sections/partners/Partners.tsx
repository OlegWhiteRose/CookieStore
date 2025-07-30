import './Partners.scss';

import TopWave from '@components/wave/WaveTop';
import BottomWave from '@components/wave/WaveBottom';
import PartnerForm from '@components/forms/partner-form/PartnerForm';

import SellerBeller from '@assets/img/partners/seller-beller.svg?react';
import ReturnZero from '@assets/img/partners/return-zero.svg?react';
import SellerMeller from '@assets/img/partners/seller-meller.svg?react';
import SellerReller from '@assets/img/partners/seller-reller.svg?react';

function Partners() {
    const partnerForms = [
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
    ];

    return (
        <div className="partners">
            <div className="partners__header">
                <h1 className="partners__header__title">Большой опыт на рынке</h1>
                <h4 className="partners__header__description">
                    Уже 5 лет мы поставляем лучшее печенье. Нам доверяют крупнейшие розничные сети страны.
                </h4>
            </div>

            <div className="partners__content">
                <TopWave />
                <div className="partners__content__items">
                    { partnerForms.map((partnerForm) => (
                        <PartnerForm key={partnerForm.partnerName} 
                            partnerName={partnerForm.partnerName} 
                            partnerIcon={<partnerForm.partnerIcon />} 
                        />
                    )) }
                </div>
                <BottomWave />
            </div>
        </div>
    );
}

export default Partners;

