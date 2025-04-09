## 🛠 Bước 1: Thêm CA vào "Trusted Root CA" của hệ thống

👉 Điều này giúp trình duyệt tin tưởng CA và không cảnh báo "Không an toàn" khi vào website.

### 🔹 Trên Ubuntu/Linux:

```bash
sudo cp ca.crt /usr/local/share/ca-certificates/ca.crt
sudo update-ca-certificates
```

📌 **Giải thích:**

- Copy CA (`localhost.crt`) vào thư mục chứa chứng chỉ tin cậy của hệ thống.
- Chạy `update-ca-certificates` để hệ thống nhận diện CA mới.

### 🔹 Trên macOS:

```bash
sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain localhost.crt
```

### 🔹 Trên Windows:

1. Mở **"Manage Computer Certificates"** (Nhấn `Win + R`, gõ `certmgr.msc`, Enter).
2. Vào mục **"Trusted Root Certification Authorities" → Certificates**.
3. Click chuột phải → **All Tasks → Import**.
4. Chọn `localhost.crt` và hoàn tất quá trình import.
