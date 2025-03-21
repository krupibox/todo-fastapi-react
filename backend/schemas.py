from pydantic import BaseModel

class TaskBase(BaseModel):
    title: str
    is_completed: bool = False

class TaskCreate(TaskBase):
    pass

class Task(TaskBase):
    id: int

    class Config:
        from_attributes = True