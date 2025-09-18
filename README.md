# TricoLog - Gestão Inteligente para Terapeutas Capilares

Este projeto foi migrado de HTML/CSS/JavaScript para React moderno com Tailwind CSS, mantendo toda a identidade visual e funcionalidades originais.

## 🚀 Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript para construção de interfaces
- **Tailwind CSS** - Framework CSS utilitário para estilização
- **React Router DOM** - Roteamento para navegação entre páginas
- **Vite** - Build tool e servidor de desenvolvimento
- **Font Awesome** - Ícones
- **Google Fonts** - Fontes Poppins e Open Sans

## 📋 Funcionalidades

### Página Landing
- Navbar responsiva com navegação suave
- Seção Hero com gradientes e animações
- Cards de funcionalidades com hover effects
- Seção de preços com planos detalhados
- Depoimentos de clientes
- Modal de contato
- Design totalmente responsivo

### Página de Anamnese
- Formulário multi-etapas com 9 seções
- Navegação lateral com indicadores visuais
- Barra de progresso dinâmica
- Pop-ups informativos para termos técnicos
- Validação de campos
- Coleta e armazenamento de dados
- Interface responsiva

## 🎨 Identidade Visual

O projeto mantém fielmente a identidade visual original:

- **Cores principais:**
  - Azul Tech: `#3D7CB8`
  - Azul Escuro: `#2A5C8B`
  - Verde Menta: `#6BD6B1`
  - Lilás: `#B8A1C9`
  - Cinza Claro: `#F5F7FA`

- **Fontes:**
  - Títulos: Poppins (400, 600, 700)
  - Corpo: Open Sans (400, 600)

- **Gradientes:**
  - Gradiente principal: `linear-gradient(135deg, #6BD6B1, #B8A1C9)`

## 🛠️ Instalação e Execução

### Pré-requisitos
- Node.js (versão 18 ou superior)
- pnpm (recomendado) ou npm

### Passos para executar

1. **Clone o repositório ou extraia os arquivos**

2. **Instale as dependências**
   ```bash
   pnpm install
   # ou
   npm install
   ```

3. **Execute o servidor de desenvolvimento**
   ```bash
   pnpm run dev
   # ou
   npm run dev
   ```

4. **Acesse a aplicação**
   - Abra seu navegador e vá para `http://localhost:5173`

### Scripts Disponíveis

- `pnpm run dev` - Inicia o servidor de desenvolvimento
- `pnpm run build` - Gera a build de produção
- `pnpm run preview` - Visualiza a build de produção
- `pnpm run lint` - Executa o linter

## 📁 Estrutura do Projeto

```
tricolog-react/
├── public/                 # Arquivos públicos
├── src/
│   ├── assets/            # Imagens e recursos
│   ├── components/        # Componentes React
│   │   ├── Landing.jsx    # Página de landing
│   │   ├── Anamnese.jsx   # Página de anamnese
│   │   └── ui/            # Componentes UI (shadcn/ui)
│   ├── hooks/             # Custom hooks
│   ├── lib/               # Utilitários
│   ├── App.jsx            # Componente principal
│   ├── App.css            # Estilos globais
│   └── main.jsx           # Ponto de entrada
├── index.html             # Template HTML
├── package.json           # Dependências e scripts
├── tailwind.config.js     # Configuração do Tailwind
└── vite.config.js         # Configuração do Vite
```

## 🔄 Rotas

- `/` - Página de landing
- `/anamnese` - Formulário de anamnese capilar
- `/login` - Página de login (em desenvolvimento)

## 📱 Responsividade

O projeto é totalmente responsivo e funciona perfeitamente em:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (até 767px)

## 🎯 Migração Realizada

### Do Original para React:

1. **HTML → JSX**: Conversão de todas as estruturas HTML para componentes React
2. **CSS → Tailwind**: Migração de estilos CSS customizados para classes Tailwind
3. **JavaScript → React Hooks**: Conversão da lógica JavaScript para hooks React (useState, useEffect)
4. **Assets**: Todos os assets (imagens, fontes) foram preservados e organizados
5. **Funcionalidades**: Todas as funcionalidades originais foram mantidas:
   - Navegação entre seções da anamnese
   - Pop-ups informativos
   - Validação de formulários
   - Barra de progresso
   - Modal de contato

## 🚀 Deploy

Para fazer deploy da aplicação:

1. **Gere a build de produção**
   ```bash
   pnpm run build
   ```

2. **A pasta `dist/` conterá todos os arquivos para deploy**

3. **Faça upload da pasta `dist/` para seu servidor web**

## 📞 Suporte

Para dúvidas ou suporte técnico, entre em contato através do modal "Fale Conosco" na aplicação.

---

**Desenvolvido com ❤️ usando React e Tailwind CSS**

