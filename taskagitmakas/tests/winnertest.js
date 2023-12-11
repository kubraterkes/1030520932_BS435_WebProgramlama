import { calculateWinner } from '../src/Game'; // calculateWinner fonksiyonunun bulunduğu yerin doğru olduğundan emin olun

describe('calculateWinner function tests', () => {
  test('Aynı seçim sonucu kontrol etme', () => {
    const result = calculateWinner('rock', 'rock');
    expect(result).toBe(0); // Beklenen sonuç: 0 (Berabere)
  });

  test('Rock, Kağıt, Makas mantığına göre sonuç kontrolü', () => {
    const result1 = calculateWinner('rock', 'scissors');
    const result2 = calculateWinner('rock', 'paper');
    const result3 = calculateWinner('paper', 'rock');
    const result4 = calculateWinner('paper', 'scissors');
    const result5 = calculateWinner('scissors', 'paper');
    const result6 = calculateWinner('scissors', 'rock');

    expect(result1).toBe(-1); // Beklenen sonuç: -1 (Oyuncu kazandı)
    expect(result2).toBe(1);  // Beklenen sonuç: 1 (Bilgisayar kazandı)
    expect(result3).toBe(-1); // Beklenen sonuç: -1 (Oyuncu kazandı)
    expect(result4).toBe(1);  // Beklenen sonuç: 1 (Bilgisayar kazandı)
    expect(result5).toBe(-1); // Beklenen sonuç: -1 (Oyuncu kazandı)
    expect(result6).toBe(1);  // Beklenen sonuç: 1 (Bilgisayar kazandı)
  });
});