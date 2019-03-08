import config from './config'
import crawler from './crawler'

let url = ''
let state = ''
let searchType = ''

function init (tjState, typeOption) {
  const baseUrl = config[tjState].base_url
  const typeFieldName = config[tjState].search_type.field_name
  const typeValue = config[tjState].search_type.values[typeOption || searchType]

  url = `${baseUrl}${typeFieldName}=${typeValue}`

  if (tjState) {
    state = tjState
  }

  if (typeOption) {
    searchType = typeOption
  }
}

function find (value, tjState, typeOption) {
  if (tjState || typeOption) {
    init(tjState, typeOption)
  }

  if (!state && !searchType) {
    throw new Error('Falta o estado e/ou o tipo da pesquisa')
  }

  const completeUrl = url.replace('{value}', value)

  return crawler(completeUrl)
}

export {
  init,
  find,
}

console.log(find('04184426819928260053', 'sp', 'process_number'))
