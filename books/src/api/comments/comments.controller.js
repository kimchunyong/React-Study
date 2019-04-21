const Joi = require('joi');
const { Types: { objectId } } = require('mongoose');

exports.replace = async ctx => {
    const { id } = ctx.params;

    if (!objectId.isValid(id)) {
        ctx.status = 400;
        return;
    }

    const schema = Joi.object().keys({
    // 객체의 field 를 검증합니다.
    // 뒤에 required() 를 붙여주면 필수 항목이라는 의미입니다
        title: Joi.string().required(),
        authors: Joi.array().items(
            Joi.object().keys({
                name: Joi.string().required(),
                email: Joi.string().email().required() // 이런식으로 이메일도 손쉽게 검증가능합니다
            })
        ),
        publishedDate: Joi.date().required(),
        price: Joi.number().required(),
        tags: Joi.array().items(Joi.string().required())
    });

    // 그 다음엔, validate 를 통하여 검증을 합니다.
    const result = Joi.validate(ctx.request.body, schema); // 첫번째 파라미터는 검증할 객체이고, 두번째는 스키마입니다.

    // 스키마가 잘못됐다면
    if (result.error) {
        ctx.status = 400; // Bad Request
        ctx.body = result.error;
    }
};
