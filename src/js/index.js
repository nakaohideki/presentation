/*
    Escope: Manage the tab content exibition according to the user interaction.

    1- Catching the elements that represent the tabs in the html file.
    2- Identify the user click on the tab.
    3- After the user click, deselect the selected tab.
    4- Show the clicked tab as selected.
    5- Hide the previous content.
    6- Show the selected tab content.
*/

//1- Assigning the html tab source class to the constant abas
const abas = document.querySelectorAll(".tab");
abas.forEach((tab) => {
    //2- identify the user click on the html tab element.
    tab.addEventListener("click", function () {
        if (tab.classList.contains("shown")) {
            return;
        }

        showTab(tab);
        showTabInfo(tab);
    });
});

function showTab(tab) {
    //3- When the user clicks, the selected tab will be deselected.
    const tabShown = document.querySelector(".tab.shown");
    tabShown.classList.remove("shown");

    //4- Show the clicked tab as selected.
    tab.classList.add("shown");
}

function showTabInfo(tab) {
    //5- Hide the previous content.
    const shownInfo = document.querySelector(".info.shown");
    shownInfo.classList.remove("shown");

    //6- Show the selected tab content
    const tabInfoElementId = `info-${tab.id}`;

    const infoToBeShown = document.getElementById(tabInfoElementId);
    infoToBeShown.classList.add("shown");
}

const english = document.querySelector(".button-english");
english.addEventListener("click", function () {
    document.getElementById("role").innerHTML = "Front-End Junior Developer";
    document.getElementById("subtitle").innerHTML = "About";
    document.getElementById("info-icon").title = "About";
    document.getElementById("languages-icon").title = "Languages";
    document.getElementById("networks-icon").title = "My networks";
    document.getElementById("greeting").innerHTML = "Hello! My full name is Valdecir Hideki Nakao, be welcome!";
    document.getElementById("presentation").innerHTML =
        "My passion for programming has been since college. In my academic and professional careers, programming became an essential tool for solving problems and getting remarkable results. In the Front-End area, the constant learning of <span>HTML5</span>, <span>CSS3</span> and <span>JavaScript</span> technologies helped me to develop applications and pages with visuals more attractive and interactive.";
    document.getElementById("language").innerHTML = "Languages";
    document.getElementById("button-portuguese").innerHTML = "Portuguese";
    document.getElementById("my-networks").innerHTML = "My networks";
    document.getElementById("resume").innerHTML = "Resume";
    document.getElementById("resume").href = "/src/resume/english.pdf";
    document.getElementById("linkedin").href = "https://www.linkedin.com/in/valdecir-nakao-3ab20347/?locale=en_US";
});

const portuguese = document.querySelector(".button-portuguese");
portuguese.addEventListener("click", function () {
    document.getElementById("role").innerHTML = "Desenvolvedor Front-End Júnior";
    document.getElementById("subtitle").innerHTML = "Sobre";
    document.getElementById("info-icon").title = "Sobre";
    document.getElementById("languages-icon").title = "Idiomas";
    document.getElementById("networks-icon").title = "Minhas Redes";
    document.getElementById("greeting").innerHTML = "Olá! Meu nome é Valdecir Hideki Nakao, seja bem-vindo(a)!";
    document.getElementById("presentation").innerHTML =
        "A minha paixão por programação vem desde a faculdade. Nas minhas jornadas profissionais e acadêmicas, a programação tem sido uma ferramenta fundamental para resolver problemas e obter grandes resultados. Na área de Front-End o constante aprendizado das tecnologias <span>HTML5</span>, <span>CSS3</span> e <span>JavaScript</span> contribuiram para o desenvolvimento de aplicações e páginas com visuais mais atrativos e interativos.";
    document.getElementById("language").innerHTML = "Idiomas";
    document.getElementById("button-portuguese").innerHTML = "Português";
    document.getElementById("my-networks").innerHTML = "Minhas redes";
    document.getElementById("resume").innerHTML = "Currículo";
    document.getElementById("resume").href = "/src/resume/portuguese.pdf";
    document.getElementById("linkedin").href = "https://www.linkedin.com/in/valdecir-nakao-3ab20347/";
});
