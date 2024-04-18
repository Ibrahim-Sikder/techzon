/* eslint-disable no-mixed-spaces-and-tabs */
import Container from "@/components/ui/Container";
import "./checkout.css";
import { Radio } from "antd";

const Checkout = () => {
  return (
    <Container className="">
      <div className="wrapContainer">
        <div className="checkoutWrap mt-5 flex justify-between flex-wrap ">
          <div className="checkoutLeftSide">
            <h3 className="text-3xl font-bold">Billing Details </h3>
            <div className="mt-5 flex items-center jsutify-between">
              <input
                className="checkoutInputField"
                required
                id="outlined-required"
                placeholder="First Name"
              />
              <input
                className="checkoutInputField"
                required
                id="outlined-required"
                placeholder="Last Name"
              />
            </div>
            <div className="my-3">
              <input
                className="checkoutInputField2"
                id="outlined-required"
                placeholder="Company name (optional)"
              />
            </div>
            <div className="my-3">
              {/* <TextField className='checkoutInputField2' required id="outlined-required" label="Country / Region" /> */}
              <select>
                <option value={10}>Bangladesh</option>
                <option value={20}>United States </option>
                <option value={30}>United Kingdom </option>
                <option value={30}>India </option>
                <option value={30}>Vietname</option>
              </select>
            </div>
            <div className="my-3">
              <input
                className="checkoutInputField2"
                required
                id="outlined-required"
                placeholder="House number and street name"
              />
            </div>
            <div className="my-3">
              <input
                className="checkoutInputField2"
                required
                id="outlined-required"
                placeholder="Apartment, suite, unit, etc. (option)"
              />
            </div>
            <div className="my-3">
              <input
                className="checkoutInputField2"
                required
                id="outlined-required"
                placeholder="Town / City "
              />
            </div>
            <div className="my-3">
              <input
                className="checkoutInputField2"
                required
                id="outlined-required"
                placeholder="ZIP Code "
              />
            </div>
            <div className="my-3">
              <input
                className="checkoutInputField2"
                required
                id="outlined-required"
                placeholder="Phone"
              />
            </div>
            <div className="my-3">
              <input
                className="checkoutInputField2"
                required
                id="outlined-required"
                placeholder="Email address "
              />
            </div>
            <div className="flex items-center">
			<Radio>Ship to a different address?</Radio>
            </div>
            <div className="my-3">
              <label> Other Note </label>
              <textarea className="otherNote" />
            </div>
          </div>

          <div className="checkoutRightSide">
            <div className="yourOrder">
              <h3 className="text-2xl font-bold mb-3">Your Order </h3>
              <div className="flex items-center justify-between ">
                <span>Sub Total </span>
                <span>৳৫৯০</span>
              </div>
              <div className="flex items-center justify-between ">
                <span>Shipping </span>
                <span>Delivery Cost (Product Delivery Free)</span>
              </div>
              <div className="flex items-center justify-between ">
                <b>Total </b>
                <b>৳১০৯০</b>
              </div>
            </div>
            <div className="delivery">
              <div className="cashOnDelivery">
                <div className="flex items-center">
                  <Radio>Cash on delivery</Radio>
                </div>
              </div>

              <div className=" lg:ml-5 mt-5 ">
                <div className="flex items-center">
                 <Radio> I have read and agree to the website terms and conditions *</Radio>
                </div>
                <button className="shopBtn placeOrderBtn">Place Order </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Checkout;
