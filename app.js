const topics=[
{id:"basics",title:"Accounting Basics",en:{intro:"Accounting records, classifies and summarises financial transactions so users can make informed decisions.",points:["Assets are resources controlled by a business.","Liabilities are present obligations.","Capital is the owner's residual claim."],formula:"Assets = Capital + Liabilities",example:"Assets ₹1,00,000 minus liabilities ₹35,000 gives capital ₹65,000."},hi:{intro:"Accounting business ke financial transactions ko record, classify aur summarise karta hai.",points:["Assets business ke controlled resources hain.","Liabilities present obligations hain.","Capital owner ka residual claim hota hai."],formula:"Assets = Capital + Liabilities",example:"Assets ₹1,00,000 mein se liabilities ₹35,000 minus karne par capital ₹65,000 hai."}},
{id:"journal",title:"Journal & Ledger",en:{intro:"A journal records transactions chronologically; a ledger groups them account-wise.",points:["Identify affected accounts.","Apply debit and credit rules.","Post entries to relevant ledger accounts."],formula:"Total Debits = Total Credits",example:"Cash purchase: Purchases A/c Dr.; To Cash A/c."},hi:{intro:"Journal transactions ko date-wise record karta hai; ledger account-wise group karta hai.",points:["Affected accounts identify karo.","Debit-credit rules apply karo.","Entries relevant ledger mein post karo."],formula:"Total Debits = Total Credits",example:"Cash purchase: Purchases A/c Dr.; To Cash A/c."}},
{id:"trial",title:"Trial Balance",en:{intro:"A trial balance lists ledger balances to test arithmetical accuracy.",points:["Debit and credit balances are listed separately.","Agreement does not prove every error is absent.","Omission and principle errors may remain."],formula:"Debit total = Credit total",example:"Cash normally has a debit balance; capital normally has a credit balance."},hi:{intro:"Trial balance ledger balances ki arithmetical accuracy test karta hai.",points:["Debit-credit balances alag columns mein aate hain.","Totals match hone par bhi har error detect nahi hota.","Omission aur principle errors bach sakte hain."],formula:"Debit total = Credit total",example:"Cash usually debit balance aur capital credit balance hota hai."}},
{id:"depreciation",title:"Depreciation",en:{intro:"Depreciation allocates an asset's depreciable amount over its useful life.",points:["It follows the matching concept.","SLM charges an equal annual amount.","WDV uses the reducing book value."],formula:"SLM = (Cost − Residual value) ÷ Useful life",example:"₹1,00,000 cost, ₹10,000 residual value and 5-year life gives ₹18,000 annually."},hi:{intro:"Depreciation asset ke depreciable amount ko useful life mein allocate karta hai.",points:["Yeh matching concept follow karta hai.","SLM mein equal annual charge hota hai.","WDV reducing book value use karta hai."],formula:"SLM = (Cost − Residual value) ÷ Useful life",example:"₹1,00,000 cost, ₹10,000 residual aur 5-year life par ₹18,000 yearly."}},
{id:"inventory",title:"Inventory Valuation",en:{intro:"Inventory is generally measured at the lower of cost and net realisable value.",points:["Cost includes purchase and conversion costs.","NRV considers selling price less completion and selling costs.","Apply cost formulas consistently."],formula:"Inventory = Lower of Cost and NRV",example:"Cost ₹50,000 and NRV ₹47,000 means inventory is valued at ₹47,000."},hi:{intro:"Inventory ko generally cost aur NRV mein se lower amount par value kiya jata hai.",points:["Cost mein purchase aur conversion costs include hote hain.","NRV selling price se completion aur selling costs minus karta hai.","Cost formula consistently apply karo."],formula:"Inventory = Cost aur NRV mein se lower",example:"Cost ₹50,000 aur NRV ₹47,000 ho to inventory ₹47,000 hogi."}},
{id:"final",title:"Final Accounts",en:{intro:"Final accounts show business performance and financial position.",points:["Trading account finds gross profit.","P&L account finds net profit.","Balance sheet shows assets, liabilities and equity."],formula:"Gross Profit = Net Sales − Cost of Goods Sold",example:"Net sales ₹2,00,000 less COGS ₹1,40,000 gives gross profit ₹60,000."},hi:{intro:"Final accounts business ki performance aur financial position dikhate hain.",points:["Trading account gross profit nikalta hai.","P&L net profit nikalta hai.","Balance sheet assets, liabilities aur equity dikhati hai."],formula:"Gross Profit = Net Sales − Cost of Goods Sold",example:"Net sales ₹2,00,000 less COGS ₹1,40,000 = gross profit ₹60,000."}}
];

