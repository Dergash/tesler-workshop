const { compilerOptions } = require('./tsconfig');
// Отключить в тестах предупреждения о неиспользуемых переменных
compilerOptions.noUnusedLocals = false

module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    setupFiles: ['./src/tests/setup.ts'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },
    moduleNameMapper: {
        /* Тесты запускаются без webpack'а, поэтому не знают что вместо Анта у нас Пифагор */
        '^antd(.*)$': '<rootDir>/src/tests/assetsMock.js',
        /* externals-зависимости webpack'а */
        '^react$': '<rootDir>/node_modules/react',
        '^react-dom(.*)$': '<rootDir>/node_modules/react-dom$1',
        '^react-redux(.*)$': '<rootDir>/node_modules/react-redux$1',
        /* Ресурсы мокаются простой заглушкой */
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)$': '<rootDir>/src/tests/assetsMock.js',
        /* Стили мокаются словарем классов */
        '\\.(css|less)$': 'identity-obj-proxy',
    },
    moduleDirectories: ['node_modules', 'src'],
    globals: {
        'ts-jest': {
            tsConfig: compilerOptions
        }
    }
}
