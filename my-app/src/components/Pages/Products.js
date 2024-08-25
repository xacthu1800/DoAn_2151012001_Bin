import Categories from '../Categories';



export default function Products({close, setClose}) {
  return (
    <>
        <Categories 
        close={close} setClose={setClose}/>
    </>
  )
}
