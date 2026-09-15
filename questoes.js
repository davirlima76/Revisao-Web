 /* =========================================================
   REVISÃO 3º ANO A
   PROGRESSO.JS
   SISTEMA DE PROGRESSO DOS ESTUDOS
   ========================================================= */

"use strict";


/* =========================================================
   CONFIGURAÇÕES
   ========================================================= */

const PROGRESS_CONFIG = {
    storageKey: "revisao-3a-progresso"
};


/* =========================================================
   MATÉRIAS
   ========================================================= */

const materiasProgresso = {

    matematica: {
        nome: "Matemática",
        total: 0,
        concluidos: 0
    },

    natureza: {
        nome: "Ciências da Natureza",
        total: 0,
        concluidos: 0
    },

    humanas: {
        nome: "Ciências Humanas",
        total: 0,
        concluidos: 0
    },

    linguagens: {
        nome: "Linguagens",
        total: 0,
        concluidos: 0
    }

};


/* =========================================================
   CARREGAR PROGRESSO
   ========================================================= */

function carregarProgresso() {

    const dadosSalvos =
        localStorage.getItem(
            PROGRESS_CONFIG.storageKey
        );


    if (!dadosSalvos) {

        return {
            materias: structuredClone(
                materiasProgresso
            ),
            questoesRespondidas: 0,
            questoesAcertadas: 0,
            conteudosEstudados: 0
        };

    }


    try {

        const dados =
            JSON.parse(dadosSalvos);


        return {

            materias:
                dados.materias ||
                structuredClone(materiasProgresso),

            questoesRespondidas:
                dados.questoesRespondidas || 0,

            questoesAcertadas:
                dados.questoesAcertadas || 0,

            conteudosEstudados:
                dados.conteudosEstudados || 0

        };

    } catch (error) {

        console.warn(
            "Não foi possível carregar o progresso.",
            error
        );


        return {
            materias: structuredClone(
                materiasProgresso
            ),
            questoesRespondidas: 0,
            questoesAcertadas: 0,
            conteudosEstudados: 0
        };

    }

}


/* =========================================================
   SALVAR PROGRESSO
   ========================================================= */

function salvarProgresso(progresso) {

    try {

        localStorage.setItem(
            PROGRESS_CONFIG.storageKey,
            JSON.stringify(progresso)
        );

    } catch (error) {

        console.warn(
            "Não foi possível salvar o progresso.",
            error
        );

    }

}


/* =========================================================
   PROGRESSO ATUAL
   ========================================================= */

let progressoAtual =
    carregarProgresso();


/* =========================================================
   CALCULAR PORCENTAGEM
   ========================================================= */

function calcularPorcentagem(
    concluidos,
    total
) {

    if (!total || total <= 0) {

        return 0;

    }


    const porcentagem =
        (concluidos / total) * 100;


    return Math.min(
        100,
        Math.max(
            0,
            Math.round(porcentagem)
        )
    );

}


/* =========================================================
   PROGRESSO DE UMA MATÉRIA
   ========================================================= */

function obterProgressoMateria(
    materia
) {

    const dados =
        progressoAtual.materias[materia];


    if (!dados) {

        return 0;

    }


    return calcularPorcentagem(
        dados.concluidos,
        dados.total
    );

}


/* =========================================================
   REGISTRAR CONTEÚDO
   ========================================================= */

function registrarConteudo(
    materia,
    totalConteudos = 1
) {

    if (
        !progressoAtual.materias[materia]
    ) {

        console.warn(
            `Matéria "${materia}" não encontrada.`
        );

        return;

    }


    progressoAtual.materias[materia].total +=
        Math.max(
            0,
            totalConteudos
        );


    salvarProgresso(
        progressoAtual
    );

}


/* =========================================================
   CONCLUIR CONTEÚDO
   ========================================================= */

function concluirConteudo(
    materia
) {

    if (
        !progressoAtual.materias[materia]
    ) {

        console.warn(
            `Matéria "${materia}" não encontrada.`
        );

        return;

    }


    const dados =
        progressoAtual.materias[materia];


    /*
     * Evita que os conteúdos concluídos
     * ultrapassem o total.
     */

    if (
        dados.concluidos <
        dados.total
    ) {

        dados.concluidos++;

    }


    progressoAtual.conteudosEstudados++;


    salvarProgresso(
        progressoAtual
    );

}


/* =========================================================
   REGISTRAR QUESTÃO
   ========================================================= */

