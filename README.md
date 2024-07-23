# ex_vlruiz108-estrutura_para_next

## 1 Como deverá ficar a estrutura
your-project/
├── backend/
│   ├── controllers/
│   │   ├── authController.ts
│   │   ├── imageController.ts
│   │   └── logController.ts
│   ├── routes/
│   │   ├── authRoutes.ts
│   │   ├── imageRoutes.ts
│   │   └── logRoutes.ts
│   ├── utils/
│   │   └── geolocation.ts
│   ├── index.ts
│   └── package.json
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   │   ├── api/
    │   │   │   ├── auth/
    │   │   │   │   └── signup.ts
    │   │   ├── Home.tsx
    │   │   └── index.tsx
    │   └── App.tsx
    ├── tsconfig.json
    ├── next.config.js
    ├── package.json
    └── public/

## Backend

Config backend/package.json
backend/tsconfig.json
backend/index.ts

### Controladores
backend/controllers/authController.ts
backend/controllers/imageController.ts
backend/controllers/logController.ts

### Rotas
backend/routes/authRoutes.ts
backend/routes/imageRoutes.ts
backend/routes/logRoutes.ts

## Utilitário de Geolocalização
backend/utils/geolocation.ts

## Frontend
frontend/tsconfig.json
frontend/src/pages/api/auth/signup.ts
frontend/src/pages/Home.tsx

### Conclusão
Backend em Node.js utilizando TypeScript e o frontend em React com TypeScript integrados de forma adequada. Não esquecer de ajustar as URLs e as chaves de API conforme necessário para o projeto.
