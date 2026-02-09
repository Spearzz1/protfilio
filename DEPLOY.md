# 🚀 Deployment Guide (Vercel + Firebase)

Your portfolio uses a **Serverless Architecture** (React Frontend + Firebase Backend).
This is **simpler and free** compared to a full MERN stack (Node/Mongo), while still providing all the functionality you need.

## 1. Prerequisites
- **GitHub Account**: [Sign up here](https://github.com/)
- **Vercel Account**: [Sign up here](https://vercel.com/signup)
- **Firebase Project**: [Console](https://console.firebase.google.com/)

---

## 2. Step-by-Step Deployment

### Phase A: Push to GitHub
1.  Log in to GitHub and create a **New Repository** named `portfolio`.
2.  Open your project terminal and run:
    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    git branch -M main
    git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
    git push -u origin main
    ```

### Phase B: Deploy to Vercel
1.  Go to your **Vercel Dashboard** and click **"Add New Project"**.
2.  Select the `portfolio` repository you just created.
3.  **Framework Preset**: Vercel should auto-detect `Vite`.
4.  **Environment Variables**:
    *   Currently, your Firebase config is hardcoded in `src/lib/firebase.ts`.
    *   *Security Best Practice:* Replace the hardcoded values with variables like `VITE_API_KEY` and add them here.
    *   *For now:* You can skip this if you haven't extracted variables yet.
5.  Click **Deploy**.

---

## 3. Firebase Configuration (Important!)
For your contact form to work on the live site:

1.  Go to **Firebase Console** > **Project Settings**.
2.  Scroll down to "Your apps" > "Web".
3.  Copy the `firebaseConfig` object values.
4.  Ensure `src/lib/firebase.ts` has these correct values.
    *   *If you changed `src/lib/firebase.ts` locally, push the changes to GitHub.* Vercel will auto-update.

### **Firestore Database Rules**
To allow people to send messages without logging in:
1.  Go to **Firebase Console** > **Firestore Database** > **Rules**.
2.  Change `allow read, write: if false;` to:
    ```javascript
    rules_version = '2';
    service cloud.firestore {
      match /databases/{database}/documents {
        match /messages/{document=**} {
          allow create: if true;  // Anyone can send a message
          allow read: if false;   // Only admin (you) can read via Admin View
        }
      }
    }
    ```
3.  Click **Publish**.

---

## 4. Verification
1.  Open your new Vercel URL (e.g., `https://portfolio.vercel.app`).
2.  Go to **Contact**.
3.  Send a test message.
4.  Verify you get the "Message sent!" notification.
5.  Click "View Messages (Admin)", enter password `admin123`, and check if it appears.

---

## Need MERN?
If you **must** use Node.js/Express/MongoDB (e.g., for a class assignment), the project requires a major restructure.
*   **Current status:** Frontend-only (Serverless).
*   **Action:** Let me know if you strictly require a separate backend server.