function registrarQuestao(
    acertou
) {

    progressoAtual.questoesRespondidas++;


    if (acertou) {

        progressoAtual.questoesAcertadas++;

    }


    salvarProgresso(
        progressoAtual
    );

}


/* =========================================================
   TAXA DE ACERTO
   ========================================================= */

function obterTaxaAcerto() {

    const respondidas =
        progressoAtual.questoesRespondidas;


    if (respondidas <= 0) {

        return 0;

    }


    return Math.round(
        (
            progressoAtual.questoesAcertadas /
            respondidas
        ) * 100
    );

}


/* =========================================================
   PROGRESSO GERAL
   ========================================================= */

function obterProgressoGeral() {

    const materias =
        Object.values(
            progressoAtual.materias
        );


    let total = 0;
    let concluidos = 0;


    materias.forEach(
        (materia) => {

            total += materia.total;

            concluidos +=
                materia.concluidos;

        }
    );


    return calcularPorcentagem(
        concluidos,
        total
    );

}


/* =========================================================
   OBTER DADOS COMPLETOS
   ========================================================= */

function obterDadosProgresso() {

    return {

        materias:
            progressoAtual.materias,

        questoesRespondidas:
            progressoAtual.questoesRespondidas,

        questoesAcertadas:
            progressoAtual.questoesAcertadas,

        taxaAcerto:
            obterTaxaAcerto(),

        conteudosEstudados:
            progressoAtual.conteudosEstudados,

        progressoGeral:
            obterProgressoGeral()

    };

}


/* =========================================================
   RESETAR PROGRESSO
   ========================================================= */

function resetarProgresso() {

    progressoAtual = {

        materias:
            structuredClone(
                materiasProgresso
            ),

        questoesRespondidas: 0,

        questoesAcertadas: 0,

        conteudosEstudados: 0

    };


    salvarProgresso(
        progressoAtual
    );

}


/* =========================================================
   ATUALIZAR ELEMENTOS DE PROGRESSO
   ========================================================= */

function atualizarElementosProgresso() {

    /*
     * Progresso geral
     */

    const elementosGerais =
        document.querySelectorAll(
            "[data-progress-general]"
        );


    const progressoGeral =
        obterProgressoGeral();


    elementosGerais.forEach(
        (elemento) => {

            elemento.textContent =
                `${progressoGeral}%`;

        }
    );


    /*
     * Progresso por matéria
     */

    const elementosMaterias =
        document.querySelectorAll(
            "[data-progress-subject]"
        );


    elementosMaterias.forEach(
        (elemento) => {

            const materia =
                elemento.dataset
                    .progressSubject;


            const porcentagem =
                obterProgressoMateria(
                    materia
                );


            elemento.textContent =
                `${porcentagem}%`;

        }
    );


    /*
     * Barra de progresso
     */

    const barras =
        document.querySelectorAll(
            "[data-progress-bar]"
        );


    barras.forEach(
        (barra) => {

            const materia =
                barra.dataset
                    .progressBar;


            let porcentagem;


            if (materia) {

                porcentagem =
                    obterProgressoMateria(
                        materia
                    );

            } else {

                porcentagem =
                    progressoGeral;

            }


            barra.style.width =
                `${porcentagem}%`;

            barra.setAttribute(
                "aria-valuenow",
                porcentagem
            );

        }
    );

}


/* =========================================================
   EVENTO PERSONALIZADO
   ========================================================= */

function emitirEventoProgresso() {

    document.dispatchEvent(
        new CustomEvent(
            "progressoAtualizado",
            {
                detail:
                    obterDadosProgresso()
            }
        )
    );

}


/* =========================================================
   ATUALIZAÇÃO COMPLETA
   ========================================================= */

function atualizarProgresso() {

    salvarProgresso(
        progressoAtual
    );

    atualizarElementosProgresso();

    emitirEventoProgresso();

}


/* =========================================================
   EXPORTAÇÃO GLOBAL
   ========================================================= */

window.revisaoProgresso = {

    carregar:
        carregarProgresso,

    salvar:
        salvarProgresso,

    obterDados:
        obterDadosProgresso,

    obterProgressoMateria:
        obterProgressoMateria,

    obterProgressoGeral:
        obterProgressoGeral,

    obterTaxaAcerto:
        obterTaxaAcerto,

    registrarConteudo:
        registrarConteudo,

    concluirConteudo:
        concluirConteudo,

    registrarQuestao:
        registrarQuestao,

    resetar:
        resetarProgresso,

    atualizar:
        atualizarProgresso

};


/* =========================================================
   INICIALIZAÇÃO
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        atualizarElementosProgresso();

    }
);