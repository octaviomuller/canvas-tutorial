function reset() {
    var canvas = document.getElementById('canvas'); //Recupera o nó no DOM

    if (canvas.getContext) { //Verificação para navegadores que não suportam canvas
        var context = canvas.getContext('2d'); //Acessa o contexto de desenho

        context.clearRect(0, 0, 150, 150); //Deleta um retângulo com os parêmetros (x, y, width, height)
    }
}

function drawFilledRectangle() {
    var canvas = document.getElementById('canvas'); //Recupera o nó no DOM

    if (canvas.getContext) { //Verificação para navegadores que não suportam canvas
        var context = canvas.getContext('2d'); //Acessa o contexto de desenho

        context.fillStyle = "rgba(200,0,0,0.2)"; //Define o estilo aplicado ao fill
        context.fillRect(25, 25, 100, 100); //Desenha um retângulo preenchido com os parêmetros (x, y, width, height)
    }
}

function deleteRectangle() {
    var canvas = document.getElementById('canvas'); //Recupera o nó no DOM

    if (canvas.getContext) { //Verificação para navegadores que não suportam canvas
        var context = canvas.getContext('2d'); //Acessa o contexto de desenho

        context.clearRect(45, 45, 60, 60); //Deleta um retângulo com os parêmetros (x, y, width, height)
    }
}

function drawStrokedRectangle() {
    var canvas = document.getElementById('canvas'); //Recupera o nó no DOM

    if (canvas.getContext) { //Verificação para navegadores que não suportam canvas
        var context = canvas.getContext('2d');

        context.strokeStyle = "rgb(0,0,200)" //Define o estilo aplicado ao stroke
        context.strokeRect(50, 50, 50, 50); //Desenha a borda de um retângulo com os parêmetros (x, y, width, height)
    }
}

function drawStrokedTriangle() {
    var canvas = document.getElementById('canvas'); //Recupera o nó no DOM

    if (canvas.getContext) {
        var context = canvas.getContext('2d');

        context.strokeStyle = "rgb(0,0,0)" //Define o estilo aplicado ao stroke
        context.beginPath(); //Cria o path fazedno com que futuros comandos de desenho sejam feitos no path atual
        context.moveTo(75, 50);//Remove a linha que conecta uma função de desenho com a outra, como se estivesse "levantando a caneta do papel"
        context.lineTo(100, 75); //Função que desenha uma linha do ponto atual até a posição especificada definida pelos parâmetros (x,y)
        context.lineTo(100, 25); //Função que desenha uma linha do ponto atual até a posição especificada definida pelos parâmetros (x,y)
        context.closePath(); //Fecha a forma desenhando uma linha entre o ponto atual com o ínicio do path, caso a figura já esteja fechada a função não faz nada
        context.stroke(); //Executa o desenho das linhas/formas definidas logo após o beguinPath() como uma borda na camada
    }
}

function drawFilledTriangle() {
    var canvas = document.getElementById('canvas'); //Recupera o nó no DOM

    if (canvas.getContext) {
        var context = canvas.getContext('2d');

        context.fillStyle = "rgb(0,0,0)"; //Define o estilo aplicado ao fill
        context.beginPath(); //Cria o path fazedno com que futuros comandos de desenho sejam feitos no path atual
        context.moveTo(75, 50);//Remove a linha que conecta uma função de desenho com a outra, como se estivesse "levantando a caneta do papel"
        context.lineTo(100, 75); //Função que desenha uma linha do ponto atual até a posição especificada definida pelos parâmetros (x,y)
        context.lineTo(100, 25); //Função que desenha uma linha do ponto atual até a posição especificada definida pelos parâmetros (x,y)
        context.fill(); //Preenche a figura formando uma forma sólida e fechando todas as formas abertas automaticamente sem precisar chamar o closePath()
    }
}

function drawFace() {
    var canvas = document.getElementById('canvas'); //Recupera o nó no DOM

    if (canvas.getContext) {
        var context = canvas.getContext('2d');

        context.strokeStyle = "rgb(0,0,0)" //Define o estilo aplicado ao stroke
        context.beginPath(); //Cria o path fazedno com que futuros comandos de desenho sejam feitos no path atual
        context.arc(75, 75, 50, 0, Math.PI * 2, true); // Círculo exterior feito com a função de arco definida pelos parâmetros (x, y, radius, startAngle, endAngle, anticlockwise)
        context.moveTo(110, 75); //Remove a linha que conecta uma função de desenho com a outra, como se estivesse "levantando a caneta do papel"
        context.arc(75, 75, 35, 0, Math.PI, false);  // Boca (sentido horário) feito com a função de arco definida pelos parâmetros (x, y, radius, startAngle, endAngle, anticlockwise)
        context.moveTo(65, 65); //Remove a linha que conecta uma função de desenho com a outra, como se estivesse "levantando a caneta do papel"
        context.arc(60, 65, 5, 0, Math.PI * 2, true);  // Olho esquerdo feito com a função de arco definida pelos parâmetros (x, y, radius, startAngle, endAngle, anticlockwise)
        context.moveTo(95, 65); //Remove a linha que conecta uma função de desenho com a outra, como se estivesse "levantando a caneta do papel"
        context.arc(90, 65, 5, 0, Math.PI * 2, true);  // Olho direito feito com a função de arco definida pelos parâmetros (x, y, radius, startAngle, endAngle, anticlockwise)
        context.stroke(); //Executa o desenho das linhas/formas definidas logo após o beguinPath() como uma borda na camada
    }
}

