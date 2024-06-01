const books=[{
    title:"The Great gatsby",
    author:"F.Scott Fitzgerald",
    year:1925
},
{
    title:"To Kill a Mockingbird",
    author:"Harper Lee",
    year:1960
},
{
    title:"Who are you?",
    author:"F.Scott Fitzgerald",
    year:1949
},
{
    title:"Pride and Prejudice",
    author:"Jane Austen",
    year:1813
}
]

function extractTitles(books,callback){
    const titles=books.map((book)=>book.title);
    callback(titles);
}
function logTitles(titles){
    titles.sort();
    console.log(titles.join(", "))
}

extractTitles(books,logTitles)