# Requisitos do Sistema — Revisão 3º Ano A

**Aluno:** Davi Raposo Dino de Lima
**Turma:** 3º A
**Professor Docente:** Eduardo Hernandes

---

# 1. Requisitos Funcionais

Os requisitos funcionais descrevem as funcionalidades que o sistema deverá disponibilizar ao aluno durante o processo de revisão.

### RF01 — Acesso à página inicial

O sistema deverá disponibilizar uma página inicial contendo informações sobre a plataforma e acesso às principais áreas de estudo.

### RF02 — Visualização das matérias

O sistema deverá permitir que o aluno visualize as disciplinas disponíveis para revisão.

As matérias deverão ser organizadas por áreas:

* Matemática;
* Ciências da Natureza;
* Ciências Humanas;
* Linguagens.

### RF03 — Seleção de matéria

O sistema deverá permitir que o aluno selecione uma matéria para iniciar sua revisão.

### RF04 — Visualização dos conteúdos

O sistema deverá apresentar os conteúdos de cada matéria de forma organizada por tópicos.

### RF05 — Revisão teórica

O sistema deverá disponibilizar explicações teóricas sobre os conteúdos selecionados pelo aluno.

### RF06 — Apresentação de fórmulas

O sistema deverá apresentar fórmulas relacionadas aos conteúdos que necessitam de cálculos ou relações matemáticas.

### RF07 — Apresentação de exemplos

O sistema deverá apresentar exemplos para auxiliar o aluno na compreensão dos conteúdos estudados.

### RF08 — Navegação entre tópicos

O sistema deverá permitir que o aluno avance e retorne entre os diferentes tópicos de uma matéria.

### RF09 — Marcação de conteúdo concluído

O sistema deverá permitir que o aluno marque tópicos estudados como concluídos.

### RF10 — Controle de progresso

O sistema deverá registrar o progresso do aluno durante a revisão dos conteúdos.

### RF11 — Banco de questões

O sistema deverá disponibilizar questões relacionadas aos conteúdos das matérias.

### RF12 — Seleção de questões por matéria

O sistema deverá permitir que o aluno filtre as questões de acordo com a matéria escolhida.

### RF13 — Resolução de questões

O sistema deverá permitir que o aluno selecione uma alternativa para responder cada questão.

### RF14 — Correção automática

O sistema deverá verificar automaticamente a resposta selecionada pelo aluno.

### RF15 — Feedback da questão

Após a resposta, o sistema deverá informar ao aluno se a alternativa escolhida está correta ou incorreta.

### RF16 — Explicação da resposta

O sistema deverá apresentar uma explicação para auxiliar o aluno a compreender a resolução da questão.

### RF17 — Contagem de acertos

O sistema deverá contabilizar a quantidade de questões respondidas corretamente.

### RF18 — Sistema de pontuação

O sistema deverá calcular uma pontuação de acordo com o desempenho do aluno nas questões.

### RF19 — Resultado do teste

Ao finalizar um conjunto de questões, o sistema deverá apresentar o resultado obtido pelo aluno.

### RF20 — Registro de desempenho

O sistema deverá registrar os resultados das atividades realizadas pelo aluno para permitir o acompanhamento de sua evolução.

### RF21 — Visualização do desempenho

O sistema deverá disponibilizar uma página para consulta do desempenho do aluno.

### RF22 — Histórico de resultados

O sistema deverá apresentar um histórico dos testes realizados, contendo informações como quantidade de questões, acertos e porcentagem de aproveitamento.

### RF23 — Cálculo da média de acertos

O sistema deverá calcular a média de acertos obtida pelo aluno nas questões realizadas.

### RF24 — Identificação do melhor resultado

O sistema deverá identificar e apresentar o melhor resultado obtido pelo aluno.

### RF25 — Sistema de progresso

O sistema deverá apresentar visualmente o progresso do aluno durante seus estudos.

### RF26 — Modo claro e escuro

O sistema deverá permitir a alternância entre modo claro e modo escuro.

### RF27 — Armazenamento do progresso

