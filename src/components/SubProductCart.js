import { React, useState } from "react";
import * as BSIcons from "react-icons/bs";

const SubProductCart = (props) => {
  const items = props.values;
  const [supProductCount, SetProductCount] = useState(1);
  const handleSupProductCount = (e) => {
    if (e.target.value === "increase") {
      SetProductCount((previouscount) => previouscount + 1);
    } else if (e.target.value === "decrease" && supProductCount !== 0) {
      SetProductCount((previouscount) => previouscount - 1);
    }
  };
  return (
    <>
      <div className="sup-product-card">
        <span className="sup-prod-img-container">
          <img
            className="sup-prod-img"
            src={
              "https://unipick-ui.s3.ap-south-1.amazonaws.com/" +
              items.productImages[0]
            }
            alt="More from this shop"
          ></img>
        </span>
        <div className="sup-prod-img-details">
          <p>{items.productName}</p>
          <p>Featured in Handmade.</p>
          <p>{items.brandName ? items.brandName : "Self"}</p>
          <p>
            <p className="rupee">
              <BSIcons.BsCurrencyRupee />
              {items.productVariant[0].price}
            </p>
          </p>
          <p>
            <BSIcons.BsTruck />
          </p>
          <div>
            <div className="sub-card-button">
              <button onClick={handleSupProductCount} value="decrease">
                -
              </button>
              <p>{supProductCount}</p>
              <button onClick={handleSupProductCount} value="increase">
                +
              </button>
            </div>
            <p>
              <BSIcons.BsCartPlus />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubProductCart;
