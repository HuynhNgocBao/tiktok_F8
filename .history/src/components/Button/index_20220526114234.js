import styles from './Button.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function Button({to, href,children,onClick}) {
    let Comp = 'button';
    const classes = cx('wrapper');
    return <Comp className={cla}>
        <span>{children}</span>
    </Comp>;
}

export default Button;