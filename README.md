# Grifty - Linhas e Formas

Landing page do curso Linhas e Formas, desenvolvida com React e Vite.

## Organização

- `src/pages/home/`: página principal e seus componentes em `components/`.
- `src/pages/babyshaggy/`: landing page Baby Shaggy, disponível em `/babyshaggy` (com aliases `/baby-shaggy` e `/babyshag`).
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

### Publicação do Baby Shaggy na Hostinger

Como a página é publicada no subdiretório `/babyshaggy/`, gere o pacote da Hostinger com:

```bash
npm run build:hostinger
```

Esse comando configura a base correta para os arquivos e mídias em `/babyshaggy/`.

## Publicação na Vercel

O projeto inclui `vercel.json` com detecção do Vite, diretório de saída e fallback de rotas para a SPA. Ao importar este repositório na Vercel, mantenha o diretório raiz como a raiz do repositório.
