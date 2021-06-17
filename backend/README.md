# How to run backend locally

### Step 1:

Clone entire repository by using    
``$ git clone https://github.com/Debu922/SolarAdvisorApp``

### Step 2:
Open cloned repository in VSCode.

### Step 3:
If python is not installed. Install Python3
If python is installed, install pipenv by   
``$ pip3 install pipenv``

### Step 4:
Navigate to the backend folder, and initialize pipenv.  
``$ pipenv shell``   
``$ pipenv sync``

### Step 5:
Launch backend by doing  
``$ python3 manage.py migrate``   
``$ python3 manage.py runserver``  

The server should have launched at ``http://localhost:8000``

### How to launch again

To launch again later, just do 
``$ pipenv shell`` once in the backend folder. and then do ``$ python3 manage.py runserver``