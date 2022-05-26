import styles from './Button.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function Button({
    to,
    href,
    primary = false,
    outline = false,
    small = false,
    large = false,
    text = false,
    disabled =false,
    children,
    onClick,
    ...passprops
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passprops,
    };
    if (to) {
        Comp = 'Link';
        props.to = to;
    } else if (href) {
        Comp = 'a';
        props.href = href;
    }
    const classes = cx('wrapper', {
        primary,
        outline,
        small,
        large,
        text,
    });
    return (
        <Comp className={classes} {...props}>
            <span>{children}</span>
        </Comp>
    );
}

export default Button;
