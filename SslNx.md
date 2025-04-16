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

```bash
sudo chown $USER /etc/nginx/sites-available/default
sudo code /etc/nginx/sites-available/default
sudo -E code /etc/nginx/sites-available/default --user-data-dir="~/.vscode-root" --no-sandbox
```

## 🛠 Bước 3: Timf đường dẫn tới file website.key và website.srt

Thêm hoặc chỉnh sửa nội dung sau:

```nginx
server {
	listen 443 ssl default_server;
	listen [::]:443 ssl default_server;

	root /var/www/html;

	index index.html ;

	server_name localhost;

	ssl_certificate     /home/mortal_user/Chung-chi-CA/172.28.206.187.pem;
    ssl_certificate_key /home/mortal_user/Chung-chi-CA/172.28.206.187-key.pem;

	location / {
		# First attempt to serve request as file, then
		# as directory, then fall back to displaying a 404.
		try_files $uri $uri/ =404;
	}

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
