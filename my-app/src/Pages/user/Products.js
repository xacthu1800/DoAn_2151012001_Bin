import Categories from '../../components/Categories';

export default function Products({ close, setClose }) {
    return (
        <>
            <Categories close={close} setClose={setClose} />
        </>
    );
}
