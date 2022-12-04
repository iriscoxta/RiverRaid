function newElement(tagName, className, idName) {
    const element = document.createElement(tagName)
    element.className = className
    element.id = idName
    return element
}

const regionJeu = document.querySelector('[RiverRaid]')  /* marcar area do jogo */
const statistiquePresenter = document.querySelector('[wm-Statistique]') /* marcar area das estatisticas */
const statistique = new Statistique()
let jouer = false   

function Barries() {

    this.bifurcation = [
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
        [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1]
    ];

    this.zigzag = [
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1]
    ];

    this.centre = [
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1]
    ];

    this.droite = [
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
    ];

    this.lagauche = [
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
    ];

}

function faireBarriere(barrie) { // recebe a matriz da barreira específica (cenário)

    this.construitBar = newElement("div", "barrieStyle")
    this.construitBar.style.position = `absolute`
    this.construitBar.style.display = `grid`
    this.construitBar.style.gridTemplateColumns = `repeat(20, 1fr)`;
    this.construitBar.style.gridTemplateRows = `repeat(20, 1fr)`;
    this.construitBar.style.width = "100%";
    this.construitBar.style.height = "100%";
    this.construitBar.style.top = "-570px";

    this.barrie = barrie
    

    this.ajElementDec = () => {      /* adiciona o elemento bonus*/

        let positions = SortPosition(this.barrie)               /* adiciona o elemento bonus na matriz com base no sorteio*/

        while (this.barrie[positions[0]][positions[1]] != 0) {
            positions = SortPosition(this.barrie)
        }
        this.barrie[positions[0]][positions[1]] = 2
    }

    this.ajElementCarb = () => {        /* adiciona o elemento combustivel*/

        let positions = SortPosition(this.barrie)               /* adiciona o elemento bonus na matriz com base no sorteio*/

        while (this.barrie[positions[0]][positions[1]] != 0) {
            positions = SortPosition(this.barrie)
        }
        this.barrie[positions[0]][positions[1]] = 3
    }

    this.ajElementDec()
    this.ajElementCarb()


    for (let row in this.barrie) {      /* vai criar os elementos e de fato colocar no HTML */
        for (let column in this.barrie[row]) {

            let tile = this.barrie[row][column] //bloquinho

            if (tile === 1) {
                let elementTile = newElement("div", "barrie")
                elementTile.style.backgroundImage = "url(img/parededetijolovermelho.png)"
                this.construitBar.appendChild(elementTile)

            } else if (tile === 0) {
                let elementTile = newElement("div", "air")
                elementTile.style.backgroundImage = "url(img/cement1.png)"
                this.construitBar.appendChild(elementTile)

            } else if (tile === 2) {
                let elementTile = newElement("div", "decerner")
                let imgDecerner = newElement('img', 'imgDecerner')
                imgDecerner.src = 'img/bonus.png'
                elementTile.style.backgroundImage = "url(img/cement1.png)"
                elementTile.appendChild(imgDecerner)
                this.construitBar.appendChild(elementTile)

            } else if (tile === 3) {
                let elementTile = newElement("div", "carb")
                let imgCarb = newElement('img', 'imgCarb')
                imgCarb.src = 'img/combustivel.png'
                elementTile.style.backgroundImage = "url(img/cement1.png)"
                elementTile.appendChild(imgCarb)
                this.construitBar.appendChild(elementTile)

            }


        }
    }

    // Constroi a barreira e coloca na area de jogo, posição indicada (-570 px) pra começar a animar 
    regionJeu.insertAdjacentElement('afterbegin', this.construitBar);  /* adicionar de forma adjacente (nao deixa a barreira sobreposta a nave)*/

    this.getY = () => parseInt(this.construitBar.style.top.split('px')[0]);
    this.setY = (y) => this.construitBar.style.top = `${y}px`;

    this.mouvement = () => {

        const motion = 5 //acrescimo de pixels por movimento
        let newYposition = this.getY();

        newYposition = this.getY() + motion;    

        this.setY(newYposition)
    }

    this.delete = () => {
        this.construitBar.parentNode.removeChild(this.construitBar)
    }

}

function SortPosition(barrie) { //Sortear os elementos

    let rowPosition = Math.floor(Math.random() * barrie.length)
    let columnPosition = Math.floor(Math.random() * barrie[rowPosition].length)

    return [rowPosition, columnPosition]
}

function SortBarriere(barries) { // recebe o objeto que contem todas as barreiras (cenários)

    let arrBarries = [
        barries.bifurcation,
        barries.zigzag,
        barries.centre,
        barries.droite,
        barries.lagauche
    ]
    let i = Math.floor(Math.random() * arrBarries.length)
    return arrBarries[i] // retorna uma barreira aleatória
}

