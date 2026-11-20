# 🐖🐓 FlockGuard - Smarter Farms. Safer Flocks.

A full-stack platform to help pig & poultry farmers implement biosecurity measures, detect diseases early, and receive timely alerts — empowering farmers with digital tools for healthier livestock and improved productivity.

## 🌍 Problem Statement

Pig & poultry farms in India face devastating disease outbreaks like **Avian Influenza (bird flu)** and **African Swine Fever (ASF)**.
These outbreaks cause mass culling, huge economic losses, and threaten food security — with smallholder farmers most affected.

📉 Example losses:

- ₹25,000 crore annual poultry disease losses (HPAI).

- ₹982 crore ASF losses (2021–2025, across NE states).

- 69,000+ pigs dead, 52,000+ culled in 2025 alone.

## 🎯 Our Solution

### A Digital Farm Management Portal with:

- User Roles → Farmer, Vet, Pharmacy, Admin.

- Farm Profiles → Setup pig/poultry farms with details.

- AI Disease Detection → Farmers upload images → ML model predicts disease.

- Digital Health Reports → Store reports with predictions, vet notes, and prescriptions.

- Alerts & Notifications → Admin/vets push outbreak alerts based on region.

- Training Hub → Multilingual, mobile-first biosecurity training modules.

- Marketplace Link → Farmers can directly reach vets & pharmacies for medicines (revenue model).

## 🛠️ Tech Stack

**Mobile :**

- React-Native Cli

**Frontend (client):**

- React + Vite

- Tailwind CSS (mobile-first UI)

**Backend (server):**

- Node.js + Express

- MongoDB (Mongoose ODM)

- JWT Authentication + Cookies

- Cloudinary (image upload)

**ML Service (ml):**

- Flask + Python

- Pre-trained model for disease detection

**Other Tools:**

- Docker (containerization)

- GitHub Actions (CI/CD)

## Folder Structure

```
project-root/
│── client/
│── server/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middlewares/
│   ├── utils/
│── mobile/
│── ml/
│── docs/
│── README.md
```

## 📖 Documentation

- [API Endpoints](./docs/API.md) → All REST APIs with roles & permissions.  
- [Workflow](./docs/WORKFLOW.md) → End-to-end demo flow + report lifecycle.  


## Future Scope

- IoT sensor integration for real-time farm monitoring.

- Government API integration for official outbreak data.

- Advanced AI risk assessment tools.

- Expand to other livestock sectors.

## Author

- Hardik