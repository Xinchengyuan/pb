The project is written in Python under Django framwork. To run, it's recommanded to create a virtual environment(venv) inside the project parent directory:

# Linux
sudo apt-get install python3-venv    # If needed
python3 -m venv .venv

source .venv/bin/activate

# macOS
python3 -m venv .venv

source .venv/bin/activate

# Windows
py -3 -m venv .venv

.venv\scripts\activate

Then install Django using 
pip install django
or
pip3 install django

which should automatically get most of the packages in requirements.txt installed.

You may also need to run 
  pip -install openai
  or
  pip3 -install openai 
As the package openai is also required

To test gpt response, follow these steps:

1. Install dotenv using

   pip install dotenv
   or
   pip3 install dotenv

   So that petersboat/petersbooat/settings.py will work
   
2. In pb/petersboat, create a new file named .env without any filename before the . 
4. In .env file, enter OPENAI_API_KEY = "Your_openai_api_key", replace your Your_openai_api_key with your openai api key

To run the project
Cd to pb/petersboat
run

python3 manage.py runserver

Then follow the link to localhost displayed in the terminal
   
