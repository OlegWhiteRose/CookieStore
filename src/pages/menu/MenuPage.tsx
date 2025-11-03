import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useDebounce } from '@/hooks/useDebounce';
import { useCookies } from '@/hooks/useCookies';

import '../pages.scss';
import './MenuPage.scss';

import VerticalSection from '@components/templates/vertical-section/VerticalSection';
import MenuSearchInput from '@components/elements/inputs/menu-search-input/MenuSearchInput';
import SectionContent from '@/components/templates/section-content/SectionContent';
import MenuFilterButton from '@components/elements/buttons/menu-filter-button/MenuFilterButton';
import CardsTypeSelect from '@components/sections/cards-type-select/CardsTypeSelect';
import MenuCard from '@components/menu-card/MenuCard';

import FilterIcon from '@assets/icon/filter.svg?react';

function MenuPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchQuery, setSearchQuery] = useState(searchParams.get('title') || '');
    const [debouncedQuery, setDebouncedQuery] = useState(searchParams.get('title') || '');
    const [formatFilter, setFormatFilter] = useState(searchParams.get('format') || '');

    const updateURLParams = (params: Record<string, string>) => {
        const newParams: Record<string, string> = {};
        
        Object.entries(params).forEach(([key, value]) => {
            if (value) {
                newParams[key] = value;
            }
        });

        setSearchParams(newParams);
    };

    const handleSearch = useDebounce((value: string) => {
        setDebouncedQuery(value);
        updateURLParams({ title: value, format: formatFilter });
    }, 500);

    const handleFormatChange = (format: string) => {
        setFormatFilter(format);
        updateURLParams({ title: debouncedQuery, format });
    };

    const { cookies, loading } = useCookies({ 
        title: debouncedQuery || undefined,
        format: formatFilter || undefined
    });

    const handleSearchChange = (value: string) => {
        setSearchQuery(value);
        handleSearch(value);
    };

    useEffect(() => {
        const titleParam = searchParams.get('title');
        const formatParam = searchParams.get('format');
        
        if (titleParam && titleParam !== debouncedQuery) {
            setSearchQuery(titleParam);
            setDebouncedQuery(titleParam);
        }
        if (formatParam && formatParam !== formatFilter) {
            setFormatFilter(formatParam);
        }
    }, []);

    return (
        <VerticalSection className="page menu-page">
            <SectionContent className="menu-page__main">
                <div className="menu-page__main-search">
                    <MenuSearchInput 
                        value={searchQuery}
                        onChange={handleSearchChange}
                    />
                    <MenuFilterButton text="Фильтры" icon={<FilterIcon />} />
                </div>
            </SectionContent>
            <SectionContent className="menu-page__cards-type-select">
                <CardsTypeSelect 
                    value={formatFilter}
                    onChange={handleFormatChange}
                />
            </SectionContent>
            <SectionContent className="menu-page__cards-wrapper">
                {loading && <div className="menu-page__loader">Загрузка...</div>}
                <div className={`menu-page__cards ${loading ? 'menu-page__cards--loading' : ''}`}>
                    {cookies.length > 0 ? (
                        cookies.map((cookie) => (
                            <MenuCard
                                id={cookie.id}
                                imgUrl={cookie.img_url}
                                key={cookie.id}
                                format={cookie.format as 'common' | 'special'}
                                type={cookie.type}
                                title={cookie.title}
                                quantity={cookie.quantity}
                                price={cookie.price}
                            />
                        ))
                    ) : !loading ? (
                        <div className="menu-page__message">Ничего не найдено</div>
                    ) : null}
                </div>
            </SectionContent>
        </VerticalSection>
    )
}

export default MenuPage;

