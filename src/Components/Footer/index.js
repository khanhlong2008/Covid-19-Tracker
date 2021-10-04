/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../../App.css";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>CÔNG TY</h4>
            <ul>
              <li>
                <a href="#">Về chúng tôi</a>
              </li>
              <li>
                <a href="#">Dịch vụ của chúng tôi</a>
              </li>
              <li>
                <a href="#">Chính sách bảo mật</a>
              </li>
              <li>
                <a href="#">Chương Trình liên kết</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>THÔNG TIN TÒA SOẠN</h4>
            <ul>
              <li>
                <a href="#">
                  Trụ sở chính: Số 138A Giảng Võ - Quận Ba Đình - Thành phố Hà
                  Nội
                </a>
              </li>
              <li>
                <a href="#">Điện thoại: 024.3846.1042 - Fax: 024.3844.3144</a>
              </li>
              <li>
                <a href="#">Đường dây nóng: 0904.852.222</a>
              </li>
              <li>
                <a href="#">Email: toasoan@suckhoedoisong.vn</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>LIÊN HỆ QUẢNG CÁO</h4>
            <ul>
              <li>
                <a href="#">
                  Điện thoại: 0888.669.909 - Email: ads@suckhoedoisong.vn
                </a>
              </li>
              <li>
                <a href="#">
                  VĂN PHÒNG ĐẠI DIỆN
                  <p>
                    * Thành phố Hồ Chí Minh: Số 213 và 495 đường Điện Biên Phủ-Q.3-TP.HCM
                  </p>
                  <p>
                    * Khu vực Đông Bắc: Phố Hải Phúc - Phường Hồng Hải - TP. Hạ
                    Long - Tỉnh Quảng Ninh
                  </p>
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>follow us</h4>
            <div className="social-links">
              <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
              <a href="#">
                <i className="fab fa-instagram" />
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
