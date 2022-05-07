import { join, resolve } from 'path'

interface TsConfig {
    compilerOptions: {
        baseUrl: string
        paths: Record<string, string[]>
    }
}

export const createAlias = (tsConfig: TsConfig): Record<string, string> => {
    const { baseUrl, paths } = tsConfig.compilerOptions

    return Object.entries(paths).reduce<Record<string, string>>(
        (acc, [key, [value]]) => {
            const [symbol] = key.split('/*')
            const [path] = value.split('/*')

            acc[symbol] = resolve(join(baseUrl, path))

            return acc
        },
        {}
    )
}
