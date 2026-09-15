/* =========================================================
   REVISÃO 3º ANO A
   APP.JS
   FUNÇÕES GERAIS DA APLICAÇÃO
   ========================================================= */

"use strict";


/* =========================================================
   CONFIGURAÇÕES
   ========================================================= */

const APP_CONFIG = {
    themeKey: "revisao-3a-theme"
};


/* =========================================================
   ELEMENTOS
   ========================================================= */

const elements = {
    body: document.body,
    themeToggle: document.getElementById("themeToggle"),
    menuToggle: document.getElementById("menuToggle"),
    sidebar: document.querySelector(".sidebar")
};


/* =========================================================
   TEMA
   ========================================================= */

/**
 * Obtém o tema salvo.
 */
function getSavedTheme() {

    return localStorage.getItem(APP_CONFIG.themeKey);

}


/**
 * Define o tema no documento.
 */
function setTheme(theme) {

    if (theme === "dark") {

        document.documentElement.setAttribute(
            "data-theme",
            "dark"
        );

    } else {

        document.documentElement.removeAttribute(
            "data-theme"
        );

    }

    localStorage.setItem(
        APP_CONFIG.themeKey,
        theme
    );

    updateThemeIcon(theme);
}


/**
 * Atualiza o ícone do botão de tema.
 */
function updateThemeIcon(theme) {

    if (!elements.themeToggle) {
        return;
    }

    const icon =
        elements.themeToggle.querySelector("i");

    if (!icon) {
        return;
    }

    if (theme === "dark") {

        icon.classList.remove("fa-moon");

        icon.classList.add("fa-sun");

        elements.themeToggle.setAttribute(
            "aria-label",
            "Ativar modo claro"
        );

        elements.themeToggle.setAttribute(
            "title",
            "Ativar modo claro"
        );

    } else {

        icon.classList.remove("fa-sun");

        icon.classList.add("fa-moon");

        elements.themeToggle.setAttribute(
            "aria-label",
            "Ativar modo escuro"
        );

        elements.themeToggle.setAttribute(
            "title",
            "Ativar modo escuro"
        );

    }

}


/**
 * Inicializa o tema.
 */
function initializeTheme() {

    const savedTheme =
        getSavedTheme();

    if (savedTheme) {

        setTheme(savedTheme);

        return;
    }


    /*
     * Se não houver preferência salva,
     * verifica a preferência do sistema.
     */

    const prefersDark =
        window.matchMedia &&
        window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;


    if (prefersDark) {

        setTheme("dark");

    } else {

        setTheme("light");

    }

}


/**
 * Alterna entre claro e escuro.
 */
function toggleTheme() {

    const currentTheme =
        document.documentElement.getAttribute(
            "data-theme"
        );


    if (currentTheme === "dark") {

        setTheme("light");

    } else {

        setTheme("dark");

    }

}


/* =========================================================
   MENU MOBILE
   ========================================================= */

/**
 * Abre ou fecha a sidebar.
 */
function toggleMobileMenu() {

    if (!elements.sidebar) {
        return;
    }

    elements.sidebar.classList.toggle("open");

}


/**
 * Fecha o menu mobile.
 */
function closeMobileMenu() {

    if (!elements.sidebar) {
        return;
    }

    elements.sidebar.classList.remove("open");

}


/* =========================================================
   FECHAR MENU AO CLICAR EM UM LINK
   ========================================================= */

function setupNavigation() {

    const navLinks =
        document.querySelectorAll(
            ".nav-item"
        );


    navLinks.forEach((link) => {

        link.addEventListener(
            "click",
            closeMobileMenu
        );

    });

}


/* =========================================================
   FECHAR MENU AO CLICAR FORA
   ========================================================= */

function setupOutsideMenuClick() {

    document.addEventListener(
        "click",
        (event) => {

            if (!elements.sidebar) {
                return;
            }

            if (!elements.menuToggle) {
                return;
            }


            const clickedInsideSidebar =
                elements.sidebar.contains(
                    event.target
                );


            const clickedMenuButton =
                elements.menuToggle.contains(
                    event.target
                );


            if (
                !clickedInsideSidebar &&
                !clickedMenuButton
            ) {

                closeMobileMenu();

            }

        }
    );

}


/* =========================================================
   TECLA ESC
   ========================================================= */

function setupEscapeKey() {

    document.addEventListener(
        "keydown",
        (event) => {

            if (event.key === "Escape") {

                closeMobileMenu();

            }

        }
    );

}


/* =========================================================
   EVENTOS
   ========================================================= */

function setupEvents() {

    /*
     * Tema
     */

    if (elements.themeToggle) {

        elements.themeToggle.addEventListener(
            "click",
            toggleTheme
        );

    }


    /*
     * Menu mobile
     */

    if (elements.menuToggle) {

        elements.menuToggle.addEventListener(
            "click",
            toggleMobileMenu
        );

    }


    /*
     * Navegação
     */

    setupNavigation();


    /*
     * Clique fora
     */

    setupOutsideMenuClick();


    /*
     * Tecla ESC
     */

    setupEscapeKey();

}


/* =========================================================
   INICIALIZAÇÃO
   ========================================================= */

function initializeApp() {

    initializeTheme();

    setupEvents();

}


/* =========================================================
   INICIAR A APLICAÇÃO
   ========================================================= */

if (
    document.readyState === "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        initializeApp
    );

} else {

    initializeApp();

}