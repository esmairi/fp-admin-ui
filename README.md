# 📘 Documentation 



## docker: Run dev


### Build

set the API_BASE_URL in .env

```
docker build -t fastapi-admin-front .
```

### Run


```
docker run -it --rm -p 5173:5173 fastapi-admin-front
```




Go to

http://localhost:5173/admin


add temprary token in cookies

key: token

value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTc0OTkyMzAxNn0.tHK4A1GtEed24-r6Z2HEc3VTPgwe5ZL-AvnnDdd8UOw
