function newElement(tagName, className, idName) {
    const element = document.createElement(tagName)
    element.className = className
    element.id = idName
    return element
}

const regionJeu = document.querySelector('[RiverRaid]')  /* marcar area do jogo */
const statistiquePresenter = document.querySelector('[wm-Statistique]') /* marcar area das estatisticas */
const statistique = new Statistique()
let playing = false

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

    this.midle = [
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

    this.toright = [
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

    this.toleft = [
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

function DrawBarries(barrie) { // recebe a matriz da barreira específica (cenário)

    this.gameContext = newElement("div", "barrieStyle")
    this.gameContext.style.position = `absolute`
    this.gameContext.style.display = `grid`
    this.gameContext.style.gridTemplateColumns = `repeat(20, 1fr)`;
    this.gameContext.style.gridTemplateRows = `repeat(20, 1fr)`;
    this.gameContext.style.width = "100%";
    this.gameContext.style.height = "100%";
    this.gameContext.style.top = "-685px";

    this.barrie = barrie

    // console.log(this.barrie)
    

    this.addElementBonus = () => {

        let positions = SortPosition(this.barrie)

        while (this.barrie[positions[0]][positions[1]] != 0) {
            positions = SortPosition(this.barrie)
        }
        this.barrie[positions[0]][positions[1]] = 2
    }

    this.addElementFuel = () => {

        let positions = SortPosition(this.barrie)

        while (this.barrie[positions[0]][positions[1]] != 0) {
            positions = SortPosition(this.barrie)
        }
        this.barrie[positions[0]][positions[1]] = 3
    }

    this.addElementBonus()
    this.addElementFuel()


    for (let row in this.barrie) {
        for (let column in this.barrie[row]) {

            let tile = this.barrie[row][column] //bloquinho

            if (tile === 1) {
                let elementTile = newElement("div", "barrie")
                // elementTile.style.backgroundColor = "green"
                elementTile.style.backgroundImage = "url(img/parededetijolovermelho.png)"
                this.gameContext.appendChild(elementTile)

            } else if (tile === 0) {
                let elementTile = newElement("div", "air")
                // elementTile.style.backgroundColor = "deepskyblue"
                this.gameContext.appendChild(elementTile)

            } else if (tile === 2) {
                let elementTile = newElement("div", "bonus")
                let imgDecerner = newElement('img', 'imgDecerner')
                imgDecerner.src = 'img/bonus.png'
                // elementTile.style.backgroundColor = "deepskyblue"
                elementTile.appendChild(imgDecerner)
                this.gameContext.appendChild(elementTile)

            } else if (tile === 3) {
                let elementTile = newElement("div", "fuel")
                let imgFuel = newElement('img', 'imgFuel')
                imgFuel.src = 'img/combustivel.png'
                // elementTile.style.backgroundColor = "deepskyblue"
                elementTile.appendChild(imgFuel)
                this.gameContext.appendChild(elementTile)

            }


        }
    }


    regionJeu.insertAdjacentElement('afterbegin', this.gameContext);

    this.getY = () => parseInt(this.gameContext.style.top.split('px')[0]);
    this.setY = (y) => this.gameContext.style.top = `${y}px`;

    this.mouvement = () => {

        const motion = 5 //acrescimo de pixels por movimento
        let newYposition = this.getY();

        newYposition = this.getY() + motion;

        this.setY(newYposition)

        // if(this.getY() > 1000)
        //     this.gameContext

    }

    this.delete = () => {
        this.gameContext.parentNode.removeChild(this.gameContext)
    }

}

function SortPosition(barrie) {

    let rowPosition = Math.floor(Math.random() * barrie.length)
    let columnPosition = Math.floor(Math.random() * barrie[rowPosition].length)

    return [rowPosition, columnPosition]
}

function SortBarries(barries) { // recebe o objeto que contem todas as barreiras (cenários)

    let arrBarries = [
        barries.bifurcation,
        barries.zigzag,
        barries.midle,
        barries.toright,
        barries.toleft
    ]
    let i = Math.floor(Math.random() * arrBarries.length)
    return arrBarries[i] // retorna uma barreira aleatória
}

function Decor() {
    
    this.nouveauDecor = () => {
        const barries = new Barries()
        return new DrawBarries(SortBarries(barries))
    }

    let nouveauDecor = this.nouveauDecor()
    let agedeDecor


    this.mouvement = () => {
        nouveauDecor.mouvement()

        if (typeof agedeDecor === 'object' && agedeDecor !== null) {
            agedeDecor.mouvement()
            if (agedeDecor.getY() > 680){
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

        let shipElement = document.getElementById("moi")
        let barriesLenght = document.getElementsByClassName("barrie").length

        for (let i = 0; i < barriesLenght; i++) {
            let barrieElement = document.getElementsByClassName("barrie")[i]
            const a = shipElement.getBoundingClientRect()
            const b = barrieElement.getBoundingClientRect()
            const horizontal = a.left + a.width >= b.left && b.left + b.width >= a.left
            const vertical = a.top + a.height >= b.top && b.top + b.height >= a.top

            if (horizontal && vertical)
                return true
        }
        return false

    }

    this.prendsLeCarburant = () => {

        let shipElement = document.getElementById("moi")
        let fuelsLenght = document.getElementsByClassName("fuel").length

        for (let i = 0; i < fuelsLenght; i++) {
            let fuelElement = document.getElementsByClassName("fuel")[i]
            const a = shipElement.getBoundingClientRect()
            const b = fuelElement.getBoundingClientRect()
            const horizontal = a.left + a.width >= b.left && b.left + b.width >= a.left /* calculo da colisão */
            const vertical = a.top + a.height >= b.top && b.top + b.height >= a.top     /* calculo da colisão */

            if (horizontal && vertical){
                fuelElement.removeChild(fuelElement.firstChild)
                return true
            }
        }
        return false

    }

    this.prendsDecerner = () => {

        let shipElement = document.getElementById("moi")
        let bonusLenght = document.getElementsByClassName("bonus").length

        for (let i = 0; i < bonusLenght; i++) {
            let bonusElement = document.getElementsByClassName("bonus")[i]
            const a = shipElement.getBoundingClientRect()
            const b = bonusElement.getBoundingClientRect()
            const horizontal = a.left + a.width >= b.left && b.left + b.width >= a.left
            const vertical = a.top + a.height >= b.top && b.top + b.height >= a.top

            if (horizontal && vertical){
                bonusElement.removeChild(bonusElement.firstChild)
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
        playing = true
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
        playing = false
    }


}


function RiverRaid() {

    const decor = new Decor()
    const personnage = new Personnage()
    

    regionJeu.appendChild(personnage.element)

    const collision = new Collision()

    this.play = () => {

        const timer = setInterval(() => {
            if (playing) {
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