# Create and push the GitHub repository

Repository name:

```text
Emife1-portfolio
```

## Option A: GitHub website, simplest

1. Go to `https://github.com/new`.
2. Repository name: `Emife1-portfolio`.
3. Visibility: Public or Private.
4. Do not add a README, `.gitignore`, or license because this package already includes them.
5. Click **Create repository**.
6. Upload these project files or use Option B from your machine.

## Option B: Terminal from your machine

From the folder containing this project:

```bash
cd Emife1-portfolio
git init
git branch -M main
git add .
git commit -m "Initial portfolio build"
git remote add origin https://github.com/YOUR-GITHUB-USERNAME/Emife1-portfolio.git
git push -u origin main
```

Replace `YOUR-GITHUB-USERNAME` with your GitHub username.

## Add Emife1 as collaborator

After the repo is created:

1. Open the repo in GitHub.
2. Go to **Settings**.
3. Go to **Collaborators** or **Collaborators and teams**.
4. Click **Add people**.
5. Search for `Emife1`.
6. Give her **Write** access.
7. Send the invite.

## Vercel deployment

After the repo is in GitHub:

1. Go to Vercel.
2. Click **Add New Project**.
3. Import `Emife1-portfolio`.
4. Framework preset: `Next.js`.
5. Install command: `npm install`.
6. Build command: `npm run build`.
7. Production branch: `main`.
8. Click **Deploy**.
