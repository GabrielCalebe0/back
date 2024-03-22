const supertest = require('supertest')
const app = require('./index')
const request = supertest(app)

test("Deve retornar 200 no GET/", async function(){
    const response = await request.get("/")
    expect = response.status.toBe(200)
    expect = response.headers["content-type"].toMath(/json/)
})

test("Deve retornar 200 no GET e um json no GET id", async function(){
    const response = await request.get("produtos/1")
    expect = response.status.toBe(200)
    expect = response.headers["content-type"].toMath(/json/)
})
    
test("Deve retornar 404 no GET e um json no GET id", async function(){
    const response = await request.get("produtos/100")
    expect = response.status.toBe(404)
    expect = response.headers["content-type"].toMath(/json/)
})

test("Deve retornar status 201 e json no post", async function(){
    const response = await request.post("/produtos").send({nome: "uva", preco: 20.00})
    expect = response.status.toBe(201)
    expect = response.headers["content-type"].toMath(/json/)
})

test("Deve retornar status 422 e json no post", async function(){
    const response = await request.post("/produtos")
    expect = response.status.toBe(422)
    expect = response.headers["content-type"].toMath(/json/)
})

