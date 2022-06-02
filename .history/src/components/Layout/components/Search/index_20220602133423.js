import { useState, useEffect, useRef } from 'react';
import * as searchService from '~/apiServices/searchServices';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { SearchIcon } from '~/components/Icon';
import { useDebounce } from '~/components/hooks';

import styles from './Search.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);
    const debounced = useDebounce(searchValue, 500);
    const inputRef = useRef();

    useEffect(() => {
        if (!debounced.trim()) {
            return;
        }
        const fetchAPI = async () => {
            setLoading(true);
            const result = await searchService.search(debounced);
            setSearchResult(result);
            setLoading(false);
        };
        fetchAPI();
    }, [debounced]);

    const handleClear = (e) => {
        inputRef.current.focus();
        setSearchResult([]);
        setSearchValue('');
    };
    const handleHideResult = (e) => {
        setShowResult(false);
    };
    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (searchValue.startsWith(' ')) return;
        setSearchValue(searchValue);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        // Avoid wa
        <span>
            <HeadlessTippy
                appendTo={() => document.body}
                interactive
                visible={showResult && searchResult.length > 0}
                onClickOutside={handleHideResult}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Account</h4>
                            {searchResult.map((result) => {
                                return <AccountItem key={result.id} data={result} />;
                            })}
                        </PopperWrapper>
                    </div>
                )}
            >
                <div className={cx('search')}>
                    <input
                        placeholder="Search accounts and videos"
                        value={searchValue}
                        onChange={handleChange}
                        ref={inputRef}
                        onFocus={() => setShowResult(true)}
                    />
                    {!!searchValue && !loading && (
                        <button className={cx('clear')} onClick={handleClear}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                    <button className={cx('search-btn')} onMouseDown={handleSubmit}>
                        <SearchIcon />
                    </button>
                </div>
            </HeadlessTippy>
        </sp>
    );
}

export default Search;
