import isUrlValid from './isUrlValid'

export default function getUrlFromArgV() {
  if (!process.argv.hasOwnProperty(2)) {
    throw new Error('URL is required')
  }

  if (!isUrlValid(process.argv[2])) {
    throw new Error(`'${process.argv[2]}' is not a valid URL`)
  }

  return process.argv[2]
}
