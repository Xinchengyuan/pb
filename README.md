# PetersBoat Django Project

This project is written in **Python** using the **Django** framework.

## 🛠️ Setup Instructions

It is **recommended** to create a virtual environment (`venv`) in the project’s **parent directory** before running the project.

---

### 1. Create and Activate a Virtual Environment

#### 🔧 Linux
```bash
sudo apt-get install python3-venv  # Install venv if not already installed
python3 -m venv .venv
source .venv/bin/activate
```

#### 🍎 macOS
```bash
python3 -m venv .venv
source .venv/bin/activate
```

#### 🪟 Windows
```cmd
py -3 -m venv .venv
.venv\Scripts\activate
```

---

### 2. Install Dependencies

#### 📦 Install Django
```bash
pip install django
# or
pip3 install django
```

> This will automatically install most of the packages listed in `requirements.txt`.

#### 🤖 Install OpenAI package (required for GPT response)
```bash
pip install openai
# or
pip3 install openai
```

#### 🌿 Install python-dotenv (required for `.env` support)
```bash
pip install python-dotenv
# or
pip3 install python-dotenv
```

---

### 3. Set Up the Environment File

1. Navigate to the directory: `pb/petersboat`
2. Create a file named `.env` (with no filename prefix).
3. Inside the `.env` file, add your OpenAI API key:
```
OPENAI_API_KEY="your_openai_api_key_here"
```

> Replace `"your_openai_api_key_here"` with your actual key.

---

### 4. Run the Project

```bash
cd pb/petersboat
python3 manage.py runserver
```

Then open the link to `http://localhost:8000` displayed in the terminal.

---

## ✅ You're all set!

You can now test GPT responses and interact with the project through the local server.
