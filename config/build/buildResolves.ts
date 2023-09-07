import { ResolveOptions } from 'webpack';
import { BuildOptions, BuildPaths } from './types/config';

export function buildResolves(options: BuildOptions): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules'],
    mainFiles: ['index'],
    alias: {},
  }
}
