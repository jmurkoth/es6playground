function LocalizeNumbers()
{
    var l10nUSD = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });
    var l10nGBP = new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" });
    var l10nEUR = new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" });
    console.log(`USD Format ${l10nUSD.format(100200300.40) }`); // "$100,200,300.40"
    console.log(`GBP Format ${l10nGBP.format(100200300.40) }`); // "£100,200,300.40"
    console.log(`Euro Format ${l10nEUR.format(100200300.40) }`); // "100.200.300,40 €"
};

function formatDates(){
    var date = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
    console.log(`US Format ${new Intl.DateTimeFormat('en-US').format(date)}`);
    console.log(`Arabic Format ${new Intl.DateTimeFormat('ar-EG').format(date)}`);
    console.log(`GBP Format ${new Intl.DateTimeFormat('en-GB').format(date)}`);
    console.log(`korean format ${date.toLocaleString('ko-KR')}`);// using locale
}
module.exports ={
    numbFormat:LocalizeNumbers,
    dateFormat:formatDates
}