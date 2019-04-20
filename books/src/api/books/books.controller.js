const Book = require('models/book');

exports.list = async ctx => {
    let books;

    try {
    // exec()를 해줘야 실제 데이터베이스에 요청이감.
        books = await Book.find().sort({ _id: -1 }).limit(1).exec();
    } catch (e) {
        return ctx.throw(500, e);
    }

    ctx.body = books;
};

exports.get = async ctx => {
    const { id } = ctx.params;

    let book;

    try {
        book = await Book.findById(id).exec();
    } catch (e) {
        if (e.name === 'CastError') {
            ctx.status = 400;
            return;
        }
        return ctx.throw(500, e);
    }

    if (!book) {
        ctx.status = 404;
        ctx.body = { message: 'book not found' };
        return;
    }

    ctx.body = book;
};

exports.create = async ctx => {
    // request body 에서 값들을 추출
    const { title, authors, publishedDate, price, tags } = ctx.request.body;

    const book = new Book({
        title,
        authors,
        publishedDate,
        price,
        tags
    });

    try {
    // .save() 함수를 실행하면 이 때 데이터베이스에 실제로 데이터를 작성
        await book.save();
    } catch (e) {
        return ctx.throw(500, e);
    }

    ctx.body = book;
};

exports.delete = ctx => {
    ctx.body = 'deleted';
};

exports.replace = ctx => {
    ctx.body = 'replaced';
};

exports.update = ctx => {
    ctx.body = 'updated';
};