const bank=[
{t:"basics",type:"mcq",d:"easy",q:"Which element represents the owner's residual interest?",a:"Capital (equity)."},
{t:"basics",type:"short",d:"medium",q:"State and explain the accounting equation.",a:"Assets = Capital + Liabilities; every transaction keeps both sides equal."},
{t:"basics",type:"long",d:"hard",q:"Show the effect of five transactions on the accounting equation.",a:"Give each transaction's dual effect and verify equality after every step."},
{t:"journal",type:"mcq",d:"easy",q:"Which book records transactions first in chronological order?",a:"Journal."},
{t:"journal",type:"short",d:"medium",q:"Journalise goods purchased for cash worth ₹12,000.",a:"Purchases A/c Dr. ₹12,000; To Cash A/c ₹12,000."},
{t:"journal",type:"long",d:"hard",q:"Explain journalising, ledger posting and balancing with an example.",a:"Apply debit-credit rules, post both aspects, then balance each ledger account."},
{t:"trial",type:"mcq",d:"easy",q:"Does an agreed trial balance guarantee error-free accounts?",a:"No."},
{t:"trial",type:"short",d:"medium",q:"Name two errors not disclosed by a trial balance.",a:"Complete omission and error of principle."},
{t:"trial",type:"long",d:"hard",q:"Prepare a trial balance and explain its limitations.",a:"Classify balances, total both columns and discuss errors not disclosed."},
{t:"depreciation",type:"mcq",d:"easy",q:"Which method normally charges equal depreciation each year?",a:"Straight Line Method."},
{t:"depreciation",type:"short",d:"medium",q:"Find annual SLM: cost ₹80,000, residual ₹8,000, life 6 years.",a:"₹12,000 per year."},
{t:"depreciation",type:"long",d:"hard",q:"Compare SLM and WDV with calculations and suitable use cases.",a:"Compare bases, charge patterns, closing values and effects on profit."},
{t:"inventory",type:"mcq",d:"easy",q:"Inventory is generally valued at which amount?",a:"Lower of cost and NRV."},
{t:"inventory",type:"short",d:"medium",q:"Cost is ₹72,000 and NRV ₹68,500. Find inventory value.",a:"₹68,500."},
{t:"inventory",type:"long",d:"hard",q:"Explain inventory cost and NRV with examples.",a:"Cover included costs, exclusions and the lower-of-cost-and-NRV comparison."},
{t:"final",type:"mcq",d:"easy",q:"Which statement shows financial position on a particular date?",a:"Balance sheet."},
{t:"final",type:"short",d:"medium",q:"Net sales ₹3,20,000 and COGS ₹2,35,000: calculate gross profit.",a:"₹85,000."},
{t:"final",type:"long",d:"hard",q:"Explain preparation of final accounts with year-end adjustments.",a:"Cover trading, P&L and balance sheet with closing stock, accruals and depreciation."}
];

const saved=key=>localStorage.getItem(key);
const state={lang:saved("fa-lang")||"english",done:JSON.parse(saved("fa-done")||"[]"),active:topics[0].id};
const list=document.querySelector("#topicList"),lesson=document.querySelector("#lessonCard"),qTopic=document.querySelector("#questionTopic");

function renderList(){
 list.innerHTML=topics.map(x=>`<button type="button" data-id="${x.id}" class="topic-btn ${x.id===state.active?"active":""} ${state.done.includes(x.id)?"done":""}">${x.title}</button>`).join("");
 list.querySelectorAll("button").forEach(b=>b.onclick=()=>{state.active=b.dataset.id;renderList();renderLesson()});
}
function renderLesson(){
 const x=topics.find(t=>t.id===state.active),c=state.lang==="hinglish"?x.hi:x.en;
 lesson.innerHTML=`<span class="meta">Core lesson</span><h3>${x.title}</h3><p>${c.intro}</p><h4>Key points</h4><ul>${c.points.map(p=>`<li>${p}</li>`).join("")}</ul><p class="formula">${c.formula}</p><h4>Quick example</h4><p>${c.example}</p><button id="complete" type="button" class="btn complete">${state.done.includes(x.id)?"Completed ✓":"Mark as completed"}</button>`;
 document.querySelector("#complete").onclick=toggleDone;
}
function toggleDone(){
 const i=state.done.indexOf(state.active);i>=0?state.done.splice(i,1):state.done.push(state.active);
 localStorage.setItem("fa-done",JSON.stringify(state.done));renderList();renderLesson();progress();
}
function progress(){
 document.querySelector("#topicCount").textContent=topics.length;
 document.querySelector("#completedCount").textContent=state.done.length;
 document.querySelector("#progressBar").style.width=`${state.done.length/topics.length*100}%`;
}
document.querySelector("#languageSelect").value=state.lang;
document.querySelector("#languageSelect").onchange=e=>{state.lang=e.target.value;localStorage.setItem("fa-lang",state.lang);renderLesson()};
qTopic.innerHTML=topics.map(x=>`<option value="${x.id}">${x.title}</option>`).join("");
document.querySelector("#generatorForm").onsubmit=e=>{
 e.preventDefault();const type=document.querySelector("#questionType").value,d=document.querySelector("#difficulty").value;
 let pool=bank.filter(x=>x.t===qTopic.value&&(type==="mixed"||x.type===type)&&(d==="mixed"||x.d===d));
 const out=document.querySelector("#questionOutput");
 if(!pool.length){out.innerHTML='<p class="empty">This combination is coming in the expanded question bank. Try Mixed.</p>';return}
 pool=pool.sort(()=>Math.random()-.5);
 out.innerHTML=`<h3>Your practice set</h3>${pool.map((x,i)=>`<article class="question"><span class="meta">${x.type} • ${x.d}</span><p><strong>Q${i+1}.</strong> ${x.q}</p><details class="answer"><summary>Show answer guide</summary><p>${x.a}</p></details></article>`).join("")}`;
};
if(saved("fa-theme")==="dark")document.documentElement.dataset.theme="dark";
document.querySelector("#themeToggle").onclick=()=>{
 const dark=document.documentElement.dataset.theme==="dark";document.documentElement.dataset.theme=dark?"light":"dark";localStorage.setItem("fa-theme",dark?"light":"dark");
};
renderList();renderLesson();progress();
