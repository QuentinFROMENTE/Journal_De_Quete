export function CreateCookie(cookie) {

    let cookieCrypt = window.btoa(unescape(encodeURIComponent(cookie)));
    document.cookie = `DATA=${cookieCrypt}; path=/; max-age=630720000; SameSite=Lax`

}

export function ReadCookie () {

    let cookieCrypt = document.cookie.substring(5);
    let cookie = decodeURIComponent(escape(window.atob(cookieCrypt)));

    return cookie;

}