function Decor() {      //onde acontece a animação de todas as barreiras
    
    this.nouveauDecor = () => {
        const barries = new Barries()
        return new faireBarriere(SortBarriere(barries))
    }

    let nouveauDecor = this.nouveauDecor()
    let agedeDecor


    this.mouvement = () => {
        nouveauDecor.mouvement()

        if (typeof agedeDecor === 'object' && agedeDecor !== null) {
            agedeDecor.mouvement()
            if (agedeDecor.getY() > 565){
                statistique.updatePoints()
                agedeDecor.delete()
            } 
        }

        if (nouveauDecor.getY() == 0) {
            agedeDecor = nouveauDecor
            nouveauDecor = this.nouveauDecor()
        }

    }

}

function Personnage() {

    this.allerDroite = false
    this.allerGauche = false

    this.element = newElement('img', 'personnage', 'moi')
    this.element.src = 'img/fadinha.png'
    this.element.style.right = "500%"

    this.getX = () => parseInt(this.element.style.right.split('px')[0])
    this.setX = (x) => this.element.style.right = `${x}px`

    document.addEventListener("keydown", (event) => {
        switch (event.key) {
            case "ArrowLeft":
                this.allerGauche = true
                break

            case "ArrowRight":
                this.allerDroite = true
                break
        }
    });

    document.addEventListener("keyup", (event) => {
        switch (event.key) {
            case "ArrowLeft":
                this.allerGauche = false
                break

            case "ArrowRight":
                this.allerDroite = false
                break
        }
    });


    this.mouvement = () => {

        const motion = 8 //acrescimo de pixels por movimento
        let nouveauPositionX = this.getX()

        if (this.allerDroite) {
            nouveauPositionX = this.getX() - motion;
        } else if (this.allerGauche) {
            nouveauPositionX = this.getX() + motion;
        }
        this.setX(nouveauPositionX)
    }

}

function Collision() {

    this.cestCollision = () => {    //está colidindo

        let personnageElement = document.getElementById("moi")
        let barriesLenght = document.getElementsByClassName("barrie").length

        for (let i = 0; i < barriesLenght; i++) {
            let barrieElement = document.getElementsByClassName("barrie")[i]
            const a = personnageElement.getBoundingClientRect()
            const b = barrieElement.getBoundingClientRect()
            const horizontal = a.left + a.width >= b.left && b.left + b.width >= a.left
            const vertical = a.top + a.height >= b.top && b.top + b.height >= a.top

            if (horizontal && vertical)
                return true
        }
        return false

    }

    this.prendsLeCarburant = () => {

        let personnageElement = document.getElementById("moi")
        let lecarburantLongueur = document.getElementsByClassName("carb").length

        for (let i = 0; i < lecarburantLongueur; i++) {
            let lecarburantElement = document.getElementsByClassName("carb")[i]
            const a = personnageElement.getBoundingClientRect()
            const b = lecarburantElement.getBoundingClientRect()
            const horizontal = a.left + a.width >= b.left && b.left + b.width >= a.left 
            const vertical = a.top + a.height >= b.top && b.top + b.height >= a.top     

            if (horizontal && vertical){
                lecarburantElement.removeChild(lecarburantElement.firstChild)           //remove a imagem
                return true
            }
        }
        return false

    }

    this.prendsDecerner = () => {

        let personnageElement = document.getElementById("moi")
        let decernerLongueur = document.getElementsByClassName("decerner").length

        for (let i = 0; i < decernerLongueur; i++) {
            let decernerElement = document.getElementsByClassName("decerner")[i]
            const a = personnageElement.getBoundingClientRect()
            const b = decernerElement.getBoundingClientRect()
            const horizontal = a.left + a.width >= b.left && b.left + b.width >= a.left
            const vertical = a.top + a.height >= b.top && b.top + b.height >= a.top

            if (horizontal && vertical){
                decernerElement.removeChild(decernerElement.firstChild)               //remove a imagem  
                return true
            }
        }
        return false

    }

    this.chequesCollision = () => {         //Verifica se colidiu

        if (this.cestCollision()){
            statistique.gameOver()
        }
            

    }

    this.chequesPrendsElementCarb = () => {     //Verifica se pegou combustível

        if (this.prendsLeCarburant()){
            statistique.ajNiveauCarb()          // adiciona mais um nível de combustível
            statistique.ajContCarb()            // adiciona no contatodor de combustível
        }
            

    }

    this.chequesPrendsElementDec = () => {  //Verifica se pegou premios

        if (this.prendsDecerner()){
            statistique.addPoints()         // adicionar mais pontos
        }

    }

}

