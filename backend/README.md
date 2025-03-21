# Установка окружения

python3 -m venv venv
source venv/bin/activate


# Структура

todo-app/
├── backend/          # FastAPI
│   ├── main.py
│   ├── models.py
│   ├── database.py
│   ├── crud.py
│   └── schemas.py
├── frontend/         # React
│   ├── src/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── pages/
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── api.ts
└── .gitignore