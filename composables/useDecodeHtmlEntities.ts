export default function (text: string) {
  const entities = [
    ['amp', '&'],
    ['apos', '\''],
    ['lt', '<'],
    ['gt', '>'],
    ['quot', '"'],
    ['rsquo', '’'],
    ['#8211', '–'] // add any additional entities you need
  ]
  for (let i = 0; i < entities.length; i++) {
    text = text.replace(new RegExp('&' + entities[i][0] + ';', 'g'), entities[i][1])
  }
  return text
}
