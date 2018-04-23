import { BING_IMAGE_API_URL } from '../lib/constants';

export const getImage = fetch(`${BING_IMAGE_API_URL}?format=js&idx=0&n=1&mkt=pt-BR`);
