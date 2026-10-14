# Grifty - Linhas e Formas

Landing page do curso Linhas e Formas, desenvolvida com React e Vite.

## Organização

- `src/pages/home/`: página principal e seus componentes em `components/`.
- `src/pages/babyshaggy/`: página Baby Shaggy e seus componentes em `components/`; sua rota permanece desativada.
- `src/components/`: componentes independentes das páginas.
- `src/assets/`: imagens e fontes importadas pelo código.
- `src/global.css`: estilos globais.
- `public/`: arquivos servidos pelos caminhos públicos existentes.
- `docs/`: documentos de referência do projeto.

## Desenvolvimento local

```bash
npm ci
npm run dev
```

## Build de produção

```bash
npm run build
```

O resultado é gerado em `dist/`.

## Publicação na Vercel

O projeto inclui `vercel.json` com detecção do Vite, diretório de saída e fallback de rotas para a SPA. Ao importar este repositório na Vercel, mantenha o diretório raiz como a raiz do repositório.
