# 🚀 Elevantra - Job Finder App

![Elevantra Logo ](https://github.com/NuhDemir/Elevantra/blob/main/img/elevantra%20logo.png?raw=true)

Elevantra, iş arayanlar ile işverenleri modern bir kullanıcı deneyimiyle buluşturan tam donanımlı bir iş ilanı platformudur. Bu proje, yazılım geliştiricileri için katmanlı mimari ile geliştirilmiş bir **Node.js backend** ve **React frontend** içermektedir.

---

## 🧱 Katmanlı Mimari (Backend)

Backend yapısı, sürdürülebilirlik ve ölçeklenebilirlik amacıyla aşağıdaki katmanlara ayrılmıştır:

```
Elevantra-Backend/
├── src/
│   ├── controllers/      # HTTP isteklerini yöneten katman
│   ├── services/         # İş kuralları ve mantık
│   ├── repositories/     # Veritabanı işlemleri
│   ├── models/           # Mongoose şemaları (MongoDB)
│   ├── routes/           # API endpoint tanımlamaları
│   ├── middlewares/      # Yetkilendirme, hata yakalama vb.
│   └── utils/            # Yardımcı fonksiyonlar
├── .env
├── app.js
└── package.json
```

### ⚙️ Teknolojiler
- **Node.js + Express**
- **MongoDB + Mongoose**
- **JWT Auth + RBAC**
- **dotenv, bcrypt, helmet, cors, express-validator**

---

## 💻 React Frontend

Modern, tek sayfalık bir uygulama (SPA) olarak tasarlanmıştır:

```
Elevantra-Frontend/
├── public/
├── src/
│   ├── components/       # Reusable UI parçaları
│   ├── pages/            # Route bazlı sayfalar (Home, JobList, Login vs.)
│   ├── services/         # Axios API istekleri
│   ├── hooks/            # Custom React Hooks
│   ├── contexts/         # Auth & User Context
│   ├── assets/           # Görseller, ikonlar
│   └── App.jsx
├── .env
└── package.json
```

### 🎨 Teknolojiler
- **React 18+**
- **React Router DOM**
- **Axios**
- **TailwindCSS**
- **Context API**
- **React Toastify**

---

## 🔐 Authentication Akışı

- JWT ile kullanıcı doğrulama (login/signup)
- Role-based access: İş arayan ve İşveren rolleri
- React frontend'de private route koruması

---

## 📦 Nasıl Çalıştırılır?

### Backend:
```bash
cd Elevantra-Backend
npm install
npm run dev
```

### Frontend:
```bash
cd Elevantra-Frontend
npm install
npm start
```

---

## 📁 GitHub Repositories

| Katman | Açıklama | Bağlantı |
|--------|----------|----------|
| **Backend** | Node.js + Express ile katmanlı mimari | 
| **Frontend** | React SPA + Tailwind arayüz | 

---

## 📚 Öğrenim Hedefleri

| Konu               | Açıklama                                |
|--------------------|------------------------------------------|
| Katmanlı Mimari    | Temiz ve sürdürülebilir kod yapısı       |
| REST API Geliştirme| Express ile uçtan uca API tasarımı       |
| React SPA          | Bileşen tabanlı kullanıcı arayüzü        |
| Auth Sistemi       | JWT ile kimlik doğrulama ve yetkilendirme|

---

## 👤 Geliştirici

- **Adınız:** [Your Name]
- **GitHub:** [@YourGitHubUsername](https://github.com/NuhDemir)

---

## 📄 Lisans

Bu proje MIT lisansı ile sunulmaktadır. Daha fazla bilgi için `LICENSE` dosyasına göz atabilirsiniz.
