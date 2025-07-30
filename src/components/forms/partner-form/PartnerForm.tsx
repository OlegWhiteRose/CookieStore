import './PartnerForm.scss';

interface PartnerFormProps {
    partnerIcon: React.ReactNode;
    partnerName: string;
}

function PartnerForm(props: PartnerFormProps) {
    const { partnerIcon, partnerName } = props;

    return (
        <div className="partner-form">
            <div className="partner-form__icon">
                { partnerIcon }
            </div>
        </div>
    );
}

export default PartnerForm;

