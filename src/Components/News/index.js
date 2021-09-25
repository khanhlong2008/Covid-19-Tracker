/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import { Container, Grid } from "@material-ui/core";

export default class News extends Component {
  render() {
    return (
      <Container style={{ marginTop: 20 }} className="font-family">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <h1>* News</h1>
            <h2>Bộ Y tế khuyến cáo "5K" chung sống an toàn với dịch bệnh</h2>
            <p>
              Đại dịch COVID-19 vẫn đang diễn biến phức tạp trên toàn cầu, đến
              cuối tháng 8/2020 đã lây lan tại 215 quốc gia và vùng lãnh thổ,
              với hơn 25 triệu người mắc và gần 850 nghìn người tử vong. Tính
              đến 6h00 ngày 31/8/2020, Việt Nam ghi nhận 1.040 bệnh nhân mắc
              COVID-19, trong đó 690 bệnh nhân do lây nhiễm trong nước, 350 bệnh
              nhân từ nước ngoài về. Trong thời gian tới, nguy cơ dịch COVID-19
              vẫn thường trực và tiếp tục có các ca mắc bệnh mới trong cộng
              đồng. Việt Nam sẽ phải tiếp tục chống dịch COVID-19 trong thời
              gian dài và dần hình thành nếp sống, ứng xử phù hợp trong điều
              kiện có dịch bệnh; tiếp tục áp dụng các biện pháp cơ bản phòng
              chống dịch trong trạng thái “bình thường mới” như: đeo khẩu trang
              khi ra khỏi nhà, tại các nơi công cộng và trên các phương tiện
              giao thông công cộng; thường xuyên rửa tay bằng xà phòng hoặc dung
              dịch sát khuẩn; hạn chế tụ tập đông người ngoài phạm vi công sở,
              trường học, bệnh viện; giữ khoảng cách an toàn khi tiếp xúc.
            </p>

            <img
              className="img-news "
              src="https://covid19.qltns.mediacdn.vn/Images/phamhiep/2020/08/31/bo-y-te-khuyen-cao-chung-song-an-toan-voi-dich-benh1598861801.jpg"
            />

            <p>
              Để chủ động phòng, chống dịch COVID-19 trong trạng thái “bình
              thường mới”, Bộ Y tế mong muốn và kêu gọi mỗi người dân Việt Nam
              cùng nhau thực hiện Chung sống an toàn với đại dịch COVID-19. Bộ Y
              tế gửi đến Bạn “Thông điệp 5K: Khẩu trang – Khử khuẩn – Khoảng
              cách – Không tụ tập – Khai báo y tế” với các nội dung chính sau
              đây:
            </p>
            <p>
              - KHẨU TRANG: Đeo khẩu trang vải thường xuyên tại nơi công cộng,
              nơi tập trung đông người; đeo khẩu trang y tế tại các cơ sở y tế,
              khu cách ly.
            </p>
            <p>
              - KHỬ KHUẨN: Rửa tay thường xuyên bằng xà phòng hoặc dung dịch sát
              khuẩn tay. Vệ sinh các bề mặt/ vật dụng thường xuyên tiếp xúc (tay
              nắm cửa, điện thoại, máy tính bảng, mặt bàn, ghế…). Giữ vệ sinh,
              lau rửa và để nhà cửa thông thoáng.
            </p>
            <p>- KHOẢNG CÁCH: Giữ khoảng cách khi tiếp xúc với người khác.</p>
            <p>- KHÔNG TỤ TẬP đông người.</p>
            <p>
              - KHAI BÁO Y TẾ: thực hiện khai báo y tế trên App NCOVI; cài đặt
              ứng dụng BlueZone tại địa chỉ https://www.bluezone.gov.vnđể được
              cảnh báo nguy cơ lây nhiễm COVID-19.
            </p>
            <p>
              Khi có dấu hiệu sốt, ho, khó thở hãy gọi điện cho đường dây nóng
              của Bộ Y tế 19009095 hoặc đường dây nóng của y tế địa phương để
              được tư vấn, hỗ trợ, hướng dẫn đi khám bệnh đảm bảo an toàn.
            </p>
            <img
              className="img-news--5k "
              src="https://covid19.qltns.mediacdn.vn/Images/phamhiep/2020/09/07/bo-y-te-thong-diep-5k-la-chan-thep-trong-phong-chong-dai-dich-covid-191599453839.jpg"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <h1>* Video</h1>
            <div class="containerVideo">
              <iframe
                width="680"
                height="307"
                src="https://www.youtube.com/embed/_SAc24lFCms"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <p style={{ textAlign: "center" }}> Vũ điệu 5k</p>
            <div class="containerVideo--hand">
              <iframe
                width="680"
                height="307"
                src="https://www.youtube.com/embed/91gF4lONPns"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <p style={{ textAlign: "center" }}>
                Hướng dẫn sát khuẩn bề mặt vật dụng gia đình
              </p>
            </div>
            <div class="containerVideo--hand">
              <iframe
                width="680"
                height="307"
                src="https://www.youtube.com/embed/hmRbYLBqjyw"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <p style={{ textAlign: "center" }}>
                Vacxin hoạt động trong cơ thể chúng ta như thế nào?
              </p>
            </div>
            <div class="containerVideo--hand">
              <iframe
                width="680"
                height="507"
                src="https://www.youtube.com/embed/7OAJCBB8Mog"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <p style={{ textAlign: "center" }}>
                Các vắc xin Covid-19 nổi tiếng ở Việt Nam sử dụng công nghệ gì?
              </p>
            </div>
            <div class="containerVideo--hand">
              <iframe
                width="680"
                height="307"
                src="https://www.youtube.com/embed/xVtyglcXXwQ"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <p style={{ textAlign: "center" }}>
                Các vắc xin Covid-19 nổi tiếng ở Việt Nam sử dụng công nghệ gì?
              </p>
            </div>
          </Grid>
        </Grid>
      </Container>
    );
  }
}
