import Button from "~/components/Button";

function MenuItem({data}) {
    return <button>{JSON.stringify(data)}</button>;
}

export default MenuItem;