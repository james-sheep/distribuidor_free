

import re
from flask import Flask, render_template, request, redirect, url_for, flash
import os
from flask import Flask
from datetime import date, datetime
from flask_mail import Mail, Message
from flask.helpers import flash
from threading import Thread

app = Flask(__name__)


app.secret_key = "933hfha0-39gf"


app.config["MAIL_SERVER"] = "smtp.gmail.com"
app.config["MAIL_PORT"] = "587"
app.config["MAIL_USE_TLS"] = True
app.config["MAIL_USERNAME"] = os.environ.get("MAIL_USERNAME")
app.config["MAIL_PASSWORD"] = os.environ.get("MAIL_PASSWORD")
app.config["FLASKY_MAIL_SUBJECT_PREFIX"] = "[Flasky]"
app.config["FLASKY_MAIL_SENDER"] = 'Flasky Admin <flasky@example.com>'
mail = Mail(app)


lista = []
lista_tarefas = []



def enviar_email(listEmail, subject, template, **kwargs):
       
       for email in listEmail:
       
                msg = Message(subject, sender = app.config["FLASKY_MAIL_SENDER"], recipients= [email])
                msg.html = render_template(template +".html", **kwargs)
                mail.send(msg)



@app.route('/', methods=['GET','POST'])
def index():
        if request.method == "POST":

                return render_template('index.html')
        else:
                return render_template('index.html')


@app.route('/resultado', methods=['GET','POST'])
def resultado():
        
        if request.method == "POST":
                
                data_atual = date.today()
                hora_atual = datetime.now()
                data_em_texto = f"{data_atual.day}/{data_atual.month}/{data_atual.year}"               
                hora_em_texto = hora_atual.strftime('%H:%M')

                emails = request.form["listaDeEmail"]
                responsavel = request.form["coordenador"]
                lista_email = emails.split(",")
                coordenadorEmail = request.form["coordenadorEmail"]
                pessoas = request.form["listaDePessoas"]
                lista_pessoas = pessoas.split(",")

                tarefas = request.form["listaDeTarefas"]
                lista_tarefas = tarefas.split(",")
                numeroTarefas = len(lista_tarefas)
                numero_pessoas = len(lista_pessoas)
                dicionario = dict(zip(lista_pessoas, lista_tarefas))
                print(dicionario)


               
                if responsavel == "" or coordenadorEmail =="":
                        flash("Você precisa se identificar para distribuir as tarefas!", category="alert")
                        return render_template('index.html')

                else: 
             

                        enviar_email(lista_email, "Nova distribuição", "email", 
                                
                                responsavel=responsavel,
                                lista_email = lista_email, 
                                dicionario = dicionario,
                                numeroTarefas = numeroTarefas,
                                numero_pessoas = numero_pessoas,
                                coordenadorEmail = coordenadorEmail,
                                data = data_em_texto,
                                hora = hora_em_texto)


                        return  render_template('resultado.html',
                                responsavel=responsavel,
                                lista_email = lista_email, 
                                lista_tarefas=lista_tarefas, 
                                lista_pessoas = lista_pessoas,
                                numeroTarefas = numeroTarefas,
                                numero_pessoas = numero_pessoas,
                                coordenadorEmail = coordenadorEmail,
                                data = data_em_texto,
                                hora = hora_em_texto)
                




if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)
    