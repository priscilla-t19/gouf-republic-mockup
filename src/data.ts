export type Category = 'T-Shirts' | 'Headwear' | 'Accessories' | 'Apparel' | 'Stickers';
export type Product = { id: string; name: string; category: Category; image: string; description: string; price: number | null; sizes?: string[]; available?: boolean };
// Replace null prices only after the brand confirms official prices.
// These are initial catalog candidates from editorial photos, NOT verified inventory.
export const products: Product[] = [
 {id:'visionary-tee',name:'Visionary Tee',category:'T-Shirts',image:'/images/tee.jpg',description:'A bold graphic tee from the GOUF Visionary editorial.',price:null,sizes:['S','M','L','XL']},
 {id:'embroidered-beanie',name:'GOUF Embroidered Beanie',category:'Headwear',image:'/images/beanie.jpg',description:'Dark knit beanie with multicolor GOUF embroidery.',price:null,sizes:['One size']},
 {id:'visionary-tie',name:'Visionary Graphic Tie',category:'Accessories',image:'/images/tie.jpg',description:'Art meets formalwear in a statement-making tie.',price:null,sizes:['One size']},
 {id:'art-is-life',name:'Art Is Life Shirt',category:'Apparel',image:'/images/shirt.jpg',description:'Illustrated artwork with the message: Art Is Life & Expression.',price:null,sizes:['S','M','L','XL']},
 {id:'sticker-pack',name:'GOUF Sticker Collection',category:'Stickers',image:'/images/stickers.jpg',description:'Colorful GOUF graphics made to collect and customize.',price:null},
];
export const editorial = [
 {title:'THE VISIONARY ISSUE',subtitle:'The art of self-expression',image:'/images/editorial.jpg',tag:'ISSUE 05'},
 {title:'COLOUR COORDINATION',subtitle:'Style without permission',image:'/images/cover.jpg',tag:'ISSUE 05'},
 {title:'GOUF MAGAZINE',subtitle:'Fashion, culture, and creative identity',image:'/images/magazine.jpg',tag:'ARCHIVES'},
 {title:'GOUF TIMES AHEAD',subtitle:'A bright streetwear campaign',image:'/images/times-ahead.webp',tag:'CAMPAIGN'},
 {title:'THE REPUBLIC',subtitle:'A streetwear community in motion',image:'/images/collective.webp',tag:'CULTURE'},
 {title:'FASHION, ART, IDENTITY',subtitle:'GOUF Republic in Mmegi Arts & Culture',image:'/images/press-front.webp',tag:'IN THE PRESS'},
];
export function priceLabel(price: number | null) {return price === null ? 'Price coming soon' : `P ${price.toFixed(2)}`;}
