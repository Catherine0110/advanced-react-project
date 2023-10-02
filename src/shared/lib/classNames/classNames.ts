export type Modes = Record<string, boolean | string | undefined>

export function classNames(cls: string, mode: Modes = {}, additional: Array<string | undefined> = []): string {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mode)
      .filter(([classN, val]) => val)
      .map(([className, value]) => className),
  ].join(' ')
}
