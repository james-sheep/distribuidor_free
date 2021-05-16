

from flask import Flask, render_template, request, redirect, url_for
import os
from flask import Flask


app = Flask(__name__)

lista = []
lista_tarefas = []


            
@app.route('/', methods=['GET','POST'])
def index():
        if request.method == "POST":

                return render_template('index.html')
        else:
                return render_template('index.html')



@app.route('/notificar', methods=['GET','POST'])
def notificar():
        if request.method == "POST":

         emails = request.form["listaDeEmail"]
         responsavel = request.form["coordenador"]
         lista_email = emails.split(",")
         
         pessoas = request.form["listaDePessoas"]
         lista_pessoas = pessoas.split(",")
         
         tarefas = request.form["listaDeTarefas"]
         lista_tarefas = tarefas.split(",")
         numeroTarefas = len(lista_tarefas)
         numero_pessoas = len(lista_pessoas)
         print(lista_email)
         print(lista_pessoas)
         print(lista_tarefas)
        
        return render_template('resultado.html', responsavel=responsavel,
                                                lista_email = lista_email, 
                                                lista_tarefas=lista_tarefas, 
                                                lista_pessoas = lista_pessoas,
                                                numeroTarefas = numeroTarefas,
                                                numero_pessoas = numero_pessoas)

        









if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)
    