O sistema deverá armazenar os dados de progresso e resultados no navegador para que possam ser recuperados posteriormente.

### RF28 — Navegação entre páginas

O sistema deverá disponibilizar menus e links para facilitar a navegação entre as áreas de matérias, revisão, questões e desempenho.

---

# 2. Requisitos Não Funcionais

Os requisitos não funcionais definem características relacionadas à qualidade, desempenho, usabilidade e organização do sistema.

### RNF01 — Responsividade

A interface deverá adaptar-se a diferentes tamanhos de tela, incluindo:

* Computadores;
* Notebooks;
* Tablets;
* Smartphones.

### RNF02 — Usabilidade

A interface deverá ser simples, organizada e intuitiva, permitindo que o aluno encontre facilmente os conteúdos, questões e resultados.

### RNF03 — Padronização visual

Todas as páginas deverão seguir uma identidade visual consistente em relação a:

* Cores;
* Tipografia;
* Botões;
* Menus;
* Ícones;
* Cards;
* Espaçamentos.

### RNF04 — Compatibilidade com navegadores

O sistema deverá funcionar corretamente nos principais navegadores modernos, como:

* Google Chrome;
* Microsoft Edge;
* Mozilla Firefox;
* Safari.

### RNF05 — Desempenho

As páginas deverão apresentar carregamento adequado, evitando esperas desnecessárias durante a utilização da plataforma.

### RNF06 — Organização do código

O código deverá ser organizado e separado de acordo com suas responsabilidades, utilizando arquivos distintos para:

* Estrutura HTML;
* Estilos CSS;
* Funcionalidades JavaScript.

### RNF07 — Manutenibilidade

O código deverá possuir uma estrutura organizada para facilitar futuras alterações, correções e implementação de novas funcionalidades.

### RNF08 — Armazenamento local

Os dados de progresso e desempenho deverão ser armazenados utilizando recursos disponíveis no navegador, como o LocalStorage.

### RNF09 — Consistência de navegação

Menus, botões e links deverão apresentar comportamento consistente em todas as páginas da plataforma.

### RNF10 — Feedback das ações

O sistema deverá fornecer feedback ao aluno após ações importantes, principalmente durante a resolução e correção das questões.

### RNF11 — Legibilidade

Os textos deverão possuir tamanho, contraste e espaçamento adequados para facilitar a leitura dos conteúdos educacionais.

### RNF12 — Acessibilidade

A interface deverá buscar seguir boas práticas de acessibilidade, incluindo:

* Contraste adequado;
* Textos legíveis;
* Botões identificados claramente;
* Navegação consistente;
* Uso adequado de ícones e descrições.

### RNF13 — Escalabilidade

A estrutura do projeto deverá permitir a inclusão futura de novas matérias, conteúdos e questões sem necessidade de reconstrução completa da plataforma.

### RNF14 — Segurança

O sistema não deverá expor informações sensíveis ou utilizar dados pessoais desnecessários para o funcionamento da plataforma.

### RNF15 — Disponibilidade

A plataforma deverá estar disponível para utilização sempre que o aluno acessar os arquivos do projeto ou sua versão publicada.

---

# 3. Prioridade dos Requisitos

Os requisitos poderão ser classificados de acordo com três níveis de prioridade:

| Prioridade | Descrição                                                               |
| ---------- | ----------------------------------------------------------------------- |
| **Alta**   | Funcionalidade essencial para o funcionamento da plataforma.            |
| **Média**  | Funcionalidade importante, mas que não impede o funcionamento básico.   |
| **Baixa**  | Funcionalidade complementar que poderá ser implementada posteriormente. |

---

# 4. Considerações Finais

Os requisitos apresentados representam a base para o desenvolvimento da plataforma **Revisão 3º Ano A**.

O sistema tem como objetivo auxiliar o aluno na preparação para as avaliações por meio da organização dos conteúdos, revisão teórica, resolução de questões e acompanhamento do desempenho.

Durante a evolução do projeto, novos conteúdos, questões e funcionalidades poderão ser adicionados conforme as necessidades identificadas durante o desenvolvimento.
