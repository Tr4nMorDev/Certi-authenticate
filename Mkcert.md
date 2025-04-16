# Hướng dẫn tạo chứng chỉ SSL Local bằng mkcert trên Ubuntu

## ✅ Giới thiệu

`mkcert` là một công cụ giúp tạo chứng chỉ SSL tự ký dễ dàng để dùng trong môi trường local (localhost, 127.0.0.1...) mà không bị trình duyệt cảnh báo.

---

//ip addr show -- 172.28.206.187

## 🔧 Bước 1: Cài đặt mkcert và các công cụ phụ thuộc

```bash
sudo apt update
sudo apt install libnss3-tools -y
```

## Bước 2 : Cài CA cho local

```bash
mkcert -install
```

## 🧾 Bước 3: Tạo chứng chỉ cho domain local

```bash
mkcert ip
```

## Buớc 4 :

Lúc này chuyển sang SslNx.md

## Bước 5 :

mkcert -CAROOT

nằm ở : /home/mortal_user/.local/share/mkcert

file này nằm ở cp : sudo cp "$(mkcert -CAROOT)/rootCA.pem" /home/mortal_user/Chung-chi-CA/rootCA.crt

## Bước 6 :

sudo cp /home/mortal_user/Chung-chi-CA/web-basic/\*.html /var/www/html/
