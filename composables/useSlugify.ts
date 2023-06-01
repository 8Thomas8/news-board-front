export default function (str: string) {
  let slug = ''

  slug = str
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036F]/g, '')
    .replace(/[\s\W-]+/g, '-')

  return slug
}
