# Nightriots.com Rebuild 

## Description

This repository contains the code for a revamped version of [nightriots.com](https://www.nightriots.com). Built with React and Tailwind CSS, this version aims to be a mobile-first, fast, and modern web experience for all Night Riots fans out there.

### 🌟 Features

- Mobile-first design
- Various ways to listen to and buy Night Riots music
- Fast and efficient, thanks to React and Tailwind CSS
- Replaces the old Square Space site with a modern tech stack

## 🛠️ Installation

### Prerequisites

Make sure you have Node.js and npm installed on your machine. If not, you can download and install them from the official [Node.js website](https://nodejs.org/).

### Steps

1. **Clone the repository**

    ```bash
    git clone https://github.com/mattriots/nightriots.git
    cd nightriots
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Set up Tailwind CSS (if not already set up)**

    ```bash
    npm install tailwindcss
    ```

    Add Tailwind to your CSS by including the following lines in **index.css** (though this should already be setup if you cloned this repo):

    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

4. **Start the development server**

    ```bash
    npm start
    ```

    This will start the development server, and the project will be available at `http://localhost:3000/`.

## 🚀 Deployment

For deployment, you can use any cloud service you prefer. Make sure to build the project before deploying:

```bash
npm run build
```

## 🌱 Next Steps

### Setting up and Utilizing Continuous Integration with GitHub Actions
I aim to set up CI/CD pipelines using GitHub Actions to automate testing and deployment tasks.

### Figuring out how to upload and launch the updated site on nightriots.com
The next major milestone is to launch the updated site to replace the old Square Space-based website. I am exploring various deployment options and strategies.

### Utilize APIs from Spotify or Other Music Sources
To enhance the user experience, I plan to integrate APIs from Spotify or other music platforms to offer more interactive and rich content, such as music previews, playlists, and artist information.

---

## 🤝 Contributing

Contributions are welcome! To get started, fork the repository, make your changes, and submit a pull request. For major changes, please open an issue for discussion before submitting a pull request.

## 📜 Licenses

- The code in this project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.




