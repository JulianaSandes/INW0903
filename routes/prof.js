module.exports = (app)=>{
    //abrir o formuláro professor.ejs
    //com a requisição /professo
    app.get('/professor', (req,res)=>{
        res.render('professor.ejs')
    })

    //criar a rota para a gravação dos dados do formulário professor.ejs
    app.post('/professor', (req,res)=>{
        //receber as informações digitadas
        var infos= req.body

        //conectar com o banco de dados
        var conexao = require('../config/database')()
        //importar o modelo do documento
        var profs = require('../models/profs')
        //definir como as informações serão gravadas
        var documento = new profs({
            nome:infos.nome,
            disciplina:infos.disciplina,
            turma:infos.turma,
            email:infos.email
        }).save()
        .then((result)=>{
            res.redirect('/professor')
        })
        .catch((err)=>{
            console.log(err)
        })
    })
}