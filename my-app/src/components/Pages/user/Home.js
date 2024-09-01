import ProductType from '../../ProductType';
import Product from '../../Product';

export default function Home({ close, setClose }) {
    return (
        <>
            <ProductType />
            <Product cap="Phone" close={close} setClose={setClose} />
            <Product cap="Laptop" close={close} setClose={setClose} />
            <Product cap="Headphone" close={close} setClose={setClose} />
            <Product cap="Watch" close={close} setClose={setClose} />
        </>
    );
}
