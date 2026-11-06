const menu = {
  starters: [
    {name:'Burrata & Heirloom Tomato',price:'$19',desc:'Whipped basil, aged balsamic, grilled sourdough'},
    {name:'Truffle Wild Mushroom Toast',price:'$21',desc:'Forest mushrooms, black truffle, toasted brioche'},
    {name:'Seared Scallops',price:'$26',desc:'Sweet corn purée, brown butter, citrus'},
    {name:'Velvet House Salad',price:'$17',desc:'Baby greens, pear, candied walnut, champagne vinaigrette'}
  ],
  mains: [
    {name:'Filet Mignon',price:'$58',desc:'Potato pavé, broccolini, red wine jus'},
    {name:'Pan-Roasted Branzino',price:'$44',desc:'Lemon beurre blanc, shaved fennel, fresh herbs'},
    {name:'Wild Mushroom Risotto',price:'$36',desc:'Arborio rice, parmesan, thyme, truffle oil'},
    {name:'Herb-Crusted Lamb',price:'$54',desc:'Silky parsnip purée, roasted carrots, rosemary reduction'}
  ],
  desserts: [
    {name:'Midnight Chocolate Torte',price:'$16',desc:'Dark chocolate ganache, raspberry, vanilla cream'},
    {name:'Vanilla Bean Crème Brûlée',price:'$15',desc:'Caramelized sugar, seasonal berries'},
    {name:'Pear & Almond Tart',price:'$16',desc:'Warm pastry, toasted almond, crème fraîche'},
    {name:'Espresso Affogato',price:'$13',desc:'Vanilla gelato, freshly pulled espresso'}
  ],
  drinks: [
    {name:'The Velvet Hour',price:'$18',desc:'Pomegranate, rosemary, sparkling citrus · zero-proof'},
    {name:'Golden Pear Fizz',price:'$17',desc:'Pear nectar, ginger, lemon, soda · zero-proof'},
    {name:'Midnight Espresso',price:'$14',desc:'Espresso, vanilla, cacao, chilled oat milk · zero-proof'},
    {name:'Still & Sparkling Water',price:'$8',desc:'Served chilled with fresh citrus'}
  ]
};
const menuItems=document.getElementById('menu-items');
function renderMenu(category){menuItems.replaceChildren(...menu[category].map(item=>{const article=document.createElement('article');article.className='menu-item';const top=document.createElement('div');top.className='menu-item-top';const title=document.createElement('h3');title.textContent=item.name;const price=document.createElement('span');price.className='menu-price';price.textContent=item.price;const desc=document.createElement('p');desc.textContent=item.desc;top.append(title,price);article.append(top,desc);return article;}));}
renderMenu('starters');
document.querySelectorAll('.tab').forEach(tab=>tab.addEventListener('click',()=>{document.querySelectorAll('.tab').forEach(t=>{t.classList.remove('active');t.setAttribute('aria-selected','false');});tab.classList.add('active');tab.setAttribute('aria-selected','true');renderMenu(tab.dataset.category);}));
const toggle=document.querySelector('.menu-toggle'),nav=document.getElementById('nav');toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close navigation':'Open navigation');});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Open navigation');}));
const dateInput=document.getElementById('date');const today=new Date();const localToday=new Date(today.getTime()-today.getTimezoneOffset()*60000).toISOString().slice(0,10);dateInput.min=localToday;
document.getElementById('reservation-form').addEventListener('submit',event=>{event.preventDefault();const date=dateInput.value,time=document.getElementById('time').value,guests=document.getElementById('guests').value;if(!date||!time||!guests||date<localToday)return;const result=document.getElementById('reservation-result');result.replaceChildren();const heading=document.createElement('strong');heading.textContent='Your evening, imagined.';const detail=document.createElement('span');const dateText=new Date(`${date}T12:00:00`).toLocaleDateString(undefined,{weekday:'long',month:'long',day:'numeric',year:'numeric'});detail.textContent=`${dateText} · ${time} · ${guests} ${guests==='1'?'guest':'guests'}. This is a preview only—no reservation has been submitted.`;result.append(heading,detail);result.hidden=false;});
document.getElementById('year').textContent=new Date().getFullYear();
