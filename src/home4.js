function LibraryFun(){
    let book = null;
    const shelf = [];
    Object.defineProperty(this, 'book', {
        get(){
            console.log('Get Called!');
            return book;
        },
        set(v){
            book = v;
            shelf.push({val:book});
        }
    });
    this.getShelf = function(){
        return shelf;
    }
}

const libs = new LibraryFun();
libs.book = 'Jonathan Swift';
// console.log(libs.book);
libs.book = 'Finding Forester';
libs.book = 'Indiana Jones';
console.log(libs.getShelf().toString());
libs.getShelf().forEach(function (n) {
    console.log(n);
});
