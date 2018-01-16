let fn_index = async (ctx, next) => {
    ctx.response.body = `<h1>Index</h1>
                            <form action="/signin" method="post">
                                <p>Name: <input type="text" name="name" value="koa"></p>
                                <p>Password: <input type="password" name="password"></p>
                                <p><input type="submit" value="提交"></p>
                            </form>`;
};

let fn_signin = async (ctx, next) => {
    let name = ctx.request.body.name || '',
        password = ctx.request.body.password || '';
    console.log(`signin with name: ${name}, password: ${password}`);
    if (name === 'koa' && password === '123456') {
        ctx.response.body = `<h1>welcome, ${name}</h1>`;
    } else {
        ctx.response.body = `<h1>登陆失败</h1>
                            <p>请重试</p>`;
    }
};
module.exports = {
    'GET /': fn_index,
    "POST /signin": fn_signin
};