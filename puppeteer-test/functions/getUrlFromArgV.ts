import { parse } from 'url'

export default function getUrlFromArgV(): string {
  if (!process.argv.hasOwnProperty(2)) {
    throw new Error('URL is required')
  }

  const url = parse(process.argv[2])

  if (!url.hostname) {
    throw new Error(`'${process.argv[2]}' is not a valid URL`)
  }

  return process.argv[2]
}
