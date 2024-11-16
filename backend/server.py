from fastapi import FastAPI, File, UploadFile
from fastapi.responses import JSONResponse
from io import BytesIO
from fastapi.middleware.cors import CORSMiddleware

# Initialize FastAPI app
app = FastAPI()

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:8080",
    "http://localhost:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Endpoint to handle image upload
@app.post("/upload/")
async def upload_image(file: UploadFile = File(...)):
    try:
        # Read image content
        image_content = await file.read()

        # Then save the image to a local file
        with open(f"uploaded_{file.filename}", "wb") as f:
            f.write(image_content)

        # Then add logic here to send the image to OpenAI api
        # error log
        print("Hello World")

        return JSONResponse(content={"message": "Image uploaded successfully", "filename": file.filename}, status_code=200)

    except Exception as e:
        return JSONResponse(content={"message": str(e)}, status_code=500)