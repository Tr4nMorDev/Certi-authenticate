# Tạo và Kiểm Tra Chứng Chỉ Self-Signed CA bằng OpenSSL

## 🚀 Bước 1: Tạo CA Tự Ký (Self-Signed CA)

Tạo chứng chỉ CA để cấp phát chứng chỉ SSL trên ubuntu tại thư mục được cấp

```sh
openssl req -x509 -newkey rsa:4096 -keyout ca.key -out ca.crt -days 365 -nodes
```

📌 **Ví dụ thông tin nhập vào:**

```
Country Name (2 letter code) [AU]: VN (hoặc bỏ trống)
State or Province Name: Ho Chi Minh
Locality Name: Ho Chi Minh City
Organization Name: My Local CA
Organizational Unit Name: IT Department
Common Name: localhost (quan trọng, nếu chỉ dùng trên local)
Email Address: your-email@example.com (hoặc bỏ trống)
```

📌 **File tạo ra:**

- `ca.key`: Khóa riêng của CA.
- `ca.crt`: Chứng chỉ CA.

- Bạn có thể mở 2 file này để xem chi tiết bằng cách khởi chạy

```sh
openssl x509 -in ca.crt -text -noout
```

```sh
openssl x509 -in ca.crt -text -noout
```

## 🔹 Bước 2: Tạo Chứng Chỉ SSL cho Website

### 2.1. Tạo yêu cầu chứng chỉ (CSR) và khóa riêng

```sh
openssl req -new -newkey rsa:4096 -keyout website.key -out website.csr -nodes
```

📌 **File tạo ra:**

- `website.key`: Khóa riêng của website.
- `website.csr`: Yêu cầu chứng chỉ (CSR).

### 2.2. Dùng CA cấp chứng chỉ SSL cho website

```sh
openssl x509 -req -in website.csr -CA ca.crt -CAkey ca.key -CAcreateserial -out website.crt -days 365
```

📌 **File tạo ra:**

- `website.crt`: Chứng chỉ SSL của website.

## 🔍 Bước 3: Kiểm Tra Chứng Chỉ và Khóa

### Kiểm tra chứng chỉ CA

```sh
openssl x509 -in ca.crt -text -noout
```

### Kiểm tra chứng chỉ website

```sh
openssl x509 -in website.crt -text -noout
```

### Kiểm tra khóa riêng của website

```sh
openssl rsa -in website.key -check
```

## 🌐 Bước 4: Cấu Hình HTTPS cho Web Server

## ✅ Bước 5: Thêm CA vào Trusted Root CA của Trình Duyệt

1. Mở trình duyệt và vào phần **Quản lý chứng chỉ**.
2. Chọn **Import** → **Chọn file `ca.crt`** → **Thêm vào Trusted Root CA**.
3. Tải lại website và kiểm tra HTTPS đã hoạt động.

---

🎉 **Bạn đã hoàn thành việc tạo và sử dụng chứng chỉ SSL tự ký!**
