# Hướng dẫn chi tiết thêm file PDF Resume

## Vấn đề hiện tại
- Trong môi trường v0, không thể upload file trực tiếp
- Cần tải code về máy để thêm file PDF gốc

## Giải pháp

### Bước 1: Tải code về máy
1. Click nút **"Download Code"** ở góc phải trên của v0
2. Chọn "Create new project" hoặc "Add to existing project"
3. Code sẽ được tải về máy dưới dạng Next.js project

### Bước 2: Thêm file PDF
1. Mở project đã tải về
2. Tạo thư mục `public/resume/` (nếu chưa có)
3. Copy file PDF gốc của bạn vào thư mục này
4. Đổi tên file thành `thao-dinh-resume.pdf`

### Bước 3: Cấu trúc thư mục cuối cùng
\`\`\`
your-project/
├── public/
│   └── resume/
│       └── thao-dinh-resume.pdf  ← File PDF gốc của bạn
├── components/
├── app/
└── ...
\`\`\`

### Bước 4: Test local
1. Chạy `npm run dev` để start local server
2. Mở http://localhost:3000
3. Đi đến phần Resume và test download

### Bước 5: Deploy
1. Push code lên GitHub
2. Deploy lên Vercel/Netlify
3. Test chức năng download trên production

## Lưu ý quan trọng
- ✅ File PDF gốc sẽ được giữ nguyên 100%
- ✅ Không có thay đổi nào về nội dung
- ✅ Không có thay đổi nào về format
- ✅ Người dùng tải về chính xác file bạn upload

## Troubleshooting
- Nếu download bị lỗi: Kiểm tra file có đúng tên và đường dẫn không
- Nếu preview không hoạt động: Kiểm tra file có tồn tại trong public/resume/
- Nếu file quá lớn: Nén file PDF trước khi upload
