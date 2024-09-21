export const convertToCartData = (carts) => {
    return carts.map((c) => {
        return {
            product: c.productId, // Changed from c.productId._id to c.productId
            name: c.productName, // Changed from c.productId.name to c.productName
            imageUrl: c.productImage, // Changed from c.productId.imageUrl to c.productImage
            price: c.productPrice, // Changed from c.productId.price to c.productPrice
            countInStock: c.productCountInStock, // Changed from c.productId.countInStock to c.productCountInStock
            qty: c.count,
            _id: c._id,
            productType: c.productType,
        };
    });
};
