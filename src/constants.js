import { Alarm, Dimond, Home, Shop, Supply, TradeIcon, Usericon, fileicon, mainIcon, paper, portfolio, pricesIcon, volume } from "./assets";

const Market_Stats = [
    {
        Icon:Shop,
        title:'Market Cap',
        value:'$723.6 billion',
    },
    {
        Icon:volume,
        title:'Volume',
        value:'$35.6 billion',
    },
    {
        Icon:Supply,
        title:'Circulating Supply',
        value:'19 billion ',
    },
    {
        Icon:TradeIcon,
        title:'Trading activity',
        value:'$36.6% sell',
    },
    {
        Icon:Alarm,
        title:"Typical hold time",
        value:'53 days',
    },
    {
        Icon:Dimond,
        title:'Popularity on coinbase',
        value:'#1',
    }
]

const NavItems = [
    {
        Icon:Home,
        title:'Home',
        url:'/'
    },
    {
        Icon:portfolio,
        title:'Portfolio',
        url:'/portfolio'
    },
    {
        Icon:mainIcon
    },
    {
        Icon:pricesIcon,
        title:'prices',
        url:'/prices'
    },
    {
        Icon:Usericon,
        title:'Settings',
        url:'/settings'
    }
]

const About= {
    title:'About Bitcoin',
    description:'The world’s first cryptocurrency, Bitcoin is stored and exchanged securely on the internet through a digital ledger known as a blockchain. Bitcoin are divisible into smaller units known as satoshis - each satoshi is worth 0.00000001 bitcoin.'
}

const Resources = [
    {
        Icon:fileicon,
        title:'Official website',
        url:'https://bitcoin.org/'
    },
    {
        Icon:paper,
        title:'Whitepaper',
        url:'https://bitcoin.org/bitcoin.pdf'
    }
]

const heropart ={
    title:'When’s the best time to buy?',
    description:'Timing any invesment is hard, which is why many investors use dollar cost averaging.'

}
export { Market_Stats, NavItems,About,Resources,heropart } 
 // Exporting the Market_Stats and NavItems objects