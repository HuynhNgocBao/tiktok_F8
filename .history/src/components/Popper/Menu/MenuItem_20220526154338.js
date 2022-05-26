import Button from "~/components/Button";
import styles from './'

function MenuItem({data}) {
    return <Button leftIcon={data.icon} to={data.to}>{data.title}</Button>;
}

export default MenuItem;