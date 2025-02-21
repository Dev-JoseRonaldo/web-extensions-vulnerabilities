# <div align="center">🚧 Projeto em Desenvolvimento 🚧</div>

## 🎯 Exploit Permissions
O objetivo deste etapa é extrair (`dump`) os arquivos `manifest.json` de extensões para analisar, principalmente, os seguintes campos:  

- `permissions`  
- `host_permissions`  
- `manifest_version`
- Outros campos relevantes identificados durante a análise  

### TO-DO
- [ ] Extrair dados do `manifest.json` do maior número possível de extensões  
- [ ] Analisar os campos `permissions` e `host_permissions` para avaliar possíveis vetores de ataque  
- [ ] Identificar cenários em que combinações desses campos possam representar riscos à segurança
- [ ] Criar provas de conceito para explorar esses cenários e obter estatísticas sobre as extensões mapeadas

### Ferramentas
- [CRXviewer](https://crxviewer.com/): Esta ferramenta **permite analisar o código-fonte** das extensões informando seu ID ou URL. Será útil na etapa de identificação de cenários de ataque, especialmente na detecção de más práticas de desenvolvimento que, juntamente com os campos `permissions` e `host_permissions`, podem levar a vulnerabilidades e cenários de exploração.  