const Service = require('egg').Service;

class UserService extends Service {
    // 登录
    async login(data) {
        // 获取登录信息
        const loginCheck = await this.app.mysql.get('user', { user: data.user, password: data.password });
        if (loginCheck) {
            return {
                code: 200
            }

            // // 要更新的数据
            // const row = {
            //     token: new Date().getTime(),
            //     create_time: this.app.mysql.literals.now,
            //     update_time: this.app.mysql.literals.now
            // }
            // // 更新条件
            // const options = {
            //     where: {
            //         user: loginCheck.user
            //     }
            // }

            // // 执行更新语句
            // const resoult = await this.app.mysql.update("token", row, options);
            // if (resoult.affectedRows === 1) {
            //     return {
            //         code: 200,
            //         data: row.token
            //     }
            // }
        }
        return {
            code: 400,
        };
    }

    // 注册
    async register(data) {
        // 注册的数据插入数据表
        const row = {
            user: data.user,
            password: data.password,
            name: data.name,
            age: data.age,
            sex: data.sex
        }

        // // 插入对应的token表
        // const rowToken = {
        //     user: data.user,
        //     token: new Date().getTime(),
        //     create_time: this.app.mysql.literals.now,
        //     update_time: this.app.mysql.literals.now
        // }
        // 校验账户是否已注册已存在
        const isExist = await this.app.mysql.get('user', { user: data.user });
        if (!isExist) {
            // 插入到user用户表
            const insertSql = await this.app.mysql.insert("user", row);
            // // 插入到token表
            // const insertTokenSql = await this.app.mysql.insert("token", rowToken);
            if (insertSql) {
                return true;
            }
        }
        return false;
    }

}
module.exports = UserService;

