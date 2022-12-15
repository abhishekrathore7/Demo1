const Book = {
    _bname: 'King of Kings',
    get bname() {
        return this._bname;
    },
    set bname(value) {
        this._bname = value;
    },
    _author: 'Wilbur Smith',
    get author() {
        return this._author;
    },
    set author(value) {
        this._author = value;
    },
    _lang: 'English',
    get lang() {
        return this._lang;
    },
    set lang(value) {
        this._lang = value;
    },
}

console.log(Book._author);
console.log(Book._bname);
console.log(Book._lang);
Book.author = 'John Grisham';
Book.bname = 'King of Hearts';
Book.lang = 'US-EN';
console.log(Book._author);
console.log(Book._bname);
console.log(Book._lang);

const Furniture = {
    _fname: '',
    get fname() {
        return this._fname;
    },
    set fname(value) {
        this._fname = value;
    },
    _fmat: '',
    get fmat() {
        return this._fmat;
    },
    set fmat(value) {
        this._fmat = value;
    },
    _noofhands: 0,
    get noofhands() {
        return this._noofhands;
    },
    set noofhands(value) {
        this._noofhands = value;
    },
}

Furniture.fmat = 'Balsam Wood';
Furniture.fname = "Sofa Cum Bed";
Furniture.noofhands = 4;
const str = `${Furniture.fname} \t ${Furniture.fmat} \t ${Furniture.noofhands}`;
console.log(str);