import Button from '~/components/Button';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import {Link}
const cx = classNames.bind(styles);

function MenuItem({ data }) {
    return (
        <Link className={cx('menu-item')} leftIcon={data.icon} to={data.to}>
            {data.title}
        </Link>
    );
}

export default MenuItem;