function drawQuadraticCurve() {
    var canvas = document.getElementById('canvas'); //Recupera o nó no DOM

    if (canvas.getContext) {
        var context = canvas.getContext('2d');

        context.strokeStyle = "rgb(0,0,0)" //Define o estilo aplicado ao stroke
        context.beginPath(); //Cria o path fazedno com que futuros comandos de desenho sejam feitos no path atual
        context.moveTo(75, 25); //Remove a linha que conecta uma função de desenho com a outra, como se estivesse "levantando a caneta do papel"
        context.quadraticCurveTo(25, 25, 25, 62.5); //Função que desenha uma curva quadrática com início no ponto atual e definida pelos parâmetros (cp1x, cp1y, x, y) onde (x,y) será a coordenada final e (cp1x,cp1y) será a coordenada de apoio
        context.quadraticCurveTo(25, 100, 50, 100); //Função que desenha uma curva quadrática com início no ponto atual e definida pelos parâmetros (cp1x, cp1y, x, y) onde (x,y) será a coordenada final e (cp1x,cp1y) será a coordenada de apoio
        context.quadraticCurveTo(50, 120, 30, 125); //Função que desenha uma curva quadrática com início no ponto atual e definida pelos parâmetros (cp1x, cp1y, x, y) onde (x,y) será a coordenada final e (cp1x,cp1y) será a coordenada de apoio
        context.quadraticCurveTo(60, 120, 65, 100); //Função que desenha uma curva quadrática com início no ponto atual e definida pelos parâmetros (cp1x, cp1y, x, y) onde (x,y) será a coordenada final e (cp1x,cp1y) será a coordenada de apoio
        context.quadraticCurveTo(125, 100, 125, 62.5); //Função que desenha uma curva quadrática com início no ponto atual e definida pelos parâmetros (cp1x, cp1y, x, y) onde (x,y) será a coordenada final e (cp1x,cp1y) será a coordenada de apoio
        context.quadraticCurveTo(125, 25, 75, 25); //Função que desenha uma curva quadrática com início no ponto atual e definida pelos parâmetros (cp1x, cp1y, x, y) onde (x,y) será a coordenada final e (cp1x,cp1y) será a coordenada de apoio
        context.stroke(); //Executa o desenho das linhas/formas definidas logo após o beguinPath() como uma borda na camada
    }
}

function drawCubicCurve() {
    var canvas = document.getElementById('canvas'); //Recupera o nó no DOM

    if (canvas.getContext) {
        var context = canvas.getContext('2d');

        context.fillStyle = "rgb(0,0,0)" //Define o estilo aplicado ao stroke
        context.beginPath(); //Cria o path fazedno com que futuros comandos de desenho sejam feitos no path atual
        context.moveTo(75, 40); //Remove a linha que conecta uma função de desenho com a outra, como se estivesse "levantando a caneta do papel"
        context.bezierCurveTo(75, 37, 70, 25, 50, 25);//Função que desenha uma curva cúbica com início no ponto atual e definida pelos parâmetros (cp1x, cp1y, cp2x, cp2y, x, y) onde (x,y) será a coordenada final e (cp1x,cp1y) e (cp2x, cp2y) serão as coordenadas de apoio
        context.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);//Função que desenha uma curva cúbica com início no ponto atual e definida pelos parâmetros (cp1x, cp1y, cp2x, cp2y, x, y) onde (x,y) será a coordenada final e (cp1x,cp1y) e (cp2x, cp2y) serão as coordenadas de apoio
        context.bezierCurveTo(20, 80, 40, 102, 75, 120);//Função que desenha uma curva cúbica com início no ponto atual e definida pelos parâmetros (cp1x, cp1y, cp2x, cp2y, x, y) onde (x,y) será a coordenada final e (cp1x,cp1y) e (cp2x, cp2y) serão as coordenadas de apoio
        context.bezierCurveTo(110, 102, 130, 80, 130, 62.5);//Função que desenha uma curva cúbica com início no ponto atual e definida pelos parâmetros (cp1x, cp1y, cp2x, cp2y, x, y) onde (x,y) será a coordenada final e (cp1x,cp1y) e (cp2x, cp2y) serão as coordenadas de apoio
        context.bezierCurveTo(130, 62.5, 130, 25, 100, 25);//Função que desenha uma curva cúbica com início no ponto atual e definida pelos parâmetros (cp1x, cp1y, cp2x, cp2y, x, y) onde (x,y) será a coordenada final e (cp1x,cp1y) e (cp2x, cp2y) serão as coordenadas de apoio
        context.bezierCurveTo(85, 25, 75, 37, 75, 40);//Função que desenha uma curva cúbica com início no ponto atual e definida pelos parâmetros (cp1x, cp1y, cp2x, cp2y, x, y) onde (x,y) será a coordenada final e (cp1x,cp1y) e (cp2x, cp2y) serão as coordenadas de apoio
        context.fill(); //Preenche a figura formando uma forma sólida e fechando todas as formas abertas automaticamente sem precisar chamar o closePath()
    }
}