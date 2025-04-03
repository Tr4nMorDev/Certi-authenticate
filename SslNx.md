# 🚀 Hướng Dẫn Cấu Hình SSL Cho Nginx

## 🛠 Bước 1: Cài Đặt Nginx (Nếu Chưa Có)

Chạy lệnh sau để cài đặt Nginx trên Ubuntu:

```bash
sudo apt update
sudo apt install nginx -y
```

---

## 🛠 Bước 2: Cấu Hình Nginx Sử Dụng SSL

Mở file cấu hình Nginx:

```bash
sudo nano /etc/nginx/sites-available/default
```

Thêm hoặc chỉnh sửa nội dung sau:

```nginx
server {
    listen 443 ssl;
    server_name example.com; # Hoặc localhost nếu chạy local

    ssl_certificate /path/to/website.crt;
    ssl_certificate_key /path/to/website.key;

    location / {
        root /var/www/html;
        index index.html;
    }
}

# Redirect HTTP sang HTTPS
server {
    listen 80;
    server_name example.com;

    return 301 https://$host$request_uri;
}
```

📌 **Lưu ý:**

- Thay `/path/to/website.crt` và `/path/to/website.key` bằng đường dẫn thực tế đến file chứng chỉ của bạn.
- Nếu chỉ dùng trên **localhost**, hãy đặt `server_name localhost`.

---

## 🛠 Bước 3: Kiểm Tra & Khởi Động Lại Nginx

Kiểm tra cấu hình có lỗi không:

```bash
sudo nginx -t
```

Nếu không có lỗi, khởi động lại Nginx:

```bash
sudo systemctl restart nginx
```

---

## 🚀 Bước 4: Truy Cập Website Qua HTTPS

Mở trình duyệt và truy cập:

```
https://example.com
hoặc
https://localhost (nếu chạy trên local)
```

Nếu CA của bạn chưa được thêm vào **Trusted Root CA**, trình duyệt sẽ báo **"Không an toàn"**. Bạn cần thêm CA vào theo hướng dẫn trong `TrustedRootCA.md`.

✅ **Hoàn thành!** 🎉 Nếu có lỗi, kiểm tra lại từng bước hoặc liên hệ để được hỗ trợ.
