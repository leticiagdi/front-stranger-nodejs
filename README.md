# 🔬 Laboratório de Hawkins - Sistema de Controle de Sujeitos

Um sistema de cadastro e gerenciamento de sujeitos de experimentos telecinéticos, inspirado no universo de **Stranger Things**.

## 📋 Sobre o Projeto

Este projeto simula o sistema interno do Laboratório de Hawkins para registro e monitoramento de sujeitos com habilidades psíquicas especiais. Desenvolvido em React com uma interface dark mode e efeitos visuais que remetem aos anos 80.

## ✨ Funcionalidades

- 📝 **Cadastro de Sujeitos** com validação de ID-Experimento único
- 🔢 **IDs de Experimento** no formato numérico (001, 011, 008...)
- 🎯 **Classificação de Poderes** em diferentes classes telecinéticas
- 🚨 **Status de Monitoramento** com destaque visual para situações críticas
- 🗑️ **Exclusão de Registros** com confirmação de segurança
- 🌙 **Interface Dark Mode** com tema científico

## 🎨 Características Visuais

- **Tema Dark**: Interface escura para ambiente de laboratório
- **Efeitos de Glitch**: Animação no título principal
- **Status Críticos**: Cores vermelhas para "Em Coma" e "Fuga"
- **Design Científico**: Ícones e tipografia que remetem a documentos governamentais

## 🛠️ Tecnologias Utilizadas

- **React** 19.2.0
- **Bootstrap** 5.3.3 (CDN)
- **CSS3** com animações customizadas

## 🚀 Como Executar

### Pré-requisitos

- Node.js instalado
- npm ou yarn

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/MellMatsuda/TEPIII-Aula-React.git
cd TEPIII-Aula-React
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto:
```bash
npm start
```

4. Abra [http://localhost:3000](http://localhost:3000) no navegador

## 📊 Estrutura de Dados

### Sujeito
```javascript
{
  id: number,
  nome: string,
  idExperimento: string,
  nascimento: date,
  classificacao: string,
  status: string
}
```

### Classificações Disponíveis
- Classe I - Telecinese Básica
- Classe II - Telecinese Avançada  
- Classe III - Poderes Múltiplos
- Classe IV - Poder Psíquico Extremo
- Sem Habilidades
- Classificação Pendente

### Status de Monitoramento
- Em Isolamento
- Sob Teste
- Treinamento Telecinético
- Observação
- Fuga ⚠️
- Em Coma ⚠️
- Liberado

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── Header.js      # Cabeçalho com título e ícone
│   ├── Footer.js      # Rodapé com informações classificadas
│   ├── Input.js       # Componente de input reutilizável
│   ├── Select.js      # Componente de select reutilizável
│   └── Sujeito.js     # Componente de linha da tabela
├── App.js             # Componente principal
├── index.css          # Estilos globais e efeitos
└── index.js           # Ponto de entrada
```

## 🎯 Scripts Disponíveis

### `npm start`
Executa a aplicação em modo de desenvolvimento.
Abra [http://localhost:3000](http://localhost:3000) para visualizar no navegador.


### `npm run build`
Compila a aplicação para produção na pasta `build`.

## 🎨 Customizações Implementadas

- ✅ Mudança de "Paciente" para "Sujeito"
- ✅ Substituição de "CPF" por "ID-Experimento"  
- ✅ Classificações de poderes telecinéticos
- ✅ Status relacionados ao universo Stranger Things
- ✅ Efeitos visuais de laboratório científico
- ✅ Tema dark completo
- ✅ Validações e alertas personalizados


## 🎭 Inspiração

Baseado no universo de **Stranger Things** (Netflix), especificamente no Laboratório Nacional de Hawkins e seus experimentos com crianças com habilidades psíquicas.

---

> **⚠️ CLASSIFICADO** - Este sistema é fictício e foi criado apenas para demonstração educacional.

