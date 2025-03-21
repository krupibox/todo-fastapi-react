from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from backend import models, schemas, crud, database

# Создание таблиц в базе данных
models.Base.metadata.create_all(bind=database.engine)
print("Database initialized")  # ✅ Проверка инициализации базы данных

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Или ["http://localhost:5173"] для большей безопасности
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
@app.get("/")
def root():
    return {"message": "FastAPI is running"}

@app.get("/tasks/")
def read_tasks(db: Session = Depends(database.get_db)):
    return crud.get_tasks(db)

@app.post("/tasks/")
def create_task(task: schemas.TaskCreate, db: Session = Depends(database.get_db)):
    return crud.create_task(db, task)

@app.delete("/tasks/{task_id}")
def delete_task(task_id: int, db: Session = Depends(database.get_db)):
    return crud.delete_task(db, task_id)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("backend.main:app", host="127.0.0.1", port=8000, reload=True)