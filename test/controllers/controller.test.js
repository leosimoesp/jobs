var expect = require('chai').expect;
const Anagrama = require('./../../controller/cria-anagrama.js');

var obj = new Anagrama();

describe('Anagrama', function () {
  describe('.criaAnagrama', function () {
    it('deve criar anagramas para uma palavra', function () {
      var resultado = obj.criaAnagramas('biro');
      var solucao = ['biro','bior','brio','broi','boir','bori','ibro','ibor','irbo','irob','iobr','iorb','rbio','rboi','ribo','riob','roib','robi','obir','obri','oibr','oirb','orbi','orib'];
      expect(resultado).to.include.members(solucao);
    });
  });
});
