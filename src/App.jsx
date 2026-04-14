import './App.css';

export default function App() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#home">
            Viet Green
          </a>
          <div className="nav-actions">
            <a className="btn btn-secondary" href="#signature">Menu</a>
            <a className="btn btn-primary" href="#reservation">Đặt bàn</a>
          </div>
        </div>
      </header>

      <main>
        <section className="hero-section" id="home">
          <div className="hero-content container">
            <span className="hero-eyebrow">Authentic Vietnamese Cuisine</span>
            <h1 className="hero-title">Viet Green Restaurant</h1>
            <p className="hero-copy">
              Hành trình ẩm thực qua trái tim Việt Nam — mỗi bát phở là một câu chuyện truyền thống.
            </p>
            <div className="hero-buttons">
              <a className="btn btn-primary" href="#signature">Xem Menu</a>
              <a className="btn btn-secondary" href="#reservation">Đặt bàn ngay</a>
            </div>
          </div>
        </section>

        <section className="section stats-section">
          <div className="container stats-grid">
            <div className="stat-card">
              <div className="stat-number">24+</div>
              <p className="stat-label">Năm kinh nghiệm</p>
            </div>
            <div className="stat-card">
              <div className="stat-number">150+</div>
              <p className="stat-label">Món đặc sắc</p>
            </div>
            <div className="stat-card">
              <div className="stat-number">50K+</div>
              <p className="stat-label">Khách hàng hài lòng</p>
            </div>
            <div className="stat-card">
              <div className="stat-number">4.9★</div>
              <p className="stat-label">Đánh giá trung bình</p>
            </div>
          </div>
        </section>

        <section className="section about-section">
          <div className="container about-grid">
            <div>
              <span className="section-eyebrow">About Us</span>
              <h2 className="section-heading">A Culinary Journey Through Vietnam</h2>
              <p className="section-text">
                Viet Green được tạo nên từ niềm tin rằng ẩm thực tuyệt vời kết nối con người. Những công thức gia truyền và nguyên liệu tươi sạch tạo nên nét riêng trong từng món.
              </p>
              <p className="section-text">
                Từ nước dùng hầm 24 giờ cho đến gỏi cuốn tươi mát, mỗi món ăn là lời mời trải nghiệm hồn Việt trong không gian ấm cúng.
              </p>
            </div>
            <div className="about-image-wrap">
              <img src="/pexels-quang-nguyen-vinh-222549-29000057.jpg" alt="Nhà hàng nội thất Việt Nam" />
              <div className="about-badge">
                <strong>24+</strong>
                <span>Năm xuất sắc</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section story-section">
          <div className="container story-grid">
            <div className="story-image-wrap">
              <img src="/images2362953_11a.jpg" alt="Đầu bếp đang nấu ăn" />
              <div className="story-tag">Award Winning Chef</div>
            </div>
            <div>
              <span className="section-eyebrow">Our Story</span>
              <h2 className="section-heading">A Story of Tradition and Freshness</h2>
              <p className="section-text">
                Bếp trưởng Nguyễn Văn Phúc mang hơn 20 năm kinh nghiệm vào từng món ăn. Ông tạo nên thực đơn vừa trân trọng quá khứ vừa gần gũi với hôm nay.
              </p>
              <p className="section-text">
                “Ẩm thực là ký ức. Mỗi thìa phở phải làm bạn cảm thấy như về nhà.”
              </p>
              <div className="feature-list">
                <span className="feature-item">Nguyên liệu farm-to-table</span>
                <span className="feature-item">Công thức gia truyền</span>
                <span className="feature-item">Nước dùng tự nhiên 100%</span>
                <span className="feature-item">Không dùng bột ngọt</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section signature-section" id="signature">
          <div className="container section-header">
            <div>
              <span className="section-eyebrow">Our Specialties</span>
              <h2 className="section-heading">Signature Selection</h2>
            </div>
            <a className="btn btn-secondary" href="#reservation">Xem tất cả</a>
          </div>
          <div className="container cards-grid">
            <article className="card">
              <img src="/pho_thin_bo_ho.png" alt="Phở bò" />
              <div className="card-body">
                <p className="card-tag">POPULAR</p>
                <h3>Phở bò</h3>
                <p className="card-desc">Nước dùng hầm lâu, thịt mềm và thơm.</p>
                <p className="card-price">95.000 VND</p>
              </div>
            </article>
            <article className="card">
              <img src="/pho_bo_vien.png" alt="Bún bò Huế" />
              <div className="card-body">
                <p className="card-tag">HOT</p>
                <h3>Bún bò Huế</h3>
                <p className="card-desc">Hương sả nồng đậm, đậm vị miền Trung.</p>
                <p className="card-price">85.000 VND</p>
              </div>
            </article>
            <article className="card">
              <img src="/pho_cuon_hanoi.png" alt="Gỏi cuốn" />
              <div className="card-body">
                <p className="card-tag">FRESH</p>
                <h3>Gỏi cuốn</h3>
                <p className="card-desc">Cuốn tươi ngon với rau thơm và tôm.</p>
                <p className="card-price">45.000 VND</p>
              </div>
            </article>
            <article className="card">
              <img src="/pho_sai_gon.png" alt="Cơm tấm" />
              <div className="card-body">
                <p className="card-tag">CLASSIC</p>
                <h3>Cơm tấm</h3>
                <p className="card-desc">Cơm sườn bì chả hài hoà vị Sài Gòn.</p>
                <p className="card-price">80.000 VND</p>
              </div>
            </article>
          </div>
        </section>

        <section className="section reviews-section">
          <div className="container section-header">
            <div>
              <span className="section-eyebrow">What Our Guests Say</span>
              <h2 className="section-heading">Guest Reviews</h2>
            </div>
          </div>
          <div className="container reviews-grid">
            <article className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">“Best pho in the city. The broth is incredibly rich and authentic. Tastes just like my grandmother's recipe back home in Hanoi!”</p>
              <p className="review-author">Nguyễn Minh Anh</p>
            </article>
            <article className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">“A hidden gem! The Viet Green experience is unlike no other. Every dish tells a story of Vietnamese heritage.”</p>
              <p className="review-author">Sarah Thompson</p>
            </article>
            <article className="review-card">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">“Mình đã thử nhiều quán phở ở Hà Nội nhưng Viet Green vẫn là số 1. Không khí ấm cúng và món ăn ngon tuyệt.”</p>
              <p className="review-author">Trần Hoàng Long</p>
            </article>
          </div>
        </section>

        <footer className="footer-section" id="reservation">
          <div className="container footer-content">
            <h2 className="section-heading">Đặt bàn ngay</h2>
            <p className="section-text">Gọi ngay +84 123 456 789 hoặc đến trực tiếp nhà hàng để trải nghiệm ẩm thực Việt đích thực.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