function Statistique() {
    
    let playerPoints = 0
    let countCarb = 0
    
    // Título 
    this.titre = newElement("div", "titre")
    this.titre.append("River Raid")

    //  Pontuação 
    this.points = newElement("div", "points")
    this.points.appendChild(document.createTextNode(`Ponctuation: ${playerPoints}`))

    // Botão Jogar
    this.btJouer = newElement("button", "btJouer")
    this.btJouer.appendChild(document.createTextNode("JOUER"))
    this.btJouer.onclick = () => {
        jouer = true
        document.querySelector('.btJouer').style.display = 'none'
    }

    //  Barra de Combustível 
    this.titreCarb = newElement("div", "titreCarb")

    this.titreCarb.appendChild(document.createTextNode(`Le Carburant`))
    this.carbImg = newElement("img", "carbImg") 
    this.carbImg.src = 'img/combustivel.png'
    this.carbCount = newElement("div", "carbCount")
    this.carbCount.appendChild(document.createTextNode(`${countCarb}`))
    this.titreCarb.appendChild(this.carbImg)
    this.titreCarb.appendChild(this.carbCount)


    this.carbBarProg = newElement("div", "carbBarProg")
    

    // Configuração da Página
    statistiquePresenter.style.display = 'flex'
    statistiquePresenter.style.flexDirection = 'column'
    statistiquePresenter.style.justifyContent = 'flex-start'
    statistiquePresenter.style.alignItems = 'center'
    statistiquePresenter.appendChild(this.titre)
    statistiquePresenter.appendChild(this.points)
    statistiquePresenter.appendChild(this.titreCarb)
    statistiquePresenter.appendChild(this.carbBarProg)
    statistiquePresenter.appendChild(this.btJouer)

    // Métodos

    this.getLevelCarb = () => {        //pega o valor
        return parseFloat(getComputedStyle(document.querySelector('.carbBarProg')).getPropertyValue('--levelCarb'))
    }

    this.setLevelCarb = (carb) => {     //atualiza o valor do nivel de combustivel
        this.carbBarProg.style.setProperty('--levelCarb', `${carb}`)
    }

    this.depenseNiveauCarb = () => {    //gastar o nivel de combustivel
        this.setLevelCarb(this.getLevelCarb() - 0.15)
    }

    this.ajNiveauCarb = () => {         // adicionar nivel de combustivel
        this.setLevelCarb(this.getLevelCarb() + 20)
    }

    this.chequesNiveauCarb = () => {        //verifica nivel de combustivel
        let level = this.getLevelCarb()
        if(level < 0){
            this.gameOver()
        }
    }

    this.getPoints = () => {
        return playerPoints
    }

    this.updatePoints = () => {
        playerPoints += 50
        this.points.removeChild(this.points.firstChild);
        this.points.appendChild(document.createTextNode(`Ponctuation: ${playerPoints}`))
    }

    this.addPoints = () => {       //adiciona pontos quando pega medalhas
        playerPoints += 1000
        this.points.removeChild(this.points.firstChild);
        this.points.appendChild(document.createTextNode(`Ponctuation: ${playerPoints}`))
    }

    this.ajContCarb = () => { //contador de combustivel
        countCarb += 1
        this.carbCount.removeChild(this.carbCount.firstChild);
        this.carbCount.appendChild(document.createTextNode(`${countCarb}`))
     }

    this.gameOver = () => {     //fim de jogo!
        
        this.imgGameOver = newElement("img", "imgGameOver")
        this.imgGameOver.src = 'img/gameoversk8.png'
        statistiquePresenter.appendChild(this.imgGameOver)

        this.btReesayer = newElement("button", "btReesayer")    
        this.btReesayer.appendChild(document.createTextNode("Réessayer"))
        this.btReesayer.onclick = () => {
            window.location.reload(true)
        }
        statistiquePresenter.appendChild(this.btReesayer)
        jouer = false
    }


}


function RiverRaid() {

    const personnage = new Personnage()
    const decor = new Decor()
    

    regionJeu.appendChild(personnage.element)

    const collision = new Collision()

    this.play = () => {

        const timer = setInterval(() => {
            if (jouer) {
                personnage.mouvement()
                decor.mouvement()
                collision.chequesCollision()
                collision.chequesPrendsElementCarb()
                collision.chequesPrendsElementDec()
                statistique.depenseNiveauCarb()
                statistique.chequesNiveauCarb()
            }
        }, 20)
    }

}


new RiverRaid().play()