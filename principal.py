

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



if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)
    