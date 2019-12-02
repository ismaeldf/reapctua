
export class Util {

  public formatMoney(value) {
    return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
  };
}
