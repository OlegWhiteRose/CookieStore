import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Cookie } from '@/hooks/useCookies';
import { showAlert } from '@/common/showAlert';
import { clearDraft } from '@/store/draft/draftReducer';

interface CookieDraft {
    id: number;
    quantity: number;
}

import SubmitOrderButton from '@components/elements/buttons/submit-order-button/SubmitOrderButton';
import TextInput from '@/components/elements/inputs/text-input/TextInput';
import TextAreaInput from '@/components/elements/inputs/textarea-input/TextAreaInput';

interface OrderModeProps {
    cookies: Cookie[];
    draftCookies: CookieDraft[];
    loading: boolean;
}

function OrderMode({ cookies, draftCookies, loading }: OrderModeProps) {
    const dispatch = useDispatch();
    
    const [deliveryForm, setDeliveryForm] = useState({
        phone: '',
        email: '',
        city: '',
        postalCode: '',
        street: '',
        house: '',
        building: '',
        apartment: '',
        comment: ''
    });

    const [errors, setErrors] = useState({
        phone: false,
        email: false,
        city: false,
        postalCode: false,
        street: false,
        house: false,
        building: false,
        apartment: false
    });

    const calculateTotal = () => {
        return cookies.reduce((sum, cookie) => {
            const draftCookie = draftCookies.find(dc => dc.id === cookie.id);
            const quantity = draftCookie?.quantity || 0;
            return sum + (cookie.price * quantity);
        }, 0);
    };

    const updateField = (field: keyof typeof deliveryForm, value: string) => {
        setDeliveryForm({ ...deliveryForm, [field]: value });
        if (errors[field as keyof typeof errors]) {
            setErrors({ ...errors, [field]: false });
        }
    };

    const handleSubmit = () => {
        const newErrors = {
            phone: !deliveryForm.phone.trim(),
            email: !deliveryForm.email.trim(),
            city: !deliveryForm.city.trim(),
            postalCode: !deliveryForm.postalCode.trim(),
            street: !deliveryForm.street.trim(),
            house: !deliveryForm.house.trim(),
            building: !deliveryForm.building.trim(),
            apartment: !deliveryForm.apartment.trim()
        };

        setErrors(newErrors);

        const hasErrors = Object.entries(newErrors).some(([_, value]) => value);

        if (hasErrors) {
            showAlert('Заполните все поля', 'error');
            return;
        }

        showAlert('Заказ успешно оформлен', 'success');
        dispatch(clearDraft());
    };

    if (loading) {
        return <div className="order-page__loader">Загрузка...</div>;
    }

    if (cookies.length === 0) {
        return <span className="order-page__empty">Корзина пуста</span>;
    }

    return (
        <div className="order-page__order">
            <div className="order-page__summary">
                <h2 className="order-page__summary-title">Ваш заказ</h2>
                
                <div className="order-page__summary-products">
                    {cookies.map(cookie => {
                        const draftCookie = draftCookies.find(dc => dc.id === cookie.id);
                        const quantity = draftCookie?.quantity || 0;
                        const totalPrice = cookie.price * quantity;
                        return (
                            <div key={cookie.id} className="order-page__summary-product">
                                <div className="order-page__summary-product-info">
                                    <span className="order-page__summary-product-name">{cookie.title}</span>
                                    <span className="order-page__summary-product-quantity">{quantity} шт.</span>
                                </div>
                                <span className="order-page__summary-product-price">{totalPrice} ₽</span>
                            </div>
                        );
                    })}
                </div>

                <div className="order-page__summary-info">
                    <div className="order-page__summary-row order-page__summary-row--total">
                        <span className="order-page__summary-label">Сумма заказа:</span>
                        <span className="order-page__summary-value order-page__summary-value--price">
                            {calculateTotal()} ₽
                        </span>
                    </div>
                </div>
            </div>

            <div className="order-page__delivery">
                <form className="order-page__form" onSubmit={(e) => e.preventDefault()}>
                    <h2 className="order-page__delivery-title">Контактная информация</h2>
                    
                    <div className="order-page__form-row">
                        <TextInput 
                            label="Телефон" 
                            placeholder="+7 (999) 123-45-67" 
                            type="tel"
                            value={deliveryForm.phone}
                            onChange={(value) => updateField('phone', value)}
                            error={errors.phone}
                        />
                        <TextInput 
                            label="E-mail" 
                            placeholder="example@mail.ru" 
                            type="email"
                            value={deliveryForm.email}
                            onChange={(value) => updateField('email', value)}
                            error={errors.email}
                        />
                    </div>

                    <h2 className="order-page__delivery-title">Адрес доставки</h2>

                    <div className="order-page__form-row">
                        <TextInput 
                            label="Город" 
                            placeholder="Москва" 
                            value={deliveryForm.city}
                            onChange={(value) => updateField('city', value)}
                            error={errors.city}
                        />
                        <TextInput 
                            label="Почтовый индекс" 
                            placeholder="123456" 
                            value={deliveryForm.postalCode}
                            onChange={(value) => updateField('postalCode', value)}
                            error={errors.postalCode}
                        />
                    </div>

                    <div className="order-page__form-row">
                        <TextInput 
                            label="Улица" 
                            placeholder="Тверская улица" 
                            wide 
                            value={deliveryForm.street}
                            onChange={(value) => updateField('street', value)}
                            error={errors.street}
                        />
                    </div>

                    <div className="order-page__form-row">
                        <TextInput 
                            label="Дом" 
                            placeholder="12" 
                            value={deliveryForm.house}
                            onChange={(value) => updateField('house', value)}
                            error={errors.house}
                        />
                        <TextInput 
                            label="Корпус" 
                            placeholder="1" 
                            value={deliveryForm.building}
                            onChange={(value) => updateField('building', value)}
                            error={errors.building}
                        />
                        <TextInput 
                            label="Квартира" 
                            placeholder="45" 
                            value={deliveryForm.apartment}
                            onChange={(value) => updateField('apartment', value)}
                            error={errors.apartment}
                        />
                    </div>

                    <div className="order-page__form-row">
                        <TextAreaInput 
                            label="Комментарий к заказу" 
                            placeholder="Укажите дополнительную информацию"
                            rows={3}
                            wide
                            value={deliveryForm.comment}
                            onChange={(value) => updateField('comment', value)}
                        />
                    </div>

                    <SubmitOrderButton text="Оформить заказ" onClick={handleSubmit} />
                </form>
            </div>
        </div>
    );
}

export default OrderMode;
