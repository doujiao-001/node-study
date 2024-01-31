import hbs from 'hbs'
export const formatPriceUtil =  hbs.registerHelper('formatPrice', function(price) {
    return '$' + price.toFixed(2);
});
export const titleTemplate =  hbs.registerPartial('header', `
<h1>{{title}}</h1>
`);

