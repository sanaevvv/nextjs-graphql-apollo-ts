export const revalidateList = () => {
  fetch('/api/revalidate')
}

export const revalidateSingle = (slug: string) => {
  fetch(`/api/${slug}`)
}
