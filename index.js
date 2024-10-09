class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'ataque desconhecido';
        }
        return `O ${this.tipo} atacou usando ${ataque}`;
    }
}

function criarHerois() {
    const heroisData = [
        { nome: 'Gandalf', idade: 300, tipo: 'mago' },
        { nome: 'Aragorn', idade: 87, tipo: 'guerreiro' },
        { nome: 'Li', idade: 45, tipo: 'monge' },
        { nome: 'Kira', idade: 30, tipo: 'ninja' }
    ];

    let herois = [];

    for (let i = 0; i < heroisData.length; i++) {
        let heroi = new Heroi(heroisData[i].nome, heroisData[i].idade, heroisData[i].tipo);
        herois.push(heroi);
    }

    return herois;
}

function exibirAtaques(herois) {
    herois.forEach(heroi => {
        console.log(heroi.atacar());
    });
}

const herois = criarHerois();
exibirAtaques(herois);