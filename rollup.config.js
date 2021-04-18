import babel from '@rollup/plugin-babel'
import typescript from 'rollup-plugin-typescript2'
import packageJson from './package.json'

const globals = {
  ...packageJson.dependencies,
  ...packageJson.devDependencies
}

export default {
  input: 'src/index.ts',
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: 'inline'
    },
    {
      file: packageJson.module,
      format: 'es',
      sourcemap: 'inline'
    }
  ],
  plugins: [babel({ babelHelpers: 'bundled' }), typescript()],
  external: Object.keys(globals)
}
