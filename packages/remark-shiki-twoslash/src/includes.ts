export const addIncludes = (map: Map<string, string>, code: string, metaInfo: string) => {
  const name = metaInfo.split(" ")[1]
  const lines: string[] = []

  code.split("\n").forEach((l, _i) => {
    const trimmed = l.trim()

    if (trimmed.startsWith("// - ")) {
      const key = trimmed.split("// - ")[1].split(" ")[0]
      map.set(name + "-" + key, lines.join("\n"))
    } else {
      lines.push(l)
    }
  })
  map.set(name, lines.join("\n"))
}

export const replaceIncludesInCode = (_map: Map<string, string>, code: string) => {
  const includes = /\/\/ @include: (.*)$/gm
  
  // Basically run a regex over the code replacing any // @include: thing with
  // 'thing' from the map

  // const toReplace: [index:number, length: number, str: string][] = []
  const toReplace: [number,  number, string][] = []
  
  let match
  while ((match = includes.exec(code)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (match.index === includes.lastIndex) {
      includes.lastIndex++
    }
    const key = match[1]
    const replaceWith = _map.get(key)

    if (!replaceWith) {
      const msg = `Could not find an includes with the key: '${key}'.\nThere is: ${[..._map.keys()]}.`
      throw new Error(msg)
    }

    toReplace.push([match.index, match[0].length, replaceWith])
  }

  let newCode = code.toString()
  // Go backwards through the found changes so that we can retain index position
  toReplace.reverse().forEach(r => {
    newCode = newCode.substring(0, r[0]) + r[2] + newCode.substring(r[0] + r[1])
  })
  return newCode
}
