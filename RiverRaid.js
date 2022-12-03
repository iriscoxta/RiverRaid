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

    // console.log(this.barrie)
    

    this.ajElementDec = () => {      /* adiciona o elemento bonus*/

        let positions = SortPosition(this.barrie)

        while (this.barrie[positions[0]][positions[1]] != 0) {
            positions = SortPosition(this.barrie)
        }
        this.barrie[positions[0]][positions[1]] = 2
    }

    this.ajElementCarb = () => {        /* adiciona o elemento combustivel*/

        let positions = SortPosition(this.barrie)

        while (this.barrie[positions[0]][positions[1]] != 0) {
            positions = SortPosition(this.barrie)
        }
        this.barrie[positions[0]][positions[1]] = 3
    }

    this.ajElementDec()
    this.ajElementCarb()


    for (let row in this.barrie) {
        for (let column in this.barrie[row]) {

            let tile = this.barrie[row][column] //bloquinho

            if (tile === 1) {
                let elementTile = newElement("div", "barrie")
                // elementTile.style.backgroundColor = "green"
                elementTile.style.backgroundImage = "url(img/parededetijolovermelho.png)"
                this.construitBar.appendChild(elementTile)

            } else if (tile === 0) {
                let elementTile = newElement("div", "air")
                // elementTile.style.backgroundColor = "deepskyblue"
                elementTile.style.backgroundImage = "url(img/cement1.png)"
                this.construitBar.appendChild(elementTile)

            } else if (tile === 2) {
                let elementTile = newElement("div", "decerner")
                let imgDecerner = newElement('img', 'imgDecerner')
                imgDecerner.src = 'img/bonus.png'
                // elementTile.style.backgroundColor = "deepskyblue"
                elementTile.style.backgroundImage = "url(img/cement1.png)"
                elementTile.appendChild(imgDecerner)
                this.construitBar.appendChild(elementTile)

            } else if (tile === 3) {
                let elementTile = newElement("div", "fuel")
                let imgFuel = newElement('img', 'imgFuel')
                imgFuel.src = 'img/combustivel.png'
                // elementTile.style.backgroundColor = "deepskyblue"
                elementTile.style.backgroundImage = "url(img/cement1.png)"
                elementTile.appendChild(imgFuel)
                this.construitBar.appendChild(elementTile)

            }


        }
    }


    regionJeu.insertAdjacentElement('afterbegin', this.construitBar);

    this.getY = () => parseInt(this.construitBar.style.top.split('px')[0]);
    this.setY = (y) => this.construitBar.style.top = `${y}px`;

    this.mouvement = () => {

        const motion = 5 //acrescimo de pixels por movimento
        let newYposition = this.getY();

        newYposition = this.getY() + motion;

        this.setY(newYposition)

        // if(this.getY() > 1000)
        //     this.construitBar

    }

    this.delete = () => {
        this.construitBar.parentNode.removeChild(this.construitBar)
    }

}

function SortPosition(barrie) {

    let rowPosition = Math.floor(Math.random() * barrie.length)
    let columnPosition = Math.floor(Math.random() * barrie[rowPosition].length)

    return [rowPosition, columnPosition]
}

function tombBarriere(barries) { // recebe o objeto que contem todas as barreiras (cenários)

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

function Decor() {
    
    this.nouveauDecor = () => {
        const barries = new Barries()
        return new faireBarriere(tombBarriere(barries))
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

        const motion = 10 //acrescimo de pixels por movimento
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

    this.cestCollision = () => {

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
        let lecarburantLongueur = document.getElementsByClassName("fuel").length

        for (let i = 0; i < lecarburantLongueur; i++) {
            let lecarburantElement = document.getElementsByClassName("fuel")[i]
            const a = personnageElement.getBoundingClientRect()
            const b = lecarburantElement.getBoundingClientRect()
            const horizontal = a.left + a.width >= b.left && b.left + b.width >= a.left /* calculo da colisão */
            const vertical = a.top + a.height >= b.top && b.top + b.height >= a.top     /* calculo da colisão */

            if (horizontal && vertical){
                lecarburantElement.removeChild(lecarburantElement.firstChild)
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
                decernerElement.removeChild(decernerElement.firstChild)
                return true
            }
        }
        return false

    }

    this.chequesCollision = () => {

        if (this.cestCollision()){
            statistique.gameOver()
        }
            

    }

    this.verifyGetElementFuel = () => {

        if (this.prendsLeCarburant()){
            statistique.addLevelFuel()
        }
            

    }

    this.verifyGetElementBonus = () => {

        if (this.prendsDecerner()){
            statistique.addPoints()
        }

    }

}

function Statistique() {
    
    let playerPoints = 0
    
    // -------------- Título ---------------
    this.title = newElement("div", "title")
    this.title.append("River Raid")

    // -------------- Pontuação ---------------
    this.points = newElement("div", "points")
    this.points.appendChild(document.createTextNode(`Ponctuation: ${playerPoints}`))

    // -------------- Botão ---------------
    this.btPlay = newElement("button", "btPlay")
    this.btPlay.appendChild(document.createTextNode("JOUER"))
    this.btPlay.onclick = () => {
        jouer = true
        document.querySelector('.btPlay').style.display = 'none'
    }

    // -------------- Barra de Combustível ----------------
    this.titleFuel = newElement("div", "titleFuel")
    this.titleFuel.appendChild(document.createTextNode(`Le Carburant`))
    this.progressBarFuel = newElement("div", "progressBarFuel")
    

    // ---------------------Config da Página---------------
    statistiquePresenter.style.display = 'flex'
    statistiquePresenter.style.flexDirection = 'column'
    statistiquePresenter.style.justifyContent = 'flex-start'
    statistiquePresenter.style.alignItems = 'center'
    statistiquePresenter.appendChild(this.title)
    statistiquePresenter.appendChild(this.points)
    statistiquePresenter.appendChild(this.titleFuel)
    statistiquePresenter.appendChild(this.progressBarFuel)
    statistiquePresenter.appendChild(this.btPlay)

    // --------------------Métodos-------------------------------

    this.getLevelFuel = () => {
        return parseFloat(getComputedStyle(document.querySelector('.progressBarFuel')).getPropertyValue('--levelFuel'))
    }

    this.setLevelFuel = (fuel) => {
        this.progressBarFuel.style.setProperty('--levelFuel', `${fuel}`)
    }

    this.spendLevelFuel = () => {
        this.setLevelFuel(this.getLevelFuel() - 0.2)
    }

    this.addLevelFuel = () => {
        this.setLevelFuel(this.getLevelFuel() + 20)
    }

    this.verifyLevelFuel = () => {
        let level = this.getLevelFuel()
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

    this.addPoints = () => {
        playerPoints += 1000
        this.points.removeChild(this.points.firstChild);
        this.points.appendChild(document.createTextNode(`Ponctuation: ${playerPoints}`))
    }

    this.gameOver = () => {
        
        this.imgGameOver = newElement("img", "imgGameOver")
        this.imgGameOver.src = 'img/gameoversk8.png'
        statistiquePresenter.appendChild(this.imgGameOver)

        this.btRestart = newElement("button", "btRestart")
        this.btRestart.appendChild(document.createTextNode("Réessayer"))
        this.btRestart.onclick = () => {
            window.location.reload(true)
        }
        statistiquePresenter.appendChild(this.btRestart)
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
                collision.verifyGetElementFuel()
                collision.verifyGetElementBonus()
                statistique.spendLevelFuel()
                statistique.verifyLevelFuel()
            }
        }, 20)
    }

}


new RiverRaid().play()