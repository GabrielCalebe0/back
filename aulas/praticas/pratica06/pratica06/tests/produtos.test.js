
const supertest = require('supertest')
const app = require('../app')
const request  = supertest(app)

test("Deve retornar 201 e um json no POST", async function(){
    const response = await request.post("/produtos").send({"nome": "uva", "preco": 20.00})
    expect(response.status).toBe(201)
    expect(response.body).toHaveProperty("id", 1)
    expect(response.body).toHaveProperty("nome", "uva")
    expect(response.body).toHaveProperty("preco", 20.00)
    expect(response.type).toMatch(/json/)
})

test("Deve retornar 200 e um json no GET", async function(){
    const response = await request.get("/produtos")
    expect(response.status).toBe(200)
    expect(Array.isArray(response.body)).toBe(true)
    expect(response.type).toMatch(/json/)

})

test("Deve retornar 200 e um json no GET id", async function(){
    const response = await request.get("/produtos/1")
    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty("id", 1)
    expect(response.body).toHaveProperty("nome", "uva")
    expect(response.body).toHaveProperty("preco", 20.00)
    expect(response.type).toMatch(/json/)

})

test("Deve retornar 404 e um no GET", async function(){
    const response = await request.get("/produtos/100")
    expect(response.status).toBe(404)
    expect(response.body).toHaveProperty({msg: "Produto não encontrado"})
    expect(response.type).toMatch(/json/)

})

test("Deve retornar 422 e um json no POST", async function(){
    const response = await request.post("/produtos")
    expect(response.status).toBe(422)
    expect(response.body).toHaveProperty({msg: "Nome e preço do produtos são obrigatórios"})
    expect(response.type).toMatch(/json/)

})

test("Deve retornar 200 e um json no PUT", async function(){
    const response = await request.put("/produtos")
    expect(response.status).toBe(200)
    expect(response.body).toHaveProperty("id", 1)
    expect(response.body).toHaveProperty("nome", "uva")
    expect(response.body).toHaveProperty("preco", 20.00)
    expect(response.type).toMatch(/json/)

})

test("Retornar 404 e um json no PUT id", async function(){
    const response = await request.put("/produtos/100")
    expect(response.status).toBe(404)
    expect(response.body).toHaveProperty({msg:"produto não encontrado"})
    expect(response.type).toMatch(/json/)
    
})

test("Deve retornar 204 e um json no DELETE", async function(){
    const response = await request.delete("/produtos/1")
    expect(response.status).toBe(204)
    expect(response.type).toMatch(/json/)
})

test("Deve retornar 404 e um json no DELETE", async function(){
    const response = await request.delete("/produtos/100")
    expect(response.status).toBe(404)
    expect(response.type).toMatch(/json/)
})