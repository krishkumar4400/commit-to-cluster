# base image
FROM python:3.10-slim

# work directory
WORKDIR /home/app

# copy list of dependencies to the image
COPY requirements.txt .

# install the dependencies
RUN pip install --no-cache -r requirements.txt

# copy the source code
COPY . .

# expose the port on which the application is running
EXPOSE 5000

# run the application
CMD [ "python", "main.py" ]
