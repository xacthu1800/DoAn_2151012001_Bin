import { IoEyeOutline } from "react-icons/io5";

export default function ProductDetail({ product, setProduct, close, setClose }) {
    return (
      <>
        {close ? (
          <div className="productDetail">
            <div className="container">
              <button onClick={() => setClose(false)} className="closebtn">
                <IoEyeOutline />
              </button>
            </div>
          </div>
        ) : null}
      </>
    );
  }
  
