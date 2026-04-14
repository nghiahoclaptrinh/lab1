// Shared menu data used across all pages/components

export const menuData = {
  'Phở': [
    {
      id: 1, name: 'Phở Thin Bò Hổ', price: 95000, image: '/pho_thin_bo_ho.png', badge: 'POPULAR', rating: 4.7, reviewCount: 980,
      description: 'Phở bò đặc trưng với nước dùng hầm xương bò trong hơn 12 tiếng, kết hợp thảo mộc thơm như hồi, quế và gừng nướng. Thịt bò tái mỏng tan chảy trong miệng, ăn kèm giá đỗ, húng quế và chanh tươi.'
    },
    {
      id: 2, name: 'Phở Đặc Biệt', price: 120000, image: '/pho_dac_biet.png', badge: 'SIGNATURE', rating: 4.8, reviewCount: 1250,
      description: 'Our signature slow-cooked beef broth, simmered for over 24 hours with aromatic star anise, cinnamon, and charred ginger. Served with premium brisket, rare flank steaks, and fresh rice noodles. Garnished with basil, bean sprouts, lime, and chili.'
    },
    {
      id: 3, name: 'Phở Gà Lá Chanh', price: 85000, image: '/pho_ga_la_chanh.png', badge: null, rating: 4.5, reviewCount: 620,
      description: 'Phở gà thanh mát với nước dùng gà hầm cùng lá chanh thơm nồng. Thịt gà ta dai ngon, ăn kèm rau thơm và tắc vắt. Món ăn lý tưởng cho những ai yêu thích hương vị nhẹ nhàng, thanh tao.'
    },
    {
      id: 4, name: 'Phở Cuốn Hà Nội', price: 75000, image: '/pho_cuon_hanoi.png', badge: null, rating: 4.4, reviewCount: 410,
      description: 'Bánh phở tươi cuộn cùng thịt bò xào tỏi, rau sống và các loại thảo mộc thơm đặc trưng của Hà Nội. Chấm kèm nước chấm đặc biệt pha vừa miệng. Món khai vị hoặc ăn nhẹ tuyệt vời.'
    },
    {
      id: 5, name: 'Phở Bò Viên', price: 90000, image: '/pho_bo_vien.png', badge: null, rating: 4.6, reviewCount: 730,
      description: 'Những viên bò viên dai giòn được chế biến từ thịt bò tươi 100%, thả vào nồi nước dùng bò đậm đà. Kết hợp hoàn hảo giữa độ dai của bò viên và vị ngọt tự nhiên của nước phở truyền thống.'
    },
    {
      id: 6, name: 'Phở Áp Chảo', price: 110000, image: '/pho_ap_chao.png', badge: null, rating: 4.5, reviewCount: 560,
      description: 'Bánh phở dẹt được áp chảo vàng giòn rồi phủ thịt bò xào cùng rau củ trong nước sốt đậm vị. Sự kết hợp độc đáo giữa phở giòn và nhân xào mềm tạo nên trải nghiệm ẩm thực thú vị.'
    },
    {
      id: 7, name: 'Phở Tái', price: 85000, image: '/pho_tai.png', badge: null, rating: 4.6, reviewCount: 890,
      description: 'Thịt bò tái thái mỏng nhúng vào nước phở nóng hổi, giữ nguyên độ tươi mềm tự nhiên. Nước dùng trong và ngọt thanh, ăn cùng hành tây thái lát, ngò gai và một vắt chanh.'
    },
    {
      id: 8, name: 'Phở Sài Gòn', price: 95000, image: '/pho_sai_gon.png', badge: null, rating: 4.7, reviewCount: 1100,
      description: 'Phong cách phở đặc trưng miền Nam với nước dùng ngọt đậm hơn, phục vụ kèm đĩa rau sống phong phú gồm giá đỗ, rau muống, húng quế và tương hoisin. Một bát phở đậm chất Sài Gòn.'
    },
  ],
  'Bún': [
    { id: 9,  name: 'Bún Bò Huế',    price: 85000, image: '/pho_bo_vien.png',     badge: 'POPULAR',   rating: 4.8, reviewCount: 1050, description: 'Đặc sản xứ Huế với nước dùng cay nồng từ sả và ớt, kết hợp bắp bò hầm mềm và chả cua đặc trưng. Bún sợi to, ăn kèm rau muống và bắp chuối bào.' },
    { id: 10, name: 'Bún Chả Hà Nội', price: 80000, image: '/pho_dac_biet.png',   badge: null,        rating: 4.6, reviewCount: 720,  description: 'Bún chả truyền thống Hà Nội với chả patties nướng than thơm phức, nhúng vào nước chấm ngọt chua đặc trưng. Ăn kèm bún tươi, rau thơm và nem rán cuốn tay.' },
    { id: 11, name: 'Bún Riêu Cua',   price: 90000, image: '/pho_ga_la_chanh.png', badge: 'SIGNATURE', rating: 4.7, reviewCount: 840,  description: 'Nước dùng từ cua đồng giã nhuyễn kết hợp cà chua chín tươi tạo màu đỏ hấp dẫn. Thêm đậu hũ chiên giòn, mắm tôm và các loại rau phong phú cho hương vị đậm đà chuẩn vị Bắc.' },
    { id: 12, name: 'Bún Mắm',        price: 95000, image: '/pho_sai_gon.png',     badge: null,        rating: 4.4, reviewCount: 380,  description: 'Đặc sản miền Tây Nam Bộ với nước dùng từ mắm cá linh, các loại hải sản tươi và thịt heo. Hương vị đậm đà, khó quên.' },
  ],
  'Lẩu': [
    { id: 13, name: 'Lẩu Thái',    price: 250000, image: '/pho_dac_biet.png',   badge: 'POPULAR',   rating: 4.9, reviewCount: 630, description: 'Lẩu Thái chua cay đặc trưng với nước dùng từ sả, lá chanh và ớt tươi. Thả vào tôm, mực, nấm và rau củ tươi.' },
    { id: 14, name: 'Lẩu Bò',      price: 280000, image: '/pho_thin_bo_ho.png', badge: null,        rating: 4.7, reviewCount: 520, description: 'Nồi lẩu bò đậm đà với xương bò hầm kỹ, nhúng cùng thịt bò tươi thái mỏng, nấm đông cô và rau thơm.' },
    { id: 15, name: 'Lẩu Hải Sản', price: 350000, image: '/pho_cuon_hanoi.png', badge: 'SIGNATURE', rating: 4.8, reviewCount: 410, description: 'Hải sản tươi sống bao gồm tôm hùm, mực, ngao và cá phi lê nhúng trong nước dùng hải sản ngọt thanh.' },
  ],
  'Đồ uống': [
    { id: 16, name: 'Trà Đá',        price: 15000, image: '/pho_ga_la_chanh.png', badge: null,  rating: 4.2, reviewCount: 200, description: 'Trà đen pha đậm, ướp lạnh với đá bào mịn. Thức uống giải khát hoàn hảo.' },
    { id: 17, name: 'Sinh Tố Xoài',  price: 45000, image: '/pho_sai_gon.png',     badge: 'NEW', rating: 4.7, reviewCount: 150, description: 'Xoài chín tươi xay cùng sữa chua và một chút mật ong. Không có chất bảo quản hay đường nhân tạo.' },
    { id: 18, name: 'Nước Sâm',      price: 25000, image: '/pho_ap_chao.png',     badge: null,  rating: 4.5, reviewCount: 310, description: 'Nước sâm truyền thống được sắc từ các loại thảo mộc. Giải nhiệt và tốt cho sức khoẻ.' },
  ],
  'Khai vị': [
    { id: 19, name: 'Chả Giò',        price: 55000, image: '/pho_cuon_hanoi.png', badge: 'POPULAR', rating: 4.8, reviewCount: 880, description: 'Chả giò vàng giòn được cuốn từ thịt heo xay, miến, mộc nhĩ và cà rốt bào. Chiên ngập dầu đến vàng giòn.' },
    { id: 20, name: 'Gỏi Cuốn',       price: 45000, image: '/pho_tai.png',         badge: null,      rating: 4.6, reviewCount: 560, description: 'Bánh tráng cuốn tươi với tôm, thịt luộc, bún, giá đỗ và các loại rau thơm. Thanh mát và giàu dinh dưỡng.' },
    { id: 21, name: 'Bánh Mì Nướng',  price: 35000, image: '/pho_bo_vien.png',    badge: null,      rating: 4.3, reviewCount: 290, description: 'Bánh mì Việt Nam nướng giòn phết bơ tươi và pate gan heo, ăn kèm dưa leo và tương ớt.' },
  ],
};

// Flat list for quick lookup by id
export const allItems = Object.values(menuData).flat();

export function findItemById(id) {
  return allItems.find(item => item.id === Number(id));
}

// Which category does an item belong to?
export function findCategoryByItemId(id) {
  for (const [cat, items] of Object.entries(menuData)) {
    if (items.find(i => i.id === Number(id))) return cat;
  }
  return Object.keys(menuData)[0];
}
