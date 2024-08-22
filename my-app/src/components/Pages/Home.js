import  ProductType from '../ProductType'
import  Product from '../Product'
import  Footer from '../Footer';

export default function Home() {
  return (
    <>
      <ProductType />
      <Product cap="Phone"/>
      <Product cap="Laptop"/>
      <Product cap="Headphone"/>
      <Product cap="Watch"/>
      <Footer />
    </>
  )
}
