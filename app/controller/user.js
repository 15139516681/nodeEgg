
const Controller = require('egg').Controller;
class UserController extends Controller {
    // 登录接口
    async login() {
        const { ctx, app } = this;
        const data = ctx.request.body;
        const resoult = await ctx.service.user.login(data);
        // 生成token
        const token = app.jwt.sign({ user: data.user }, app.config.jwt.secret, { expiresIn: 60 * 60 * 24 })
        if (resoult.code == 200) {
            ctx.body = {
                code: 200,
                msg: 'success',
                token,
            }
        } else {
            ctx.body = {
                code: 400,
                msg: 'error',
            }
        }
    }
    // 注册接口
    async register() {
        const { ctx } = this;
        const data = ctx.request.body;
        const resoult = await ctx.service.user.register(data);
        if (resoult) {
            ctx.body = {
                code: 200,
                msg: '注册成功'
            }
        } else {
            ctx.body = {
                code: 400,
                msg: '注册失败'
            }
        }
    }

    async testToken() {
        const { ctx } = this;
        const data = ctx.request.body;
        ctx.body = {
            code: 200,
            data,
        }
    }


}
module.exports = UserController;