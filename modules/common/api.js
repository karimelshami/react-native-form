import { api, Urls } from '../../utils'

const { createProduct } = Urls;

export function submitForm() {
    return api.post(createProduct)
}