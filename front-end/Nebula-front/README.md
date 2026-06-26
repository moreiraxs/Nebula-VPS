# 🛡️ Nebula VPS — Frontend

> ⚠️ **Projeto em construção** — Este repositório está em desenvolvimento ativo. Funcionalidades podem estar incompletas ou sujeitas a mudanças.

---

## Sobre o projeto

Frontend da landing page do **Nebula VPS**, um serviço de VPN com servidores em mais de 60 países. Construído com React, TypeScript, Vite e Tailwind CSS.

---

## Stack

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/) — ícones

---

## Como rodar

### Pré-requisitos

- [Node.js](https://nodejs.org/) instalado (versão 18 ou superior)
- [npm](https://www.npmjs.com/) instalado

### Passo a passo

**1. Clone o repositório**

```bash
git clone https://github.com/seu-usuario/Nebula_VPS.git
```

**2. Acesse a pasta do frontend**

```bash
cd Nebula_VPS/front-end/Nebula-front
```

**3. Instale as dependências**

```bash
npm install
```

**4. Rode o servidor de desenvolvimento**

```bash
npm run dev
```

**5. Acesse no navegador**

```
http://localhost:5173
```

---

## Estrutura de pastas

```
Nebula-front/
├── src/
│   ├── assets/          # Imagens e ícones estáticos
│   ├── components/
│   │   └── layout/      # Componentes reutilizáveis (Cards, Header, NetworkMap)
│   └── pages/
│       ├── home/        # Seções da página principal
│       └── planos.tsx/  # Página de planos
├── public/
├── index.html
└── package.json
```

---

## Status do projeto

| Seção | Status |
|---|---|
| Header | ✅ Concluído |
| Hero Section | ✅ Concluído |
| Rede de Servidores (SVG) | ✅ Concluído |
| Cards de Estatísticas | ✅ Concluído |
| Cards de Recursos | ✅ Concluído |
| Seção de Planos | ✅ Concluído |
| Página de Servidores | 🚧 Em construção |
| Backend (C# ASP.NET Core) | 🔜 Não iniciado |
| Integração Vultr API | 🔜 Não iniciado |
| Integração Marzban/Xray | 🔜 Não iniciado |
| Autenticação (JWT) | 🔜 Não iniciado |

---

## Roadmap

- [ ] Finalizar seção de servidores com busca funcional
- [ ] Criar página de suporte
- [ ] Desenvolver backend em C# ASP.NET Core
- [ ] Integrar API do Vultr para provisionamento de servidores
- [ ] Integrar Marzban/Xray para gerenciamento de usuários VPN
- [ ] Sistema de autenticação e painel do cliente
- [ ] Integração com gateway de pagamento

---

> Desenvolvido por Lucas Moreira
