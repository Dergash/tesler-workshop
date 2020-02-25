declare module '*.less' {
    const styles: { [className: string]: string }
    export = styles
}

declare module '*.json' {
    const json: any
    export = json
}

declare module '*.svg' {
    const base64: string
    export = base64
}

declare var require: any

declare module 'file-saver' {
    const module: any
    export = module
}
