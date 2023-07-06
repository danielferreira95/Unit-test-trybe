const createMenu = require('../src/restaurant');
 
describe('10 - Implemente a função `createMenu`, bem como seus casos de teste', () => {
  it('Verifica se a função `createMenu` tem o comportamento esperado', () => {
    // Escreva todos os testes aqui.
    //Escreva dois testes, um que verifica se a função createMenu() retorna um objeto que possui a chave fetchMenue outro verificando se o valor da chave fetchMenu do objeto retornado pela função createMenu()é uma função.
    expect(typeof createMenu().fetchMenu).toBe('object');
    expect(typeof createMenu().fetchMenu).toBe('function');

    //Escreva um teste que verifica se o objeto retornado pela função createMenu({ food: {}, drinks: {} }).fetchMenu()retorna um objeto cujas chaves são somente food e drinks
    expect(Object.keys(createMenu({ food: {}, drinks: {} }).fetchMenu())).toEqual(['food', 'drinks']);

    //Escreva um teste que verifica se o menu passado pra função createMenu()é idêntico ao menu recuperado pela função createMenu({ food: {}, drinks: {} }).fetchMenu().
    
  });
});
