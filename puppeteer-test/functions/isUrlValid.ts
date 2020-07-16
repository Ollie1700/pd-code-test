import { parse } from 'url'

export default function isUrlValid(subject: string) {
  const url = parse(subject)

  if (!url.hostname) {
    return false
  }

  return url.protocol.indexOf('http') >= 0
}
