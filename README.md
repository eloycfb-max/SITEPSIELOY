# Site Institucional — Eloy Bezerra | Psicólogo Clínico

Site estático desenvolvido conforme o PRD v1.0, com arquitetura **Answer-First**, SEO técnico, Schema.org e preparação para GEO (Generative Engine Optimization).

## Como visualizar localmente

O site usa caminhos absolutos (`/sobre`, `/atendimento`...), então é preciso servir por HTTP (abrir o `index.html` direto no navegador quebra os links):

```powershell
# na pasta do projeto
python -m http.server 8000
```

Depois acesse: <http://localhost:8000/>

Alternativa com Node: `npx serve .`

## Estrutura

```text
/
├── index.html                              Home (Answer-First + FAQ)
├── sobre/index.html                        Quem é Eloy Bezerra
├── psicoterapia-adultos/index.html         Psicoterapia para adultos
├── psicoterapia-idosos/index.html          Psicoterapia para idosos
├── terapia-cognitivo-comportamental/       TCC
│   └── index.html
├── reabilitacao-cognitiva/index.html       Reabilitação cognitiva
├── atendimento/index.html                  Localização, mapa, rota e online
├── contato/index.html                      Contato e agendamento
├── assets/
│   ├── css/style.css                       Identidade visual + acessibilidade
│   ├── js/main.js                          Apenas menu mobile e ano do rodapé
│   └── img/ (logo.svg, favicon.svg, eloy-bezerra.jpg, eloy-bezerra-480.jpg)
├── robots.txt                              OAI-SearchBot, GPTBot, OAI-AdsBot permitidos
├── llms.txt                                Guia para agentes de IA
├── sitemap.xml                             8 páginas + llms.txt
└── README.md
```

## Fotos do profissional

- A foto original está em `C:\Users\eloyp\Downloads\NOVAS FOTOS\PSI-ELOY BEZERRA.png` (1086×1448, 1,8 MB).
- Versões otimizadas para o site (JPEG, qualidade 84):
  - `assets/img/eloy-bezerra.jpg` — 900×1200, ~99 KB (usada na página Sobre e no Schema.org)
  - `assets/img/eloy-bezerra-480.jpg` — 480×640, ~36 KB (versão leve para telas pequenas, via `srcset`)
- A foto aparece na página **Sobre**, com legenda, `alt` descritivo, `width`/`height` (evita layout shift) e `loading="lazy"`.

## Antes de publicar — checklist

1. **Domínio:** o domínio `https://eloybezerra.com.br` foi usado como base. Se o domínio definitivo for outro, substituir em:
   - `robots.txt` (linha do Sitemap)
   - `sitemap.xml` (todas as URLs)
   - `index.html` e páginas internas: `<link rel="canonical">`, tags `og:url` e JSON-LD
2. **Analytics:** instalar a ferramenta de analytics escolhida (respeitando LGPD/privacidade) — nenhum script de terceiros foi incluído.
3. **Revisão de conteúdo:** revisão final do texto pelo profissional antes da publicação (critério de aceite do PRD).

## Decisões técnicas

- **HTML estático, CSS sem dependências, JS mínimo (~50 linhas):** atende aos requisitos de performance (Core Web Vitals) e à regra de que o conteúdo essencial deve estar em HTML renderizado — nada de informação essencial escondida em abas, imagens ou JavaScript.
- **Schema.org:** `WebSite`, `Person` (com `jobTitle: Psicólogo Clínico` e CRP), `ProfessionalService` (com `PostalAddress`, telefone e serviços), `WebPage`, `BreadcrumbList` e `FAQPage` por página.
  - Observação: o PRD cita a entidade `Psychologist`, mas ela **não existe** em schema.org (`schema.org/Psychologist` retorna 404). A entidade foi representada por `Person` + `ProfessionalService`, que é o caminho válido.
- **FAQ em blocos abertos (sem acordeão):** mantém cada pergunta com a resposta imediatamente abaixo, legível por buscadores e sistemas de IA sem interação.
- **CTA único:** "Agendar atendimento pelo WhatsApp" (`wa.me/5521987540264`) com mensagem pré-preenchida, presente em header, hero, meio e fim das páginas, rodapé e botão fixo no mobile.
- **Acessibilidade:** skip link, foco visível, contraste verificado (texto principal ~7:1 sobre o fundo), fonte-base 17px+, `alt` em imagens, `aria-current` na navegação, headings hierárquicos (H1 único por página), `prefers-reduced-motion`.
- **Tipografia:** Montserrat (300/400/500) para títulos e Inter (400/500/600) para corpo, via Google Fonts com `display=swap` e preconnect.
