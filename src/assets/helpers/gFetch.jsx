let productos = [
    {id: '1', name: 'PRODUCTO 1', categoria: 'gorras',stock: '100',price: '$1100',  foto:'https://borabikes.com.ar/63361-large_default/gorras-fox-originales-instill-snapback-visera-plana-casual.jpg'},
    {id: '2', name: 'PRODUCTO 2', categoria: 'gorras',stock: '100',price: '$900',  foto:'https://http2.mlstatic.com/D_NQ_NP_709303-MLA52433822283_112022-O.jpg'},
    {id: '3', name: 'PRODUCTO 3', categoria: 'gorras',stock: '100',price: '$1700',  foto:'https://falabella.scene7.com/is/image/Falabella/15685120_1?wid=800&hei=800&qlt=70'},
    {id: '4', name: 'PRODUCTO 4', categoria: 'remeras',stock: '100',price: '$2500',  foto:'https://http2.mlstatic.com/D_NQ_NP_983954-MLA51053429982_082022-W.jpg'},
    {id: '5', name: 'PRODUCTO 5', categoria: 'remeras',stock: '100',price: '$950',  foto:'https://d3ugyf2ht6aenh.cloudfront.net/stores/903/627/products/gods-blaco-espalda1-25c381e8805586955f16251371730928-1024-1024.webp'},
    {id: '6', name: 'PRODUCTO 5', categoria: 'remeras',stock: '100',price: '$1450',  foto:'https://image.dhgate.com/0x0s/f2-albu-g9-M01-31-9F-rBVaWF1yDKGANQZIAAEmO54hExc284.jpg/camisetas-para-hombre-virgin-mary-camiseta.jpg'}
]


export const gFetch = () => {
    return new Promise( ( aceptado, rechazado)=> {
        // acciones 
        setTimeout(()=>{
            aceptado(productos) //{resultado: 6}
        }, 3000 )
        }

    )
}

export default gFetch