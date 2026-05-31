export const parametersAccountManager = {

    role: "Account Manager",
    subtitleMainPage: "Zaloguj się do naszego super bezpiecznego systemu!",
    subtitleRegisterPage : "Załóż konto w naszym systemie!",
    formUrl: "https://frontendpodyplomowe.github.io/logging",
    linkText: "Zarejestruj się!ccc",
    buttonText: "Zaloguj się!",
    buttonSetAccount: "Załóż konto",
    backToLoginText: "Wróć do logowania!",
    loginErrorMsg: "Błędny login lub hasło",
    emptyRegisterMsg: "Musisz podać login i hasło!",
    testedLogin: "tester",
    testedPassword: "123",
    setUpAccountButton: "Załóż konto",
    loginErrorMsg: "Błędny login lub hasło",
    emptyRegisterMsg: "Musisz podać login i hasło!",
    logOutButton: "Wyloguj się",
    
    
}

// URL adresy jako oddzielnie stałe const
// export const registerURL = parametersAccountManager.formURL + "/register.html";
// export const loginURL = parametersAccountManager.formURL + "/index.html";
// export const loggedURL = parametersAccountManager.formURL + "/login.html";

// Zebranie adresy URL do jednego obiektu

export const URLs = {
  registerURL: parametersAccountManager.formUrl +"/register.html", 
  loginURL: parametersAccountManager.formUrl + "/index.html",
  loggedURL: parametersAccountManager.formUrl + "/login.html",
};

// Sales Manager w przyszłosci...
export const parametersSalesManager = {
  role: "Sales Manager",
};
