const Book = require('models/book');

exports.list = ctx => {
    ctx.body = 'listed';
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
