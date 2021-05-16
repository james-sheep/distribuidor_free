

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
         print(lista_email)
        
        return render_template('resultado.html', responsavel=responsavel,lista_email = lista_email)

        









if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)
    