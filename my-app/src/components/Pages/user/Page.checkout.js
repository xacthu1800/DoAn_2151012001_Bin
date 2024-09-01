import Checkout from '../../Checkout';

export default function Page_checkout(props) {
    return (
        <>
            <Checkout coupon={props.coupon} setCoupon={props.setCoupon} />
        </>
    );
}
