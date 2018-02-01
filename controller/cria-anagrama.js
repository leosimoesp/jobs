'use strict';

module.exports = class Anagrama {
    constructor() {}

    trocaLetra(acum, i, j) {
        var aux = acum[i];
        acum[i] = acum[j];
        acum[j] = aux;
    }

    criaAnagramas(str) {
        var cont = [],
            anagramas = [],
            caracteres = str.split(''),
            length = caracteres.length,
            i;
        //inicializa contador
        for (i = 0; i < length; i++) {
            cont[i] = 0;
        }
        //adiciono o primeiro anagrama
        anagramas.push(str);
        i = 0;
        //crio as permutações
        while (i < length) {
            if (cont[i] < i) {
                this.trocaLetra(caracteres, i % 2 === 1 ? cont[i] : 0, i);
                cont[i]++;
                i = 0;
                anagramas.push(caracteres.join(''));
            } else {
                cont[i] = 0;
                i++;
            }
        }

        return anagramas;
    }
}