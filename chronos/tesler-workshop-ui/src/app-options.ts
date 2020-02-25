/**
 * Модуль для опций, которые хранятся в теле index.html
 * В production-сборке индексная страница собирается как index.ftl,
 * в котором бэкэнд может подставлять свои значения параметров
 */

const opt = JSON.parse(document.getElementById('options').innerText)

export function getOptions() {
    if (!opt) {
        console.warn('opt is unavailable')
    }
    return { }
}
