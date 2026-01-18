# 📕 FRONTEND README  
📁 Repo: `neurostack-frontend`

---

```md
# 🎨 NeuroStack Frontend — SaaS Support Copilot UI

This repository contains the **frontend** for **NeuroStack – SaaS Support Copilot**, built using **Next.js** and **Tailwind CSS**.

The UI allows users to:
- Ask natural language questions
- View AI-generated answers
- See source references for transparency

---

## 🖥️ Features

- Modern **dark UI** with magenta & blue gradients
- Responsive design
- Clean UX for Q&A
- Source attribution display
- Error handling for backend connection

---

## 🧱 Tech Stack

- **Next.js (App Router)**
- **TypeScript**
- **Tailwind CSS**
- **Vercel** for deployment

---

## 📂 Project Structure

frontend/
├── app/
│ └── page.tsx # Main UI page
├── public/
├── styles/
├── package.json
└── README.md

yaml
Copy code

---

## 🔗 Backend Integration

The frontend sends requests to the backend:

```ts
POST /query
{
  "question": "How do I create a project?"
}
Local Backend URL
ts
Copy code
http://127.0.0.1:8000/query
🚀 Run Locally
bash
Copy code
cd frontend
npm install
npm run dev
Open:

arduino
Copy code
http://localhost:3000
🌐 Deployment
The frontend is deployed on Vercel.

🔗 Live Demo:
https://neurostack-frontend1.vercel.app/

⚠️ Deployment Note
Local backend works perfectly with the frontend

Hugging Face Spaces restrict direct REST access

For demos, frontend is connected to a local backend

Architecture is cloud-ready and scalable

👤 Author
Shivanshu Sinha
Frontend & GenAI Developer
NeuroStack GenAI Build Sprint
