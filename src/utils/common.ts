export const getCurrentISOString = () => {
  const date = new Date()
  return date.toISOString()
}

export const delay = (ms = 1000): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}
