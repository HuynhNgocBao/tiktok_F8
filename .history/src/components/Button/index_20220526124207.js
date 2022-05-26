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
    rounded
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
        disabled,
    });

    if (disabled){
        Object.keys(props).forEach((key)=>{
            if (key.startsWith('on') && typeof(props[key])==='function'){
                delete props[key];
            }
        });
    }

    return (
        <Comp className={classes} {...props}>
            <span>{children}</span>
        </Comp>
    );
}

export default Button;
