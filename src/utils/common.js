export const camelize = str =>
    str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase()
    }).replace(/\s+/g, '')

export const getWindowState = id => {
  const { innerWidth, innerHeight } = window
  if (innerHeight < 700 && innerWidth < 1100) return 'small'
  switch(id) {
      case 1: 
          return innerWidth < 1045 ? 'small'
               : innerWidth < 1600 ? 'medium'
               : 'large'
      case 2: 
          return innerWidth < 1285 ? 'small'
               : innerWidth < 1780 ? 'medium'
               : 'large'
      case 3: 
      default:
          return innerWidth < 1225 ? 'small'
               : innerWidth < 1600 ? 'medium'
               : 'large'
  }
}