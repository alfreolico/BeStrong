import "./ChocolateRains.scss";
import { FaHeart } from "react-icons/fa";

const ChocolateRains = () => {
  return (
    <div className="container-chocolate">
      <div className="midiv" id="chocolate_rains">
        {Array.from({ length: 50 }).map((_, i) => (
          <div className="midiv heart" key={i}>
            <div className="midiv ring"></div>
            <div className="midiv inner">
              <div className="midiv regular">
                <div className="midiv movable">
                  <FaHeart className="footer-icon fa-style" />
                </div>
              </div>
              <div className="midiv reverse">
                <div className="midiv movable">
                  <FaHeart className="footer-icon fa-style" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChocolateRains;
